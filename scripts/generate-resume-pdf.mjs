import puppeteer from 'puppeteer-core';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const CHROME_PATHS = [
    '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    '/Applications/Chromium.app/Contents/MacOS/Chromium',
    '/Applications/Brave Browser.app/Contents/MacOS/Brave Browser',
    '/usr/bin/google-chrome',
    '/usr/bin/chromium-browser',
    '/usr/bin/chromium',
    'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe'
];

function findChromePath() {
    for (const p of CHROME_PATHS) {
        if (fs.existsSync(p)) {
            return p;
        }
    }
    // Also check env var CHROME_PATH
    if (process.env.CHROME_PATH && fs.existsSync(process.env.CHROME_PATH)) {
        return process.env.CHROME_PATH;
    }
    throw new Error('Could not find Google Chrome executable. Please set CHROME_PATH environment variable.');
}

async function renderResumeToPdf(browser, htmlRelativePath, outputPdfRelativePath) {
    const htmlPath = path.resolve(rootDir, htmlRelativePath);
    const outputPath = path.resolve(rootDir, outputPdfRelativePath);

    if (!fs.existsSync(htmlPath)) {
        throw new Error(`HTML template not found: ${htmlPath}`);
    }

    const page = await browser.newPage();
    const fileUrl = `file://${htmlPath}`;
    console.log(`Loading ${fileUrl}...`);

    await page.goto(fileUrl, {
        waitUntil: ['load', 'networkidle0'],
        timeout: 30000
    });

    // Ensure fonts and styles are fully loaded
    await page.evaluateHandle('document.fonts.ready');

    console.log(`Generating PDF -> ${outputPdfRelativePath}...`);
    await page.pdf({
        path: outputPath,
        format: 'A4',
        printBackground: true,
        preferCSSPageSize: true,
        margin: {
            top: 0,
            bottom: 0,
            left: 0,
            right: 0
        }
    });

    await page.close();

    const stats = fs.statSync(outputPath);
    console.log(`✅ Successfully generated: ${outputPdfRelativePath} (${Math.round(stats.size / 1024)} KB)`);
}

async function main() {
    const chromeExecutable = findChromePath();
    console.log(`🚀 Using Chrome executable: ${chromeExecutable}`);

    const publicDir = path.resolve(rootDir, 'public');
    if (!fs.existsSync(publicDir)) {
        fs.mkdirSync(publicDir, { recursive: true });
    }

    const browser = await puppeteer.launch({
        executablePath: chromeExecutable,
        headless: true,
        args: [
            '--no-sandbox',
            '--disable-setuid-sandbox',
            '--disable-gpu',
            '--font-render-hinting=none',
            '--allow-file-access-from-files'
        ]
    });

    try {
        // 1. Staff Software Engineer CV
        await renderResumeToPdf(
            browser,
            'src/resume/staff.html',
            'public/Dmytro_Barannik_Staff_Engineer_CV.pdf'
        );

        // 2. Android Developer CV
        await renderResumeToPdf(
            browser,
            'src/resume/android.html',
            'public/Dmytro_Barannik_Android_Developer_CV.pdf'
        );

        // 3. Default primary CV (copy of Staff Engineer CV)
        const staffPdfPath = path.resolve(rootDir, 'public/Dmytro_Barannik_Staff_Engineer_CV.pdf');
        const defaultPdfPath = path.resolve(rootDir, 'public/Dmytro_Barannik_CV.pdf');
        fs.copyFileSync(staffPdfPath, defaultPdfPath);
        console.log(`✅ Updated default download: public/Dmytro_Barannik_CV.pdf (Staff CV mirror)`);

        console.log('\n🎉 All resume PDFs successfully generated!');
    } finally {
        await browser.close();
    }
}

main().catch(err => {
    console.error('❌ Error generating resume PDFs:', err);
    process.exit(1);
});

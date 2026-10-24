import { initializeApp } from "firebase/app";
import { getAnalytics, logEvent } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyC5cjySuHZXg1clME4XRhN2Vo4vYvo_Q1w",
  authDomain: "kakyhac-github-io.firebaseapp.com",
  projectId: "kakyhac-github-io",
  storageBucket: "kakyhac-github-io.firebasestorage.app",
  messagingSenderId: "28918008590",
  appId: "1:28918008590:web:ca7adffe89919b271de55f",
  measurementId: "G-JERJ8LGWFN"
};

// Analytics must never prevent the portfolio UI from rendering. Browsers can
// disable storage, tracking or the Analytics API (especially on localhost).
let analytics = null;
try {
  const app = initializeApp(firebaseConfig);
  if (typeof window !== 'undefined') analytics = getAnalytics(app);
} catch (error) {
  console.warn('[Analytics] Initialization skipped', error);
}

/**
 * Tracks a custom event.
 * @param {string} eventName 
 * @param {object} params 
 */
export const trackEvent = (eventName, params = {}) => {
    if (!analytics) return;
    try {
        logEvent(analytics, eventName, params);
        // Uncomment the line below for local debugging if needed
        // console.debug(`[Analytics] Tracked ${eventName}`, params);
    } catch (e) {
        console.error(`[Analytics] Failed to track ${eventName}`, e);
    }
};

export const trackSocialClick = (network) => {
    trackEvent('social_link_click', { network });
};

export const trackNavigationClick = (section) => {
    trackEvent('navigation_click', { section });
};

export const trackThemeSwitch = (theme) => {
    trackEvent('theme_switch', { theme });
};

export const trackProjectView = (projectName) => {
    trackEvent('view_project', { project_name: projectName });
};

export const trackProjectLinkClick = (projectName, linkUrl) => {
    trackEvent('project_link_click', { project_name: projectName, link_url: linkUrl });
};

export const trackResumeDownload = (cvType = 'android') => {
    const files = { android: 'Dmytro_Barannik_Android_Developer_CV.pdf', software: 'Dmytro_Barannik_Software_Engineer_CV.pdf', staff: 'Dmytro_Barannik_Staff_Engineer_CV.pdf', default: 'Dmytro_Barannik_CV.pdf' };
    const fileName = files[cvType] || files.android;
    trackEvent('resume_download', { file_name: fileName, cv_type: cvType });
};

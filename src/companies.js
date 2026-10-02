export const companies = {
    'MITI': {
        shortName: 'MITI',
        color: '#147f36ff',
        cssVar: 'var(--company-military, #FF9800)',
        icon: 'fas fa-graduation-cap',
        logoImg: 'images/companies/miti.svg'
    },
    'MEGOGO': {
        shortName: 'MEGOGO',
        color: 'rgba(93, 189, 211, 1)',
        cssVar: 'var(--company-megogo, #2196F3)',
        icon: 'fas fa-play-circle',
        logoImg: 'images/companies/megogo.svg'
    },
    'DᎥᗰᗩᒪᎥᑎᗩ': {
        shortName: 'DᎥᗰᗩᒪᎥᑎᗩ',
        color: '#E11D74',
        cssVar: 'var(--company-solo, #E11D74)',
        icon: 'fas fa-star',
        logoImg: 'images/companies/dimalina.png'
    },
    'CHI Software': {
        shortName: 'CHI',
        color: '#E040FB',
        cssVar: 'var(--company-chi, #E040FB)',
        icon: 'fas fa-laptop-code',
        logoImg: 'images/companies/chi.svg'
    },
    'Nitrix Studio': {
        shortName: 'Nitrix',
        color: '#1b08c4ff',
        cssVar: 'var(--company-nitrix, #8E24AA)',
        icon: 'fas fa-code',
        logoImg: 'images/companies/nitrix.svg'
    },
    'KhNUIA': {
        shortName: 'KhNUIA',
        color: '#1e3a8a',
        cssVar: 'var(--company-khnuia, #1E3A8A)',
        icon: 'fas fa-shield-alt',
        logoImg: 'images/companies/khnuia.svg'
    },
    'IT Company': {
        shortName: 'IT Co.',
        color: '#bf3000ff',
        cssVar: 'var(--company-it, #00BFA5)',
        icon: 'fas fa-building',
        logoImg: 'images/companies/itcompany.svg'
    }
};

// Fallback logic for older project mappings
export const getCompanyConfig = (companyName) => {
    // Map legacy names or aliases
    if (companyName === 'Solo Project') {
        return companies['DᎥᗰᗩᒪᎥᑎᗩ'];
    }
    if (companyName === 'Megogo') {
        return companies['MEGOGO'];
    }
    if (companyName === 'ВІТІ') {
        return companies['MITI'];
    }
    if (companyName === 'ХНУВС') {
        return companies['KhNUIA'];
    }
    return companies[companyName] || {
        shortName: companyName,
        color: '#FFFFFF',
        cssVar: '#FFFFFF'
    };
};

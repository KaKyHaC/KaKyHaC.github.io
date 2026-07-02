export const companies = {
    'Військовий інститут телекомунікацій та інформатизації імені Героїв Крут': {
        shortName: 'ВІТІ',
        color: '#147f36ff', // Orange
        cssVar: 'var(--company-military, #FF9800)'
    },
    'MEGOGO': {
        shortName: 'MEGOGO',
        color: 'rgba(93, 189, 211, 1)', // Blue
        cssVar: 'var(--company-megogo, #2196F3)'
    },
    'DᎥᗰᗩᒪᎥᑎᗩ': {
        shortName: 'DᎥᗰᗩᒪᎥᑎᗩ',
        color: '#FFD700', // Gold
        cssVar: 'var(--company-solo, #FFD700)'
    },
    'CHI Software': {
        shortName: 'CHI Software',
        color: '#E040FB', // Fuchsia
        cssVar: 'var(--company-chi, #E040FB)'
    },
    'Nitrix Studio': {
        shortName: 'Nitrix',
        color: '#1b08c4ff', // Purple
        cssVar: 'var(--company-nitrix, #8E24AA)'
    },
    'IT Company': {
        shortName: 'IT Company',
        color: '#bf3000ff', // Teal
        cssVar: 'var(--company-it, #00BFA5)'
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
    return companies[companyName] || {
        shortName: companyName,
        color: '#FFFFFF',
        cssVar: '#FFFFFF'
    };
};

//Day 4

// 1. Create a function `saveToLocalStorage` that stores user preferences (e.g., theme and language) using `localStorage`.


function saveToLocalStorage(theme, language) {
    if (typeof theme !== 'string' || typeof language !== 'string') {
        throw new Error('Theme and language should be strings.');
    }

    try {
        const userPreferences = {
            theme,
            language,
        };

        localStorage.setItem('userPreferences', JSON.stringify(userPreferences));
        console.log('Preferences saved to localStorage.');
    } catch (error) {
        console.error('Error saving preferences to localStorage:', error.message);
    }
}

saveToLocalStorage('dark', 'English');


//2. Implement a function `loadFromSessionStorage` that retrieves user session data (e.g., cart items) using `sessionStorage`.


function loadFromSessionStorage() {
    try {
        const userSessionData = JSON.parse(sessionStorage.getItem('userSessionData'));

        if (!userSessionData) {
            throw new Error('No session data found.');
        }

        console.log('Retrieved user session data:', userSessionData);
        return userSessionData;
    } catch (error) {
        console.error('Error retrieving user session data:', error.message);
        return null;
    }
}

loadFromSessionStorage();

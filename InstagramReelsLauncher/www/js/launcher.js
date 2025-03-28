document.addEventListener('deviceready', onDeviceReady, false);

let reelsWebView = null;

function onDeviceReady() {
    // Initialize the launcher
    initializeLauncher();
    setupEventListeners();
    loadReelsBackground();
    loadAppShortcuts();
}

function initializeLauncher() {
    // Add loading indicator
    const loading = document.createElement('div');
    loading.className = 'loading';
    loading.textContent = 'Loading Reels...';
    document.body.appendChild(loading);

    // Add error message container
    const errorMessage = document.createElement('div');
    errorMessage.className = 'error-message';
    document.body.appendChild(errorMessage);
}

function setupEventListeners() {
    // Navigation buttons
    document.getElementById('homeButton').addEventListener('click', () => {
        navigateToSection('home');
    });

    document.getElementById('reelsButton').addEventListener('click', () => {
        navigateToSection('reels');
    });

    document.getElementById('searchButton').addEventListener('click', () => {
        navigateToSection('search');
    });

    document.getElementById('profileButton').addEventListener('click', () => {
        navigateToSection('profile');
    });
}

async function loadReelsBackground() {
    try {
        // Get stored credentials
        const credentials = await getStoredCredentials();
        if (!credentials) {
            throw new Error('No credentials found');
        }

        // Create WebView for Instagram Reels
        reelsWebView = cordova.InAppBrowser.open(
            'https://www.instagram.com/reels/',
            '_blank',
            'location=no,hidden=yes,clearsessioncache=yes,clearcache=yes'
        );

        // Handle WebView events
        reelsWebView.addEventListener('loadstart', () => {
            document.querySelector('.loading').style.display = 'block';
        });

        reelsWebView.addEventListener('loadstop', () => {
            document.querySelector('.loading').style.display = 'none';
            injectReelsStyles();
        });

        reelsWebView.addEventListener('loaderror', (error) => {
            showError('Failed to load Reels. Please check your connection.');
        });

    } catch (error) {
        showError(error.message);
    }
}

function injectReelsStyles() {
    // Inject custom styles to make Reels work as background
    const script = `
        document.body.style.background = 'transparent';
        document.body.style.overflow = 'hidden';
        // Add more styling as needed
    `;
    reelsWebView.executeScript({ code: script });
}

async function loadAppShortcuts() {
    const appGrid = document.querySelector('.app-grid');
    
    // Default app shortcuts
    const defaultApps = [
        { name: 'Messages', icon: 'message' },
        { name: 'Camera', icon: 'camera_alt' },
        { name: 'Gallery', icon: 'photo_library' },
        { name: 'Settings', icon: 'settings' },
        { name: 'Phone', icon: 'phone' },
        { name: 'Browser', icon: 'public' },
        { name: 'Calendar', icon: 'calendar_today' },
        { name: 'Clock', icon: 'schedule' }
    ];

    defaultApps.forEach(app => {
        const shortcut = createAppShortcut(app);
        appGrid.appendChild(shortcut);
    });
}

function createAppShortcut(app) {
    const shortcut = document.createElement('div');
    shortcut.className = 'app-shortcut';
    shortcut.innerHTML = `
        <span class="material-icons app-icon">${app.icon}</span>
        <span class="app-name">${app.name}</span>
    `;
    return shortcut;
}

function navigateToSection(section) {
    // Update active button
    document.querySelectorAll('.control-button').forEach(button => {
        button.classList.remove('active');
    });
    document.getElementById(`${section}Button`).classList.add('active');

    // Handle section navigation
    switch (section) {
        case 'home':
            // Handle home navigation
            break;
        case 'reels':
            // Handle reels navigation
            break;
        case 'search':
            // Handle search navigation
            break;
        case 'profile':
            // Handle profile navigation
            break;
    }
}

function showError(message) {
    const errorMessage = document.querySelector('.error-message');
    errorMessage.textContent = message;
    errorMessage.classList.add('show');
    
    setTimeout(() => {
        errorMessage.classList.remove('show');
    }, 3000);
}

async function getStoredCredentials() {
    try {
        const credentials = await window.localStorage.getItem('instagram_credentials');
        return credentials ? JSON.parse(credentials) : null;
    } catch (error) {
        console.error('Error getting stored credentials:', error);
        return null;
    }
} 
# Instagram Reels Launcher

A Cordova-based Android app that provides a streamlined interface for accessing Instagram Reels.

## Prerequisites

Before you begin, ensure you have the following installed:

1. **Node.js and npm**
   - Download and install from [nodejs.org](https://nodejs.org/)
   - Recommended version: 16.x or later

2. **Java Development Kit (JDK)**
   - Download and install from [Oracle](https://www.oracle.com/java/technologies/downloads/) or use OpenJDK
   - Recommended version: 11 or later

3. **Android Studio**
   - Download and install from [developer.android.com](https://developer.android.com/studio)
   - During installation, make sure to install:
     - Android SDK
     - Android SDK Platform
     - Android Virtual Device (AVD)

4. **Cordova CLI**
   ```bash
   npm install -g cordova
   ```

## Environment Setup

1. **Set up Android SDK environment variables**
   Add the following to your shell profile (`~/.zshrc` or `~/.bashrc`):
   ```bash
   export ANDROID_HOME=$HOME/Library/Android/sdk
   export PATH=$PATH:$ANDROID_HOME/tools
   export PATH=$PATH:$ANDROID_HOME/platform-tools
   export PATH=$PATH:$ANDROID_HOME/cmdline-tools/latest/bin
   ```

2. **Reload your shell profile**
   ```bash
   source ~/.zshrc  # or source ~/.bashrc
   ```

## Project Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd InstagramReelsLauncher
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Add Android platform**
   ```bash
   cordova platform add android
   ```

4. **Install required plugins**
   ```bash
   cordova plugin add cordova-plugin-storage
   cordova plugin add cordova-plugin-inappbrowser
   ```

## Building and Running

1. **Connect an Android device** or start an Android emulator
   - Enable USB debugging on your device
   - Or create an AVD through Android Studio

2. **Build the app**
   ```bash
   cordova build android
   ```

3. **Run the app**
   ```bash
   cordova run android
   ```

## Development

The project structure is organized as follows:
```
InstagramReelsLauncher/
├── www/                    # Web assets
│   ├── css/               # Stylesheets
│   ├── js/                # JavaScript files
│   └── img/               # Images
├── platforms/             # Platform-specific code
├── plugins/               # Cordova plugins
└── config.xml            # Cordova configuration
```

## Features

- Instagram login interface
- Secure credential storage
- WebView integration for Instagram Reels
- App shortcuts for quick access

## Troubleshooting

1. **Gradle build fails**
   - Ensure you have the latest Android build tools installed
   - Run `cordova platform rm android` and `cordova platform add android` to refresh the platform

2. **Device not detected**
   - Check if USB debugging is enabled
   - Try a different USB cable or port
   - Run `adb devices` to verify device connection

3. **Build tools version mismatch**
   - Open Android Studio
   - Go to Tools > SDK Manager
   - Install the required build tools version (35.0.1)

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the Apache License 2.0 - see the LICENSE file for details. 
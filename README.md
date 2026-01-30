# com.google.android.documentsui Launcher

A lightweight Android launcher application designed to invoke the hidden system Files app (`com.google.android.documentsui`).

## Description

On many Android devices, mobile manufacturers hide the shortcut to the native system file manager (`DocumentsUI`), making it difficult for users to access certain storage areas or manage files using the built-in system tool. 

This app acts as a simple bridge. Upon launch, it automatically triggers an intent to open the `com.google.android.documentsui` package. It is built using the **Capacitor 7** framework to ensure minimal overhead and extreme speed.

## Key Features

- **Auto-Launch**: Automatically opens the system file manager within 1 second of app startup.
- **Auto-Exit**: Closes itself after a successful launch to save system resources.
- **Hidden App Recovery**: Specifically designed for OEM ROMs (like MIUI, ColorOS, etc.) where the Files app icon is missing from the launcher.
- **Material Design**: A clean, modern interface based on Google's design language.

## Tech Stack

- **Framework**: [Capacitor 7](https://capacitorjs.com/)
- **Frontend**: Vite + Vanilla JavaScript
- **Native Bridge**: `@capacitor/app-launcher` & `@capacitor/app`
- **Compiler Requirements**: Java 21+

## Installation

You can download the latest APK from the [Releases](https://github.com/abc15018045126/com.google.android.documentsui/releases) section.

## Development & Build

If you want to build the project from source:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/abc15018045126/com.google.android.documentsui.git
   cd com.google.android.documentsui
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Build the web assets**:
   ```bash
   npm run build
   ```

4. **Sync with Android project**:
   ```bash
   npx cap sync
   ```

5. **Build APK**:
   Open the `android` folder in Android Studio or use Gradle:
   ```bash
   cd android
   ./gradlew assembleDebug
   ```

## F-Droid Metadata

The project includes F-Droid compatible metadata located in `metadata/com.lxf.documentsui_launcher.yml`.

## License

This project is licensed under the MIT License.
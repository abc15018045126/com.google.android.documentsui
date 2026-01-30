import { AppLauncher } from '@capacitor/app-launcher';
import { App } from '@capacitor/app';

const output = (msg) => {
    const statusContainer = document.getElementById('status-container');
    if (statusContainer) {
        const p = document.createElement('p');
        p.innerText = msg;
        statusContainer.appendChild(p);
    }
    console.log(msg);
};

const launchDocumentsUI = async () => {
    try {
        output('Checking for com.google.android.documentsui...');
        const targetPackage = 'com.google.android.documentsui';

        const { value: canOpen } = await AppLauncher.canOpenUrl({ url: targetPackage });

        if (canOpen) {
            output('DocumentsUI found. Launching...');
            await AppLauncher.openUrl({ url: targetPackage });
            output('Success! App will close in 2 seconds.');

            setTimeout(() => {
                App.exitApp();
            }, 2000);
        } else {
            output('Direct package launch failed.');
            output('Attempting via storage URI...');
            const uri = 'content://com.android.externalstorage.documents/root/primary';
            await AppLauncher.openUrl({ url: uri });
        }
    } catch (error) {
        output('Error: ' + error.message);
        console.error('Launch Error:', error);
    }
};

window.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('launch-btn');
    if (btn) btn.addEventListener('click', launchDocumentsUI);

    output('Ready to launch...');
    setTimeout(launchDocumentsUI, 800);
});

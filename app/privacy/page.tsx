import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy policy · SmartWallet',
  description: 'What SmartWallet stores, what it sends, how Google Drive backup works and how to delete your data.',
};

const BASE = process.env.NEXT_PUBLIC_BASE ?? '';

export default function Privacy() {
  return (
    <main className="wrap legal">
      <a href={`${BASE}/`} className="kicker">
        ← SmartWallet
      </a>
      <h1>Privacy policy</h1>
      <p className="lead">Effective 15 November 2026</p>
      <p>
        SmartWallet is a free personal finance app for Android. This policy explains what data the app handles, where it goes, and how you can delete it. It applies to the SmartWallet app and to this website.
      </p>

      <h2>Summary</h2>
      <ul>
        <li>No SmartWallet account, no SmartWallet server, no ads, no analytics, no tracking.</li>
        <li>Your financial data is stored on your phone and in backups you choose.</li>
        <li>The developer never receives, sells or shares your data.</li>
      </ul>

      <h2>Data stored on your phone</h2>
      <p>
        Accounts, transactions, categories, tags, budgets, reminders, bill photos and app settings are stored in the app’s private storage on your phone. Your Gemini API key, if you add one, is stored encrypted
        with the phone’s secure storage.
      </p>

      <h2>Voice entry and bill scanning (optional)</h2>
      <p>
        These features use Google Gemini with an API key you create yourself. When you use them, the voice clip or bill image is sent directly from your phone to Google, along with your account, category and tag
        names so the entry can be matched. Balances and past transactions are not sent. Google processes that request under its own terms and privacy policy. Nothing is sent if you don’t use these features.
      </p>

      <h2>Ask SmartWallet</h2>
      <p>
        Questions you ask the glowing orb are answered on your phone from your own entries. Only if the app can’t understand a question and you have added a Gemini key, the question text is sent to Google
        Gemini along with your account, category and tag names, so it can work out what you meant. Amounts, balances and transactions are not sent, and the answer is still calculated on your phone.
      </p>

      <h2>Bank SMS (optional, Android)</h2>
      <p>
        If you turn on Suggest from bank SMS, SmartWallet asks for Android’s SMS permission and reads SMS on your phone to find bank, card and UPI payments. It reads only; it never sends SMS. Messages are read on
        your phone only and are never uploaded, sent to the developer or sent to Gemini. The message text is not stored; the app keeps only which messages you added or skipped and which account number ending
        belongs to which of your accounts, and neither is included in backups. If you turn on Alert on new bank SMS, the app checks each new SMS on your phone and shows a notification for payments; the lock screen
        shows no amount. Turn either off in Settings → Privacy, or remove the permission in Android settings.
      </p>

      <h2>App lock (optional)</h2>
      <p>
        App lock uses Android’s own fingerprint, face and screen lock prompt. Your phone does the check and only tells SmartWallet whether it succeeded; the app never sees or stores your fingerprint, face data or
        PIN.
      </p>

      <h2>Backups</h2>
      <ul>
        <li>
          <strong>Backup folder:</strong> if you choose a folder, a backup file (your data and display settings, never your Gemini key) is written to it after changes. On Android this is a folder on your phone;
          on iPhone it can be an iCloud Drive folder.
        </li>
        <li>
          <strong>Android backup:</strong> if backup is turned on in your phone’s settings, Android may include the app’s data file and display settings in your Google account backup. Bill photos and the Gemini
          key are excluded.
        </li>
        <li>
          <strong>Share backup file:</strong> a file is only sent where you choose in the share menu.
        </li>
      </ul>

      <h2>Google Drive backup and Google user data (optional)</h2>
      <p>If you tap Connect Google Drive, you sign in with Google and SmartWallet requests one permission:</p>
      <ul>
        <li>
          <code>https://www.googleapis.com/auth/drive.appdata</code>: see, create and delete SmartWallet’s own files in a hidden app folder in your Google Drive. SmartWallet cannot see, open or change any
          other file in your Drive.
        </li>
      </ul>
      <p>
        <strong>How it is used:</strong> only to upload your SmartWallet backup file (the latest copy plus up to 7 daily copies) and to download it when you restore. Your Google account email is shown in the app
        so you know which account is connected.
      </p>
      <p>
        <strong>Where it goes:</strong> the backup travels directly between your phone and Google Drive over HTTPS. It is never sent to the developer or any other server, and the developer cannot access it.
      </p>
      <p>
        <strong>Sharing:</strong> data from Google APIs is not shared with, transferred to or sold to anyone, is not used for advertising, and is not used to develop or train AI or machine learning models. No human
        reads it.
      </p>
      <p>
        SmartWallet’s use and transfer of information received from Google APIs adheres to the{' '}
        <a href="https://developers.google.com/terms/api-services-user-data-policy">Google API Services User Data Policy</a>, including the Limited Use requirements.
      </p>

      <h2>Keeping and deleting your data</h2>
      <ul>
        <li>
          <strong>On your phone:</strong> data stays until you delete it in the app or uninstall the app.
        </li>
        <li>
          <strong>Backup folder:</strong> delete the SmartWallet backup files from that folder with any file manager.
        </li>
        <li>
          <strong>Google Drive:</strong> tap Disconnect in Settings → Backup to stop uploads. To delete the backups stored in Drive, open Google Drive on the web → Settings → Manage apps → SmartWallet → Options →
          Delete hidden app data. To remove SmartWallet’s access, visit <a href="https://myaccount.google.com/connections">myaccount.google.com/connections</a>.
        </li>
        <li>
          <strong>Android backup:</strong> managed in your phone’s backup settings and your Google account.
        </li>
      </ul>

      <h2>Other network requests</h2>
      <p>The app checks GitHub for new versions and downloads updates from GitHub. These requests contain no personal or financial data.</p>

      <h2>Security</h2>
      <p>All network traffic uses HTTPS. The Gemini key is stored encrypted. Because data lives on your device, keep your phone locked and your backups somewhere safe.</p>

      <h2>Children</h2>
      <p>SmartWallet is not directed at children under 13 and does not knowingly collect their data.</p>

      <h2>Changes</h2>
      <p>If this policy changes, the new version will be posted on this page with a new effective date.</p>

      <h2>Contact</h2>
      <p>
        Questions or deletion help: <a href="mailto:dev.buildmode@gmail.com">dev.buildmode@gmail.com</a>
      </p>
    </main>
  );
}

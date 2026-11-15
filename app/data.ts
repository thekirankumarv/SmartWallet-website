import {
  BellRing,
  Coins,
  ChartPie,
  CreditCard,
  DatabaseBackup,
  EyeOff,
  House,
  Landmark,
  Mic,
  Receipt,
  ScanLine,
  Search,
  Sparkles,
  Tags,
  type LucideIcon,
} from 'lucide-react';

export const REPO = 'https://github.com/thekirankumarv/SmartWallet-releases';
export const RELEASES = `${REPO}/releases/latest`;
export const shot = (id: string) => `${process.env.NEXT_PUBLIC_BASE}/shots/${id}.webp`;
export const asset = (p: string) => `${process.env.NEXT_PUBLIC_BASE}/${p}`;

export interface Shot {
  id: string;
  title: string;
  group: string;
}

export const GROUPS = ['Transactions', 'Voice', 'Bill scan', 'Stats', 'Money', 'Planning', 'Settings'] as const;

export const SHOTS: Shot[] = [
  { id: '01-transactions', title: 'Your month at a glance', group: 'Transactions' },
  { id: '02-add-transaction', title: 'Add with a calculator keypad', group: 'Transactions' },
  { id: '03-hold-to-peek', title: 'Hold to peek', group: 'Transactions' },
  { id: '21-search', title: 'Search and filters', group: 'Transactions' },
  { id: '28-first-account', title: 'Guided first setup', group: 'Transactions' },
  { id: '31-dollars', title: 'Dollars, euros and more', group: 'Transactions' },
  { id: '04-voice-guide', title: 'Speak your expenses', group: 'Voice' },
  { id: '05-voice-review', title: 'Check before saving', group: 'Voice' },
  { id: '29-voice-not-found', title: 'Flags what it can’t find', group: 'Voice' },
  { id: '25-voice-settings', title: 'Voice settings', group: 'Voice' },
  { id: '06-scan-bill', title: 'Scan a bill', group: 'Bill scan' },
  { id: '07-scanning', title: 'AI reads every line', group: 'Bill scan' },
  { id: '08-scan-review', title: 'One expense per item', group: 'Bill scan' },
  { id: '09-scanned-bills', title: 'Every bill, kept', group: 'Bill scan' },
  { id: '10-stats', title: 'Monthly stats', group: 'Stats' },
  { id: '11-stats-categories', title: 'Spending by category', group: 'Stats' },
  { id: '12-stats-yearly', title: 'The whole year', group: 'Stats' },
  { id: '13-stats-tags', title: 'Yearly categories', group: 'Stats' },
  { id: '14-budgets', title: 'Category budgets', group: 'Stats' },
  { id: '32-statement', title: 'PDF statements', group: 'Stats' },
  { id: '33-statement-pdf', title: 'A report you can share', group: 'Stats' },
  { id: '15-accounts', title: 'Accounts and net worth', group: 'Money' },
  { id: '16-credit-cards', title: 'Credit cards', group: 'Money' },
  { id: '17-loans', title: 'Loans and EMIs', group: 'Money' },
  { id: '18-account-history', title: 'Account history', group: 'Money' },
  { id: '19-reminders', title: 'Payment reminders', group: 'Planning' },
  { id: '20-tags', title: 'Coloured tags', group: 'Planning' },
  { id: '22-hidden-amounts', title: 'Hide amounts', group: 'Planning' },
  { id: '23-settings', title: 'Settings', group: 'Settings' },
  { id: '24-settings-more', title: 'Statements, backup and CSV', group: 'Settings' },
  { id: '34-backup', title: 'Automatic backup', group: 'Settings' },
  { id: '30-currency', title: 'Pick your currency', group: 'Settings' },
  { id: '26-help', title: 'Help & FAQ built in', group: 'Settings' },
  { id: '27-update', title: 'In-app updates', group: 'Settings' },
];

export const WAYS = [
  {
    key: 'tap',
    icon: Receipt,
    label: 'Tap',
    color: '#2FD9A0',
    title: 'Two taps and it’s logged',
    body: 'A calculator keypad for the amount (40+7, 2×120), then category and subcategory. Today and Yesterday are one tap. Hit + Next to log the whole shopping list in a row.',
    shots: ['02-add-transaction', '01-transactions'],
  },
  {
    key: 'speak',
    icon: Mic,
    label: 'Speak',
    color: '#8B7CFF',
    title: 'Hold the mic and just say it',
    body: '“Dairy, milk, 47, today, from cash. Vehicle, fuel, 205, yesterday, from card.” Several entries in one breath. It understands “last Friday” and “on the 5th”, matches your own accounts and tags, flags any name it can’t find, and you check everything before it’s saved.',
    shots: ['04-voice-guide', '05-voice-review'],
  },
  {
    key: 'scan',
    icon: ScanLine,
    label: 'Scan',
    color: '#FFB547',
    title: 'Snap the bill. Every item becomes an expense.',
    body: 'Photograph a supermarket bill, pick one from the gallery, or choose a PDF. The camera finds the edges, the AI reads every line and picks the right category, and it warns you if the items don’t add up to the total.',
    shots: ['07-scanning', '08-scan-review'],
  },
];

export const SHOWCASE = [
  {
    shot: '01-transactions',
    kicker: 'Transactions',
    title: 'See where the month is going',
    body: 'Spent this month, what’s left of your budget, income and balance up top. Below, every entry grouped by day with daily totals. Swipe between months.',
    points: ['Colour-coded #tags for shops, trips and festivals', 'Notes on any entry', '₹ by default, or $, €, £ and 36 more'],
  },
  {
    shot: '03-hold-to-peek',
    kicker: 'Hold to peek',
    title: 'Details without opening anything',
    body: 'Hold any entry to see its full details, then let go. Tap to edit. Every delete asks first.',
    points: ['Category, account, date and time', 'Full note and tags', 'Haptic feedback throughout'],
  },
  {
    shot: '09-scanned-bills',
    kicker: 'Scanned bills',
    title: 'Every bill kept with its photo',
    body: 'Each scanned bill stays in Scanned bills with its photo and the expenses it created, so you can always check what the AI saved.',
    points: ['Up to 5 photos for long bills', 'Gallery images and PDFs too', 'Warns when items don’t match the total'],
  },
  {
    shot: '11-stats-categories',
    kicker: 'Stats',
    title: 'Know exactly where it went',
    body: 'A pie chart by category for any month or year. Tap a slice to see its subcategories and which account paid.',
    points: ['Income, expense and savings', 'Month-by-month bars for the year', 'Spend per tag'],
  },
  {
    shot: '14-budgets',
    kicker: 'Budgets',
    title: 'Budgets that warn you early',
    body: 'Set a monthly budget per category. Progress bars go green, then amber, then red as you get closer.',
    points: ['Per category, every month', 'Budget left on the home screen', 'Hide categories you don’t use'],
  },
  {
    shot: '33-statement-pdf',
    kicker: 'PDF statements',
    title: 'A statement worth sharing',
    body: 'Pick a week, month, year or your own dates, for all accounts or just one. You get a clean A4 PDF with a summary, cash-flow chart, categories, budgets, account balances and every transaction.',
    points: ['Running balance for a single account', 'Share to WhatsApp, Gmail, Drive or print', 'Made on your phone, nothing uploaded'],
  },
  {
    shot: '34-backup',
    kicker: 'Automatic backup',
    title: 'Uninstall, change phones, keep everything',
    body: 'Pick a folder once and SmartWallet backs up after every change: the latest copy plus one per day for a week. Reinstall and restore from the home screen in two taps.',
    points: ['Folder survives uninstall', 'Optional Google Drive sync, hidden app folder', 'Android Google backup included, Gemini key never'],
  },
  {
    shot: '15-accounts',
    kicker: 'Accounts',
    title: 'Your whole net worth in one place',
    body: 'Bank, cash, wallet, credit card, fixed deposit and loan, plus your own types like gold or stocks. Live balances, assets and liabilities.',
    points: ['Transfers never count as spending', 'Fix a balance: opening amount or adjustment', 'Full history per account'],
  },
  {
    shot: '16-credit-cards',
    kicker: 'Credit cards',
    title: 'Never miss what you owe',
    body: 'Limit, outstanding, available credit, utilisation, statement day and due day for every card, including FD-backed ones.',
    points: ['Pay bill is a transfer, never double-counted', 'Blocks spending past your limit', 'Due-date reminders'],
  },
  {
    shot: '31-dollars',
    kicker: 'Any currency',
    title: 'Rupees, dollars, or 38 others',
    body: 'Rupees with the Indian number format by default. Switch to US dollars, euros, pounds, dirhams and more in Settings, and every screen, label, voice entry and PDF follows.',
    points: ['Indian lakh format for ₹, international for the rest', 'Kept in your backups', 'Search 40 currencies'],
  },
  {
    shot: '17-loans',
    kicker: 'Loans',
    title: 'Watch your loans shrink',
    body: 'Outstanding amount, % repaid and the month it’ll be paid off. Interest is added each month automatically on the reducing balance.',
    points: ['Pay EMI in one tap', 'EMI and interest shown separately', 'Expected payoff month'],
  },
  {
    shot: '19-reminders',
    kicker: 'Reminders',
    title: 'Rent, bills and EMIs, on time',
    body: 'Repeat every few days, weeks, months or years. Get notified before the due date and on the day. Pay opens a pre-filled entry and marks it paid.',
    points: ['Overdue banner on the home screen', 'Cards, insurance, subscriptions', 'Works offline'],
  },
  {
    shot: '22-hidden-amounts',
    kicker: 'Privacy mode',
    title: 'Open it anywhere',
    body: 'One tap on the eye hides every balance and total when someone can see your screen. Tap an amount to peek for 3 seconds.',
    points: ['Option to always start hidden', 'Works on every screen', 'Stats and accounts too'],
  },
];

export const FEATURES: { icon: LucideIcon; title: string; body: string; color: string; wide?: boolean }[] = [
  { icon: Mic, title: 'Voice entry', body: 'Say several expenses in one go. It matches your accounts, categories and tags.', color: '#8B7CFF', wide: true },
  { icon: ScanLine, title: 'AI bill scanning', body: 'Each line on the bill becomes its own expense with the right category.', color: '#FFB547', wide: true },
  { icon: ChartPie, title: 'Stats & budgets', body: 'Monthly and yearly breakdowns with category budgets.', color: '#5AB2FF' },
  { icon: Landmark, title: 'Accounts', body: 'Bank, cash, wallet, FD and custom types with net worth.', color: '#2FD9A0' },
  { icon: CreditCard, title: 'Credit cards', body: 'Limit, utilisation, statement and due days.', color: '#FF5D73' },
  { icon: House, title: 'Loans', body: 'EMIs, monthly interest and payoff date.', color: '#FF9466' },
  { icon: BellRing, title: 'Reminders', body: 'Notifications before every due date.', color: '#FFB547' },
  { icon: EyeOff, title: 'Hide amounts', body: 'One tap hides every number on screen.', color: '#A3A3FF' },
  { icon: Search, title: 'Search', body: 'Notes, categories, tags and amounts, with filters.', color: '#4DE1E8' },
  { icon: Tags, title: 'Categories & tags', body: 'Ready-made set; rename, colour, merge or hide.', color: '#FF7CE0' },
  { icon: Coins, title: 'Any currency', body: '₹ with Indian number format by default, or $, €, £, AED and 35 more.', color: '#2FD9A0' },
  { icon: DatabaseBackup, title: 'PDF, backup & CSV', body: 'PDF statements for any week, month, year or dates you pick. Automatic backup to a folder or Google Drive, CSV export and import.', color: '#B6E35A', wide: true },
  { icon: Sparkles, title: 'Help & updates', body: 'Searchable help inside, and new versions in two taps.', color: '#E8C84D' },
];

export const INSTALL = [
  { title: 'Download the APK', body: 'Tap Download on your Android phone. It’s about 19 MB.' },
  { title: 'Open the file', body: 'Open it from your notifications or the Downloads folder.' },
  { title: 'Allow the install', body: 'If Android asks, allow “Install unknown apps” for your browser. Only needed once.' },
  { title: 'Add your first account', body: 'Open SmartWallet, add a bank or cash account, and start logging.' },
];

export const GEMINI = [
  'Open Google AI Studio and sign in with your Google account.',
  'Tap Create API key and copy it.',
  'In SmartWallet go to Settings → Voice entry, paste the key and tap Check & save.',
];

export const FAQ = [
  { q: 'Is it really free?', a: 'Yes. No ads, no subscriptions, no in-app purchases. If you’d like to say thanks, there’s a Support the developer option in Settings.' },
  { q: 'Is there an iPhone version?', a: 'Not yet. SmartWallet is Android only for now: Android 7.0 or newer on a 64-bit (arm64) phone, which covers almost every phone from the last several years.' },
  { q: 'Why isn’t it on the Play Store?', a: 'It’s distributed on GitHub, so Android asks once for permission to install it. In-app updates are downloaded from the same place and their checksum is verified before installing.' },
  { q: 'Where is my data stored?', a: 'In one file on your phone, plus the backups you choose: a folder, Android’s Google backup or your own Google Drive. There’s no SmartWallet server and no analytics, so nobody else can see it.' },
  { q: 'What gets sent to Google for voice and bill scanning?', a: 'Only the voice clip or bill image, plus your account, category and tag names so it can match them. Balances and past transactions never leave your phone. Everything else works with no key at all.' },
  { q: 'Do I need to pay for the Gemini key?', a: 'No. Google’s free tier is plenty for personal use and needs no card. The key is stored encrypted on your phone and is never part of backups.' },
  { q: 'Will I lose my data if I uninstall?', a: 'Not with a backup folder chosen in Settings → Backup. SmartWallet saves to it after every change, and the folder stays when the app is removed. Reinstall and tap Restore from backup on the home screen.' },
  { q: 'How do I move to a new phone?', a: 'Keep a copy off the old phone: Android’s Google backup, Connect Google Drive in Settings → Backup, or a backup folder synced to Drive. On the new phone install SmartWallet and tap Restore from backup. Add your Gemini key again.' },
  { q: 'Can I bring data from another app?', a: 'Yes. Settings → Import CSV reads any file with Date, Account, Type and Amount columns. Accounts and categories are matched by name or created, and duplicates are skipped.' },
  { q: 'My balance doesn’t match the bank. How do I fix it?', a: 'Edit the account and type the right balance. If it has entries, pick Fix opening balance when the starting amount was wrong, or Add adjustment entry to record money that moved without a transaction.' },
  { q: 'Can I use dollars or another currency?', a: 'Yes. Rupees are the default; pick US dollars, euros, pounds, dirhams or any of 40 currencies in Settings → Currency. It changes the symbol and number format only, nothing is converted.' },
  { q: 'Can I get a statement as a PDF?', a: 'Yes. Settings → Statement PDF, or the document icon on Stats or any account. Pick a week, month, year or your own dates, all accounts or one, then share it to WhatsApp, Gmail, Drive or print it.' },
  { q: 'Does it work offline?', a: 'Everything except voice entry, bill scanning and update checks works with no internet at all.' },
  { q: 'How do updates work?', a: 'SmartWallet checks for new versions and shows a popup with what’s new. Tap Update now, or later from Settings → App updates. Your data stays as it is.' },
];

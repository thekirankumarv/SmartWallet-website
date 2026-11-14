# SmartWallet website

**Live:** https://smartwallet-app-lemon.vercel.app

Landing page for [SmartWallet](https://github.com/thekirankumarv/SmartWallet-releases), a free offline-first money manager for Android.

<p>
  <img src="preview/desktop-1-hero.webp" width="100%" alt="Hero" />
</p>

<p>
  <img src="preview/desktop-2-how.webp" width="49%" alt="Three ways to log" />
  <img src="preview/desktop-3-features.webp" width="49%" alt="Features" />
  <img src="preview/desktop-4-screens.webp" width="49%" alt="All screens" />
  <img src="preview/desktop-5-privacy.webp" width="49%" alt="Privacy" />
  <img src="preview/desktop-6-install.webp" width="49%" alt="Install" />
  <img src="preview/desktop-7-faq.webp" width="49%" alt="FAQ" />
</p>

### Mobile

<p>
  <img src="preview/mobile-1-hero.webp" width="13.5%" alt="Mobile hero" />
  <img src="preview/mobile-2-how.webp" width="13.5%" alt="Mobile ways" />
  <img src="preview/mobile-3-features.webp" width="13.5%" alt="Mobile features" />
  <img src="preview/mobile-4-screens.webp" width="13.5%" alt="Mobile screens" />
  <img src="preview/mobile-5-privacy.webp" width="13.5%" alt="Mobile privacy" />
  <img src="preview/mobile-6-install.webp" width="13.5%" alt="Mobile install" />
  <img src="preview/mobile-7-faq.webp" width="13.5%" alt="Mobile FAQ" />
</p>

## Develop

```bash
npm install
npm run dev     # http://localhost:3000/SmartWallet-website
npm run build   # static site in out/
```

Screenshots live in `screenshots/`; `npm run assets` turns them into web images, the share card and the QR code. Pushing to `main` deploys to GitHub Pages (served under `/SmartWallet-website`). On Vercel the build detects `VERCEL` and serves from the root with no settings needed.

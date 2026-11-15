import { ArrowDown, ArrowUpRight, BadgeCheck, CloudOff, HardDrive, KeyRound, Lock, RefreshCw, ShieldCheck, Smartphone, Sparkles, WifiOff } from 'lucide-react';
import { asset, FEATURES, GEMINI, INSTALL, REPO, SHOTS } from './data';
import { AndroidIcon, DownloadButton, Faq, Gallery, HeroVisual, MotionRoot, Nav, Phone, Reveal, ScrollBar, Showcase, Spotlight, Ways } from './ui';

const MARQUEE = ['Free forever', 'No ads', 'No sign-up', 'Works offline', 'Voice entry', 'AI bill scanning', 'Budgets', 'Credit cards', 'Loans & EMIs', 'Reminders', 'Google Drive backup', 'PDF statements', 'CSV import & export', 'Hide amounts', '40 currencies', '₹ Indian number format'];

function Head({ kicker, title, sub }: { kicker: string; title: React.ReactNode; sub?: string }) {
  return (
    <Reveal className="head">
      <span className="kicker">{kicker}</span>
      <h2>{title}</h2>
      {sub && <p>{sub}</p>}
    </Reveal>
  );
}

export default function Home() {
  return (
    <MotionRoot>
      <ScrollBar />
      <div className="bg" aria-hidden>
        <div className="blob blob-1" />
        <div className="blob blob-2" />
        <div className="blob blob-3" />
        <div className="grid" />
        <div className="grain" />
      </div>
      <Nav />

      <main id="top">
        <section className="hero wrap">
          <div className="hero-copy">
            <Reveal>
              <span className="pill">
                <AndroidIcon size={14} /> Now on Android · v1.0
              </span>
            </Reveal>
            <Reveal delay={0.08}>
              <h1>
                Every rupee.
                <br />
                Tracked in <span className="grad">seconds.</span>
              </h1>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="lead">
                Tap it, <em>say it</em>, or <em>scan the bill</em>. SmartWallet is a free money manager for Android with budgets, accounts, credit cards, loans and
                reminders. Everything stays on your phone.
              </p>
            </Reveal>
            <Reveal delay={0.24} className="hero-ctas">
              <DownloadButton big />
              <a href="#how" className="btn btn-ghost">
                See how it works <ArrowDown size={16} />
              </a>
            </Reveal>
            <Reveal delay={0.32}>
              <ul className="trust">
                <li>
                  <BadgeCheck size={16} /> Free, no ads
                </li>
                <li>
                  <Lock size={16} /> No sign-up
                </li>
                <li>
                  <WifiOff size={16} /> Works offline
                </li>
              </ul>
              <p className="req">
                <Smartphone size={14} /> Android 7.0+ · 64-bit phones · not available for iPhone yet
              </p>
            </Reveal>
          </div>
          <HeroVisual />
        </section>

        <div className="marquee" aria-hidden>
          <div className="marquee-track">
            {[...MARQUEE, ...MARQUEE].map((m, i) => (
              <span key={i}>
                <Sparkles size={14} /> {m}
              </span>
            ))}
          </div>
        </div>

        <section id="how" className="section wrap">
          <Head kicker="Three ways to log" title={<>Logging money shouldn’t feel like work.</>} sub="Pick whatever’s fastest right now. All three end up in the same place, checked by you." />
          <Reveal>
            <Ways />
          </Reveal>
        </section>

        <section className="wrap numbers">
          {[
            ['₹0', 'Price. Forever.'],
            ['0', 'Ads or trackers'],
            ['0', 'Accounts to create'],
            ['100%', 'Data on your phone'],
          ].map(([n, l], i) => (
            <Reveal key={l} delay={i * 0.08} className="number">
              <b>{n}</b>
              <span>{l}</span>
            </Reveal>
          ))}
        </section>

        <section id="features" className="section wrap">
          <Head kicker="Features" title={<>Everything your money needs. In one app.</>} sub="From a ₹10 curry leaf to a home loan, SmartWallet keeps track of it." />
          <Showcase />
        </section>

        <section className="section wrap">
          <Head kicker="And there’s more" title="Built for how you spend." />
          <div className="bento">
            {FEATURES.map((f, i) => (
              <Reveal key={f.title} delay={(i % 4) * 0.06} className={f.wide ? 'bento-wide' : ''}>
                <Spotlight className="card" style={{ '--c': f.color } as React.CSSProperties}>
                  <span className="card-icon">
                    <f.icon size={22} />
                  </span>
                  <h4>{f.title}</h4>
                  <p>{f.body}</p>
                </Spotlight>
              </Reveal>
            ))}
          </div>
        </section>

        <section id="screens" className="section">
          <div className="wrap">
            <Head kicker={`${SHOTS.length} screens`} title="Take the full tour." sub="Every screen in the app, with sample data. Tap any screen to open it full size." />
          </div>
          <Reveal className="wrap-wide">
            <Gallery />
          </Reveal>
        </section>

        <section id="privacy" className="section wrap">
          <div className="privacy">
            <Reveal className="privacy-art">
              <div className="vault">
                <div className="vault-ring r1" />
                <div className="vault-ring r2" />
                <div className="vault-ring r3" />
                <span className="vault-core">
                  <ShieldCheck size={56} strokeWidth={1.6} />
                </span>
              </div>
            </Reveal>
            <div>
              <Head kicker="Privacy" title={<>Your money is nobody else’s business.</>} />
              <div className="privacy-list">
                {[
                  [HardDrive, 'Stored on your phone', 'All your data lives in one file on your phone. No account, no server, no analytics.'],
                  [Sparkles, 'AI only when you ask', 'Voice clips and bill photos go to Google Gemini only when you use those features. Balances and past transactions never leave.'],
                  [CloudOff, 'Backups go where you choose', 'Save a backup to Google Drive or anywhere else. Restore it on a new phone in seconds.'],
                  [WifiOff, 'Works offline', 'Everything except voice, bill scanning and update checks works with no internet at all.'],
                ].map(([Icon, t, b], i) => {
                  const I = Icon as typeof HardDrive;
                  return (
                    <Reveal key={t as string} delay={i * 0.08} className="privacy-item">
                      <span className="pi-icon">
                        <I size={20} />
                      </span>
                      <div>
                        <h4>{t as string}</h4>
                        <p>{b as string}</p>
                      </div>
                    </Reveal>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section id="install" className="section wrap">
          <Head kicker="Install" title="Up and running in a minute." sub="SmartWallet is installed from GitHub, not the Play Store. Here’s all it takes." />
          <div className="install">
            <ol className="steps">
              {INSTALL.map((s, i) => (
                <Reveal key={s.title} delay={i * 0.08}>
                  <li className="step">
                    <span className="step-n">{i + 1}</span>
                    <div>
                      <h4>{s.title}</h4>
                      <p>{s.body}</p>
                    </div>
                  </li>
                </Reveal>
              ))}
            </ol>
            <Reveal delay={0.1} className="install-side">
              <Spotlight className="card qr-card">
                <img src={asset('qr.svg')} alt="QR code to open this page on your phone" width={150} height={150} />
                <div>
                  <h4>On a computer?</h4>
                  <p>Scan this with your Android phone to open this page there, then tap Download.</p>
                </div>
              </Spotlight>
              <div className="card reqs">
                <h4>Requirements</h4>
                <ul className="ticks">
                  <li>Android 7.0 or newer</li>
                  <li>64-bit (arm64) phone: almost every phone from recent years</li>
                  <li>About 19 MB of space</li>
                  <li>Internet only for voice, bill scanning and updates</li>
                </ul>
              </div>
            </Reveal>
          </div>

          <Reveal className="gemini">
            <Spotlight className="card gemini-card">
              <div className="gemini-head">
                <span className="card-icon" style={{ '--c': '#8B7CFF' } as React.CSSProperties}>
                  <KeyRound size={22} />
                </span>
                <div>
                  <h3>Turn on voice and bill scanning</h3>
                  <p>Both use Google Gemini with your own free API key. It takes a minute, needs no card, and the key is stored encrypted on your phone.</p>
                </div>
              </div>
              <ol className="gemini-steps">
                {GEMINI.map((g, i) => (
                  <li key={g}>
                    <span>{i + 1}</span>
                    {g}
                  </li>
                ))}
              </ol>
              <a href="https://aistudio.google.com/apikey" target="_blank" rel="noreferrer" className="btn btn-ghost">
                Open Google AI Studio <ArrowUpRight size={16} />
              </a>
            </Spotlight>
          </Reveal>
        </section>

        <section className="section wrap">
          <div className="updates">
            <div>
              <Head kicker="Always up to date" title="It updates itself." sub="When a new version is out, SmartWallet shows what’s new. Tap Update now and it downloads, checks the file and installs. Your data stays exactly as it is." />
              <Reveal className="updates-points">
                <span>
                  <RefreshCw size={16} /> Popup when a version is out
                </span>
                <span>
                  <ShieldCheck size={16} /> Checksum verified before installing
                </span>
                <span>
                  <BadgeCheck size={16} /> Or update later from Settings
                </span>
              </Reveal>
            </div>
            <Reveal className="updates-phone">
              <Phone id="27-update" alt="Update available popup" />
            </Reveal>
          </div>
        </section>

        <section id="faq" className="section wrap faq-wrap">
          <Head kicker="FAQ" title="Questions, answered." />
          <Faq />
        </section>

        <section className="section wrap">
          <Reveal>
            <div className="final">
              <div className="final-glow" aria-hidden />
              <img src={asset('icon.webp')} alt="" width={88} height={88} className="final-icon" />
              <h2>
                Start tracking <span className="grad">today.</span>
              </h2>
              <p>Free. No ads. No sign-up. Your data never leaves your phone.</p>
              <DownloadButton big />
              <a href={`${REPO}/releases`} className="final-link" target="_blank" rel="noreferrer">
                All versions and release notes <ArrowUpRight size={14} />
              </a>
            </div>
          </Reveal>
        </section>
      </main>

      <footer className="footer wrap">
        <div className="brand">
          <img src={asset('icon.webp')} alt="" width={28} height={28} />
          SmartWallet
        </div>
        <nav>
          <a href={`${REPO}/releases`} target="_blank" rel="noreferrer">
            Releases
          </a>
          <a href={`${REPO}/issues`} target="_blank" rel="noreferrer">
            Report an issue
          </a>
          <a href="#faq">FAQ</a>
          <a href={`${process.env.NEXT_PUBLIC_BASE}/privacy/`}>Privacy</a>
        </nav>
        <p>Android only · Screenshots use sample data · Made in India</p>
      </footer>
    </MotionRoot>
  );
}

export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          QA Automation
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Record Browser Actions,<br />
          <span className="text-[#58a6ff]">Replay as Automation</span>
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Install the Chrome extension, click through your app, and get production-ready Playwright or Puppeteer scripts — automatically scheduled and replayed in a headless browser.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Start for $29/mo
        </a>
        <p className="mt-4 text-sm text-[#8b949e]">No credit card required for 7-day trial. Cancel anytime.</p>
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          {[
            { icon: "⏺", title: "One-Click Recording", desc: "Chrome extension captures clicks, inputs, navigation, and form submissions in real time." },
            { icon: "📜", title: "Script Generation", desc: "Instantly export clean Playwright or Puppeteer scripts ready for CI/CD pipelines." },
            { icon: "🔁", title: "Scheduled Replays", desc: "Run scripts on a cron schedule via headless browser — get alerts when tests fail." }
          ].map((f) => (
            <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="text-2xl mb-2">{f.icon}</div>
              <div className="font-semibold text-white mb-1">{f.title}</div>
              <div className="text-sm text-[#8b949e]">{f.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center shadow-lg">
          <div className="text-sm font-semibold text-[#58a6ff] uppercase tracking-widest mb-2">Pro</div>
          <div className="text-5xl font-extrabold text-white mb-1">$29</div>
          <div className="text-[#8b949e] mb-6">per month</div>
          <ul className="text-sm text-[#c9d1d9] space-y-3 mb-8 text-left">
            {[
              "Chrome extension for recording",
              "Unlimited script generation",
              "Playwright & Puppeteer export",
              "Scheduled headless replays",
              "Email alerts on failures",
              "Script version history"
            ].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="text-[#58a6ff] font-bold">✓</span> {item}
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors text-center"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            {
              q: "Do I need to know how to code?",
              a: "No. The Chrome extension records your actions and the app generates scripts automatically. You can export and run them without writing a single line of code."
            },
            {
              q: "Which browsers and frameworks are supported?",
              a: "Recording works in Chrome and Chromium-based browsers. Scripts are exported for Playwright and Puppeteer, compatible with Node.js CI/CD environments."
            },
            {
              q: "What happens if a scheduled replay fails?",
              a: "You receive an email alert with a screenshot and error log. You can review the failure in the dashboard and re-run or update the script."
            }
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="font-semibold text-white mb-2">{item.q}</div>
              <div className="text-sm text-[#8b949e]">{item.a}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-xs text-[#8b949e] pb-8">
        &copy; {new Date().getFullYear()} AutoRec. All rights reserved.
      </footer>
    </main>
  );
}

/* Test Drive Arcade
 * To add a new session: push one object onto SESSIONS with a `games` list.
 * Game types: "quiz" (choose an answer, distractors drawn from other answers or a fixed `buckets` list)
 *             "sequence" (put shuffled steps in the right order)
 */

const SG_PLATFORMS = [
  "Social Media Marketing", "Influencer & Creator", "Content & GenAI Production", "Email, CRM & Messaging",
  "Search: SEO, SEM & GEO", "Programmatic & Retail Media", "Affiliate & Social Commerce",
  "Mobile & Super-apps", "Automation & AI Agents", "Analytics & Measurement"
];

const SESSIONS = [
  {
    id: "s1",
    line: "--l1",
    short: "Platform Types",
    date: "3 Oct",
    title: "Digital Platforms in the AI Era",
    speaker: "Madina Kalyayeva · ESSEC",
    blurb: "The 10 types of digital marketing platforms, how brands in Southeast Asia use them, and the metrics that prove a campaign worked.",
    games: [
      {
        id: "matcher", type: "quiz", name: "Platform Matcher", rounds: 10,
        how: "A real campaign from the deck appears. Pick which of the 10 platform types it belongs to.",
        kicker: "Which platform type?",
        items: [
          { q: "Grab runs Instagram Stories built from user-generated content about “best food delivery moments.”", a: "Social Media Marketing", why: "Organic social: user content shared in the brand's own social feed." },
          { q: "Agoda makes its 2025 Singapore flight ads in-house with Veo, Runway and Kling, then runs them on YouTube, Meta and TikTok.", a: "Social Media Marketing", why: "Paid social. On these platforms AI finds the audience from the creative, so many versions help." },
          { q: "La Roche-Posay works with top beauty influencers in Singapore to host live skincare tutorials on Instagram.", a: "Influencer & Creator", why: "Paid influencer content builds trust and social proof." },
          { q: "#LokalMendunia: Indonesian brands enter Malaysia through TikTok Shop creators. Some grow up to 50x through LIVE sales.", a: "Influencer & Creator", why: "Hybrid creator marketing: creators drive both discovery and direct sales." },
          { q: "Cathay Pacific's blog publishes travel guides to unusual Asian destinations.", a: "Content & GenAI Production", why: "Organic content marketing for long-term engagement, and content AI answer engines can quote." },
          { q: "McDonald's Netherlands pulls its AI-generated Christmas ad within days after an “AI slop” backlash.", a: "Content & GenAI Production", why: "The watch-out for GenAI production: efficiency is not the brief. Keep humans on idea, voice and final cut." },
          { q: "Zalora's “Wishlist Reminders” nudge shoppers to come back and buy saved items.", a: "Email, CRM & Messaging", why: "Retention built on first-party data." },
          { q: "Sephora Asia pairs promotional emails with new-product tutorials that link to exclusive discounts.", a: "Email, CRM & Messaging", why: "Hybrid email: content plus offer, segmented by behaviour." },
          { q: "Lazada's Google Ads in Indonesia target terms like “best Ramadan discounts” during festive seasons.", a: "Search: SEO, SEM & GEO", why: "Paid search captures high-intent demand." },
          { q: "Vietnam Airlines optimises its content for queries like “cheap flights to Da Nang.”", a: "Search: SEO, SEM & GEO", why: "Organic SEO. Add GEO: clear answers, FAQs and structured data so AI tools cite you." },
          { q: "WPP Media x GrabAds use anonymised transaction and location signals to plan media across 6 SEA markets.", a: "Programmatic & Retail Media", why: "Retail media puts ads next to real purchase data." },
          { q: "Guardian pays Singapore beauty influencers who embed referral links in YouTube vlogs and IG posts.", a: "Affiliate & Social Commerce", why: "Pay-for-performance sales through partners' links." },
          { q: "Lazada affiliates in the Philippines promote best-sellers in Facebook groups without direct sponsorship.", a: "Affiliate & Social Commerce", why: "Organic affiliate selling: commission, not a sponsorship fee." },
          { q: "Shopee shows in-app pop-ups for discounted products.", a: "Mobile & Super-apps", why: "Paid in-app moments inside a super-app where payment and shopping already sit." },
          { q: "Nestlé x Lazada pilot the LazzieChat AI shopping assistant in-app in SG, MY and ID (Apr 2026).", a: "Mobile & Super-apps", why: "AI inside a super-app, reaching people on the go." },
          { q: "Singapore Airlines and Salesforce roll out Agentforce-powered AI tools for customer service.", a: "Automation & AI Agents", why: "Automation has moved from triggers to agents." },
          { q: "Startups in Malaysia use Mailchimp's free tier to send automated welcome emails to new signups.", a: "Automation & AI Agents", why: "Automated journeys: welcome, abandoned cart, win-back." },
          { q: "Adobe Analytics powers enterprise-level reporting for Lazada's campaigns across SEA.", a: "Analytics & Measurement", why: "The more AI buys for you, the more you need independent proof of what worked." },
          { q: "Google opens its Meridian marketing-mix model to all advertisers as open source.", a: "Analytics & Measurement", why: "MMM (Meridian, Meta Robyn) plus lift tests prove incrementality." }
        ],
        buckets: SG_PLATFORMS, optionCount: 4
      },
      {
        id: "metrics", type: "quiz", name: "Metric Sorter", rounds: 10,
        how: "Sort each metric into its benchmarking family, from transactional all the way to the new AI visibility.",
        kicker: "Which metric family?",
        items: [
          { q: "Sales revenue and conversion rate", a: "Transactional", why: "Individual KPIs: sales, revenue, conversion rates." },
          { q: "Market share and share of voice", a: "Competitive", why: "Competitive metrics: market share, voice share, wallet share." },
          { q: "Share of wallet", a: "Competitive", why: "How much of a customer's spend in the category you win." },
          { q: "Email open rates and click-throughs", a: "Engagement", why: "Return on engagement: interactions, opens, clicks." },
          { q: "Comments, shares and reactions on a post", a: "Engagement", why: "Social interactions are engagement metrics." },
          { q: "Net Promoter Score", a: "Perceptual", why: "Perceptual: CSAT, customer effort score and NPS." },
          { q: "Customer effort score", a: "Perceptual", why: "How easy customers felt it was to deal with you." },
          { q: "Cost per lead", a: "Pipeline", why: "Pipeline: lead quality, time to close, cost per lead." },
          { q: "Time taken to close a deal", a: "Pipeline", why: "A pipeline metric." },
          { q: "Customer lifetime value", a: "Relationship", why: "The relationship metric in the deck." },
          { q: "Unaided brand awareness", a: "Awareness", why: "Awareness: aided, unaided and earned reach." },
          { q: "Earned reach", a: "Awareness", why: "Reach you didn't pay for counts toward awareness." },
          { q: "Share of ChatGPT answers that mention your brand", a: "AI Visibility", why: "The new family: how often AI assistants name you." },
          { q: "Referral traffic from AI assistants", a: "AI Visibility", why: "ChatGPT drives 75%+ of AI referrals in Singapore." },
          { q: "Sentiment of your brand in AI summaries", a: "AI Visibility", why: "AI visibility also covers what the AI says about you." }
        ],
        buckets: ["Transactional", "Competitive", "Engagement", "Perceptual", "Pipeline", "Relationship", "Awareness", "AI Visibility"]
      },
      {
        id: "stats", type: "quiz", name: "Singapore by Numbers", rounds: 8,
        how: "Guess the stat. Every number comes from the Session 1 deck (DataReportal, Meltwater x We Are Social, Momentum Works, Pew).",
        kicker: "Guess the number",
        items: [
          { q: "Hours per week Singaporeans spend on social media", a: "17 hours", opts: ["6 hours", "11 hours", "17 hours", "29 hours"], why: "Over 2 hours a day, across 7.4 platforms a month." },
          { q: "Share of Singapore adults (18+) who use social media", a: "95.3%", opts: ["71.1%", "82.4%", "90.6%", "95.3%"], why: "90.6% is the share of the whole population." },
          { q: "Social platforms the average Singaporean uses each month", a: "7.4", opts: ["3.1", "5.0", "7.4", "11.2"], why: "Which is why channel prioritisation matters." },
          { q: "Share of AI referral traffic in Singapore that comes from ChatGPT", a: "75%+", opts: ["25%", "40%", "60%", "75%+"], why: "Track it as a new source in analytics." },
          { q: "Online adults in Singapore who worry about what's real vs fake online", a: "71.1%", opts: ["33.0%", "52.7%", "71.1%", "88.9%"], why: "Trust is the new currency: label AI content." },
          { q: "How often users click a search result when Google shows an AI summary (vs 15% without)", a: "8%", opts: ["2%", "8%", "12%", "21%"], why: "Pew, 2025. Answers come before clicks, so brands compete to be cited." },
          { q: "Video and live commerce share of SEA platform e-commerce GMV in 2025", a: "32%", opts: ["9%", "20%", "32%", "51%"], why: "US$49.7B, up from 20% the year before." },
          { q: "TikTok Shop's SEA GMV in 2025", a: "US$45.6B", opts: ["US$4.5B", "US$15.2B", "US$45.6B", "US$157.6B"], why: "It doubled in a year. US$157.6B is all SEA platform e-commerce." },
          { q: "When ChatGPT Ads arrived in Singapore", a: "Sep 2026", opts: ["Dec 2024", "Dec 2025", "Jan 2026", "Sep 2026"], why: "23 Sep 2026. Ads in Google AI Overviews came to SG in Dec 2025." },
          { q: "Singapore influencer marketing spend in 2025", a: "US$119M", opts: ["US$12M", "US$45M", "US$119M", "US$480M"], why: "Up 12.9% on the year before." }
        ]
      }
    ]
  },
  {
    id: "launchlab",
    line: "--l2",
    short: "LaunchLab: Vibe Coding",
    date: "9 Oct",
    title: "Vibe Coding with LaunchLab",
    speaker: "Guest session · Yibo, Nirvan & Rishabh",
    blurb: "Design in Claude Design, build in Claude Code, store on GitHub, go live on Vercel, and remember users with Supabase.",
    games: [
      {
        id: "ship", type: "sequence", name: "Ship It",
        how: "Tap the steps in the right order to take a site from idea to live link. Two routes to complete.",
        puzzles: [
          {
            title: "Idea to live site",
            steps: [
              "Describe the look in Claude Design: role, goal, audience, pages, style",
              "Share → “Handoff to Claude Code…”",
              "Claude Code builds index.html, styles.css and script.js",
              "Create a new public repository on github.com",
              "Claude Code commits everything and pushes it to the repo",
              "Sign in to Vercel with GitHub and import the repo",
              "Click Deploy and get a live public link",
              "Every new push rebuilds the live site automatically"
            ],
            why: "Design → Build → GitHub → Vercel. After the first deploy you never upload anything again."
          },
          {
            title: "How logging in works",
            steps: [
              "Sign up: a new row goes into the user table with your email and a scrambled password",
              "Log in: the site checks your email and password match the user table",
              "The site hands your browser a token",
              "Your browser shows the token on every request, so no password on each click",
              "Log out: the token is thrown away and the site forgets you"
            ],
            why: "All three actions are API calls: a request to another computer and an answer back. Supabase handles this for you."
          }
        ]
      },
      {
        id: "terms", type: "quiz", name: "Repo Rapid-Fire", rounds: 10,
        how: "Files, git terms and the tools from the session. Use number keys to answer fast.",
        kicker: "Pick one", buckets: ["Fork", "Clone", "Commit", "Push", "Pull request", "Merge"],
        items: [
          { q: "Which file do you open to change the text on your main button?", a: "index.html", buckets: ["index.html", "styles.css", "script.js"], why: "HTML holds the words and structure." },
          { q: "Which file do you open to make that button orange?", a: "styles.css", buckets: ["index.html", "styles.css", "script.js"], why: "CSS holds the look: colours, fonts, spacing, phone vs laptop." },
          { q: "Which file do you open to make it do something when clicked?", a: "script.js", buckets: ["index.html", "styles.css", "script.js"], why: "JavaScript holds the behaviour." },
          { q: "Make your own copy of someone else's repo on your GitHub account", a: "Fork", why: "You can change a fork without affecting the original." },
          { q: "Copy a repo from GitHub down onto your computer", a: "Clone", why: "Cloning lets you edit the files locally." },
          { q: "Save a snapshot of your changes with a short note. It stays on your computer.", a: "Commit", why: "A commit is local. It is NOT on GitHub yet." },
          { q: "Send your saved commits up to GitHub", a: "Push", why: "Push updates the online copy, and Vercel redeploys." },
          { q: "Propose changes and ask teammates to review before they join the main project", a: "Pull request", why: "Every PR also gets its own Vercel preview link." },
          { q: "Approve a pull request and combine it into the main version", a: "Merge", why: "Merge is the last step of the PR flow." },
          { q: "You're working solo on your own branch and you're confident. What do you use?", a: "Push", buckets: ["Push", "Pull request"], why: "Direct action, no waiting for approval." },
          { q: "You're contributing to a friend's project. What do you use?", a: "Pull request", buckets: ["Push", "Pull request"], why: "Others can comment, suggest edits, approve or reject." },
          { q: "Which tool turns your code into a live public website?", a: "Vercel", buckets: ["GitHub", "Vercel", "Supabase", "Claude Design"], why: "GitHub stores the code. Vercel builds and hosts it." },
          { q: "Which tool gives your site sign-up, log-in and a user database?", a: "Supabase", buckets: ["GitHub", "Vercel", "Supabase", "tiiny.host"], why: "An open-source backend-as-a-service, connected to GitHub, Vercel and Lovable." },
          { q: "Which tool lets you design the front end without writing code?", a: "Claude Design", buckets: ["Claude Design", "Claude Code", "GitHub", "Vercel"], why: "Design first, then hand off to Claude Code." },
          { q: "What is a login token?", a: "A temporary sticker that says “this is you”", buckets: ["A temporary sticker that says “this is you”", "Your password, stored in the browser", "A copy of the user table", "A Vercel preview link"], why: "It expires on its own, and logging out throws it away." },
          { q: "To upload to tiiny.host, what do you ask Claude Code for?", a: "One zipped folder with index.html at the top level", buckets: ["One zipped folder with index.html at the top level", "A GitHub pull request", "A Supabase table", "Just the styles.css file"], why: "The exact prompt from the deck." },
          { q: "Your Wordle clone can't remember who played yesterday. What's missing?", a: "A backend with users and a database", buckets: ["A backend with users and a database", "More CSS", "A second index.html", "A pull request"], why: "A plain site forgets everyone and only knows its own files." },
          { q: "Which prompt will get you a better site?", a: "Role, goal, audience, pages, style and output", buckets: ["Role, goal, audience, pages, style and output", "“Create a website for my course”", "“Make it modern”", "“Homepage and lessons please”"], why: "The deck's good prompt spells out each of these." }
        ]
      }
    ]
  },
  {
    id: "s2",
    line: "--l3",
    short: "Martech Tools",
    date: "9 Oct",
    title: "Digital Marketing Tools",
    speaker: "Madina Kalyayeva · ESSEC",
    blurb: "Point tools, platforms, suites, hubs and the new AI layer on top, plus what each social channel's own ad manager can do.",
    games: [
      {
        id: "stack", type: "quiz", name: "Stack Sorter", rounds: 10,
        how: "Is it a point tool, a platform, a suite, a hub or an AI copilot/agent? Sort the tools and descriptions.",
        kicker: "Which kind of tool?",
        items: [
          { q: "Meltwater, for social listening", a: "Point tool", why: "Built for one specific function. Most now have AI features built in." },
          { q: "Mailchimp, for email", a: "Point tool", why: "Quick to implement and best in class for its job." },
          { q: "Brand24", a: "Point tool", why: "A social listening point tool." },
          { q: "Salesforce Data 360 (formerly Data Cloud)", a: "Platform", why: "A customer data platform offering functions through an API." },
          { q: "Covers 1 or 2 areas broadly and exposes its functions through an API for custom apps", a: "Platform", why: "Risk: dependence on a single platform and longer implementation." },
          { q: "HubSpot", a: "Suite", why: "Several products from one provider, now adding AI agents like Breeze." },
          { q: "Adobe Marketo Engage", a: "Suite", why: "Integration is handled by the provider." },
          { q: "Oracle Eloqua", a: "Suite", why: "Lower overall cost, but add-on modules may not be best in class." },
          { q: "A central portal that unifies collaboration, analytics, data integration and operations", a: "Hub", why: "Those are the 4 capabilities of a digital marketing hub." },
          { q: "Not centred on domain-specific extensibility, but gives one door into many apps and workflows", a: "Hub", why: "That's what separates a hub from a platform." },
          { q: "Salesforce Agentforce", a: "AI copilot / agent", why: "Agents take a goal, plan the steps and act across tools." },
          { q: "Meta Business Agent, closing sales on WhatsApp, IG and Messenger", a: "AI copilot / agent", why: "Used by 1M+ businesses since June 2026." },
          { q: "Google Ask Advisor, one agent across Ads, Analytics and Merchant Center", a: "AI copilot / agent", why: "Launched at Google Marketing Live, May 2026." },
          { q: "Claude or ChatGPT drafting a campaign brief and report", a: "AI copilot / agent", why: "Copilots help marketers work faster." }
        ],
        buckets: ["Point tool", "Platform", "Suite", "Hub", "AI copilot / agent"]
      },
      {
        id: "channels", type: "quiz", name: "Ad Manager Match", rounds: 10,
        how: "Every social channel has its own ad tools. Match the feature to the platform.",
        kicker: "Whose feature is it?",
        items: [
          { q: "Symphony: AI that makes and translates videos", a: "TikTok", why: "TikTok's GenAI creative suite." },
          { q: "Spark Ads: boost organic posts straight from creators", a: "TikTok", why: "Turns creators' best posts into ads." },
          { q: "GMV Max: automates Shop campaigns", a: "TikTok", why: "Built for TikTok Shop sales." },
          { q: "Creator AI Search matches briefs to creators", a: "TikTok", why: "Announced at TikTok World, May 2026." },
          { q: "Advantage+ Creative: GenAI image, text and video variations", a: "Meta", why: "Part of Meta's Advantage+ automation." },
          { q: "Advantage+ Campaign Budget moves spend to the best ads", a: "Meta", why: "Automatic budget allocation." },
          { q: "Ads in Threads, rolled out worldwide in Jan 2026", a: "Meta", why: "Bought through Meta Ads Manager." },
          { q: "Lead Gen Forms capture leads without leaving the site", a: "LinkedIn", why: "Users never leave LinkedIn." },
          { q: "Thought Leader Ads promote employees' posts", a: "LinkedIn", why: "Sponsored content from your people." },
          { q: "Target by job title, industry and company size", a: "LinkedIn", why: "Professional targeting is LinkedIn's edge." },
          { q: "Accelerate builds and auto-optimises campaigns", a: "LinkedIn", why: "LinkedIn's AI campaign builder." },
          { q: "Skippable in-stream: skip after 5 sec, pay on a 30-sec view or click", a: "YouTube", why: "Bought through Google Ads." },
          { q: "Peak Points: Gemini places ads right after a video's most engaging moment", a: "YouTube", why: "AI-timed ad breaks." },
          { q: "Demand Gen: AI campaigns across Shorts, Discover and Gmail", a: "YouTube", why: "Google's AI campaign type with YouTube at its core." },
          { q: "Grok writes ad copy and visuals from your URL", a: "X", why: "Grok sits inside X's Ads Manager." },
          { q: "Custom Audiences (formerly Tailored Audiences) retarget past visitors", a: "X", why: "Retargeting based on previous interactions." },
          { q: "Promoted Posts (formerly Promoted Tweets)", a: "X", why: "Extends reach in feeds." }
        ],
        buckets: ["TikTok", "Meta", "LinkedIn", "YouTube", "X"]
      }
    ]
  }
];

const NEXT_STOP = { short: "Next session", date: "Soon" };

/* ---------- helpers ---------- */
const $ = (sel, el = document) => el.querySelector(sel);
const h = (tag, attrs = {}, ...kids) => {
  const el = document.createElement(tag);
  for (const [k, v] of Object.entries(attrs)) {
    if (k === "class") el.className = v;
    else if (k === "style") el.setAttribute("style", v);
    else if (k.startsWith("on")) el.addEventListener(k.slice(2), v);
    else if (v !== false && v != null) el.setAttribute(k, v === true ? "" : v);
  }
  for (const kid of kids.flat()) if (kid != null && kid !== false) el.append(kid);
  return el;
};
const shuffle = (arr) => { const a = [...arr]; for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
const store = {
  get(k, d) { try { const v = localStorage.getItem("tda:" + k); return v == null ? d : JSON.parse(v); } catch { return d; } },
  set(k, v) { try { localStorage.setItem("tda:" + k, JSON.stringify(v)); } catch {} }
};
const bestKey = (s, g) => `best:${s.id}:${g.id}`;
const maxScore = (g) => g.type === "sequence" ? g.puzzles.reduce((n, p) => n + p.steps.length, 0) : Math.min(g.rounds, g.items.length);

/* ---------- tabs ---------- */
let current = "home";
let keyHandler = null;

function renderTabs() {
  const tabs = $("#tabs");
  tabs.replaceChildren(
    station("home", "Map", "Start", "--ink"),
    ...SESSIONS.map(s => station(s.id, s.short, s.date, s.line)),
    h("span", { class: "station future", style: "--line: var(--rule)" }, h("span", { class: "dot" }), h("span", { class: "lbl" }, NEXT_STOP.short), h("span", { class: "when" }, NEXT_STOP.date))
  );
}
function station(id, label, when, line) {
  return h("button", { class: "station", role: "tab", "aria-selected": String(current === id), style: `--line: var(${line})`, onclick: () => go(id) },
    h("span", { class: "dot", "aria-hidden": "true" }), h("span", { class: "lbl" }, label), h("span", { class: "when" }, when));
}

function go(id) {
  current = SESSIONS.some(s => s.id === id) ? id : "home";
  store.set("tab", current);
  if (location.hash.slice(1) !== current) history.replaceState(null, "", "#" + current);
  renderTabs();
  keyHandler = null;
  const main = $("#main");
  main.replaceChildren(current === "home" ? renderHome() : renderSession(SESSIONS.find(s => s.id === current)));
  window.scrollTo({ top: 0 });
}

/* ---------- home ---------- */
function renderHome() {
  let earned = 0, possible = 0, played = 0, total = 0;
  SESSIONS.forEach(s => s.games.forEach(g => { total++; possible += maxScore(g); const b = store.get(bestKey(s, g), null); if (b != null) { earned += b; played++; } }));
  return h("section", { class: "panel" },
    h("div", { class: "panel-head" },
      h("span", { class: "eyebrow" }, "Course map · Fall 2026"),
      h("h1", {}, "Ride every line"),
      h("p", {}, "One line per session. Each stop is a short game built from that session's slides, so you can revise in five minutes instead of rereading the deck.")),
    h("div", { class: "totals" },
      h("div", {}, h("b", {}, String(SESSIONS.length)), h("span", {}, "Sessions")),
      h("div", {}, h("b", {}, `${played}/${total}`), h("span", {}, "Games played")),
      h("div", {}, h("b", {}, `${earned}/${possible}`), h("span", {}, "Best points"))),
    h("div", { class: "home-grid" }, SESSIONS.map(s => {
      const bests = s.games.map(g => store.get(bestKey(s, g), null));
      const done = bests.filter(b => b != null).length;
      return h("button", { class: "line-card", style: `--line: var(${s.line})`, onclick: () => go(s.id) },
        h("span", { class: "who" }, `${s.date} · ${s.speaker}`),
        h("h3", {}, s.title),
        h("p", {}, s.blurb),
        h("div", { class: "stops" }, s.games.map(g => h("span", { class: "chip" }, g.name))),
        h("span", { class: "best" }, done ? `${done} of ${s.games.length} games played` : "Not started"));
    })));
}

/* ---------- session ---------- */
function renderSession(s) {
  const saved = store.get("game:" + s.id, s.games[0].id);
  let game = s.games.find(g => g.id === saved) || s.games[0];
  const boardHost = h("div");
  const picker = h("div", { class: "games", role: "group", "aria-label": "Games" });
  const drawPicker = () => picker.replaceChildren(...s.games.map(g => {
    const b = store.get(bestKey(s, g), null);
    return h("button", { class: "game-pick", "aria-pressed": String(g === game), onclick: () => { game = g; store.set("game:" + s.id, g.id); drawPicker(); start(); } },
      g.name, h("small", {}, b == null ? "new" : `best ${b}/${maxScore(g)}`));
  }));
  const start = () => boardHost.replaceChildren(game.type === "sequence" ? sequenceGame(s, game, drawPicker) : quizGame(s, game, drawPicker));
  drawPicker(); start();
  return h("section", { class: "panel", style: `--line: var(${s.line})` },
    h("div", { class: "panel-head" },
      h("span", { class: "eyebrow" }, `${s.date} · ${s.speaker}`),
      h("h1", {}, s.title),
      h("p", {}, s.blurb)),
    picker, boardHost);
}

function saveBest(s, g, score) {
  const prev = store.get(bestKey(s, g), null);
  if (prev == null || score > prev) { store.set(bestKey(s, g), score); return true; }
  return false;
}

function boardHeader(g, hud) {
  return h("div", { class: "board-top" },
    h("div", {}, h("h2", {}, g.name), h("p", { class: "how" }, g.how)), hud);
}

/* ---------- quiz engine ---------- */
function quizGame(s, g, onScore) {
  const rounds = Math.min(g.rounds, g.items.length);
  const deck = shuffle(g.items).slice(0, rounds);
  const allAnswers = [...new Set(g.items.map(i => i.a))];
  let i = 0, score = 0, streak = 0, bestStreak = 0;
  const results = [], misses = [];
  const board = h("div", { class: "board" });

  function optionsFor(item) {
    if (item.opts) return shuffle(item.opts);
    const pool = item.buckets || g.buckets || allAnswers;
    if (!g.optionCount || pool.length <= g.optionCount) return item.buckets || g.buckets ? [...pool] : shuffle(pool);
    return shuffle([item.a, ...shuffle(pool.filter(x => x !== item.a)).slice(0, g.optionCount - 1)]);
  }

  function hud() {
    return h("div", { class: "hud" },
      h("span", {}, "Score", h("b", {}, `${score}`)),
      h("span", {}, "Streak", h("b", {}, `${streak}`)),
      h("span", {}, "Q", h("b", {}, `${Math.min(i + 1, rounds)}/${rounds}`)));
  }
  function bar() {
    return h("div", { class: "progress", "aria-hidden": "true" },
      Array.from({ length: rounds }, (_, k) => h("i", { class: k < results.length ? (results[k] ? "ok" : "no") : k === i ? "now" : "" })));
  }

  function ask() {
    const item = deck[i];
    const opts = optionsFor(item);
    let answered = false;
    const feedback = h("div");
    const actions = h("div", { class: "actions" }, h("span", { class: "hint" }, `Keys 1–${opts.length} to answer`));
    const buttons = opts.map((o, k) => h("button", { class: "choice", onclick: () => pick(k) }, h("span", { class: "key" }, String(k + 1)), h("span", {}, o)));

    function pick(k) {
      if (answered) return;
      answered = true;
      const ok = opts[k] === item.a;
      results.push(ok);
      if (ok) { score++; streak++; bestStreak = Math.max(bestStreak, streak); } else { streak = 0; misses.push(item); }
      buttons.forEach((b, j) => { b.disabled = true; if (opts[j] === item.a) b.classList.add("right"); else if (j === k) b.classList.add("wrong"); else b.classList.add("dim"); });
      feedback.replaceWith(h("div", { class: "feedback" + (ok ? "" : " no"), role: "status" },
        h("strong", {}, ok ? (streak >= 3 ? `Correct. ${streak} in a row.` : "Correct.") : `Not quite. It's ${item.a}.`),
        h("p", {}, item.why)));
      const nextBtn = h("button", { class: "btn", onclick: next }, i + 1 < rounds ? "Next question" : "See results");
      actions.replaceChildren(nextBtn, h("span", { class: "hint" }, "or press Enter"));
      board.querySelector(".hud").replaceWith(hud());
      board.querySelector(".progress").replaceWith(bar());
      nextBtn.focus();
    }
    function next() { i++; i < rounds ? ask() : finish(); }

    keyHandler = (e) => {
      if (!answered && /^[1-9]$/.test(e.key) && +e.key <= opts.length) pick(+e.key - 1);
      else if (answered && e.key === "Enter" && document.activeElement?.tagName !== "BUTTON") next();
    };
    board.replaceChildren(
      boardHeader(g, hud()), bar(),
      h("div", { class: "prompt" }, h("span", { class: "kicker" }, g.kicker), h("p", { class: "q" }, item.q)),
      h("div", { class: "choices" }, buttons), feedback, actions);
  }

  function finish() {
    keyHandler = null;
    const record = saveBest(s, g, score);
    onScore();
    const pct = score / rounds;
    board.replaceChildren(
      boardHeader(g, h("span")),
      h("div", { class: "end" },
        h("div", { class: "big" }, `${score}`, h("small", {}, ` / ${rounds}`)),
        h("p", {}, `${pct === 1 ? "Perfect run." : pct >= .7 ? "Strong. Review the misses below and go again." : "Worth another lap. The misses below are the ones to revisit."} Longest streak: ${bestStreak}.${record ? " New personal best." : ""}`),
        misses.length ? h("ul", { class: "review" }, misses.map(m => h("li", {}, h("b", {}, m.a), m.q))) : null,
        h("div", { class: "actions" }, h("button", { class: "btn", onclick: () => board.replaceWith(quizGame(s, g, onScore)) }, "Play again"))));
  }

  ask();
  return board;
}

/* ---------- sequence engine ---------- */
function sequenceGame(s, g, onScore) {
  let p = 0, score = 0;
  const board = h("div", { class: "board" });
  const total = maxScore(g);

  function hud() {
    return h("div", { class: "hud" }, h("span", {}, "Score", h("b", {}, `${score}`)), h("span", {}, "Route", h("b", {}, `${Math.min(p + 1, g.puzzles.length)}/${g.puzzles.length}`)));
  }

  function play() {
    const puzzle = g.puzzles[p];
    const pool = shuffle(puzzle.steps);
    const route = [];
    let checked = false;
    const poolEl = h("div", { class: "pool" });
    const routeEl = h("div", { class: "route" });
    const feedback = h("div");
    const actions = h("div", { class: "actions" });

    function draw() {
      poolEl.replaceChildren(h("h4", {}, "Steps"), ...pool.map((st, k) => h("button", { class: "step", onclick: () => { route.push(pool.splice(k, 1)[0]); draw(); } }, st)));
      if (!pool.length) poolEl.append(h("p", { class: "route-empty" }, "All steps placed."));
      routeEl.replaceChildren(h("h4", {}, "Your route (tap a step to send it back)"),
        ...(route.length ? route.map((st, k) => h("button", { class: "step", disabled: checked, onclick: () => { pool.push(route.splice(k, 1)[0]); draw(); } }, st)) : [h("p", { class: "route-empty" }, "Tap the first step.")]));
      actions.replaceChildren(
        h("button", { class: "btn", disabled: route.length !== puzzle.steps.length, onclick: check }, "Check route"),
        h("button", { class: "btn ghost", onclick: () => { pool.push(...route.splice(0)); draw(); } }, "Reset"));
    }
    function check() {
      checked = true;
      let right = 0;
      route.forEach((st, k) => { if (st === puzzle.steps[k]) right++; });
      score += right;
      draw();
      [...routeEl.querySelectorAll(".step")].forEach((b, k) => { b.disabled = true; b.classList.add(route[k] === puzzle.steps[k] ? "right" : "wrong"); });
      poolEl.replaceChildren(h("h4", {}, "Correct order"), h("ol", { style: "margin:0;padding-left:20px;display:grid;gap:6px;font-size:15px" }, puzzle.steps.map(st => h("li", {}, st))));
      feedback.replaceWith(h("div", { class: "feedback" + (right === puzzle.steps.length ? "" : " no"), role: "status" },
        h("strong", {}, `${right} of ${puzzle.steps.length} steps in the right place.`), h("p", {}, puzzle.why)));
      actions.replaceChildren(h("button", { class: "btn", onclick: () => { p++; p < g.puzzles.length ? play() : finish(); } }, p + 1 < g.puzzles.length ? "Next route" : "See results"));
      board.querySelector(".hud").replaceWith(hud());
    }
    board.replaceChildren(boardHeader(g, hud()),
      h("div", { class: "prompt" }, h("span", { class: "kicker" }, `Route ${p + 1}`), h("p", { class: "q" }, puzzle.title)),
      h("div", { class: "seq" }, poolEl, routeEl), feedback, actions);
    draw();
  }

  function finish() {
    const record = saveBest(s, g, score);
    onScore();
    board.replaceChildren(boardHeader(g, h("span")),
      h("div", { class: "end" },
        h("div", { class: "big" }, `${score}`, h("small", {}, ` / ${total}`)),
        h("p", {}, `${score === total ? "Every step in place. You're ready to ship." : "Each point is one step in the right position."}${record ? " New personal best." : ""}`),
        h("div", { class: "actions" }, h("button", { class: "btn", onclick: () => board.replaceWith(sequenceGame(s, g, onScore)) }, "Play again"))));
  }

  play();
  return board;
}

/* ---------- boot ---------- */
document.addEventListener("keydown", (e) => { if (keyHandler && !e.metaKey && !e.ctrlKey && !e.altKey) keyHandler(e); });
document.querySelector(".brand").addEventListener("click", (e) => { e.preventDefault(); go("home"); });
window.addEventListener("hashchange", () => { const id = location.hash.slice(1); if (id && id !== current) go(id); });
go(location.hash.slice(1) || store.get("tab", "home"));

/* Test Drive Grand Prix
 * To add a round: push one object onto SESSIONS with a `line` livery (l1-l4) and a `games` list.
 * Game types: "quiz" (pick an answer; distractors from other answers, a fixed `buckets` list or `opts`)
 *             "sequence" (put shuffled steps in grid order)
 */

const SG_PLATFORMS = [
  "Social Media Marketing", "Influencer & Creator", "Content & GenAI Production", "Email, CRM & Messaging",
  "Search: SEO, SEM & GEO", "Programmatic & Retail Media", "Affiliate & Social Commerce",
  "Mobile & Super-apps", "Automation & AI Agents", "Analytics & Measurement"
];

const SESSIONS = [
  {
    id: "s1",
    line: "l1",
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
    line: "l2",
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
    line: "l3",
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
  ,
  {
    id: "yp",
    line: "l4",
    short: "AI Marketing Team",
    date: "30 Oct",
    title: "Building an AI Marketing Team",
    speaker: "Guest session · Nick Goh, Yellow Pages",
    blurb: "A lite agentic workflow with Claude: six AI teammates, one handoff chain, run end to end on a fictional Louis Vuitton Terra launch in Singapore.",
    games: [
      {
        id: "crew", type: "quiz", name: "Pit Crew", rounds: 10,
        how: "Six AI teammates, each built as a Claude skill. Read the job and pick who on the crew does it.",
        kicker: "Who does this job?",
        items: [
          { q: "Drafts the brief from the Project's context", a: "Brief Writer", why: "Planning team, step 1. In the demo this was the Marketing Brief Builder skill." },
          { q: "Needs the goal, audience, budget and timing before it can start", a: "Brief Writer", why: "Those four inputs turn into the draft brief." },
          { q: "Its output is a draft brief", a: "Brief Writer", why: "The draft then goes to the Brief Validator." },
          { q: "Critiques the brief in a fresh chat, with fresh eyes", a: "Brief Validator", why: "A new chat means the critic hasn't seen the drafting." },
          { q: "Checks the objective, audience, message and metric", a: "Brief Validator", why: "It scores the brief against that checklist." },
          { q: "Its output is a verdict and the top fixes", a: "Brief Validator", why: "On Terra, the fixes were success metrics, objectives, and channels and message." },
          { q: "Digests the validated brief and develops the Big Idea", a: "Strategist", why: "In the demo: the Researcher Strategist skill, using SOMIN data and web search." },
          { q: "Its output is a Big Idea one-pager", a: "Strategist", why: "Terra's came back as Nothing to Explain, The Art of Renewal and Made to Be Kept." },
          { q: "Creates the key visuals (KVs) using connectors such as Higgsfield", a: "Designer / Art Director", why: "Production team. The KV Concept Builder skill plus the Higgsfield connector." },
          { q: "Its output is KV concepts and assets", a: "Designer / Art Director", why: "Three concepts for Terra: Held, Reassembled and Years." },
          { q: "Builds the messaging hierarchy", a: "Copywriter", why: "Core promise, supporting messages, proof points and call to action." },
          { q: "Adapts the messaging per channel and platform", a: "Copywriter", why: "Output: channel-by-channel copy for Instagram, TikTok, LinkedIn and YouTube." },
          { q: "Checks the work against brand voice", a: "Reviewer", why: "The last link in the handoff chain." },
          { q: "Confirms the work delivers the brief and the Big Idea, then signs off", a: "Reviewer", why: "Output: edits and sign-off. Creative Review Scorer and Governance Compliance Check help here." }
        ],
        buckets: ["Brief Writer", "Brief Validator", "Strategist", "Designer / Art Director", "Copywriter", "Reviewer"]
      },
      {
        id: "handoff", type: "sequence", name: "Handoff Chain",
        how: "Tap the steps into grid order. Three stints: the chain from the deck, the Terra run as it happened, and the Instagram Story frames.",
        puzzles: [
          {
            title: "The handoff chain",
            steps: [
              "Brief Writer drafts the brief",
              "Brief Validator reviews it in a new chat, with fresh eyes",
              "Strategist digests the brief and shapes the Big Idea",
              "You approve it and save it to the knowledge base",
              "Designer + Copywriter make KVs via Higgsfield and the channel messaging",
              "Reviewer checks brand voice"
            ],
            why: "Planning team, then you, then production. Nothing reaches the creative team until a human approves it."
          },
          {
            title: "The Terra launch, as it ran",
            steps: [
              "A “Marketing Brief” email arrives from Nick",
              "A scheduled task runs Marketing Brief Builder on the email and saves a draft",
              "A revision session fixes the metrics, objectives, channels and message",
              "Researcher Strategist uses SOMIN data and web search to find the hidden motivation",
              "Messaging Hierarchy Builder writes the core promise and three supporting messages",
              "KV Concept Builder drafts three visual concepts and Higgsfield generates images",
              "Creative Review Scorer rates the Instagram Story and post out of 10"
            ],
            why: "Each skill reads the previous output from the Project knowledge base, so every step builds on approved work."
          },
          {
            title: "Instagram Story, frame by frame",
            steps: [
              "Nothing to explain.",
              "Terra. Louis Vuitton craft, since 1854.",
              "Discover Terra."
            ],
            why: "Object first, then craft, then a soft invitation. Any approved material fact appears once, in frame 2, never in frame 1."
          }
        ]
      },
      {
        id: "terra", type: "quiz", name: "Terra Debrief", rounds: 10,
        how: "Facts and calls from the Terra case, from the brief to the creative scores. Number keys answer fast.",
        kicker: "Terra case",
        items: [
          { q: "Proposed retail price of the (fictional) Terra handbag", a: "S$5,800", opts: ["S$1,200", "S$5,800", "S$10,200", "S$28,000"], why: "S$10,200 is the Chanel Classic resale estimate. S$28,000 is a Kelly on Orchard Road." },
          { q: "Size of Terra's initial allocation for Singapore", a: "1,000 bags", opts: ["100 bags", "1,000 bags", "10,000 bags", "50,000 bags"], why: "Limited production protects exclusivity, so qualified interest matters more than raw reach." },
          { q: "Indicative campaign budget in the brief", a: "S$300,000", opts: ["S$30,000", "S$300,000", "S$1.2M", "S$5M"], why: "For a 3-month social campaign, launching September 2027." },
          { q: "After the revision, which objective became primary?", a: "Consideration", opts: ["Awareness", "Engagement", "Consideration", "Brand health"], why: "Measured by boutique appointments and enquiries. The 1M reach target was flagged as too high." },
          { q: "The hidden motivation truth: she doesn't want a sustainable bag, she wants a bag she…", a: "never has to justify", opts: ["can prove is green", "never has to justify", "can resell later", "saw on an ambassador"], why: "Beauty is the reason to buy. Verified materials are only the permission." },
          { q: "In Terra's Big Idea, which layer is the stance?", a: "Nothing to Explain", opts: ["Nothing to Explain", "The Art of Renewal", "Made to Be Kept", "Discover Terra"], why: "The Art of Renewal is the visual territory. Made to Be Kept is the proof pillar." },
          { q: "Which layer is the proof pillar, weighted to weeks 7 to 12?", a: "Made to Be Kept", opts: ["Nothing to Explain", "The Art of Renewal", "Made to Be Kept", "Discover Terra"], why: "Longevity and care as the luxury argument, once durability claims are tested." },
          { q: "Primary call to action in the messaging hierarchy", a: "Book an appointment to see Terra", opts: ["Book an appointment to see Terra", "Discover Terra", "Shop now", "Join the waitlist"], why: "“Discover Terra”, which sends people to the product page, is the alternative." },
          { q: "Which KV concept was recommended as the master visual?", a: "Held", opts: ["Held", "Reassembled", "Years", "Sahara"], why: "It carries no unverified material claim, so it can be approved fastest and costs the least." },
          { q: "Which two platforms does the revised brief activate?", a: "Instagram and TikTok", opts: ["Instagram and TikTok", "LinkedIn and YouTube", "Facebook and X", "TikTok and YouTube"], why: "Instagram weeks 1 to 12, TikTok weeks 1 to 6, YouTube Shorts in reserve. LinkedIn isn't in the brief." },
          { q: "In SOMIN data, how many of Louis Vuitton's 210 recent posts touched sustainability topics?", a: "2", opts: ["2", "21", "70", "140"], why: "The 90 days to 29 Oct 2026. LV's feed leans on travel, craft and art partnerships." },
          { q: "Creativity score for the desert Instagram feed post", a: "4.3/10", opts: ["4.3/10", "5.7/10", "6.7/10", "8.9/10"], why: "The 3-frame Story scored 5.7 and the “hand on the clasp” close-up 6.7. A desire-led craft moment beat a generic desert editorial." },
          { q: "Which three agency lenses does the Creative Review Scorer use?", a: "BBH, Ogilvy, McCann", opts: ["BBH, Ogilvy, McCann", "WPP, Havas, Publicis", "Lowe, Euro RSCG, Ogilvy", "BBH, TBWA, Wieden+Kennedy"], why: "Each lens gives a score out of 10. The Creativity Score is their average." },
          { q: "Why did Claude refuse to put the ambassador's face on the generated model?", a: "It would fake a real person's endorsement", opts: ["It would fake a real person's endorsement", "The image was too low resolution", "Higgsfield credits ran out", "The brief banned faces"], why: "A realistic image of a real ambassador with a product she never agreed to could pass as a genuine ad once it leaves class." },
          { q: "What starts the workflow each day?", a: "A scheduled task that reads the “Marketing Brief” email", opts: ["A scheduled task that reads the “Marketing Brief” email", "A Slack message from the CMO", "A Vercel deploy", "A manual upload of the brief"], why: "The Email Trigger: Marketing Brief Builder runs daily at 6:48 PM on the latest labelled email." },
          { q: "Why does the Brief Validator run in a new chat?", a: "Fresh eyes: it hasn't seen the drafting", opts: ["Fresh eyes: it hasn't seen the drafting", "New chats are cheaper", "Skills only load in new chats", "To delete the old brief"], why: "A critic that wrote the draft tends to approve it." },
          { q: "How should an unverified material claim appear in the AI drafts?", a: "Marked [to verify], never invented", opts: ["Marked [to verify], never invented", "Rounded to a safe figure", "Left out without telling anyone", "Used as the headline"], why: "Terra's environmental credentials are hypothetical and must be substantiated before any ad runs." },
          { q: "Which holding company is folding Ogilvy, VML and AKQA into one creative banner?", a: "WPP", opts: ["WPP", "Omnicom", "Publicis", "Havas"], why: "One of the opening headlines on AI reshaping agencies, alongside job cuts and Getty Images' US bankruptcy filing." },
          { q: "Which Higgsfield tool was recommended for the multi-shot luxury film?", a: "Cinema Studio 4.0", opts: ["Cinema Studio 4.0", "Canvas", "Ads Studio", "Katana"], why: "Three 5-second shots (The Gaze, The Signature, The Final Impression) cut into one 9:16 film." }
        ]
      }
    ]
  }
];

/* ---------- Marina Bay night scene (canvas) ----------
 * Static layer (sky, skyline, bay, palms, floodlights, circuit, long-exposure streaks) is drawn once per size
 * into an offscreen canvas; cars with light trails are animated on top. */
function mulberry(a) { return () => { a |= 0; a = a + 0x6D2B79F5 | 0; let t = Math.imul(a ^ a >>> 15, 1 | a); t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t; return ((t ^ t >>> 14) >>> 0) / 4294967296; }; }
const CAR_COLORS = ["#e10600", "#ff8000", "#00d2be", "#ffd400", "#f4f6ff", "#3d7bff", "#e10600", "#c9ced9"];

function nightScene(cv, opts = {}) {
  const ctx = cv.getContext("2d");
  if (!ctx) return;
  const nCars = opts.cars ?? 7;
  let W = 0, H = 0, dpr = 1, layer = null, center = [], hw = 20, seen = false, last = 0;
  const cars = Array.from({ length: nCars }, (_, k) => ({ t: k / nCars + Math.random() * .05, v: .05 + Math.random() * .03, lane: (k % 3 - 1) * .45 + (Math.random() - .5) * .2, c: CAR_COLORS[k % CAR_COLORS.length] }));

  const bez = (p, t) => { const u = 1 - t; return u * u * u * p[0] + 3 * u * u * t * p[1] + 3 * u * t * t * p[2] + t * t * t * p[3]; };
  function trackPoint(t, lane) {
    const n = center.length - 1, f = Math.max(0, Math.min(n, t * n)), i = Math.min(n - 1, Math.floor(f)), r = f - i;
    const a = center[i], b = center[i + 1];
    const x = a.x + (b.x - a.x) * r, y = a.y + (b.y - a.y) * r, nx = a.nx + (b.nx - a.nx) * r, ny = a.ny + (b.ny - a.ny) * r, w = a.w + (b.w - a.w) * r;
    return { x: x + nx * lane * w, y: y + ny * lane * w, ang: Math.atan2(b.y - a.y, b.x - a.x), w };
  }

  function layout() {
    const r = cv.getBoundingClientRect();
    if (r.width < 2 || r.height < 2) return;
    dpr = Math.min(2, window.devicePixelRatio || 1);
    W = r.width; H = r.height;
    cv.width = Math.round(W * dpr); cv.height = Math.round(H * dpr);
    build();
    frame(performance.now(), true);
  }

  function build() {
    layer = document.createElement("canvas");
    layer.width = cv.width; layer.height = cv.height;
    const g = layer.getContext("2d");
    g.scale(dpr, dpr);
    const rnd = mulberry(opts.seed ?? 54);
    const narrow = W < 640;
    const S = Math.min(H * .95, W * (narrow ? .9 : .5));
    const y0 = H * (narrow ? .66 : .62);              // horizon / waterline
    const yTrees = y0 + H * .055;

    // Sky
    let gr = g.createLinearGradient(0, 0, 0, y0);
    gr.addColorStop(0, "#03050f"); gr.addColorStop(.65, "#0a1133"); gr.addColorStop(1, "#2a1d44");
    g.fillStyle = gr; g.fillRect(0, 0, W, y0 + 2);
    gr = g.createRadialGradient(W * .65, y0, 0, W * .65, y0, W * .7);
    gr.addColorStop(0, "rgba(255,130,80,.22)"); gr.addColorStop(1, "rgba(255,130,80,0)");
    g.fillStyle = gr; g.fillRect(0, 0, W, y0);

    const windows = (x, y, w, h, p, warm = .7, step = 5) => {
      for (let yy = y + 3; yy < y + h - 2; yy += step + 1) for (let xx = x + 2; xx < x + w - 2; xx += step) {
        if (rnd() > p) continue;
        g.fillStyle = rnd() < warm ? `rgba(255,${190 + rnd() * 40 | 0},${110 + rnd() * 60 | 0},${.45 + rnd() * .5})` : `rgba(190,220,255,${.35 + rnd() * .5})`;
        g.fillRect(xx, yy, 2, 2.4);
      }
    };
    const tower = (x, w, h, col = "#0a1130", p = .35) => {
      const tg = g.createLinearGradient(x, 0, x + w, 0); tg.addColorStop(0, col); tg.addColorStop(1, "#060b22");
      g.fillStyle = tg; g.fillRect(x, y0 - h, w, h);
      windows(x, y0 - h, w, h, p, .6);
      if (rnd() < .35) { g.fillStyle = "rgba(255,40,40,.9)"; g.fillRect(x + w / 2 - 1, y0 - h - 3, 2, 2); }
    };

    // Far CBD skyline
    let x = -10;
    while (x < W + 10) { const w = 12 + rnd() * 30, h = S * (.08 + rnd() * .32); tower(x, w, h, rnd() < .5 ? "#0b1334" : "#0d1638", .3); x += w + rnd() * 4; }

    // Esplanade domes
    const ex = W * (narrow ? .3 : .44), dw = S * .16, dh = S * .085;
    [[ex, 1], [ex + dw * 1.15, .9]].forEach(([cx, k]) => {
      const rx = dw * .55 * k, ry = dh * k;
      g.save(); g.beginPath(); g.ellipse(cx, y0, rx, ry, 0, Math.PI, 0); g.closePath(); g.clip();
      const dg = g.createRadialGradient(cx - rx * .3, y0 - ry * .7, 0, cx, y0, rx * 1.1);
      dg.addColorStop(0, "#f2c56b"); dg.addColorStop(.55, "#9b7330"); dg.addColorStop(1, "#3a2a12");
      g.fillStyle = dg; g.fillRect(cx - rx, y0 - ry, rx * 2, ry);
      g.strokeStyle = "rgba(255,235,180,.35)"; g.lineWidth = .7;
      for (let d = -rx * 2; d < rx * 2; d += 4) { g.beginPath(); g.moveTo(cx + d, y0); g.lineTo(cx + d + ry, y0 - ry); g.stroke(); g.beginPath(); g.moveTo(cx + d, y0); g.lineTo(cx + d - ry, y0 - ry); g.stroke(); }
      g.restore();
    });

    // Tall pyramid-top tower (right edge)
    const tx = W * (narrow ? .9 : .95) - S * .045, tw = S * .09, th = S * .6;
    g.fillStyle = "#0c1536"; g.fillRect(tx, y0 - th, tw, th); windows(tx, y0 - th, tw, th, .55, .8);
    g.beginPath(); g.moveTo(tx - 2, y0 - th); g.lineTo(tx + tw / 2, y0 - th - S * .11); g.lineTo(tx + tw + 2, y0 - th); g.closePath();
    gr = g.createLinearGradient(0, y0 - th - S * .11, 0, y0 - th); gr.addColorStop(0, "#ffffff"); gr.addColorStop(1, "#9fb2d8");
    g.fillStyle = gr; g.fill();

    // Singapore Flyer
    const fx = W * (narrow ? .72 : .82), R = S * .2, fy = y0 - R - S * .07;
    g.strokeStyle = "rgba(200,210,240,.5)"; g.lineWidth = 2;
    g.beginPath(); g.moveTo(fx - R * .55, y0); g.lineTo(fx, fy); g.lineTo(fx + R * .55, y0); g.stroke();
    g.lineWidth = .6; g.strokeStyle = "rgba(255,120,190,.35)";
    for (let k = 0; k < 28; k++) { const a = k / 28 * Math.PI * 2; g.beginPath(); g.moveTo(fx, fy); g.lineTo(fx + Math.cos(a) * R, fy + Math.sin(a) * R); g.stroke(); }
    g.save(); g.shadowColor = "#ff3d8b"; g.shadowBlur = 14; g.strokeStyle = "#ff4f9a"; g.lineWidth = 2.6;
    g.beginPath(); g.arc(fx, fy, R, 0, Math.PI * 2); g.stroke();
    g.lineWidth = 1; g.beginPath(); g.arc(fx, fy, R * .93, 0, Math.PI * 2); g.stroke(); g.restore();
    g.fillStyle = "rgba(240,240,255,.85)";
    for (let k = 0; k < 28; k++) { const a = k / 28 * Math.PI * 2; g.beginPath(); g.arc(fx + Math.cos(a) * R * 1.03, fy + Math.sin(a) * R * 1.03, 1.3, 0, 7); g.fill(); }
    g.fillStyle = "#0d1638"; g.fillRect(fx - R * .7, y0 - S * .04, R * 1.4, S * .04);
    windows(fx - R * .7, y0 - S * .04, R * 1.4, S * .04, .5, .9, 4);

    // Marina Bay Sands
    const mx = W * (narrow ? .46 : .62), mw = S * .075, mgap = S * .055, mh = S * .52;
    const tops = [];
    for (let k = 0; k < 3; k++) {
      const bx = mx + (k - 1) * (mw + mgap) - mw / 2, flare = mw * .18;
      g.beginPath(); g.moveTo(bx, y0 - mh); g.lineTo(bx + mw, y0 - mh); g.lineTo(bx + mw + flare * .4, y0); g.lineTo(bx - flare, y0); g.closePath();
      const mg = g.createLinearGradient(bx, 0, bx + mw, 0); mg.addColorStop(0, "#131d48"); mg.addColorStop(1, "#0a1232");
      g.fillStyle = mg; g.fill();
      g.save(); g.clip(); windows(bx - flare, y0 - mh, mw + flare * 1.4, mh, .62, .92, 4); g.restore();
      g.fillStyle = "rgba(5,8,22,.85)"; g.fillRect(bx + mw * .46, y0 - mh, mw * .08, mh);
      g.strokeStyle = "rgba(200,220,255,.55)"; g.lineWidth = 1; g.beginPath(); g.moveTo(bx, y0 - mh); g.lineTo(bx - flare, y0); g.stroke();
      tops.push(bx);
    }
    const spL = tops[0] - mw * .25, spR = tops[2] + mw + S * .13, spY = y0 - mh - S * .012, spT = S * .028;
    g.beginPath(); g.moveTo(spL, spY); g.lineTo(spR, spY - spT * .2); g.quadraticCurveTo(spR + spT, spY + spT * .4, spR - spT * .6, spY + spT * .8); g.lineTo(spL, spY + spT * .8); g.closePath();
    g.fillStyle = "#16224f"; g.fill();
    g.strokeStyle = "rgba(160,190,255,.75)"; g.lineWidth = 1.2; g.beginPath(); g.moveTo(spL, spY); g.lineTo(spR, spY - spT * .2); g.stroke();
    for (let xx = spL + 3; xx < spR - 3; xx += 4) { g.fillStyle = rnd() < .5 ? "rgba(40,130,90,.9)" : "rgba(255,210,140,.8)"; g.fillRect(xx, spY - 2.5, 2, 2); }
    gr = g.createRadialGradient(mx, spY, 0, mx, spY, S * .35); gr.addColorStop(0, "rgba(120,150,255,.16)"); gr.addColorStop(1, "rgba(120,150,255,0)");
    g.fillStyle = gr; g.fillRect(mx - S * .4, spY - S * .35, S * .8, S * .7);

    // Bay
    g.fillStyle = "#040919"; g.fillRect(0, y0, W, yTrees - y0 + 2);
    for (let k = 0; k < W / 3; k++) {
      const rx = rnd() * W, len = 2 + rnd() * (yTrees - y0) * .8;
      g.fillStyle = rnd() < .2 ? "rgba(255,80,150,.35)" : `rgba(255,${180 + rnd() * 60 | 0},120,${.12 + rnd() * .25})`;
      g.fillRect(rx, y0 + 1 + rnd() * 3, 1.5 + rnd() * 2, len);
    }

    // Floodlight glow (behind palms)
    const poles = narrow ? [.12, .5, .88] : [.06, .27, .48, .7, .93];
    const poleTop = yTrees - S * .2;
    g.globalCompositeOperation = "lighter";
    poles.forEach(px => {
      const gx = W * px;
      const fg = g.createRadialGradient(gx, poleTop, 0, gx, poleTop, S * .22);
      fg.addColorStop(0, "rgba(220,235,255,.45)"); fg.addColorStop(.25, "rgba(200,220,255,.12)"); fg.addColorStop(1, "rgba(200,220,255,0)");
      g.fillStyle = fg; g.fillRect(gx - S * .25, poleTop - S * .25, S * .5, S * .5);
    });
    g.globalCompositeOperation = "source-over";

    // Palms + treeline
    g.fillStyle = "#04140f";
    for (let xx = -10; xx < W + 10; xx += 9) { g.beginPath(); g.arc(xx, yTrees + 4, 7 + rnd() * 7, 0, 7); g.fill(); }
    g.fillRect(0, yTrees + 4, W, H * .2);
    const palm = (px, base, hgt) => {
      g.strokeStyle = "#071d16"; g.lineWidth = 2.2;
      const top = { x: px + hgt * .12, y: base - hgt };
      g.beginPath(); g.moveTo(px, base); g.quadraticCurveTo(px + hgt * .02, base - hgt * .5, top.x, top.y); g.stroke();
      g.lineWidth = 1.8;
      for (let k = 0; k < 7; k++) {
        const a = -Math.PI * .95 + k * Math.PI * .32, l = hgt * (.3 + rnd() * .12);
        g.beginPath(); g.moveTo(top.x, top.y);
        g.quadraticCurveTo(top.x + Math.cos(a) * l * .6, top.y + Math.sin(a) * l * .6 - l * .15, top.x + Math.cos(a) * l, top.y + Math.sin(a) * l + l * .35); g.stroke();
      }
    };
    for (let k = 0; k < (narrow ? 6 : 14); k++) palm(rnd() * W, yTrees + 10, S * (.1 + rnd() * .08));

    // Floodlight poles + heads
    poles.forEach(px => {
      const gx = W * px;
      g.strokeStyle = "rgba(150,165,200,.55)"; g.lineWidth = 1.4;
      g.beginPath(); g.moveTo(gx, yTrees + 14); g.lineTo(gx, poleTop); g.stroke();
      g.save(); g.shadowColor = "#dfe9ff"; g.shadowBlur = 12; g.fillStyle = "#f4f8ff";
      g.fillRect(gx - S * .025, poleTop - S * .012, S * .05, S * .016); g.restore();
    });

    // Circuit centreline (cubic) sampled with normals
    const py = narrow ? [H * 1.08, H * .8, H * .8, H * .95] : [H * 1.1, H * .76, H * .78, H * .93];
    const pxs = [-W * .06, W * .3, W * .68, W * 1.06];
    center = [];
    const N = 90;
    for (let k = 0; k <= N; k++) {
      const t = k / N, cx = bez(pxs, t), cy = bez(py, t);
      center.push({ x: cx, y: cy, t });
    }
    center.forEach((p, k) => {
      const a = center[Math.max(0, k - 1)], b = center[Math.min(N, k + 1)];
      const dx = b.x - a.x, dy = b.y - a.y, L = Math.hypot(dx, dy) || 1;
      p.nx = -dy / L; p.ny = dx / L;                  // points "up" (towards far side) when moving right
      if (p.ny > 0) { p.nx *= -1; p.ny *= -1; }
      const depth = (p.y - H * .74) / (H * .36);      // nearer = wider
      p.w = Math.max(14, H * (.065 + .075 * Math.max(0, Math.min(1, depth))));
    });
    hw = H * .07;
    const edge = (off) => center.map(p => ({ x: p.x + p.nx * p.w * off, y: p.y + p.ny * p.w * off }));
    const band = (o1, o2, fill) => {
      const a = edge(o1), b = edge(o2).reverse();
      g.beginPath(); a.forEach((p, k) => k ? g.lineTo(p.x, p.y) : g.moveTo(p.x, p.y)); b.forEach(p => g.lineTo(p.x, p.y)); g.closePath();
      g.fillStyle = fill; g.fill();
    };
    // catch fence + barrier on the far side
    const fence = edge(1.9), wall = edge(1.6);
    g.strokeStyle = "rgba(200,210,235,.22)"; g.lineWidth = .8;
    fence.forEach((p, k) => { if (k % 2) return; g.beginPath(); g.moveTo(p.x, p.y); g.lineTo(p.x, p.y - S * .07); g.stroke(); });
    g.beginPath(); fence.forEach((p, k) => k ? g.lineTo(p.x, p.y - S * .07) : g.moveTo(p.x, p.y - S * .07)); g.stroke();
    band(1.35, 1.75, "#0b0d14");
    wall.forEach((p, k) => { if (k % 4) return; g.fillStyle = "rgba(255,212,0,.75)"; g.fillRect(p.x - 3, p.y - 1.5, 6, 2.2); });
    band(1.1, 1.38, getVar("--runoff", "#13a06a"));
    // asphalt
    band(-1, 1, "#262a35");
    const sheen = g.createLinearGradient(0, H * .7, 0, H);
    sheen.addColorStop(0, "rgba(220,235,255,.10)"); sheen.addColorStop(1, "rgba(0,0,0,.25)");
    band(-1, 1, sheen);
    // kerbs
    const kerb = (o1, o2) => {
      const a = edge(o1), b = edge(o2);
      for (let k = 0; k < N; k++) {
        g.beginPath(); g.moveTo(a[k].x, a[k].y); g.lineTo(a[k + 1].x, a[k + 1].y); g.lineTo(b[k + 1].x, b[k + 1].y); g.lineTo(b[k].x, b[k].y); g.closePath();
        g.fillStyle = Math.floor(k / 2) % 2 ? "#f4f6ff" : "#e10600"; g.fill();
      }
    };
    kerb(1, 1.12); kerb(-1, -1.12);
    // white edge lines + yellow pit line
    [[.96, "rgba(255,255,255,.75)"], [-.96, "rgba(255,255,255,.6)"], [-.82, "rgba(255,212,0,.55)"]].forEach(([o, c]) => {
      const e = edge(o); g.strokeStyle = c; g.lineWidth = 1.3; g.beginPath(); e.forEach((p, k) => k ? g.lineTo(p.x, p.y) : g.moveTo(p.x, p.y)); g.stroke();
    });
    // long-exposure streaks
    g.globalCompositeOperation = "lighter";
    [-.55, -.2, .15, .5].forEach((lane, j) => {
      const s0 = .05 + rnd() * .2, s1 = s0 + .25 + rnd() * .3;
      for (let t = s0; t < s1; t += .006) {
        const a = trackPoint(t, lane), b = trackPoint(t + .006, lane), al = Math.sin((t - s0) / (s1 - s0) * Math.PI) * .45;
        g.strokeStyle = j % 2 ? `rgba(255,70,40,${al})` : `rgba(255,150,120,${al * .8})`; g.lineWidth = 2;
        g.beginPath(); g.moveTo(a.x, a.y); g.lineTo(b.x, b.y); g.stroke();
      }
    });
    g.globalCompositeOperation = "source-over";
  }

  function drawCar(p, c, scale) {
    ctx.save(); ctx.translate(p.x, p.y); ctx.rotate(p.ang);
    const L = scale * 3.4, Wd = scale * 1.25;
    ctx.fillStyle = "#0b0d14"; ctx.fillRect(-L * .55, -Wd * .75, L * .22, Wd * 1.5); ctx.fillRect(L * .38, -Wd * .7, L * .14, Wd * 1.4);
    ctx.fillStyle = c; ctx.beginPath(); ctx.moveTo(-L * .45, -Wd * .45); ctx.lineTo(L * .5, -Wd * .18); ctx.lineTo(L * .5, Wd * .18); ctx.lineTo(-L * .45, Wd * .45); ctx.closePath(); ctx.fill();
    ctx.fillStyle = "#0b0d14"; [[-.3, -.62], [-.3, .62], [.28, -.6], [.28, .6]].forEach(([a, b]) => ctx.fillRect(L * a - scale * .35, Wd * b - scale * .22, scale * .7, scale * .44));
    ctx.shadowColor = "#ff2a1f"; ctx.shadowBlur = 8; ctx.fillStyle = "#ff3b2e"; ctx.fillRect(-L * .56, -scale * .15, scale * .3, scale * .3);
    ctx.restore();
  }

  function frame(now, still) {
    if (!layer) return;
    const dt = Math.min(.05, (now - (last || now)) / 1000); last = now;
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.drawImage(layer, 0, 0);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.globalCompositeOperation = "lighter";
    cars.forEach(car => {
      if (!still) car.t += car.v * dt;
      if (car.t > 1.12) { car.t = -.08; car.v = .05 + Math.random() * .03; }
      if (car.t < 0 || car.t > 1) return;
      for (let s = 0; s < 14; s++) {
        const t1 = car.t - s * .008, t2 = t1 - .008;
        if (t2 < 0) break;
        const a = trackPoint(t1, car.lane), b = trackPoint(t2, car.lane);
        ctx.strokeStyle = `rgba(255,${60 + s * 6},40,${(1 - s / 14) * .75})`; ctx.lineWidth = Math.max(1.5, a.w * .07);
        ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
      }
    });
    ctx.globalCompositeOperation = "source-over";
    cars.slice().sort((a, b) => trackPoint(a.t, a.lane).y - trackPoint(b.t, b.lane).y).forEach(car => {
      if (car.t < 0 || car.t > 1) return;
      const p = trackPoint(car.t, car.lane);
      drawCar(p, car.c, Math.max(3, p.w * .18));
    });
  }

  function loop(now) {
    if (!cv.isConnected) { if (seen) return; requestAnimationFrame(loop); return; }
    seen = true;
    if (!layer || cv.width !== Math.round(cv.getBoundingClientRect().width * dpr)) layout();
    frame(now, false);
    requestAnimationFrame(loop);
  }

  if (typeof ResizeObserver !== "undefined") new ResizeObserver(() => cv.isConnected && layout()).observe(cv);
  if (reduceMotion) {
    const once = () => { if (!cv.isConnected) return requestAnimationFrame(once); layout(); };
    requestAnimationFrame(once);
  } else requestAnimationFrame(loop);
}
function getVar(name, fallback) { try { return getComputedStyle(document.documentElement).getPropertyValue(name).trim() || fallback; } catch { return fallback; } }
function nightBanner(slim, ...content) {
  const cv = h("canvas", { "aria-hidden": "true" });
  nightScene(cv, { seed: slim ? 91 : 54, cars: slim ? 5 : 8 });
  return h("div", { class: "night" + (slim ? " slim" : "") }, cv, h("div", { class: "night-content" }, ...content), h("span", { class: "scene-cap" }, "Marina Bay · night race"));
}

const NEXT_STOP = { short: "Next round", date: "TBC" };
const PTS = [25, 18, 15, 12, 10, 8, 6, 4, 2, 1];
const SES_LABELS = { 1: ["Race"], 2: ["Quali", "Race"], 3: ["FP1", "Quali", "Race"] };
const FAST_MS = 6000;
const reduceMotion = (() => { try { return matchMedia("(prefers-reduced-motion: reduce)").matches; } catch { return false; } })();

/* ---------- helpers ---------- */
const $ = (sel, el = document) => el.querySelector(sel);
const h = (tag, attrs = {}, ...kids) => {
  const el = document.createElement(tag);
  for (const [k, v] of Object.entries(attrs || {})) {
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
const timeKey = (s, g) => `time:${s.id}:${g.id}`;
const maxScore = (g) => g.type === "sequence" ? g.puzzles.reduce((n, p) => n + p.steps.length, 0) : Math.min(g.rounds, g.items.length);
const posFor = (score, max) => max ? Math.min(20, 1 + Math.round((1 - score / max) * 10)) : 20;
const ptsFor = (pos) => PTS[pos - 1] || 0;
const fmt = (ms) => { const t = Math.max(0, ms || 0); const m = Math.floor(t / 60000); const s = Math.floor((t % 60000) / 1000); const d = Math.floor((t % 1000) / 100); return `${m}:${String(s).padStart(2, "0")}.${d}`; };
const lineStyle = (s) => `--line:var(--${s.line});--line-t:var(--${s.line}t);--on-line:var(--${s.line}o)`;
const roundNo = (i) => "R" + String(i + 1).padStart(2, "0");
const sesLabel = (s, gi) => (SES_LABELS[s.games.length] || [])[gi] || `S${gi + 1}`;
const bestOf = (s, g) => { const b = store.get(bestKey(s, g), null); if (b == null) return null; const pos = posFor(b, maxScore(g)); return { score: b, pos, pts: ptsFor(pos), time: store.get(timeKey(s, g), null) }; };

function gantry() {
  return h("div", { class: "gantry", "aria-hidden": "true" },
    Array.from({ length: 5 }, () => h("div", { class: "pod" }, h("span", { class: "bulb red" }), h("span", { class: "bulb red" }))));
}
function runLights(g, onStep, onDone) {
  const pods = [...g.querySelectorAll(".pod")];
  pods.forEach(p => p.classList.remove("on"));
  const timers = pods.map((p, i) => setTimeout(() => { p.classList.add("on"); onStep && onStep(i); }, 550 * (i + 1)));
  timers.push(setTimeout(() => { pods.forEach(p => p.classList.remove("on")); onDone && onDone(); }, 550 * 5 + 450 + Math.random() * 800));
  return () => timers.forEach(clearTimeout);
}
const wave = () => h("span", { class: "wave", "aria-hidden": "true" }, Array.from({ length: 6 }, () => h("i")));

/* ---------- calendar ---------- */
let current = "home";
let keyHandler = null;

function renderTabs() {
  $("#tabs").replaceChildren(
    roundTab("home", "STD", "Standings", "Season", "--line:var(--ink);--line-t:var(--ink);--on-line:var(--bg)"),
    ...SESSIONS.map((s, i) => roundTab(s.id, roundNo(i), s.short, s.date, lineStyle(s))),
    h("span", { class: "round future" }, h("span", { class: "rn" }, roundNo(SESSIONS.length)), h("span", { class: "lbl" }, NEXT_STOP.short), h("span", { class: "when" }, NEXT_STOP.date))
  );
}
function roundTab(id, rn, label, when, style) {
  return h("button", { class: "round", role: "tab", "aria-selected": String(current === id), style, onclick: () => go(id) },
    h("span", { class: "rn" }, rn), h("span", { class: "lbl" }, label), h("span", { class: "when" }, when));
}

function go(id) {
  current = SESSIONS.some(s => s.id === id) ? id : "home";
  store.set("tab", current);
  if (location.hash.slice(1) !== current) history.replaceState(null, "", "#" + current);
  renderTabs();
  keyHandler = null;
  $("#main").replaceChildren(current === "home" ? renderHome() : renderSession(SESSIONS.find(s => s.id === current)));
  const sel = $('#tabs [aria-selected="true"]');
  if (sel) sel.scrollIntoView({ block: "nearest", inline: "nearest" });
  window.scrollTo({ top: 0 });
}

/* ---------- home: championship standings ---------- */
function renderHome() {
  let points = 0, finished = 0, total = 0, podiums = 0;
  SESSIONS.forEach(s => s.games.forEach(g => { total++; const b = bestOf(s, g); if (b) { finished++; points += b.pts; if (b.pos <= 3) podiums++; } }));
  const lights = gantry();
  const lightsBtn = h("button", { class: "gantry-btn", style: "border:0;background:none;padding:0", "aria-label": "Replay the start lights", onclick: () => runLights(lights) }, lights);
  if (!reduceMotion) setTimeout(() => lights.isConnected && runLights(lights), 300);
  return h("section", { class: "panel" },
    nightBanner(false,
      h("div", { class: "panel-head" },
        h("span", { class: "eyebrow" }, h("span", { class: "tag" }, "Lights out"), "Fall 2026 · Singapore night race"),
        h("h1", {}, `${SESSIONS.length} rounds under the lights.`),
        h("p", {}, "Every session is a Grand Prix and every game is a session on track. Race through the slides, beat your best time and score championship points.")),
      lightsBtn),
    h("div", { class: "timing-board" },
      h("div", {}, h("b", { class: "pts" }, String(points)), h("span", {}, "Championship pts")),
      h("div", {}, h("b", {}, `${finished}/${total}`), h("span", {}, "Races finished")),
      h("div", {}, h("b", {}, String(podiums)), h("span", {}, "Podiums")),
      h("div", {}, h("b", {}, String(SESSIONS.length)), h("span", {}, "Rounds"))),
    h("div", { class: "gp-grid" }, SESSIONS.map((s, i) =>
      h("button", { class: "gp", style: lineStyle(s), onclick: () => go(s.id) },
        h("span", { class: "bg-num", "aria-hidden": "true" }, String(i + 1)),
        h("span", { class: "meta" }, `${roundNo(i)} · ${s.date}`),
        h("h3", {}, s.title),
        h("span", { class: "who" }, s.speaker),
        h("p", {}, s.blurb),
        h("div", { class: "schedule" }, s.games.map((g, gi) => {
          const b = bestOf(s, g);
          return h("div", {},
            h("span", { class: "ses" }, sesLabel(s, gi).toUpperCase()),
            h("span", {}, g.name),
            h("span", { class: "res" + (b ? (b.pos <= 3 ? " podium" : "") : " none") }, b ? `P${b.pos} · ${b.pts} pts` : "Not raced"));
        }))))),
    h("div", { class: "legend", "aria-label": "Sector colours" },
      h("span", {}, h("i", { style: "background:var(--purple)" }), "Purple: right in under 6 s"),
      h("span", {}, h("i", { style: "background:var(--green)" }), "Green: right"),
      h("span", {}, h("i", { style: "background:var(--bad)" }), "Red: off track"),
      h("span", {}, "Points: 25 · 18 · 15 · 12 · 10 · 8 · 6 · 4 · 2 · 1")));
}

/* ---------- round (race weekend) ---------- */
function renderSession(s) {
  const idx = SESSIONS.indexOf(s);
  const saved = store.get("game:" + s.id, s.games[0].id);
  let game = s.games.find(g => g.id === saved) || s.games[0];
  const boardHost = h("div");
  const picker = h("div", { class: "sessions", role: "group", "aria-label": "Sessions" });
  const drawPicker = () => picker.replaceChildren(...s.games.map((g, gi) => {
    const b = bestOf(s, g);
    return h("button", { class: "ses-pick", "aria-pressed": String(g === game), onclick: () => { game = g; store.set("game:" + s.id, g.id); drawPicker(); start(); } },
      h("span", { class: "s" }, sesLabel(s, gi).toUpperCase()), h("span", { class: "n" }, g.name),
      h("small", {}, b ? `Best P${b.pos} · ${b.score}/${maxScore(g)}${b.time != null ? " · " + fmt(b.time) : ""}` : "Not raced"));
  }));
  const start = () => boardHost.replaceChildren(raceStart(s, game, drawPicker));
  drawPicker(); start();
  return h("section", { class: "panel", style: lineStyle(s) },
    nightBanner(true,
      h("div", { class: "panel-head" },
        h("span", { class: "eyebrow" }, h("span", { class: "tag" }, roundNo(idx)), `${s.date} · ${s.speaker}`),
        h("h1", {}, s.title),
        h("p", {}, s.blurb))),
    picker, boardHost);
}

function saveBest(s, g, score, time) {
  const prev = store.get(bestKey(s, g), null);
  const prevT = store.get(timeKey(s, g), null);
  if (prev == null || score > prev) { store.set(bestKey(s, g), score); store.set(timeKey(s, g), Math.round(time)); return "best"; }
  if (score === prev && (prevT == null || time < prevT)) { store.set(timeKey(s, g), Math.round(time)); return "time"; }
  return null;
}

function boardHeader(g, right) {
  return h("div", { class: "board-top" }, h("div", {}, h("h2", {}, g.name), h("p", { class: "how" }, g.how)), right);
}

/* ---------- start lights ---------- */
function raceStart(s, g, onScore) {
  const build = () => g.type === "sequence" ? sequenceGame(s, g, onScore) : quizGame(s, g, onScore);
  if (reduceMotion) return build();
  const board = h("div", { class: "board" });
  const lights = gantry();
  const msg = h("div", { class: "msg", role: "status" }, "Formation lap");
  let cancel = () => {}, launched = false;
  const launch = () => {
    if (launched || !board.isConnected) return;
    launched = true; cancel(); keyHandler = null;
    board.replaceWith(build());
  };
  board.append(boardHeader(g, null),
    h("div", { class: "grid-start" }, lights, msg,
      h("p", {}, "Watch the lights. The clock starts when they go out."),
      h("div", { class: "actions" }, h("button", { class: "btn ghost", onclick: launch }, "Skip to lights out"))));
  keyHandler = (e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); launch(); } };
  setTimeout(() => {
    if (!board.isConnected) return;
    cancel = runLights(lights, (i) => { msg.textContent = `${i + 1} of 5`; }, () => {
      if (!board.isConnected) return;
      msg.textContent = "Lights out"; msg.classList.add("go");
      setTimeout(launch, 550);
    });
  }, 250);
  return board;
}

/* ---------- quiz engine (a race of laps) ---------- */
function quizGame(s, g, onScore) {
  const rounds = Math.min(g.rounds, g.items.length);
  const deck = shuffle(g.items).slice(0, rounds);
  const allAnswers = [...new Set(g.items.map(i => i.a))];
  let i = 0, score = 0, streak = 0, bestStreak = 0, elapsed = 0, qStart = performance.now(), answered = false, done = false, fastest = null, seen = false;
  const results = [], misses = [];
  const board = h("div", { class: "board" });

  const lapEl = h("b"), posEl = h("b", {}, "P–"), clockEl = h("b", {}, "0:00.0"), drsVal = h("b", {}, "OFF");
  const drsEl = h("span", { class: "drs" }, "DRS", drsVal);
  const tower = h("div", { class: "tower", "aria-label": "Timing" }, h("span", {}, "Lap", lapEl), h("span", {}, "Pos", posEl), h("span", {}, "Time", clockEl), drsEl);
  const updTower = () => {
    lapEl.textContent = `${Math.min(i + 1, rounds)}/${rounds}`;
    posEl.textContent = results.length ? `P${posFor(score, results.length)}` : "P–";
    drsEl.className = "drs" + (streak >= 3 ? " on" : "");
    drsVal.textContent = streak >= 3 ? "ON" : "OFF";
  };
  const iv = setInterval(() => {
    if (!board.isConnected) { if (seen || done) clearInterval(iv); return; }
    seen = true;
    clockEl.textContent = fmt(elapsed + (answered || done ? 0 : performance.now() - qStart));
  }, 100);

  function optionsFor(item) {
    if (item.opts) return shuffle(item.opts);
    const pool = item.buckets || g.buckets || allAnswers;
    if (!g.optionCount || pool.length <= g.optionCount) return item.buckets || g.buckets ? [...pool] : shuffle(pool);
    return shuffle([item.a, ...shuffle(pool.filter(x => x !== item.a)).slice(0, g.optionCount - 1)]);
  }
  const sectors = () => h("div", { class: "sectors", "aria-hidden": "true" },
    Array.from({ length: rounds }, (_, k) => h("i", { class: k < results.length ? results[k] : k === i ? "now" : "" })));

  function ask() {
    const item = deck[i];
    const opts = optionsFor(item);
    answered = false;
    qStart = performance.now();
    let radio = h("div");
    const actions = h("div", { class: "actions" }, h("span", { class: "hint" }, `Keys 1–${opts.length} to answer`));
    const buttons = opts.map((o, k) => h("button", { class: "choice", onclick: () => pick(k) }, h("span", { class: "key" }, String(k + 1)), h("span", {}, o)));
    let bar = sectors();

    function pick(k) {
      if (answered) return;
      answered = true;
      const t = performance.now() - qStart;
      elapsed += t;
      const ok = opts[k] === item.a;
      const cls = ok ? (t < FAST_MS ? "fast" : "ok") : "no";
      results.push(cls);
      if (ok) { score++; streak++; bestStreak = Math.max(bestStreak, streak); if (fastest == null || t < fastest) fastest = t; }
      else { streak = 0; misses.push(item); }
      clockEl.textContent = fmt(elapsed);
      buttons.forEach((b, j) => { b.disabled = true; if (opts[j] === item.a) b.classList.add("right"); else if (j === k) b.classList.add("wrong"); else b.classList.add("dim"); });
      const call = ok
        ? (streak >= 3 ? `DRS open. ${streak} in a row.` : cls === "fast" ? "Purple sector. Great lap." : "Good lap. That's correct.")
        : `Off track. It's ${item.a}.`;
      const next = h("button", { class: "btn", onclick: nextLap }, i + 1 < rounds ? "Next lap" : "Take the flag");
      const nr = h("div", { class: "radio" + (ok ? "" : " no"), role: "status" },
        h("div", { class: "rh" }, wave(), "Team radio", h("span", { class: "lap" }, `Lap ${fmt(t)}`)),
        h("strong", {}, call), h("p", {}, item.why));
      radio.replaceWith(nr); radio = nr;
      actions.replaceChildren(next, h("span", { class: "hint" }, "or press Enter"));
      const nb = sectors(); bar.replaceWith(nb); bar = nb;
      updTower();
      next.focus({ preventScroll: true });
    }
    function nextLap() { i++; i < rounds ? ask() : finish(); }

    keyHandler = (e) => {
      if (!answered && /^[1-9]$/.test(e.key) && +e.key <= opts.length) pick(+e.key - 1);
      else if (answered && e.key === "Enter" && document.activeElement?.tagName !== "BUTTON") nextLap();
    };
    updTower();
    board.replaceChildren(
      boardHeader(g, tower), bar,
      h("div", { class: "prompt" }, h("span", { class: "kicker" }, `Lap ${i + 1} · ${g.kicker}`), h("p", { class: "q" }, item.q)),
      h("div", { class: "choices" }, buttons), radio, actions);
  }

  function finish() {
    done = true; keyHandler = null; clearInterval(iv);
    const record = saveBest(s, g, score, elapsed);
    onScore();
    const pos = posFor(score, rounds), pts = ptsFor(pos);
    const purple = results.filter(r => r === "fast").length;
    const verdict = pos === 1 ? "Lights to flag. A perfect race." : pos <= 3 ? "Podium. Review the laps below and go for the win." : pos <= 10 ? "In the points. The laps below are where you lost time." : "Outside the points. Another stint on the laps below will fix it.";
    board.replaceChildren(
      boardHeader(g, null),
      h("div", { class: "finish" },
        h("div", { class: "chequer", "aria-hidden": "true" }),
        h("div", { class: "result" },
          h("div", { class: "pos" }, `P${pos}`),
          h("dl", {},
            h("div", {}, h("dt", {}, "Score"), h("dd", {}, `${score}/${rounds}`)),
            h("div", {}, h("dt", {}, "Points"), h("dd", {}, String(pts))),
            h("div", {}, h("dt", {}, "Race time"), h("dd", {}, fmt(elapsed))),
            h("div", {}, h("dt", {}, "Fastest lap"), h("dd", {}, fastest == null ? "–" : fmt(fastest))),
            h("div", {}, h("dt", {}, "Purple sectors"), h("dd", {}, String(purple))),
            h("div", {}, h("dt", {}, "Best streak"), h("dd", {}, String(bestStreak))))),
        h("p", { class: "verdict" }, verdict, " ", record === "best" ? h("span", { class: "pb" }, "New personal best") : record === "time" ? h("span", { class: "pb" }, "Faster on the same score") : null),
        misses.length ? h("p", { class: "review-h" }, "Laps to review") : null,
        misses.length ? h("ul", { class: "review" }, misses.map(m => h("li", {}, h("b", {}, m.a), m.q))) : null,
        h("div", { class: "actions" }, h("button", { class: "btn", onclick: () => board.replaceWith(raceStart(s, g, onScore)) }, "Race again"))));
  }

  ask();
  return board;
}

/* ---------- sequence engine (starting grid) ---------- */
function sequenceGame(s, g, onScore) {
  let p = 0, score = 0, seen = false, done = false;
  const t0 = performance.now();
  let stopAt = null;
  const board = h("div", { class: "board" });
  const total = maxScore(g);
  const stintEl = h("b"), scoreEl = h("b", {}, "0"), clockEl = h("b", {}, "0:00.0");
  const tower = h("div", { class: "tower", "aria-label": "Timing" }, h("span", {}, "Stint", stintEl), h("span", {}, "Score", scoreEl), h("span", {}, "Time", clockEl));
  const now = () => (stopAt ?? performance.now()) - t0;
  const iv = setInterval(() => {
    if (!board.isConnected) { if (seen || done) clearInterval(iv); return; }
    seen = true; clockEl.textContent = fmt(now());
  }, 100);
  const updTower = () => { stintEl.textContent = `${Math.min(p + 1, g.puzzles.length)}/${g.puzzles.length}`; scoreEl.textContent = `${score}/${total}`; };

  function play() {
    const puzzle = g.puzzles[p];
    const pool = shuffle(puzzle.steps);
    const route = [];
    let checked = false;
    const poolEl = h("div", { class: "pool" });
    const routeEl = h("div", { class: "route" });
    let radio = h("div");
    const actions = h("div", { class: "actions" });

    function draw() {
      poolEl.replaceChildren(h("h4", {}, "Garage"), ...pool.map((st, k) => h("button", { class: "step", onclick: () => { route.push(pool.splice(k, 1)[0]); draw(); } }, st)));
      if (!pool.length) poolEl.append(h("p", { class: "route-empty" }, "Every car is on the grid."));
      routeEl.replaceChildren(h("h4", {}, "Starting grid (tap to send back)"),
        ...(route.length ? route.map((st, k) => h("button", { class: "step", disabled: checked, onclick: () => { pool.push(route.splice(k, 1)[0]); draw(); } }, st)) : [h("p", { class: "route-empty" }, "Tap the step that starts in P1.")]));
      actions.replaceChildren(
        h("button", { class: "btn", disabled: route.length !== puzzle.steps.length, onclick: check }, "Lock in the grid"),
        h("button", { class: "btn ghost", onclick: () => { pool.push(...route.splice(0)); draw(); } }, "Reset"));
    }
    function check() {
      checked = true;
      let right = 0;
      route.forEach((st, k) => { if (st === puzzle.steps[k]) right++; });
      score += right;
      draw();
      [...routeEl.querySelectorAll(".step")].forEach((b, k) => { b.disabled = true; b.classList.add(route[k] === puzzle.steps[k] ? "right" : "wrong"); });
      poolEl.replaceChildren(h("h4", {}, "Correct order"), h("ol", { class: "answer-key" }, puzzle.steps.map(st => h("li", {}, st))));
      const clean = right === puzzle.steps.length;
      const nr = h("div", { class: "radio" + (clean ? "" : " no"), role: "status" },
        h("div", { class: "rh" }, wave(), "Team radio"),
        h("strong", {}, clean ? "Perfect grid. Every car in its slot." : `${right} of ${puzzle.steps.length} in the right slot.`),
        h("p", {}, puzzle.why));
      radio.replaceWith(nr); radio = nr;
      actions.replaceChildren(h("button", { class: "btn", onclick: () => { p++; p < g.puzzles.length ? play() : finish(); } }, p + 1 < g.puzzles.length ? "Next stint" : "Take the flag"));
      updTower();
    }
    updTower();
    board.replaceChildren(boardHeader(g, tower),
      h("div", { class: "prompt" }, h("span", { class: "kicker" }, `Stint ${p + 1} of ${g.puzzles.length}`), h("p", { class: "q" }, puzzle.title)),
      h("div", { class: "seq" }, poolEl, routeEl), radio, actions);
    draw();
  }

  function finish() {
    stopAt = performance.now(); done = true; clearInterval(iv);
    const time = now();
    const record = saveBest(s, g, score, time);
    onScore();
    const pos = posFor(score, total), pts = ptsFor(pos);
    board.replaceChildren(boardHeader(g, null),
      h("div", { class: "finish" },
        h("div", { class: "chequer", "aria-hidden": "true" }),
        h("div", { class: "result" },
          h("div", { class: "pos" }, `P${pos}`),
          h("dl", {},
            h("div", {}, h("dt", {}, "Score"), h("dd", {}, `${score}/${total}`)),
            h("div", {}, h("dt", {}, "Points"), h("dd", {}, String(pts))),
            h("div", {}, h("dt", {}, "Race time"), h("dd", {}, fmt(time))))),
        h("p", { class: "verdict" }, score === total ? "Every step in its slot. Lights to flag." : "Each point is one step in the right slot.", " ",
          record === "best" ? h("span", { class: "pb" }, "New personal best") : record === "time" ? h("span", { class: "pb" }, "Faster on the same score") : null),
        h("div", { class: "actions" }, h("button", { class: "btn", onclick: () => board.replaceWith(raceStart(s, g, onScore)) }, "Race again"))));
  }

  play();
  return board;
}

/* ---------- boot ---------- */
document.addEventListener("keydown", (e) => { if (keyHandler && !e.metaKey && !e.ctrlKey && !e.altKey) keyHandler(e); });
window.addEventListener("hashchange", () => { const id = location.hash.slice(1) || "home"; if (id !== current) go(id); });
go(location.hash.slice(1) || store.get("tab", "home"));

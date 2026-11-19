// ─────────────────────────────────────────────────────────────
//  Your projects. To add a new one, copy a block, change the
//  text, drop its images in /public/images and you're done.
//
//  categories: any of 'web' | 'mobile' | 'ai' | 'backend'
//  cover.type: 'browser' (website) | 'phones' (app) | 'flow' (pipeline)
//  gallery.type: 'browser' | 'phones' | 'steps'
// ─────────────────────────────────────────────────────────────

export const categories = [
  { id: 'all', label: 'All' },
  { id: 'web', label: 'Web' },
  { id: 'mobile', label: 'Mobile' },
  { id: 'ai', label: 'AI & Automation' },
  { id: 'backend', label: 'Backend & DevOps' },
];

export const projects = [
  {
    slug: 'jobfit-ai',
    code: 'AI-01',
    title: 'JobFit AI',
    org: 'Personal project · 2026',
    categories: ['ai', 'backend', 'web'],
    summary:
      'A RAG and agent app that scores how well a resume fits a job, quotes the proof from the resume, checks ATS readiness and coaches the candidate on the gaps.',
    tags: ['Python', 'FastAPI', 'RAG', 'pgvector', 'AI agents', 'MCP', 'React', 'Docker', 'GitHub Actions'],
    github: 'https://github.com/sundas-stack/jobfit-ai',
    cover: { type: 'browser', image: '/images/jf-report.jpg', alt: 'JobFit AI fit report with score and requirements' },
    caseStudy: {
      intro:
        'An AI application that reads a resume and a job ad, finds evidence for every requirement with vector search, gives an honest fit score and tells the candidate exactly what to fix.',
      meta: [
        ['Role', 'Solo: AI, backend and frontend engineer'],
        ['Stack', 'Python, FastAPI, PostgreSQL + pgvector, React'],
        ['AI', 'Groq LLM, tool-calling agent, local embeddings, OCR'],
        ['DevOps', 'Docker Compose, GitHub Actions CI/CD'],
      ],
      links: [['README & architecture', 'https://github.com/sundas-stack/jobfit-ai#readme']],
      sections: [
        {
          label: 'The problem',
          paragraphs: [
            'Job seekers send the same resume to every job and never learn why they were filtered out. Online "ATS checkers" give a number, but not the reason behind it or any proof.',
            'I wanted a tool that explains itself: for every requirement in the job ad, show the exact line in the resume that proves it, or say clearly that it is missing.',
          ],
        },
        {
          label: 'What I built',
          paragraphs: [
            'A full RAG application. Resumes and job ads (PDF, Word, photos or scanned files) are read, split into labelled chunks, embedded and stored in PostgreSQL with pgvector. An LLM lists the job requirements, vector search finds the closest resume evidence, and a strict LLM judge marks each one matched, partly or missing, quoting the resume.',
            'On top of that I built an agent mode, where the model chooses its own tools and every step streams live to the UI, and an MCP server so assistants like Claude can use JobFit as a tool.',
          ],
        },
        {
          label: 'How a report is made',
          bullets: [
            ['Requirements:', 'the LLM turns the job ad into a checklist of 8–15 requirements, each linked to the line it came from.'],
            ['Retrieval:', 'pgvector finds the three closest resume chunks for every requirement.'],
            ['Judge:', 'a strict LLM prompt decides matched, partly or missing and must quote the resume. A skill only listed under "Skills" counts as partly.'],
            ['Score:', 'computed in plain Python, not by the LLM: 65% requirement match plus 35% ATS readiness, so the same input always gives the same score.'],
            ['Coach:', 'sharper resume lines, likely interview questions and next steps, without inventing experience.'],
          ],
        },
        {
          label: 'Key features',
          bullets: [
            ['Proof for every point,', 'highlighted quotes from the resume with chunk labels like R3.'],
            ['ATS readiness checks', 'for exact keywords, standard sections, results with numbers, action verbs and length.'],
            ['Agent mode', 'with five tools (search resume, search job, compare skills, rewrite a line, interview questions) and live step streaming.'],
            ['MCP server', 'exposing the same capabilities to Claude Desktop and other AI assistants.'],
            ['Any file,', 'including scanned PDFs and phone photos, read with Tesseract OCR.'],
          ],
        },
      ],
      gallery: {
        type: 'browser',
        shots: [
          ['/images/jf-report.jpg', 'Fit report: every requirement with proof, and the score split into requirement match and ATS readiness'],
          ['/images/jf-ats.jpg', 'ATS readiness: five rule-based checks, each with a concrete tip'],
          ['/images/jf-agent.jpg', 'Agent mode: tool steps stream live, answers cite their sources'],
          ['/images/jf-new.jpg', 'Check a job: PDF, Word, photo or scanned file'],
          ['/images/jf-home.jpg', 'First screen: one click to try it with a sample resume'],
          ['/images/jf-library.jpg', 'Library: each document split into labelled chunks the AI can quote'],
        ],
      },
      after: [
        {
          label: 'Engineering decisions',
          bullets: [
            ['Score in code, not in the model,', 'so it is explainable and stable.'],
            ['Validated citations:', 'a chunk label the model returns is kept only if it really exists.'],
            ['Model-agnostic:', 'any OpenAI-compatible API works. When Groq retired Llama 3.3, switching to GPT-OSS 120B was a one-line config change.'],
            ['Tested AI quality:', '29 automated tests plus an evaluation set that fails CI if requirement recall or accuracy drops.'],
          ],
        },
        {
          label: 'Docker & CI/CD',
          paragraphs: [
            'One command, docker compose up, starts four containers: the React app behind nginx, the FastAPI backend, the MCP server and PostgreSQL with pgvector. The embedding model is baked into the image so it runs without downloads.',
            'Every push runs GitHub Actions: lint, tests against a real pgvector database, the AI evaluation, then builds and publishes the Docker images to GitHub Container Registry.',
          ],
        },
      ],
      note: 'Screens show sample data for a fictional candidate.',
    },
  },

  {
    slug: 'sky-premia-website',
    code: 'WEB-01',
    title: 'Sky Premia Website',
    org: 'Sky Premia LLC · USA',
    categories: ['web'],
    summary:
      'A premium travel-advisory site that explains the service, builds trust and turns visitors into paid fare-report requests.',
    tags: ['WordPress', 'On-page SEO', 'HTML / CSS'],
    github: 'https://github.com/sundas-stack/Sky-Premia-Wordpress-Website',
    live: '', // ← paste the live website URL here
    cover: { type: 'browser', image: '/images/sp-01.jpg', alt: 'Sky Premia website hero section' },
    caseStudy: {
      intro:
        'A premium travel-advisory website that explains an unusual service, earns trust and turns visitors into paid report requests.',
      meta: [
        ['Role', 'Web developer'],
        ['Company', 'Sky Premia LLC, USA'],
        ['Stack', 'WordPress, HTML, CSS'],
        ['Focus', 'Conversion and on-page SEO'],
      ],
      sections: [
        {
          label: 'The problem',
          paragraphs: [
            'Sky Premia does not sell tickets. It researches long-haul business-class fares and shows clients whether they can save while still flying their preferred airline. Visitors had to understand that quickly and trust it enough to pay for a report.',
          ],
        },
        {
          label: 'What I built',
          paragraphs: [
            'I built and customised the site on WordPress with a premium navy-and-gold look. The page is ordered as an argument: what the service is, why to trust it, real proof, how it works, then the request form.',
            'I also did the on-page SEO: page titles and meta descriptions, a clean H1–H3 heading structure around target keywords, and compressed images with alt text.',
          ],
        },
        {
          label: 'Key sections',
          bullets: [
            ['Hero', 'with a sample fare report that shows the saving at a glance.'],
            ['Why trust us,', 'contrasting ticket sellers with an independent advisor.'],
            ['Real examples', 'with real routes, dates and the money saved.'],
            ['How it works,', 'four steps plus what the report contains and costs.'],
            ['Request form', 'with an 8–24 hour follow-up promise.'],
          ],
        },
      ],
      gallery: {
        type: 'browser',
        shots: [
          ['/images/sp-01.jpg', 'Hero: clear value proposition and call to action'],
          ['/images/sp-02.jpg', 'Why trust us: founder, team and comparison'],
          ['/images/sp-03.jpg', 'Real examples: benchmark fare vs report fare'],
          ['/images/sp-04.jpg', 'How it works: four steps and pricing'],
          ['/images/sp-05.jpg', 'Request your report: the lead form'],
          ['/images/sp-06.jpg', 'More savings: extra case studies'],
        ],
      },
    },
  },

  {
    slug: 'flight-finder',
    code: 'MOB-01',
    title: 'Flight Finder',
    org: 'Sky Premia LLC · USA',
    categories: ['mobile'],
    summary:
      'Search real flights by dates and needs, sort and filter the results, pick departing and return flights and review the whole trip.',
    tags: ['React Native', 'Expo', 'TypeScript', 'REST APIs'],
    github: 'https://github.com/sundas-stack/flight-finder-app',
    cover: {
      type: 'phones',
      bg: '#E9EEF8',
      images: [
        ['/images/ff-01.jpg', 'Flight Finder home'],
        ['/images/ff-04.jpg', 'Departing flights'],
        ['/images/ff-06.jpg', 'Trip summary'],
      ],
    },
    caseStudy: {
      intro:
        "A mobile app that searches real flights from a traveller's dates and requirements, then walks them from results to a clear trip summary.",
      meta: [
        ['Role', 'Mobile / front-end developer'],
        ['Company', 'Sky Premia LLC, USA'],
        ['Stack', 'React Native, Expo, TypeScript'],
        ['Year', '2026'],
      ],
      sections: [
        {
          label: 'The problem',
          paragraphs: [
            "Sky Premia helps travellers find better long-haul fares. The team needed a fast way, on a phone, to search live flights for a client's exact dates and needs and compare the options side by side.",
          ],
        },
        {
          label: 'What I built',
          paragraphs: [
            "I built the app's front end end to end and integrated the flight APIs that power the live results. The flow is deliberately short: search, choose a departing flight, choose a return, review.",
            'Every screen is built from shared, reusable components, so cards, buttons and flight rows look and behave the same everywhere.',
          ],
        },
        {
          label: 'Key features',
          bullets: [
            ['Round trip or one way,', 'with dates, passengers and a demo mode that uses sample data.'],
            ['Live flight results', 'pulled from APIs, with a clear loading state while they arrive.'],
            ['Sort and filter', 'by lowest price, earliest or shortest, and by number of stops.'],
            ['Departing, then return,', 'so the traveller always knows which leg they are choosing.'],
            ['Trip summary', 'with aircraft, stops, duration and flight number for the chosen itinerary.'],
          ],
        },
      ],
      gallery: {
        type: 'phones',
        bg: '#E9EEF8',
        shots: [
          ['/images/ff-01.jpg', 'Home'],
          ['/images/ff-02.jpg', 'Search form'],
          ['/images/ff-03.jpg', 'Searching'],
          ['/images/ff-04.jpg', 'Departing flights'],
          ['/images/ff-05.jpg', 'Return flight'],
          ['/images/ff-06.jpg', 'Trip summary'],
        ],
      },
      note: 'Built for Sky Premia LLC, so the source code is private. The repository shows its features, stack and screens.',
    },
  },

  {
    slug: 'sky-avenir-expense',
    code: 'MOB-02',
    title: 'Sky Avenir Expense',
    org: 'Built for ~200 employees',
    categories: ['mobile'],
    summary:
      "Capture a receipt, tidy it up, add the details and submit in seconds, with a dashboard that shows every expense's status.",
    tags: ['React Native', 'Expo', 'TypeScript', 'Android APK'],
    github: 'https://github.com/sundas-stack/skyavenir-expense-app',
    cover: {
      type: 'phones',
      bg: '#E6EEF5',
      images: [
        ['/images/ex-01.jpg', 'Expense app home'],
        ['/images/ex-02.jpg', 'Receipt review'],
        ['/images/ex-05.jpg', 'Expense submitted'],
      ],
    },
    caseStudy: {
      intro:
        'Capture a receipt, tidy it up, add the details and submit in seconds. Built for about 200 employees.',
      meta: [
        ['Role', 'Mobile app developer'],
        ['Company', 'Sky Premia LLC, USA'],
        ['Stack', 'React Native, Expo, TypeScript'],
        ['Platform', 'Android (APK), iOS planned'],
      ],
      links: [['Download APK', 'https://github.com/sundas-stack/skyavenir-expense-app/releases']],
      sections: [
        {
          label: 'The problem',
          paragraphs: [
            'Employees were filing expense receipts by hand, which was slow and easy to get wrong. The company wanted one simple app where anyone could photograph a receipt and submit it properly in under a minute.',
          ],
        },
        {
          label: 'What I built',
          paragraphs: [
            'I designed and built the app from the first screen to the confirmation: camera capture, a review step to fix the photo, a short form for the details, and a dashboard that shows where every expense stands.',
            'On the company build it adds sign-in and electronic signing, and connects to the back end and Oracle Expense, so a submitted receipt flows straight into the finance system. It also feeds the receipt automation I built in Python.',
          ],
        },
        {
          label: 'Key features',
          bullets: [
            ['One-tap capture,', 'from the camera or the gallery.'],
            ['Receipt review', 'to rotate, crop, replace or retake before continuing.'],
            ['Expense details', 'with category, business purpose and optional comments.'],
            ['Status dashboard', 'showing Submitted, Processing and Needs Review at a glance.'],
            ['Clear confirmation', 'after every submission, plus full expense history.'],
          ],
        },
      ],
      gallery: {
        type: 'phones',
        bg: '#E6EEF5',
        shots: [
          ['/images/ex-01.jpg', 'Home'],
          ['/images/ex-02.jpg', 'Review receipt'],
          ['/images/ex-03.jpg', 'Expense details'],
          ['/images/ex-04.jpg', 'Comments'],
          ['/images/ex-05.jpg', 'Submitted'],
        ],
      },
    },
  },

  {
    slug: 'receipt-automation',
    code: 'AI-02',
    title: 'Receipt Processing Automation',
    org: 'Sky Premia LLC · USA',
    categories: ['ai', 'backend'],
    summary:
      'Pulls receipt emails, reads them with OCR and an LLM, matches each to an employee and files it, sending low-confidence cases to a review folder.',
    tags: ['Python', 'OCR', 'LLMs', 'PostgreSQL', 'Power Automate'],
    cover: {
      type: 'flow',
      steps: ['Receipt email', 'OCR', 'LLM extract', 'Match employee', 'Confidence check', 'Auto-filed'],
    },
    caseStudy: {
      intro:
        'A Python pipeline that reads receipts with OCR and an LLM, matches them to employees and files them with no one touching them.',
      meta: [
        ['Role', 'AI automation developer'],
        ['Company', 'Sky Premia LLC, USA'],
        ['Stack', 'Python, OCR, LLMs, PostgreSQL'],
        ['Runs on', 'Power Automate Desktop'],
      ],
      sections: [
        {
          label: 'The problem',
          paragraphs: [
            'Every receipt that came in by email had to be opened, read, matched to the right employee and filed by hand. It was slow, repetitive and easy to get wrong.',
          ],
        },
      ],
      gallery: {
        type: 'steps',
        title: 'How it works',
        steps: [
          ['Retrieve', 'Collects new receipt emails automatically.'],
          ['Clean', 'Turns each PDF into a clean image ready for OCR.'],
          ['Read', 'OCR pulls the text; an LLM extracts amount, date, vendor and more.'],
          ['Match', 'Matches the receipt to the right employee in the PostgreSQL database.'],
          ['Check', 'Scores its confidence in the result.'],
          ['File', 'Files confident results automatically; unsure ones go to a review folder.'],
        ],
      },
      after: [
        {
          label: 'Why the confidence check matters',
          paragraphs: [
            'An LLM can misread a blurry receipt. Instead of filing a guess, the workflow only files results it is confident about and sends the rest to a review folder, so people check only the cases that need a human.',
          ],
        },
        {
          label: 'How it connects',
          paragraphs: [
            'It works alongside the Sky Avenir Expense app: receipts captured in the app and receipts arriving by email end up in the same organised records.',
          ],
        },
      ],
    },
  },
];

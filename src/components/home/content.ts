// All home page copy lives here so it can be edited without touching layout code.

export const profile = {
  name: "Bilal Ashraf",
  role: ["FULL-STACK", "ENGINEER"],
  intro:
    "Full-stack software engineer from Pakistan building web platforms and AI integrations with React, TypeScript, Next.js and Supabase.",
  openTo: "Open to full-time full-stack and AI engineering roles.",
  about:
    "I'm Bilal, a full-stack software engineer with a BS in Information Technology. I own a live internal platform at Afflix Media used by 30+ employees, plus external clients and creators. I also run its self-hosted infrastructure and built a custom MCP server that connects it to Claude. Outside work I build LLM, Android and IoT projects.",
  email: "bilalm3313@gmail.com",
  whatsapp: "https://wa.me/message/2YBTYHJJN6XZE1",
  location: "Pakistan",
};

export const navigation = [
  { name: "Home", href: "/#home" },
  { name: "About", href: "/#about" },
  { name: "Experience", href: "/#experience" },
  { name: "Projects", href: "/#projects" },
];

export const socials = [
  { name: "GitHub", href: "https://github.com/MBilal-21/" },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/bilalashraf72/" },
  { name: "Hugging Face", href: "https://huggingface.co/spaces/MBilal-72/" },
];

export const services = [
  {
    title: "Web Development",
    text: "Responsive, fast-loading websites and web apps built with React and Next.js.",
    tags: ["React", "Next.js", "Tailwind CSS"],
  },
  {
    title: "AI Chatbots & Tools",
    text: "Custom chatbots and AI-powered tools that answer questions, automate tasks and plug into your existing systems.",
    tags: ["Python", "MCP", "RAG"],
  },
  {
    title: "Full-Stack Platforms",
    text: "Internal platforms with role-based access, backed by Supabase and run on self-hosted infrastructure.",
    tags: ["Supabase", "TypeScript", "Self-hosted infrastructure"],
  },
  {
    title: "WordPress Sites",
    text: "Custom WordPress setups that are easy for you to update and quick for your visitors to load.",
    tags: ["WordPress", "SEO", "Performance"],
  },
  {
    title: "Generative Engine Optimization",
    text: "Content and structure tuned so your business shows up in AI search tools like ChatGPT, Gemini and Perplexity.",
    tags: ["GEO", "Content", "Analytics"],
  },
];

export const stats = [
  { value: 2, suffix: "+", label: "Years of Experience" },
  { value: 10, suffix: "+", label: "Projects Completed" },
  { value: 3, suffix: "", label: "Clients Served" },
];

export const experience = [
  {
    role: "Full-Stack Web Developer",
    company: "Afflix Media",
    companyHref: "https://afflixmedia.com/",
    period: "June 2026 to present",
    mode: "Onsite",
    points: [
      "Own and maintain the internal platform used daily by 30+ employees, with clients viewing reports and creators signing contracts. Built with React, TypeScript and Supabase.",
      "Ship new features and fix production bugs on a live system with separate access for employees, clients and creators.",
      "Run a self-hosted Supabase and other web and MCP applications on a Hostinger VPS, deployed through Coolify.",
      "Built a custom MCP server that lets Claude read and add records in the self-hosted Supabase, connected to the team's communication channel.",
    ],
  },
  {
    role: "Freelance Web Developer",
    period: "May 2024 to October 2025",
    mode: "Remote",
    points: [
      { name: "Falafel Kabob", href: "https://falafel-kabob.vercel.app/", text: "Laravel restaurant app built from Figma designs, with a dynamic menu, cart and checkout." },
      { name: "Majesticon", href: "https://www.majesticon.co.uk/", text: "WordPress site deployed on Hostinger, with a projects page and a WhatsApp contact widget." },
      { name: "Seraphic Medium", href: "http://seraphicmedium.com/", text: "WordPress marketing site with an SEO-friendly structure and lead-capture forms." },
    ],
  },
];

export const certifications = [
  {
    name: "Generative AI Mastermind",
    issuer: "Outskill",
    date: "Aug 2025",
    href: "https://s3.ap-south-1.amazonaws.com/assets.growthschool.io/certificates/9b12a4b6-af33-4ace-90ee-855f609f2da3_cert.pdf",
  },
  {
    name: "Generative AI Application Developer",
    issuer: "Pak Angels with iCodeGuru and ASpire Pakistan",
    date: "Aug 2025",
    href: "https://quiz.ideagist.com/ideagist-certificate/?cert_hash=1ea953e83cd8be24",
  },
  {
    name: "Introduction to Embedded Machine Learning",
    issuer: "Coursera",
    date: "June 2025",
    href: "https://www.coursera.org/account/accomplishments/verify/C99C070SWB4V",
  },
  {
    name: "Computer Vision with Embedded Machine Learning",
    issuer: "Coursera",
    date: "June 2025",
    href: "https://www.coursera.org/account/accomplishments/verify/K1WAVLY3HAEZ",
  },
];

export const awards = [
  { name: "2nd Place, AI Prompt Engineering Competition", issuer: "Namal Mianwali", date: "2025" },
  { name: "Top 10 Finalist, GenAI Hackathon", issuer: "Pak Angels", date: "2025" },
];

export const faqs = [
  {
    q: "What kind of projects do you take on?",
    a: "Business websites, web apps, WordPress sites and AI tools such as chatbots or content analyzers. If you're not sure your idea fits, just ask.",
  },
  {
    q: "How long does a website take?",
    a: "A simple landing page usually takes about a week. Larger sites and web apps take a few weeks, depending on the number of pages and features.",
  },
  {
    q: "What do you need from me to start?",
    a: "A short description of your goals, any content you already have (text, images, logo) and examples of sites you like.",
  },
  {
    q: "Can you add an AI chatbot to my existing site?",
    a: "Yes. I can build a chatbot trained on your own content and add it to most sites, including WordPress and React.",
  },
  {
    q: "Do you help after the site is launched?",
    a: "Yes. I can handle updates, fixes and new features after launch, either per task or as ongoing support.",
  },
];

// Blog cards are hidden until the articles are published.
// Set this to true (and add an `href` to each post) to show the section again.
export const showInsights = false;

export const insights = [
  {
    tag: "AI Search",
    title: "What Generative Engine Optimization means for your website",
    text: "How AI search tools pick their sources, and simple changes that make your content easier for them to cite.",
    img: "/assets/projects-images/Generative_Engine_Optimzation_tool_1.png",
  },
  {
    tag: "Development",
    title: "Turning a static HTML site into a React app",
    text: "Lessons from rebuilding a restaurant website as reusable React components.",
    img: "/assets/projects-images/hummusgrill.png",
  },
];

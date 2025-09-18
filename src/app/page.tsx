"use client";

import Image from "next/image";
import "./glassyText.css";
import Link from "next/link";
import ProjectCard from "@/components/ProjectCard";
import projects from "@/components/projects.json";
// import { SiHuggingface } from "react-icons/si"; // Hugging Face isn't in Radix, so we use react-icons

import {
  GitHubLogoIcon,
  LinkedInLogoIcon,
  CodeIcon,
  LightningBoltIcon,
} from "@radix-ui/react-icons";
import ContactForm from "@/components/ContactForm";

export default function Home() {

  return (
    <>

      {/* Main content bg-[#111518]*/}
      <div>
        {/* Hero Section bg-[#111518]*/}
        <section className="mx-auto max-w-7xl  overflow-x-hidden" style={{ fontFamily: '"Space Grotesk", "Noto Sans", sans-serif' }}>
          <div className="m-auto">
            <div className="w-full">
              <div className="relative flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat rounded-xl items-center justify-center p-4"
                style={{
                  backgroundImage:
                    'linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%)',
                }}>
                {/* style={{
                  backgroundImage:
                    'linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url("./assets/images/bg.png")',
                }}> */}
                {/* <video
                  className="absolute top-0 left-0 w-full h-full rounded-xl object-cover z-0"
                  src="./assets/videos/hero_bg.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                /> */}

                {/* Grid Perspective s*/}
                <div className="b-grid-container">
                  <div className="b-perspective-grid"></div>
                  <div className="b-grid-lines">
                    <div className="b-grid-line b-vertical"></div>
                    <div className="b-grid-line b-vertical"></div>
                    <div className="b-grid-line b-vertical"></div>
                    <div className="b-grid-line b-horizontal"></div>
                    <div className="b-grid-line b-horizontal"></div>
                  </div>
                </div>
                {/* <!-- Glow effect -s --> */}
                <div className="glow-orb orb1"></div>
                <div className="glow-orb orb2"></div>
                {/* Grid Perspective -e*/}
                {/* ----------glassy-text -s------------- */}
                <div className="glassy-text">
                  <h1 className="title">FRONTEND<br />DEVELOPER</h1>
                </div>
                {/* ----------glassy-text -e------------- */}

                <div className="flex flex-col items-center gap-2 text-center z-10 rounded-lg">{/*  bg-[#000000b5] */}

                  <Image
                    src="/assets/images/logo1.png"
                    alt="logo"
                    width={256}
                    height={256}
                    className="h-64 w-64 sm:ml-0 rounded-full sm:shrink-0 mr-2 sm:mr-4"
                  />
                  <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] md:text-5xl">
                    Hi👋, I&#39;m Bilal
                  </h1>

                  <h2 className="text-white text-sm font-normal md:text-base">
                    A freelance developer passionate about Web and AI technologies. <br />
                    I help clients build future-ready websites powered by intelligent automation and modern design.
                    {/* Frontend Developer | AI Chatbot Integrator | Cloud Learner */}
                  </h2>
                </div>
                <div className="flex-wrap gap-3 flex justify-center z-10">
                  <Link href={"https://wa.me/message/2YBTYHJJN6XZE1"} className="hero-button-1" >
                    <span className="button__icon-wrapper">
                      <svg
                        viewBox="0 0 14 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="button__icon-svg"
                        width="10"
                      >
                        <path
                          d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                          fill="currentColor"
                        />
                      </svg>

                      <svg
                        viewBox="0 0 14 15"
                        fill="none"
                        width="10"
                        xmlns="http://www.w3.org/2000/svg"
                        className="button__icon-svg button__icon-svg--copy"
                      >
                        <path
                          d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                          fill="currentColor"
                        />
                      </svg>
                    </span>
                    <span className="truncate">Let&#39;s Talk</span>
                  </Link>
                  {/* <button className="hero-button">
                    <span className="truncate">Let&#39;s Talk</span>
                  </button> */}
                </div>
                {/* <div className="flex-wrap gap-3 flex justify-center z-10">
                  <button className="flex min-w-[84px] max-w-[480px] items-center justify-center rounded-full h-10 px-4 md:h-12 md:px-5 bg-[#0b80ee] text-white text-sm font-bold md:text-base">
                    <span className="truncate">View Projects</span>
                  </button>
                  <button className="flex min-w-[84px] max-w-[480px] items-center justify-center rounded-full h-10 px-4 md:h-12 md:px-5 bg-[#283139] text-white text-sm font-bold md:text-base">
                    <span className="truncate">Let&#39;s Talk</span>
                  </button>
                </div> */}
              </div>
            </div>
          </div>
        </section>
        {/* ------------------------------------ */}
        {/* Projects Section */}
        <section className="max-w-4xl mx-auto" id="projects">
          <h2 className="text-white text-[22px] font-bold px-4 pb-3 pt-5">Featured Projects</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-3 p-4">

            {
              projects.map((project) => {
                if (project.type === "web_project")
                  return (
                    <ProjectCard
                      key={project.id}
                      {...project}
                    />
                  );
              })
            }
            {/* /* { 
              projects.map((proj, idx) => (
                <div key={idx} className="flex flex-col gap-3 pb-3">
                  <div
                    className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
                    style={{ backgroundImage: `url("${proj.img}")` }}
                  />
                  <div>
                    <p className="text-white text-base font-medium">{proj.title}</p>
                    <p className="text-[#9cabba] text-sm">{proj.tech}</p>
                  </div>
                </div>
              ))} */}
          </div>
        </section>

        {/* AI Tools/Chatbots Section */}
        <section className="max-w-4xl mx-auto">
          <h2 className="text-white text-[22px] font-bold px-4 pb-3 pt-5">AI Tools/Chatbots</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-3 p-4">
            {
              projects.map((project) => {
                if (project.type === "ai_project")
                  return <ProjectCard key={project.id} {...project} />
              })}
          </div>
        </section>

        {/* Skills & Tools Section */}
        <section className="max-w-5xl mx-auto px-4 py-10" id="skills">
          <h2 className="text-white text-2xl font-bold text-center mb-8">
            Skills &amp; Tools
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {/* Skill Item */}
            <div className="flex flex-col items-center justify-center p-5 bg-gray-800 rounded-2xl shadow-lg hover:scale-105 hover:shadow-xl transition-all">
              <Image  width={20}  height={20} src="/icons/html-5.svg" alt="html" className="w-12 h-12 mb-3" />
              <p className="text-white text-sm font-medium">HTML</p>
            </div>
            <div className="flex flex-col items-center justify-center p-5 bg-gray-800 rounded-2xl shadow-lg hover:scale-105 hover:shadow-xl transition-all">
              <Image  width={20}  height={20} src="/icons/css-3.svg" alt="CSS" className="w-12 h-12 mb-3" />
              <p className="text-white text-sm font-medium">CSS</p>
            </div>

            <div className="flex flex-col items-center justify-center p-5 bg-gray-800 rounded-2xl shadow-lg hover:scale-105 hover:shadow-xl transition-all">
              <CodeIcon className="w-10 h-10 text-blue-400 mb-3" />
              <p className="text-white text-sm font-medium">JavaScript</p>
            </div>


            <div className="flex flex-col items-center justify-center p-5 bg-gray-800 rounded-2xl shadow-lg hover:scale-105 hover:shadow-xl transition-all">
              <Image  width={20}  height={20} src="/icons/react.svg" alt="React js" className="w-12 h-12 mb-3" />
              <p className="text-white text-sm font-medium">React</p>
            </div>

            <div className="flex flex-col items-center justify-center p-5 bg-gray-800 rounded-2xl shadow-lg hover:scale-105 hover:shadow-xl transition-all">
              <Image  width={20}  height={20} src="/next.svg" alt="Next js" className="w-12 h-12 mb-3" />
              <p className="text-white text-sm font-medium">Next js</p>
            </div>

            <div className="flex flex-col items-center justify-center p-5 bg-gray-800 rounded-2xl shadow-lg hover:scale-105 hover:shadow-xl transition-all">
              <Image  width={20}  height={20} src="/icons/node-js.svg" alt="Node js" className="w-12 h-12 mb-3" />
              <p className="text-white text-sm font-medium">Node.js</p>
            </div>
            <div className="flex flex-col items-center justify-center p-5 bg-gray-800 rounded-2xl shadow-lg hover:scale-105 hover:shadow-xl transition-all">
              <Image  width={20}  height={20} src="/icons/python.svg" alt="Python" className="w-12 h-12 mb-3" />
              <p className="text-white text-sm font-medium">Python</p>
            </div>

            <div className="flex flex-col items-center justify-center p-5 bg-gray-800 rounded-2xl shadow-lg hover:scale-105 hover:shadow-xl transition-all">
              <Image  width={20}  height={20} src="/icons/mongodb.svg" alt="mongodb" className="w-12 h-12 mb-3" />
              <p className="text-white text-sm font-medium">MongoDB</p>
            </div>
            <div className="flex flex-col items-center justify-center p-5 bg-gray-800 rounded-2xl shadow-lg hover:scale-105 hover:shadow-xl transition-all">
              <Image  width={20}  height={20} src="/icons/mysql.svg" alt="mysql" className="w-12 h-12 mb-3" />
              <p className="text-white text-sm font-medium">MY SQL</p>
            </div>

            <div className="flex flex-col items-center justify-center p-5 bg-gray-800 rounded-2xl shadow-lg hover:scale-105 hover:shadow-xl transition-all">
              <GitHubLogoIcon className="w-10 h-10 text-white mb-3" />
              <p className="text-white text-sm font-medium">GitHub</p>
            </div>

            <div className="flex flex-col items-center justify-center p-5 bg-gray-800 rounded-2xl shadow-lg hover:scale-105 hover:shadow-xl transition-all">
              <LightningBoltIcon className="w-10 h-10 text-yellow-400 mb-3" />
              <p className="text-white text-sm font-medium">TailwindCSS</p>
            </div>

            <div className="flex flex-col items-center justify-center p-5 bg-gray-800 rounded-2xl shadow-lg hover:scale-105 hover:shadow-xl transition-all">
              <Image  width={20}  height={20} src="/vercel.svg" alt="Vercel" className="w-12 h-12 mb-3" />
              <p className="text-white text-sm font-medium">Vercel</p>
            </div>
          </div>
        </section>

        {/* About Me Section */}
        <section className="max-w-4xl mx-auto" id="about">
          <h2 className="text-white text-[22px] font-bold px-4 pb-3 pt-5">About Me</h2>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
            <div className="flex flex-col md:flex-row gap-3 pb-3">
              <div
                className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
                style={{
                  backgroundImage:
                    'url("/assets/images/aboutme.png")'
                  // 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAH_QNJh2kvkwhqOQelg9i9YHj4Pyh9HyTsNisHvMAadnZ0lzEqciVLOzKRXTfUk6koEF-zIA5vI-5JX2ssOaKoWP5ahK5hMostbzs1geSO5qEOZ5OZ9hw3Br_0nwGNKTvGKUnxfkhxnmpbOd8spLvK1QQ-GUKQPvkBJVhxtcCbCYo4dI130BvsbZW3HxcZX4fX7oKP2YTVjfg5AdzE0BhocW7Otq5NEtpUB4jIYubAuRg1oRa5pI0qOGKKJwfjVEGewYvNvlr3iAMW")'
                }}
              />
              <div>
                <p className="text-white text-base font-medium">My Coding and AI Journey</p>
                <p className="text-[#9cabba] text-sm">
                  From a curious beginner to a skilled frontend developer and AI enthusiast, my journey has been filled with learning and growth. I&#39;ve embraced challenges, built innovative projects, and continuously expanded my knowledge in both web development and AI. This path has shaped my approach to problem-solving and fueled my passion for creating impactful solutions.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Blog Preview Section */}
        {/* <section className="max-w-4xl mx-auto">
          <h2 className="text-white text-[22px] font-bold px-4 pb-3 pt-5">Blog Preview</h2>
          <div className="p-4 flex flex-col gap-4">
            <div className="flex items-stretch justify-between gap-4 rounded-xl">
              <div className="flex flex-col gap-1 flex-[2_2_0px]">
                <p className="text-[#9cabba] text-sm">Recent Blog Post</p>
                <p className="text-white text-base font-bold">Exploring the Future of AI in Web Development</p>
                <p className="text-[#9cabba] text-sm">
                  A deep dive into how AI is transforming web development, from chatbots to personalized user experiences.
                </p>
              </div>
              <div
                className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl flex-1"
                style={{
                  backgroundImage:
                    'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDIgwIm3MdY5304LBfVKf8ngVg1e1LcUC_wXURsAbQOlWcfSHMBzGxBSOgkKVhnygdfleouiSSf-7L-O3zJM2I6ZWyFBJWpqml2hPoPaqtjEpo2SErK25x9AGCkFepzrwDrFilJz4R8Mc0zcxRUo23Ll9Ve167fTsFDEckbYNWAZHNaiNl9G9Zc2byuiYoIBFG4wgWJ93CcuZID1zkIuFX9rRnsPTEjmTOExMIX95v33XgWYAUBW-E45Zzq_iVrvT7V3GbwWkWP_zkc")'
                }}
              />
            </div>
            <div className="flex items-stretch justify-between gap-4 rounded-xl">
              <div className="flex flex-col gap-1 flex-[2_2_0px]">
                <p className="text-[#9cabba] text-sm">Recent Blog Post</p>
                <p className="text-white text-base font-bold">Mastering Frontend Frameworks: A Comparative Analysis</p>
                <p className="text-[#9cabba] text-sm">
                  An overview of popular frontend frameworks, their strengths, and use cases.
                </p>
              </div>
              <div
                className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl flex-1"
                style={{
                  backgroundImage:
                    'url("https://lh3.googleusercontent.com/aida-public/AB6AXuA-AJTicmH9XGcuM7LrzYDd8XD_JqjRJnqwxqhK1Emi0Rd7bZFBa053yyeJ8V0vHjNJSF5ElVk2Lqq31YwUz2to9Jx1EI8EwPct1Th-3jYwJBrpafcS9WceMdRj1gMIcrtIou91lZ61Pj44P6PAbVjwIS-FQbhOkHSNFEnmiH1U_hXSQL87GrfJdZrYcMG50GlwOjC4OR3gqVts0UFJ3FxYx5wq9IK_rXqxCIcss117bDBgUPwiPR8oht6-D0ty16YUtC40K1rrM9pU")'
                }}
              />
            </div>
          </div>
        </section> */}

        {/* Contact Section */}
        <section className="max-w-4xl mx-auto" id="contact">
          <h2 className="text-white text-[22px] font-bold px-4 pb-3 pt-5">Contact</h2>
          {/* <form className="space-y-4 px-4 pb-8" onSubmit={(e) => {  e.preventDefault();
                alert("Message sent! (This is a demo, no actual sending implemented)");
              } }>
            <div className="flex flex-wrap gap-4">
              <label className="flex flex-col min-w-40 flex-1">
                <span className="text-white text-base font-medium pb-2">Your Name</span>
                <input
                  placeholder="Enter your name"
                  className="form-input rounded-xl text-white bg-[#283139] h-14 p-4 text-base"
                  defaultValue=""
                />
              </label>
              <label className="flex flex-col min-w-40 flex-1">
                <span className="text-white text-base font-medium pb-2">Your Email</span>
                <input
                  placeholder="Enter your email"
                  className="form-input rounded-xl text-white bg-[#283139] h-14 p-4 text-base"
                  defaultValue=""
                />
              </label>
            </div>
            <label className="flex flex-col min-w-40 flex-1">
              <span className="text-white text-base font-medium pb-2">Your Message</span>
              <textarea
                placeholder="Enter your message"
                className="form-input rounded-xl text-white bg-[#283139] min-h-36 p-4 text-base"
                defaultValue=""
              />
            </label>
            <div className="flex justify-end">
              <button className="flex min-w-[84px] max-w-[480px] items-center justify-center rounded-full h-10 px-4 bg-[#0b80ee] text-white text-sm font-bold">
                <span className="truncate">Send</span>
              </button>
            </div>
          </form> */}
          <ContactForm />
       
{/* Social & Location Section */}
<div className="mt-6 text-center">
  <p className="text-[#9cabba] text-sm pb-3 flex items-center justify-center gap-4">
    <span>Social Links:</span>
    <a
      href="https://github.com/MBilal-21/"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-white transition-colors"
    >
      <GitHubLogoIcon className="w-5 h-5" />
    </a>
    <a
      href="https://www.linkedin.com/in/bilalashraf72/"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-white transition-colors"
    >
      <LinkedInLogoIcon className="w-5 h-5" />
    </a>
    <a
      href="https://huggingface.co/spaces/MBilal-72/"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-white transition-colors"
    >
      <Image
        src="icons/hugging-face.svg"
        alt="Hugging Face"
        width={20}
        height={20}
        className="w-5 h-5"
      />
    </a>
  </p>

  <p className="text-[#9cabba] text-sm text-center pb-3">
    Location: Pakistan
  </p>
</div>

        </section>

        {/* Footer */}
        <footer className="flex flex-col gap-6 px-5 py-10 text-center">
          <div className="flex flex-wrap items-center justify-center gap-6">
            <a className="text-[#9cabba] text-base" href="mailto:bilalm3313@gmail.com">bilalm3313@email.com</a>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {/* Social icons here */}
          </div>
          <p className="text-[#9cabba] text-base">© 2025 Bilal Ashraf. All rights reserved.</p>
        </footer>
      </div>
    </>
  );
}
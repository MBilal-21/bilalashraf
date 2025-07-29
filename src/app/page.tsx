
import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Head>
        <title>Bilal's Portfolio</title>
        <link rel="icon" type="image/x-icon" href="data:image/x-icon;base64," />
      </Head>
      {/* Main content bg-[#111518]*/}
      <div className=" ">


        {/* Hero Section bg-[#111518]*/}
        <section className="mx-auto max-w-7xl  overflow-x-hidden" style={{ fontFamily: '"Space Grotesk", "Noto Sans", sans-serif' }}>
          <div className="m-auto py-5 px-4 md:px-40">
            <div className="w-full">
              <div className="relative flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat rounded-xl items-center justify-center p-4"
                style={{
                  backgroundImage:
                    'linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url("./assets/images/bg.png")',
                }}>
                <video
                  className="absolute top-0 left-0 w-full h-full rounded-xl object-cover z-0"
                  src="./assets/videos/hero_bg.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                />
                <div className="flex flex-col gap-2 text-center bg-[#000000b5] z-10 p-4 rounded-lg">
                  <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] md:text-5xl">
                    Hi, I'm Bilal
                  </h1>
                  <h2 className="text-white text-sm font-normal md:text-base">
                    A freelance developer passionate about Web and AI technologies. <br />
                    I help clients build future-ready websites powered by intelligent automation and modern design.
                    {/* Frontend Developer | AI Chatbot Integrator | Cloud Learner */}
                  </h2>
                </div>
                <div className="flex-wrap gap-3 flex justify-center z-10">
                  <button className="flex min-w-[84px] max-w-[480px] items-center justify-center rounded-full h-10 px-4 md:h-12 md:px-5 bg-[#0b80ee] text-white text-sm font-bold md:text-base">
                    <span className="truncate">View Projects</span>
                  </button>
                  <button className="flex min-w-[84px] max-w-[480px] items-center justify-center rounded-full h-10 px-4 md:h-12 md:px-5 bg-[#283139] text-white text-sm font-bold md:text-base">
                    <span className="truncate">Let's Talk</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
{/* ------------------------------------ */}
        {/* Projects Section */}
        <section className="max-w-4xl mx-auto">
          <h2 className="text-white text-[22px] font-bold px-4 pb-3 pt-5">Projects</h2>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
            {[
              {
                title: "SeraphicMedium.com",
                tech: "Wordpress",
                img: "./assets/projects-images/seraphicmdeium.png",
                liveLink: "https://seraphicmedium.com",
                githubLink: "#",
                description: "Developed and designed a fully responsive WordPress website for a digital marketing agency. The site highlights core services such as SEO, branding, content creation, social media marketing, and web development. Key responsibilities included custom theme setup, UI/UX design, mobile responsiveness, performance optimization, and SEO structuring. Completed in May 2024."
              },
              {
                title: "Hummus Grill",
                tech: "React, Node.js",
                img: "./assets/projects-images/hummusgrill.png",
                liveLink: "https://hummus-grill.vercel.app",
                githubLink: "https://github.com/MBilal-21/HummusGrill",
                description: "I successfully converted the Hummus Grill website from a static HTML format into a dynamic React.js application. This conversion enhances the website's performance, scalability, and maintainability by leveraging React's component-based architecture. Although the backend integration is pending, I developed the frontend to include a functional product ordering interface, preparing it for seamless future integration with a backend service."
              },
              {
                title: "Project Gamma",
                tech: "Angular, Java",
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBacRmRGb4-o0K1sKwEkbIiuK_G8AjsFmjF1BWDHEadH7vZrAt2jgBm6GzsLe3uC_tG9zBI7jq0Ph5Gk0EO63Dtvx6x00yQXie11rprxCEyyC-Le7xIlJfi4dmQdK1RFcM9L8gDvFXm4caU5binF40xokwZ0Euczm5HblI95slHGedo0CDhPvqnvIwx0EAQ_n97nju_nv3SvmXkioeSNF_X0O5APQTLbblhlb3PLyXGZO7PlGXqTC05jzopW_-IffkDuQk0qFXKwYlG"
              },
              {
                title: "Project Delta",
                tech: "Svelte, Go",
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAnVPlufp_H3mctQwE7Eb_I-NCEuCkcSY_6rrZ7U_g8M2hJ0ITxP4S2nT50Tb0sTuF_rNhctAUgQFv1Dg76Quyc2e1Cd4wNUjkS_VNdD2qfC1s4BHY4rVLV5stqsU16Gchn5zs3lEtJRrp-Li9KV7zcz5lo9oC0Y5UdWP3TL00Px7-AtgaQ_GS7DLJn2-qFoQJmXvlzPJK1AXXkJgAbYt39OjdDpQmDM5N9u94YU7NtwpKLtjJ_ei35aZv1_V-a3lxVssw84e7LmW7n"
              },
              {
                title: "Project Epsilon",
                tech: "Next.js, Ruby",
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBYlXGbGZsjYJzLg-uIYArJzSdiaiSI5jyBcVhecQPG3PDZtp28DEsJS4Kr0E42QN-vbyQsuaujDyx5LN5B3IdreH0YIhAI7q_V6qRzmgqrmGuwxkslt6Xa_XlJ2rWkVqhdjvuT9ScL8YkUQn1nihGdXU55ynYb2TnYKhmt8fwSX88hwxWPe8XM710GmG7pyzjrO4I6zDF01cO1sRHUO81Mm1lfqX7Xu-UnIL_tAxjdGeZJnNZVK5xNrkGsUwggjoRYQO9Q-6ihhk8U"
              },
              {
                title: "Project Zeta",
                tech: "Nuxt.js, Rust",
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBdCAeDhUBxZqoKFEtMKuafyDKCMulic5g_JDLhXhO5KXfAob7ICWcAzxvzeXH91S2-FpQQ5m9qtzgWD99YKdP_hd7LYEZjd6Vy0iS5kMka7sez8OwGdNRN3r7hpisv5NfXHnL1O6MW3b76hlAlQIaltf_tJzxpzAjbA8Fp5S3sbuhF_hC1DZRBDq7Cdx9LPDcKudaxGphpLzrFhwZ82m8X3wB3tECJYKxfg74PB_Fasv6U_SNcuZa5XEL3rsiplzhBeMFOnhCDNgSE"
              }
            ].map((proj, idx) => (
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
            ))}
          </div>
        </section>

        {/* AI Tools/Chatbots Section */}
        <section className="max-w-4xl mx-auto">
          <h2 className="text-white text-[22px] font-bold px-4 pb-3 pt-5">AI Tools/Chatbots</h2>
          <div className="flex overflow-x-auto p-4 gap-3">
            {[1, 2, 3, 4, 5].map((tool) => (
              <div key={tool} className="flex flex-col gap-4 rounded-lg min-w-40">
                <div
                  className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
                  style={{
                    backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuDKOVnMoiU8ZHZl1ViqX2VMvBEpU8Ud5X2eloESR8DZOLFUa3TPIpMLRhAS6OYqc3fahJmnVGI8hAyoEYbQ4FUlFlZCm_vv513uUBTQApH6-LcbZj7T0nsDDYyEMwg2poqnHlUt1ZekcT3hYY0xWJTw-4OFGOk0XW1qN76RI5YRTC5SQ_pdeSasAPoWqoBlw83y37vd3lj9W-MBLnN_ffAWzmIYiPZ48n97U0z8UHKuhyGdJp-TJ3oMc_2YPfDUbIYTin6MIyElpxTx")`
                  }}
                />
                <div>
                  <p className="text-white text-base font-medium">Tool {tool}</p>
                  <p className="text-[#9cabba] text-sm">Description of Tool {tool}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Skills & Tools Section */}
        <section className="max-w-4xl mx-auto">
          <h2 className="text-white text-[22px] font-bold px-4 pb-3 pt-5">Skills &amp; Tools</h2>
          {/* Add your skills grid here, similar to above */}
        </section>

        {/* About Me Section */}
        <section className="max-w-4xl mx-auto">
          <h2 className="text-white text-[22px] font-bold px-4 pb-3 pt-5">About Me</h2>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
            <div className="flex flex-col gap-3 pb-3">
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
                  From a curious beginner to a skilled frontend developer and AI enthusiast, my journey has been filled with learning and growth. I've embraced challenges, built innovative projects, and continuously expanded my knowledge in both web development and AI. This path has shaped my approach to problem-solving and fueled my passion for creating impactful solutions.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Blog Preview Section */}
        <section className="max-w-4xl mx-auto">
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
        </section>

        {/* Contact Section */}
        <section className="max-w-4xl mx-auto">
          <h2 className="text-white text-[22px] font-bold px-4 pb-3 pt-5">Contact</h2>
          <form className="space-y-4 px-4 pb-8">
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
          </form>
          <p className="text-[#9cabba] text-sm text-center pb-3">Social Links: [Social Media Icons]</p>
          <p className="text-[#9cabba] text-sm text-center pb-3">Location: [Your Location]</p>
        </section>

        {/* Footer */}
        <footer className="flex flex-col gap-6 px-5 py-10 text-center">
          <div className="flex flex-wrap items-center justify-center gap-6">
            <a className="text-[#9cabba] text-base" href="mailto:bilalm3313@gmail.com">bilalm3313@email.com</a>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {/* Social icons here */}
          </div>
          <p className="text-[#9cabba] text-base">© 2024 Alex Chen. All rights reserved.</p>
        </footer>
      </div>
    </>
  );
}
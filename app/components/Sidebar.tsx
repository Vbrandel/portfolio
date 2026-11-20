import React from "react";

const outlineBtn =
  "px-4 py-2 border border-gray-500 rounded-full w-fit text-sm hover:bg-gray-700 transition-colors";

const socialBtn =
  "flex items-center justify-center shrink-0 w-14 h-14 rounded-full border border-gray-500 m-2 hover:bg-gray-700 transition-colors";

const Sidebar = () => {
  return (
    <aside className="text-white bg-sidebarcolor h-screen p-6 flex flex-col justify-between">
      <div className="flex justify-between">
        <span className="inline-block px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium w-fit">
          Open to work
        </span>
        <a href="/assets/cv.pdf" target="_blank" rel="noopener noreferrer" className={outlineBtn}>
          <i className="fa-solid fa-file mr-2" aria-hidden="true"></i>
          Mon CV
        </a>
      </div>

<img
  src="/assets/tete.png"
  alt="Portrait de Virgil Brandel"
  className="rounded-full md:w-45 2xl:w-60 mx-auto bg-stone-200
             border-1 border-white/80
             shadow-[0_0_20px_2px_rgba(56,189,248,0.1),0_25px_40px_-10px_rgba(56,189,248,0.2)]"
/>

      <div className="text-center text-stone-200">
        <h2 className="text-xl font-bold">Virgil Brandel</h2>
        <p className="text-cyan-200">Développeur front-end</p>
        <p className="font-extralight">Rouen (76), France</p>
      </div>

      <div className="flex mx-auto text-3xl">
        <a
          href="https://github.com/Vbrandel/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className={socialBtn}
        >
          <i className="fa-brands fa-github" aria-hidden="true"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/virgil-brandel-8530831b8/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className={socialBtn}
        >
          <i className="fa-brands fa-linkedin-in" aria-hidden="true"></i>
        </a>
      </div>

      <a href="#contact-form" className={`${outlineBtn} mx-auto`}>
        <i className="fa-solid fa-paper-plane mr-2" aria-hidden="true"></i>
        Me contacter
      </a>
    </aside>
  );
};

export default Sidebar;
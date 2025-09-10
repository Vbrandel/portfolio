import React from "react";

const Sidebar = () => {
  return (
    <div className="text-white bg-stone-800 h-screen p-6 flex flex-col gap-6 md:gap-6 2xl:gap-12">
      <div className="flex justify-between">
        <span className="inline-block px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium size-fit">Open to work</span>
        <a href="#" className="px-4 py-2 border border-gray-500 rounded-full size-fit text-sm hover:bg-gray-700 scroll-smooth"><i className="fa-solid fa-file mr-2"></i>Mon CV</a>
      </div>
      <img src="/assets/tete.png" className="rounded-full md:w-50 2xl:w-60 mx-auto bg-stone-200"></img>
      <div className="text-center text-stone-200">
        <h2 className="text-xl font-bold">Virgil Brandel</h2>
        <p>Développeur front-end</p>
        <p className="font-extralight">Rouen (76)</p>
        <p className="font-extralight">France</p>
      </div>
      <div className="flex mx-auto text-3xl">
          <i className="fa-brands fa-github rounded-full border border-gray-500 p-4 m-2 cursor-pointer hover:bg-gray-700"></i>
          <i className="fa-brands fa-linkedin-in rounded-full border border-gray-500 p-4 m-2 cursor-pointer hover:bg-gray-700"></i>
        </div>

      <button className="mt-auto px-4 py-2 border border-gray-500 rounded-full size-fit mx-auto hover:bg-gray-700 scroll-smooth">
          <a href="#contact-form" className="scroll-smooth">
            <i className="fa-solid fa-paper-plane mr-2"></i>
            Me contacter
          </a>
        </button>
    </div>
  );
};

export default Sidebar;
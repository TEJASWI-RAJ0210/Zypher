import React from "react";

export default function HeroSection({onNavigate}) {
  return (
    <section
      className="relative h-screen w-full bg-cover bg-center flex flex-col justify-center items-center text-white"
      style={{ backgroundImage: "url('/hero.jpg')" }} 
    >
      {/* Navbar*/} 
      <nav className="absolute top-5 w-full flex justify-center z-10">
        <ul className="flex gap-12 px-10 py-4 bg-white/20 rounded-full text-white font-semibold text-lg">
          <li className="hover:text-stone-600 cursor-pointer text-2xl">Home</li>
          <li onClick={() => onNavigate("features")} className="hover:text-stone-600 cursor-pointer text-2xl">Features</li>
          <div className="w-8 h-8 bg-white rounded-full self-center" />
          <li onClick={() => onNavigate("templates")} className="hover:text-stone-600 cursor-pointer text-2xl">Templates</li>
          <li className="hover:text-stone-600 cursor-pointer text-2xl">Contact</li>
        </ul>
      </nav>

      {/*Title */}
      <div className="text-[2.5rem] sm:text-[4rem] md:text-[6rem] lg:text-[8rem] font-extrabold tracking-widest drop-shadow-lg mt-20 sm:mt-32 self-end mr-4 sm:mr-10 md:mr-20 text-right">
        ZEPHYR
      </div>

      {/*Scroll*/}
      <div className="absolute right-4 bottom-10 text-xs tracking-widest rotate-90 text-white/80">
        SCROLL
      </div>

      {/* Tagline at the bottom */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white text-xl sm:text-2xl font-semibold tracking-wide">
        Plan smarter, feel deeper - Zephyr crafts aesthetic gateways from your inputs.
      </div>
    </section>
  );
}
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-black text-white px-6 md:px-20 pt-16 pb-10 text-sm"
    style={{
        backgroundImage: "url('/Contact.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-10">
        <div>
          <h3 className="font-semibold text-lg mb-4">FAQ</h3>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-4">Links</h3>
          <ul className="space-y-2">
            <li>Home</li>
            <li>Features</li>
            <li>Templates</li>
            <li>Explore now</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-4">Social Media</h3>
          <ul className="space-y-2">
            <li>Email</li>
            <li>Instagram</li>
            <li>LinkedIn</li>
            <li>Contact no</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-4">Subscribe</h3>
        </div>
      </div>
      <div className="mt-12 text-left text-white">
        © 2025 Zephyr. All rights reserved.
      </div>
    </footer>
  );
}
"use client";

import Image from "next/image";
import Link from "next/link";

const menuItems = [
  { name: "Home", href: "/" },
  { name: "Wings", href: "/wings" },
  { name: "Events", href: "/events" },
  { name: "Team", href: "/team" },
  { name: "About", href: "/about" },
  { name: "Achievements", href: "/achievements" },
];

export default function Navbar() {
  return (
    <header className="w-full flex justify-center pt-6">
      <nav className="w-[90%] h-[70px] bg-[#EFEFEF]/90 backdrop-blur-md rounded-[40px] px-8 flex items-center justify-between shadow-sm">

        {/* Logo */}
        <Link href="/">
          <Image
            src="/logo.png"
            alt="Logo"
            width={120}
            height={30}
            priority
          />
        </Link>

        <div className="flex items-center gap-14">

          {/* Navigation Menu */}
          <ul className="flex items-center gap-10">
            {menuItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className="group relative pb-2 text-[16px] font-medium text-black transition-colors duration-300 hover:text-[#03B4BC]"
                >
                  {item.name}

                  {/* Animated Underline */}
                  <span className="absolute left-0 bottom-0 h-[2px] w-full bg-[#03B4BC] rounded-full origin-left scale-x-0 transition-transform duration-300 ease-in-out group-hover:scale-x-100"></span>
                </Link>
              </li>
            ))}
          </ul>

          {/* Join Button */}
          <Link
            href="/join"
            className="rounded-full bg-[#03B4BC] px-5 py-2 text-white font-medium transition-all duration-300 hover:bg-[#029ca3] hover:scale-105"
          >
            Join Us
          </Link>

        </div>
      </nav>
    </header>
  );
}
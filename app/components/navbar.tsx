"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const menuItems = [
  { name: "Home", href: "/" },
  { name: "Wings", href: "/wings" },
  { name: "Events", href: "/events" },
  { name: "Team", href: "/team" },
  { name: "About", href: "/about" },
  { name: "Achievements", href: "/achievements" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full flex justify-center pt-6 fixed top-0 left-0 z-50">
      <nav className="w-[92%] max-w-7xl h-[70px] bg-[#EFEFEF]/90 backdrop-blur-md rounded-full px-6 lg:px-8 flex items-center justify-between shadow-sm">

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

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-14">
          <ul className="flex items-center gap-10">
            {menuItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className="group relative pb-2 text-[16px] font-medium text-black transition-colors duration-300 hover:text-[#03B4BC]"
                >
                  {item.name}
                  <span className="absolute left-0 bottom-0 h-[2px] w-full bg-[#03B4BC] rounded-full origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
                </Link>
              </li>
            ))}
          </ul>

          <Link
            href="/join"
            className="rounded-full bg-[#03B4BC] px-5 py-2 text-white font-medium transition-all duration-300 hover:bg-[#029ca3] hover:scale-105"
          >
            Join Us
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-black"
        >
          {isOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed top-24 left-1/2 -translate-x-1/2 w-[92%] rounded-3xl bg-[#EFEFEF]/95 backdrop-blur-lg shadow-lg transition-all duration-300 lg:hidden ${
          isOpen
            ? "opacity-100 visible translate-y-0"
            : "opacity-0 invisible -translate-y-5"
        }`}
      >
        <ul className="flex flex-col items-center py-6 gap-6">
          {menuItems.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-lg font-medium text-black hover:text-[#03B4BC] transition"
              >
                {item.name}
              </Link>
            </li>
          ))}

          <Link
            href="/join"
            onClick={() => setIsOpen(false)}
            className="rounded-full bg-[#03B4BC] px-6 py-3 text-white font-medium hover:bg-[#029ca3] transition"
          >
            Join Us
          </Link>
        </ul>
      </div>
    </header>
  );
}
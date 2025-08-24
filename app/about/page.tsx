"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="w-full bg-gray-900/80 backdrop-blur shadow fixed top-0 left-0 z-50">
  <div className="max-w-5xl mx-auto flex items-center justify-between px-4 py-3">
  <Link href="/" className="text-2xl font-extrabold bg-gradient-to-r from-blue-600 to-cyan-400 bg-clip-text text-transparent">Mon Portfolio</Link>
        <div className="flex items-center gap-2">
          <button
            className="sm:hidden p-2 rounded hover:bg-gray-800"
            onClick={() => setOpen(!open)}
            aria-label="Ouvrir le menu"
          >
            <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
          <ul className="hidden sm:flex space-x-8 font-semibold text-white">
          <li><Link href="/" className="hover:text-cyan-400">Accueil</Link></li>
          <li><Link href="/about" className="hover:text-cyan-400">À propos</Link></li>
          <li><Link href="/cv" className="hover:text-cyan-400">CV</Link></li>
          <li><a href="#contact" className="hover:text-cyan-400">Contact</a></li>
        </ul>
      </div>
      {open && (
        <ul className="sm:hidden border-t px-4 pb-4 space-y-2 font-semibold text-white bg-gray-900">
          <li><Link href="/" className="block py-2 hover:text-cyan-400">Accueil</Link></li>
          <li><Link href="/about" className="block py-2 hover:text-cyan-400">À propos</Link></li>
          <li><Link href="/cv" className="block py-2 hover:text-cyan-400">CV</Link></li>
          <li><a href="#contact" className="block py-2 hover:text-cyan-400">Contact</a></li>
        </ul>
      )}
    </nav>
  );
}

export default function About() {
  useEffect(() => {
    document.documentElement.classList.add('dark');
    return () => {
      document.documentElement.classList.remove('dark');
    };
  }, []);

  return (
    <>
      <Navbar />
      <main className="max-w-2xl mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold mb-4 text-gray-100">À propos de moi</h2>
        <p className="text-lg text-gray-200 mb-4">
          Je suis un développeur passionné par le web et les nouvelles technologies.
          J’aime apprendre, partager et relever des défis techniques.
        </p>
        <p className="text-gray-300">
          Mon parcours m’a permis de travailler sur des projets variés, allant de la création de sites vitrines à des applications web complexes avec React, Next.js, Node.js, TypeScript, et Tailwind CSS.
        </p>
        {/* Ajoute ici plus d’informations sur toi, ton parcours, tes passions, etc. */}
      </main>
    </>
  );
}
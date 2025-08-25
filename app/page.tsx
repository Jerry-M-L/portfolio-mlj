
"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { FaReact, FaNodeJs, FaGitAlt, FaServer } from "react-icons/fa";
import { SiTypescript, SiTailwindcss } from "react-icons/si";

export default function Home() {
  const [form, setForm] = useState({ nom: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setForm({ nom: "", email: "", message: "" });
  };

  // Icônes React (react-icons)
  const icons = {
    react: <FaReact className="w-7 h-7 text-sky-500" />,
    ts: <SiTypescript className="w-7 h-7 text-blue-600" />,
    node: <FaNodeJs className="w-7 h-7 text-green-600" />,
    tailwind: <SiTailwindcss className="w-7 h-7 text-cyan-400" />,
  api: <FaServer className="w-7 h-7 text-orange-500" />,
    git: <FaGitAlt className="w-7 h-7 text-rose-500" />,
  };

  function Navbar() {
    const [open, setOpen] = useState(false);
    // Fonction pour fermer le menu mobile
    const handleMenuClick = () => setOpen(false);
    return (
      <nav className="w-full bg-gray-900/80 backdrop-blur shadow fixed top-0 left-0 z-50">
        <div className="max-w-5xl mx-auto flex items-center justify-between px-4 py-3">
          <Link href="/" className="text-2xl font-extrabold bg-gradient-to-r from-green-900 to-emerald-600 bg-clip-text text-transparent">Lecreatif</Link>
          <div className="flex items-center gap-2">
            <button
              className="sm:hidden p-2 rounded hover:bg-gray-800"
              onClick={() => setOpen(!open)}
              aria-label="Ouvrir le menu"
            >
              <FaReact className="w-7 h-7 text-emerald-400" />
            </button>
          </div>
          <ul className="hidden sm:flex space-x-8 font-semibold text-white">
            <li><Link href="/" className="hover:text-emerald-600 flex items-center gap-2"><FaReact className="w-5 h-5 text-emerald-400" />Accueil</Link></li>
            <li><a href="#projects" className="hover:text-emerald-600 flex items-center gap-2"><FaNodeJs className="w-5 h-5 text-green-400" />Projets</a></li>
            <li><a href="#skills" className="hover:text-emerald-600 flex items-center gap-2"><SiTypescript className="w-5 h-5 text-blue-400" />Compétences</a></li>
            <li><a href="#passions" className="hover:text-emerald-600 flex items-center gap-2"><SiTailwindcss className="w-5 h-5 text-cyan-400" />Passions</a></li>
            <li><a href="#contact" className="hover:text-emerald-600 flex items-center gap-2"><FaGitAlt className="w-5 h-5 text-rose-400" />Contact</a></li>
          </ul>
        </div>
        {/* Menu mobile */}
        {open && (
          <ul className="sm:hidden border-t px-4 pb-4 space-y-2 font-semibold bg-gray-950">
            <li>
              <a href="/" className="flex items-center gap-2 py-2 text-gray-100 hover:text-green-400" onClick={handleMenuClick}>
                <FaReact className="w-5 h-5 text-emerald-400" />
                Accueil
              </a>
            </li>
            <li>
              <a href="#projects" className="flex items-center gap-2 py-2 text-gray-100 hover:text-green-400" onClick={handleMenuClick}>
                <FaNodeJs className="w-5 h-5 text-green-400" />
                Projets
              </a>
            </li>
            <li>
              <a href="#skills" className="flex items-center gap-2 py-2 text-gray-100 hover:text-green-400" onClick={handleMenuClick}>
                <SiTypescript className="w-5 h-5 text-blue-400" />
                Compétences
              </a>
            </li>
            <li>
              <a href="#passions" className="flex items-center gap-2 py-2 text-gray-100 hover:text-green-400" onClick={handleMenuClick}>
                <SiTailwindcss className="w-5 h-5 text-cyan-400" />
                Passions
              </a>
            </li>
            <li>
              <a href="#contact" className="flex items-center gap-2 py-2 text-gray-100 hover:text-green-400" onClick={handleMenuClick}>
                <FaGitAlt className="w-5 h-5 text-rose-400" />
                Contact
              </a>
            </li>
          </ul>
        )}
      </nav>
    );
  }
   return (
    <>
      <Navbar />
      {/* HEADER */}
      <header className="flex flex-col items-center justify-center min-h-[60vh] pt-32 pb-12 bg-gray-950 px-4 transition-colors duration-300">
        <div className="flex flex-col items-center gap-4">
          <div className="relative">
            <Image
              src="/images/profil.jpg"
              alt="Photo de profil"
              width={140}
              height={140}
              className="rounded-full border-4 border-blue-100 shadow-xl"
            />
            <span className="absolute bottom-2 right-2 bg-green-400 w-5 h-5 rounded-full border-2 border-white"></span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-center text-emerald-600">
            Salut, je suis <span className="text-gray-100">Jerry ML</span>
          </h1>
          <p className="text-lg text-gray-200 max-w-xl text-center">
            Passionné par la création d’applications  performantes, modernes et accessibles.
            </p>
          <p className="text-lg text-gray-200 max-w-xl text-center">
            ML signifie MBENDA-LECA
           </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-4">
            <a
              href="#projects"
              className="px-6 py-2 bg-emerald-600  rounded hover:bg-emerald-300 transition font-semibold shadow" >
              Voir mes projets
            </a>
            <a
              href="/cv"
              className="px-6 py-2 border border-emerald-600 text-emerald-600 rounded hover:bg-gray-900 transition font-semibold shadow"
            >
              Voir mon CV
            </a>
          </div>
        </div>
      </header>

      {/* COMPÉTENCES */}
      <section id="skills" className="max-w-4xl mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-100">Compétences</h2>
        <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
          <li className="flex flex-col items-center bg-gray-800 rounded-xl shadow p-5 hover:scale-105 transition-colors duration-300">
            {icons.react}
            <span className="mt-2 font-semibold text-gray-100">React / Next.js</span>
          </li>
          <li className="flex flex-col items-center bg-gray-800 rounded-xl shadow p-5 hover:scale-105 transition">
            {icons.ts}
            <span className="mt-2 font-semibold text-gray-100">TypeScript</span>
          </li>
          <li className="flex flex-col items-center bg-gray-800 rounded-xl shadow p-5 hover:scale-105 transition">
            {icons.node}
            <span className="mt-2 font-semibold text-gray-100">Node.js</span>
          </li>
          <li className="flex flex-col items-center bg-gray-800 rounded-xl shadow p-5 hover:scale-105 transition">
            {icons.tailwind}
            <span className="mt-2 font-semibold text-gray-100">Tailwind CSS</span>
          </li>
          <li className="flex flex-col items-center bg-gray-800 rounded-xl shadow p-5 hover:scale-105 transition">
            {icons.api}
            <span className="mt-2 font-semibold text-gray-100">API REST</span>
          </li>
          <li className="flex flex-col items-center bg-gray-800 rounded-xl shadow p-5 hover:scale-105 transition">
            {icons.git}
            <span className="mt-2 font-semibold text-gray-100">Git & CI/CD</span>
          </li>
        </ul>
      </section>

      {/* PROJETS */}
      <section id="projects" className="max-w-5xl mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-100">Mes projets</h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {/* Projet vitrine 1 */}
          <div className="bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-colors duration-300 p-6 flex flex-col items-center group">
            <Image src="/images/artisan1.jpg" alt="Site Vitrine 1" width={2848} height={4288} className="mb-4 group-hover:scale-110 transition" />
            <h3 className="text-xl font-bold mb-2 text-gray-100">Artisan</h3>
            <p className="text-gray-300 text-justify mb-4">Site moderne pour la mise en valeur des produits artisanals locaux, avec présentation des services et galerie photo.</p>
            <Link href="#projects" className="mt-auto text-emerald-600 px-2 py-1 border border-emerald-600 rounded hover:bg-gray-900 transition font-semibold ">Voir le projet</Link>
          </div>
          {/* Projet vitrine 2 */}
          <div className="bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition p-6 flex flex-col items-center group">
            <Image src="/images/association.jpg" alt="Site Vitrine 2" width={2848} height={4288} className="mb-4 group-hover:scale-110 transition" />
            <h3 className="text-xl font-bold mb-2 text-gray-100">Association</h3>
            <p className="text-gray-300 text-justify mb-4">Ce site a pour objectif accompagner les femmes afin de promouvoir leur autonomie, leur leadership et leur rôle actif dans le developpement de la communauté.</p>
            <Link href="#projects" className="mt-auto text-emerald-600 px-2 py-1 border border-emerald-600 rounded  hover:bg-gray-900 transition font-semibold ">Voir le projet</Link>
          </div>
          {/* Projet vitrine 3 */}
          <div className="bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition p-6 flex flex-col items-center group">
            <Image src="/images/formation.jpg" alt="Site Vitrine 3" width={2848} height={4288} className="mb-4 group-hover:scale-110 transition" />
            <h3 className="text-xl font-bold mb-2 text-gray-100">Formation</h3>
            <p className="text-gray-300 text-justify mb-4">Site pour les formations certifiantes dans de divers domaines: technique, professionnel et academique.</p>
            <Link href="#projects" className="  mt-auto text-emerald-600 px-2 py-1 border border-emerald-600 rounded  hover:bg-gray-900 transition font-semibold ">Voir le projet</Link>
          </div>
        </div>
      </section>

      {/* PASSION AGRICULTURE */}
      <section id="passions" className="max-w-5xl mx-auto py-10 px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-100">Ma passion pour l'agriculture</h2>
        <p className="text-xl text-gray-100 mb-10 text-justify max-w-3xl mx-auto leading-relaxed">
          L’agriculture est pour moi bien plus qu’un métier : c’est une philosophie de vie, un lien profond avec la terre et le vivant. J’aime observer la nature, cultiver, apprendre  et partager la beauté des paysages ruraux. Voici quelques clichés pris lors de mes balades et travaux, qui illustrent mon attachement à ce monde authentique et inspirant.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {[1,2,3].map((num) => (
            <div key={num} className="relative group overflow-hidden rounded-2xl shadow-xl bg-gradient-to-br from-green-900/60 to-lime-800/40">
              <Image
                src={`/images/agri${num}.jpg`}
                alt={`Photo agriculture ${num}`}
                width={400}
                height={260}
                className={
                  num === 2
                    ? "transition-transform duration-500 group-hover:scale-105 group-hover:brightness-110 object-cover w-full h-[260px] rounded-2xl object-center"
                    : "transition-transform duration-500 group-hover:scale-105 group-hover:brightness-110 object-cover w-full h-[260px] rounded-2xl"
                }
                style={num === 2 ? { objectPosition: "center 30%" } : undefined}
                onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
              />
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/60 to-transparent p-3 text-gray-100 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Photo prise sur le terrain
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FORMULAIRE DE CONTACT*/}
      <section id="contact" className="max-w-xl mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-100">Contactez-moi</h2>
        {sent ? (
          <div className="bg-green-900 text-green-200 p-4 rounded mb-4 text-center">Merci pour votre message ! Je vous répondrai rapidement.</div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-gray-800 rounded-xl shadow p-8 flex flex-col gap-4 transition-colors duration-300">
            <input
              type="text"
              name="nom"
              placeholder="Votre nom"
              value={form.nom}
              onChange={handleChange}
              required
              className="border border-gray-700 rounded px-4 py-2 bg-gray-900 text-gray-100 placeholder-gray-400"
            />
            <input
              type="email"
              name="email"
              placeholder="Votre e-mail"
              value={form.email}
              onChange={handleChange}
              required
              className="border border-gray-700 rounded px-4 py-2 bg-gray-900 text-gray-100 placeholder-gray-400"
            />
            <textarea
              name="message"
              placeholder="Votre message"
              value={form.message}
              onChange={handleChange}
              required
              rows={4}
              className="border border-gray-700 rounded px-4 py-2 bg-gray-900 text-gray-100 placeholder-gray-400"
            />
            <button
              type="submit"
              className="bg-emerald-600 text-gray-900 px-6 py-2 rounded hover:bg-emerald-400 transition font-semibold"
            >
              Envoyer
            </button>
          </form>
        )}
      </section>
    </>
  );
}
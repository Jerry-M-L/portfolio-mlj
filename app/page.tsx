"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  FaReact,
  FaGitAlt,
  FaTools,
  FaFolderOpen,
  FaHome,
  FaEnvelope,
  FaPython,
  FaPhp,
  FaBars,
  FaUser,
  FaGithub,
} from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";
import {
  SiTypescript,
  SiTailwindcss,
  SiNextdotjs,
  SiHtml5,
} from "react-icons/si";

export default function Home() {
  const [form, setForm] = useState({ nom: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const currentYear = new Date().getFullYear();


  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        nom: form.nom,
        email: form.email,
        message: form.message,
      }),
    });
    const data = await res.json();
    if (data.success) {
      setSent(true);
      setForm({ nom: "", email: "", message: "" });
    } else {
      alert('Erreur : ' + (data.error || 'Envoi impossible'));
    }
  };

  // Icônes React (react-icons)
  const icons = {
    python: <FaPython className="w-7 h-7 text-emerald-400" />,
    react: <FaReact className="w-7 h-7 text-emerald-400" />,
    ts: <SiTypescript className="w-7 h-7 text-emerald-400" />,
    php: <FaPhp className="w-7 h-7 text-emerald-400" />,
    tailwind: <SiTailwindcss className="w-7 h-7 text-emerald-400" />,
    git: <FaGithub className="w-7 h-7 text-emerald-400" />,
  };

  function Navbar() {
    const [open, setOpen] = useState(false);
    // Fonction pour fermer le menu mobile
    const handleMenuClick = () => setOpen(false);
    return (
      <nav className="w-full bg-gray-900/80 backdrop-blur shadow fixed top-0 left-0 z-50">
        <div className="max-w-5xl mx-auto flex items-center justify-between px-4 py-3">
          <Link
            href="/"
            className="text-2xl font-extrabold bg-gradient-to-r from-green-900 to-emerald-600 bg-clip-text text-transparent"
          >
            Lecre<span className="text-2xl font-extrabold bg-gradient-to-r from-white to-white bg-clip-text text-transparent">atif</span>
          </Link>
          <div className="flex items-center gap-2">
            <button
              className="sm:hidden p-2 rounded hover:bg-gray-800"
              onClick={() => setOpen(!open)}
              aria-label="Ouvrir le menu"
            >
              <FaBars className="w-7 h-7 text-emerald-400" />
            </button>
          </div>
          <ul className="hidden sm:flex space-x-8 font-semibold text-white">
            <li>
              <Link
                href="/"
                className="hover:text-emerald-600 flex items-center gap-2"
              >
                <FaHome className="w-5 h-5 text-emerald-400" />
              
              </Link>
            </li>

            <li>
              <Link
                href="#projects"
                className="hover:text-emerald-600 flex items-center gap-2"
              >
                <FaFolderOpen className="w-5 h-5 text-emerald-400" />
             
              </Link>
            </li>
            <li>
              <a
                href="#skills"
                className="hover:text-emerald-600 flex items-center gap-2"
              >
                <FaTools className="w-5 h-5 text-emerald-400" />
                
              </a>
            </li>
            <li>
              <a
                href="#Aboutme"
                className="hover:text-emerald-600 flex items-center gap-2"
              >
                <FaUser className="w-5 h-5 text-emerald-400" />
              </a>
            </li>
            <li>
              <a
                href="#passions"
                className="hover:text-emerald-600 flex items-center gap-2"
              >
                <FaHeart className="w-5 h-5 text-emerald-400" />
                
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:text-emerald-600 flex items-center gap-2"
              >
                <FaEnvelope className="w-5 h-5 text-emerald-400" />
              </a>
            </li>
          </ul>
        </div>
        {/* Menu mobile */}
        {open && (
          <ul className="sm:hidden border-t px-4 pb-4 space-y-2 font-semibold bg-gray-950">
            <li>
              <a
                href="/"
                className="flex items-center gap-2 py-2 text-gray-100 hover:text-green-400"
                onClick={handleMenuClick}
              >
                <FaHome className="w-5 h-5 text-emerald-400" />
                Accueil
              </a>
            </li>

            <li>
              <Link
                href="#projects"
                className="flex items-center gap-2 py-2 text-gray-100 hover:text-green-400"
                onClick={handleMenuClick}
              >
                <FaFolderOpen className="w-5 h-5 text-emerald-400" />
                Projets
              </Link>
            </li>
            <li>
              <a
                href="#skills"
                className="flex items-center gap-2 py-2 text-gray-100 hover:text-green-400"
                onClick={handleMenuClick}
              >
                <FaTools className="w-5 h-5 text-emerald-400" />
                Compétences
              </a>
            </li>
            <li>
              <li>
                <a
                  href="#Aboutme"
                  className="flex items-center gap-2 py-2 text-gray-100 hover:text-green-400"
                  onClick={handleMenuClick}
                >
                  <FaUser className="w-5 h-5 text-emerald-400" />À propos
                </a>
              </li>
              <a
                href="#passions"
                className="flex items-center gap-2 py-2 text-gray-100 hover:text-green-400"
                onClick={handleMenuClick}
              >
                <FaHeart className="w-5 h-5 text-emerald-400" />
                Passions
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="flex items-center gap-2 py-2 text-gray-100 hover:text-green-400"
                onClick={handleMenuClick}
              >
                <FaEnvelope className="w-5 h-5 text-emerald-400" />
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
              width={200}
              height={200}
              className="rounded-full border-4 border-blue-100 shadow-xl"
            />
            <span className="absolute bottom-2 right-1/5 bg-green-400 w-5 h-5 rounded-full border-2 border-white"></span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-center text-emerald-600">
            Salut, je suis <span className="text-gray-100">Jerry ML</span>
          </h1>
          <p className="text-lg text-gray-200 max-w-xl text-center">
            Passionné par la création d’applications performantes, modernes et
            accessibles.
          </p>
          <p className="text-lg text-gray-200 max-w-xl text-center">
            ML signifie MBENDA-LECA
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-4">
            <a
              href="#projects"
              className="px-6 py-2 bg-emerald-600  rounded hover:bg-emerald-300 transition font-semibold shadow"
            >
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
      <section id="skills" className="max-w-5xl mx-auto py-16 px-4 ">
        <h2 className="text-3xl font-bold mb-8 text-center text-emerald-400">
          Mes Compétences
        </h2>
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col items-center bg-gradient-to-br from-gray-800 to-emerald-900 rounded-2xl shadow-xl p-6 hover:scale-105 transition-transform">
            <FaPython className="w-12 h-12 text-emerald-400 mb-2" />
            <span className="text-base font-semibold text-gray-100">
              Python
            </span>
          </div>
          <div className="flex flex-col items-center bg-gradient-to-br from-gray-800 to-emerald-900 rounded-2xl shadow-xl p-6 hover:scale-105 transition-transform">
            <FaPhp className="w-12 h-12 text-emerald-400 mb-2" />
            <span className="text-base font-semibold text-gray-100">PHP</span>
          </div>
          <div className="flex flex-col items-center bg-gradient-to-br from-gray-800 to-emerald-900 rounded-2xl shadow-xl p-6 hover:scale-105 transition-transform">
            <FaReact className="w-12 h-12 text-emerald-400 mb-2" />
            <span className="text-base font-semibold text-gray-100">React</span>
          </div>
          <div className="flex flex-col items-center bg-gradient-to-br from-gray-800 to-emerald-900 rounded-2xl shadow-xl p-6 hover:scale-105 transition-transform">
            <SiTypescript className="w-12 h-12 text-emerald-400 mb-2" />
            <span className="text-base font-semibold text-gray-100">
              TypeScript
            </span>
          </div>
          <div className="flex flex-col items-center bg-gradient-to-br from-gray-800 to-emerald-900 rounded-2xl shadow-xl p-6 hover:scale-105 transition-transform">
            <SiNextdotjs className="w-12 h-12 text-emerald-400 mb-2" />
            <span className="text-base font-semibold text-gray-100">
              Next.js
            </span>
          </div>
          <div className="flex flex-col items-center bg-gradient-to-br from-gray-800 to-emerald-900 rounded-2xl shadow-xl p-6 hover:scale-105 transition-transform">
            <SiTailwindcss className="w-12 h-12 text-emerald-400 mb-2" />
            <span className="text-base font-semibold text-gray-100">
              Tailwind CSS
            </span>
          </div>
          <div className="flex flex-col items-center bg-gradient-to-br from-gray-800 to-emerald-900 rounded-2xl shadow-xl p-6 hover:scale-105 transition-transform">
            <FaGitAlt className="w-12 h-12 text-emerald-400 mb-2" />
            <span className="text-base font-semibold text-gray-100">Git</span>
          </div>
          <div className="flex flex-col items-center bg-gradient-to-br from-gray-800 to-emerald-900 rounded-2xl shadow-xl p-6 hover:scale-105 transition-transform">
            <SiHtml5 className="w-12 h-12 text-emerald-400 mb-2" />
            <span className="text-base font-semibold text-gray-100">
              HTML
            </span>
          </div>
        </div>
      </section>
      <section id="Aboutme" className="bg-gray-800">
        <div className="max-w-5xl mx-auto py-16 px-6">
          <h2 className="text-4xl font-extrabold mb-4 text-emerald-400 text-center">
            À propos de moi
          </h2>
          <p className="text-lg text-gray-200 mb-10 text-center">
            Découvrez mon parcours académique et professionnel ci-dessous.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-12">
            <div className="md:w-1/2 w-full flex justify-center items-center mb-8 md:mb-0">
              <div className="relative flex justify-center items-center">
                <div className="absolute inset-0 flex justify-center items-center">
                  <div className="rounded-full w-[30px] h-[350px] bg-gradient-to-br from-emerald-400 via-blue-400 to-purple-500 blur-xl opacity-40"></div>
                </div>
                <div className="relative z-10">
                  <div className="rounded-full p-2 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 shadow-2xl border-4 border-emerald-400">
                    <Image
                      src="/images/img2.png"
                      alt="Photo de profil"
                      width={340}
                      height={340}
                      className="rounded-full object-cover w-[340px] h-[340px] border-4 border-white shadow-lg"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 w-full flex flex-col justify-center items-center">
              <h3 className="text-2xl font-bold mb-4 text-emerald-300 text-center">
                Mon cursus
              </h3>
              <ul className="space-y-5 w-full max-w-md mx-auto">
                <li className="bg-gray-900 rounded-xl p-5 shadow-lg border-l-4 border-emerald-400">
                  <span className="font-bold text-sm text-gray-100">
                    Janvier 2022 - Avril 2025
                  </span>
                  <br />
                  <span className="text-gray-200">
                    Informatique de gestion
                    <br />
                    Institut Supérieur de Technologie, Université de Bangui
                  </span>
                </li>
                <li className="bg-gray-900 rounded-xl p-5 shadow-lg border-l-4 border-emerald-400">
                  <span className="font-bold text-gray-100">2025</span>
                  <br />
                  <span className="text-gray-200 size-8">
                    Licence professionnelle en génie informatique
                    <br />
                    Institut Supérieur de Technologie, Université de Bangui
                  </span>
                </li>
                <li className="bg-gray-900 rounded-xl p-5 shadow-lg border-l-4 border-emerald-400">
                  <span className="font-bold text-gray-100">2024</span>
                  <br />
                  <span className="text-gray-200">
                    Diplôme Universitaire de Technologie (DUT) en génie
                    informatique
                    <br />
                    Institut Supérieur de Technologie, Université de Bangui
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="max-w-5xl mx-auto py-16 px-4 ">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-100">
          Mes projets
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 ">
          {/* Projet vitrine 1 */}
          <div className="bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-colors duration-300 p-6 flex flex-col items-center group">
            <Image
              src="/images/artisan1.jpg"
              alt="Site Vitrine 1"
              width={2848}
              height={4288}
              className="mb-4 group-hover:scale-110 transition"
            />
            <h3 className="text-xl font-bold mb-2 text-gray-100">Artisanat</h3>
            <p className="text-gray-300 text-justify mb-4">
              Site moderne pour la mise en valeur des produits artisanals
              locaux, avec présentation des services et galerie photo.
            </p>
            <Link
              href="#projects"
              className="mt-auto text-emerald-600 px-2 py-1 border border-emerald-600 rounded hover:bg-gray-900 transition font-semibold "
            >
              Voir le projet
            </Link>
          </div>
          {/* Projet vitrine 2 */}
          <div className="bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition p-6 flex flex-col items-center group">
            <Image
              src="/images/association.jpg"
              alt="Site Vitrine 2"
              width={2848}
              height={4288}
              className="mb-4 group-hover:scale-110 transition"
            />
            <h3 className="text-xl font-bold mb-2 text-gray-100">
              Association
            </h3>
            <p className="text-gray-300 text-justify mb-4">
              Ce site a pour objectif accompagner les femmes afin de promouvoir
              leur autonomie, leur leadership et leur rôle actif dans le
              developpement de la communauté.
            </p>
            <Link
              href="#projects"
              className="mt-auto text-emerald-600 px-2 py-1 border border-emerald-600 rounded  hover:bg-gray-900 transition font-semibold "
            >
              Voir le projet
            </Link>
          </div>
          {/* Projet vitrine 3 */}
          <div className="bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition p-6 flex flex-col items-center group">
            <Image
              src="/images/formation.jpg"
              alt="Site Vitrine 3"
              width={2848}
              height={4288}
              className="mb-4 group-hover:scale-110 transition"
            />
            <h3 className="text-xl font-bold mb-2 text-gray-100">Formation</h3>
            <p className="text-gray-300 text-justify mb-4">
              Site pour les formations certifiantes dans de divers domaines:
              technique, professionnel et academique.
            </p>
            <Link
              href="#projects"
              className="  mt-auto text-emerald-600 px-2 py-1 border border-emerald-600 rounded  hover:bg-gray-900 transition font-semibold "
            >
              Voir le projet
            </Link>
          </div>
        </div>
      </section>

      {/* PASSION AGRICULTURE */}
      <section id="passions" className="max-w-5xl mx-auto py-10 px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-100">
          Ma passion pour l'agriculture
        </h2>
        <p className="text-xl text-gray-100 mb-10 text-justify max-w-3xl mx-auto leading-relaxed">
          L’agriculture est pour moi bien plus qu’un métier : c’est une
          philosophie de vie, un lien profond avec la terre et le vivant. J’aime
          observer la nature, cultiver, apprendre et partager la beauté des
          paysages ruraux. Voici quelques clichés pris lors de mes balades et
          travaux, qui illustrent mon attachement à ce monde authentique et
          inspirant.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((num) => (
            <div
              key={num}
              className="relative group overflow-hidden rounded-2xl shadow-xl bg-gradient-to-br from-green-900/60 to-lime-800/40"
            >
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
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = "none";
                }}
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
        <h2 className="text-3xl font-bold mb-8 text-center text-emerald-400">
          Contactez-moi
        </h2>
        {sent ? (
          <div className="bg-emerald-700 text-emerald-100 p-4 rounded-xl mb-4 text-center shadow-lg">
            Merci pour votre message ! Je vous répondrai rapidement.
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-2xl shadow-xl p-8 flex flex-col gap-6 items-center"
          >
            <div className="w-full flex flex-col gap-6">
              <input
                type="text"
                name="nom"
                placeholder="Votre nom"
                value={form.nom}
                onChange={handleChange}
                required
                className="border border-gray-700 rounded-lg px-4 py-3 bg-gray-900 text-gray-100 placeholder-gray-400 w-full focus:outline-none focus:ring-2 focus:ring-emerald-400 text-base"
              />
              <input
                type="email"
                name="email"
                placeholder="Votre e-mail"
                value={form.email}
                onChange={handleChange}
                required
                className="border border-gray-700 rounded-lg px-4 py-3 bg-gray-900 text-gray-100 placeholder-gray-400 w-full focus:outline-none focus:ring-2 focus:ring-emerald-400 text-base"
              />
              <textarea
                name="message"
                placeholder="Votre message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                className="border border-gray-700 rounded-lg px-4 py-3 bg-gray-900 text-gray-100 placeholder-gray-400 w-full focus:outline-none focus:ring-2 focus:ring-emerald-400 text-base resize-none"
              />
            </div>
            <button
              type="submit"
              className="bg-emerald-600 text-gray-900 px-10 py-3 rounded-lg hover:bg-emerald-400 transition font-bold shadow-lg text-lg tracking-wide mt-2"
            >
              Envoyer
            </button>
          </form>
        )}
      </section>
      <section>
        <div>©{currentYear} Jerry MBENDA-LECA</div>
      </section>
    </>
  );
}

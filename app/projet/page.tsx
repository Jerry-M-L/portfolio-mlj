
{/* PROJETS */}
import Image from "next/image";  
import Link from "next/link";

export default function projet () {
  return (
    
      <section id="projects" className="max-w-5xl mx-auto py-16 px-4 ">
          <Link href="/" className="px-4 py-2 bg-emerald-600 text-white rounded hover:bg-emerald-400 transition font-semibold">← Retour à l&apos;accueil</Link>

        <h2 className="text-3xl font-bold mb-8 text-center text-gray-100">Mes projets</h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 ">
          {/* Projet vitrine 1 */}
          <div className="bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-colors duration-300 p-6 flex flex-col items-center group">
            <Image src="/images/artisan1.jpg" alt="Site Vitrine 1" width={2848} height={4288} className="mb-4 group-hover:scale-110 transition" />
            <h3 className="text-xl font-bold mb-2 text-gray-100">Artisanat</h3>
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
      )}
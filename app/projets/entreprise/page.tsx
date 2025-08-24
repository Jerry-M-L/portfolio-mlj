import Image from "next/image";

export default function Entreprise() {
  return (
    <main className="max-w-3xl mx-auto py-16 px-4">
      <h1 className="text-3xl font-bold mb-6 text-center text-cyan-400">Site Vitrine - Entreprise</h1>
        <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80" alt="E-commerce africain" className="mx-auto mb-6 rounded-lg shadow-lg w-full h-56 object-cover" />
        <p className="text-lg text-gray-200 mb-6 text-center">Site e-commerce pour produits naturels africains : boutique, témoignages, galerie, contact.</p>
        <ul className="list-disc list-inside text-gray-300 mb-8">
          <li>Accueil avec photo de produits</li>
          <li>Boutique en ligne</li>
          <li>Galerie de produits naturels</li>
          <li>Témoignages clients</li>
          <li>Formulaire de contact</li>
        </ul>
        <div className="grid grid-cols-2 gap-4 mb-8">
          <img src="https://images.unsplash.com/photo-1465101178521-c1a6f3b37b34?auto=format&fit=crop&w=400&q=80" alt="Produit africain" className="rounded-lg shadow w-full h-32 object-cover" />
          <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80" alt="Boutique e-commerce" className="rounded-lg shadow w-full h-32 object-cover" />
        </div>
        <div className="bg-gray-900 rounded-xl p-6 text-center text-gray-400">Projet réel : site e-commerce pour produits naturels africains.</div>
      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 mt-8">
        {/* Blog */}
        <div className="bg-gray-800 rounded-xl shadow-lg p-4 flex flex-col items-center">
          <img src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80" alt="Blog Vitrine" className="rounded-lg mb-4 w-full h-40 object-cover" />
          <span className="text-cyan-300 font-semibold">Site vitrine pour un blog</span>
        </div>
        {/* Beauté */}
        <div className="bg-gray-800 rounded-xl shadow-lg p-4 flex flex-col items-center">
          <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80" alt="Beauté Vitrine" className="rounded-lg mb-4 w-full h-40 object-cover" />
          <span className="text-pink-300 font-semibold">Site vitrine entreprise de beauté</span>
        </div>
        {/* E-commerce africain */}
        <div className="bg-gray-800 rounded-xl shadow-lg p-4 flex flex-col items-center">
          <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80" alt="E-commerce africain" className="rounded-lg mb-4 w-full h-40 object-cover" />
          <span className="text-green-300 font-semibold">E-commerce produits naturels africains</span>
        </div>
      </div>
    </main>
  );
}

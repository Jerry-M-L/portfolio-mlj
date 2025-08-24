import Image from "next/image";

export default function Artisan() {
  return (
    <main className="max-w-3xl mx-auto py-16 px-4">
      <h1 className="text-3xl font-bold mb-6 text-center text-cyan-400">Site Vitrine - Artisan</h1>
      <Image src="https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80" alt="Artisanat" width={600} height={224} className="mx-auto mb-6 rounded-lg shadow-lg w-full h-56 object-cover" />
      <p className="text-lg text-gray-200 mb-6 text-center">Site vitrine moderne pour un artisan menuisier : présentation, galerie de réalisations, contact rapide.</p>
      <ul className="list-disc list-inside text-gray-300 mb-8">
        <li>Accueil avec photo de l’atelier</li>
        <li>Galerie de meubles réalisés</li>
        <li>Présentation des services : création, réparation, sur-mesure</li>
        <li>Formulaire de contact</li>
      </ul>
      <div className="grid grid-cols-2 gap-4 mb-8">
        <Image src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80" alt="Meuble artisanal" width={400} height={128} className="rounded-lg shadow w-full h-32 object-cover" />
        <Image src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80" alt="Atelier artisan" width={400} height={128} className="rounded-lg shadow w-full h-32 object-cover" />
      </div>
      <div className="bg-gray-900 rounded-xl p-6 text-center text-gray-400">Projet réel : site vitrine pour un artisan menuisier.</div>
    </main>
  );
}

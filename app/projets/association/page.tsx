import Image from "next/image";

export default function Association() {
  return (
    <main className="max-w-3xl mx-auto py-16 px-4">
      <h1 className="text-3xl font-bold mb-6 text-center text-cyan-400">Site Vitrine - Association</h1>
      <img src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80" alt="Association" className="mx-auto mb-6 rounded-lg shadow-lg w-full h-56 object-cover" />
      <p className="text-lg text-gray-200 mb-6 text-center">Site vitrine pour une association culturelle : agenda, actualités, présentation des membres, contact.</p>
      <ul className="list-disc list-inside text-gray-300 mb-8">
        <li>Accueil avec photo d’événement</li>
        <li>Agenda des activités</li>
        <li>Présentation des membres</li>
        <li>Actualités et annonces</li>
        <li>Formulaire de contact</li>
      </ul>
      <div className="grid grid-cols-2 gap-4 mb-8">
        <img src="https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=400&q=80" alt="Evénement association" className="rounded-lg shadow w-full h-32 object-cover" />
        <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80" alt="Membres association" className="rounded-lg shadow w-full h-32 object-cover" />
      </div>
      <div className="bg-gray-900 rounded-xl p-6 text-center text-gray-400">Projet réel : site vitrine pour une association culturelle.</div>
    </main>
  );
}

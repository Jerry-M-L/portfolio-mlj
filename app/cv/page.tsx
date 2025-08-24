import React from "react";

import Link from "next/link";

export default function CVPage() {
  return (
    <main className="max-w-4xl mx-auto py-16 px-4">
      <div className="mb-4 flex justify-start">
  <Link href="/" className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition font-semibold">← Retour à l&apos;accueil</Link>
      </div>
  <h2 className="text-3xl font-bold mb-6 text-center">Mon CV</h2>
  <iframe
        src="/CV.pdf"
        title="Mon CV"
        className="w-full h-[80vh] border rounded shadow"
      />
    </main>
  );
}

import React from "react";

import Link from "next/link";

export default function CVPage() {
  return (
    
    <main className="max-w-4xl mx-auto py-16 px-4">
      <div className="mb-4 flex justify-start">
  <Link href="/" className="px-4 py-2 bg-emerald-600 text-white rounded hover:bg-emerald-400 transition font-semibold">← Retour à l&apos;accueil</Link>
      </div>

  <iframe
        src="/images/CV.pdf"
        title="Mon CV"
        className="w-full h-[180vh] border rounded shadow"
      />
    </main>
  );
}

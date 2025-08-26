import "./globals.css";

export const metadata = {
  title: "MLJ Soft ",
  description: "Portfolio développeur",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
  <body className="bg-gray-900 text-gray-100 transition-colors duration-300" data-theme="dark">{children}</body>
    </html>
  );
}
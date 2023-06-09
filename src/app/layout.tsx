import "./globals.css";

export const metadata = {
  title: "Pedidos - Yanna Confeitaria",
  description: "Página para fazer pedidos de bolos na Yanna Confeitaria",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="bg-slate-50 text-gray-900">{children}</body>
    </html>
  );
}

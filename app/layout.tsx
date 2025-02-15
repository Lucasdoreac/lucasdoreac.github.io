import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Lucas Dórea Cardoso - Desenvolvedor de Software',
  description: 'Portfólio pessoal de Lucas Dórea Cardoso, Desenvolvedor de Software e Especialista em Soluções Sustentáveis.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
        />
      </head>
      <body className="bg-gray-100">
        {children}
      </body>
    </html>
  );
}
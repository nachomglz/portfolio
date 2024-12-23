import { Metadata } from 'next';
import './global.css';

export const metadata: Metadata = {
  title: 'Nacho Martin',
  description: "Nacho Martin's Portfolio",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

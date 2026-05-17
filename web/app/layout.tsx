import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Fery Yundara Putera — Senior Software Engineer",
  description:
    "Senior Software Engineer with 12 years building EdTech at scale. React, Next.js, Node.js, AI-assisted development.",
  openGraph: {
    title: "Fery Yundara Putera — Senior Software Engineer",
    description:
      "Core developer on the team that powered 32M+ lessons. 12 years. 5 companies.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

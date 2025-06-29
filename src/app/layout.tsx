import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bitwarden Viewer",
  description: "This is a simple application to view Bitwarden vault exports.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

import Navbar from "@/components/Navbar";
import "./globals.css";

import TitleBar from "@/components/TitleBar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-background p-0 m-0 text-foreground duration-300 bg-">
        <TitleBar />
        <Navbar />
        {children}
      </body>
    </html>
  );
}

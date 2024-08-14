import "./globals.css";
import mainFont from "@/constants/fontStyle";
import { Metadata } from "next";
import metadataJSON from "@/config/metaData";
import ClientProviders from "@/components/ClientProviders";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

export const metadata: Metadata = {
  ...metadataJSON,
  metadataBase: new URL(baseUrl),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${mainFont.className}`}>
        <ClientProviders>
          <div className="relative flex flex-col h-screen">
            <main className="flex-grow">{children}</main>
          </div>
        </ClientProviders>
      </body>
    </html>
  );
}

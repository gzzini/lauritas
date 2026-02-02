import type { Metadata } from "next";
import { Noto_Serif_TC } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const notoSerifTC = Noto_Serif_TC({
  variable: "--font-noto-serif-tc",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

const abeatByKai = localFont({
  src: "../fonts/AbeatbyKai.ttf",
  variable: "--font-abeat-by-kai",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Lauritas Ateliê",
  description:
    "Lauritas Ateliê — Arte feita com carinho e dedicação. Peças exclusivas e artesanais.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                const theme = localStorage.getItem('theme');
                if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  document.documentElement.classList.add('dark');
                }
              })();
            `,
          }}
        />
      </head>
      <body
        className={`${notoSerifTC.variable} ${abeatByKai.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

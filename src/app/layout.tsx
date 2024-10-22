import type { Metadata } from "next";
import { ColorSchemeScript, MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import "./globals.css";
import { ThemeProvider } from "../context/ThemeContext";
import { HeaderSearch } from "@/components/Header";
import { FooterLinks } from "@/components/Footer";
import { cookies } from "next/headers";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // const context = useContext(ThemeContext);
  // console.log(context);

  const cookieStore = cookies();
  const isLogin = cookieStore.get("isLogin");
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <ThemeProvider>
          <MantineProvider>
            <HeaderSearch isLogin={isLogin?.value ? true : false} />
            <main>{children}</main>
            <FooterLinks />
          </MantineProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

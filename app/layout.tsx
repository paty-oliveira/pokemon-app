import './globals.css';
import { Montserrat } from 'next/font/google';
import StyledComponentsRegistry from "@/app/registry";
import React from "react";

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata = {
  title: 'Pokémon',
  description: 'Generated by create next app',
}

export default function RootLayout({ children, }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={montserrat.className} suppressHydrationWarning={true}>
      <StyledComponentsRegistry>
        {children}
      </StyledComponentsRegistry>
      </body>
    </html>
  )
}

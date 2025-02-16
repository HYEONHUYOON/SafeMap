"use server"

import { Providers } from "@/components/Providers";

export default async function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <Providers>
        {children}
    </Providers>
  );
}

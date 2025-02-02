"use client";
import Navigation from "@/components/navigation";
import { Spotlight } from "@/components/spotlight";
import { HeroUIProvider } from "@heroui/react";
import { ThemeProvider } from "next-themes";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <HeroUIProvider>
      <ThemeProvider enableSystem attribute="class" defaultTheme="system">
        <Navigation />
        <Spotlight />
        <main className="max-w-screen-lg p-6 mx-auto">{children}</main>
      </ThemeProvider>
    </HeroUIProvider>
  );
}

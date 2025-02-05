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
        <div className="absolute inset-0 bg-light-grid dark:bg-dark-grid bg-[size:54px_54px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] -z-10"></div>
        <main className="max-w-screen-lg p-6 mx-auto">{children}</main>
      </ThemeProvider>
    </HeroUIProvider>
  );
}

"use client";
import Navigation from "@/components/navigation";
import { HeroUIProvider } from "@heroui/react";
import { ThemeProvider } from "next-themes";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <HeroUIProvider>
      <ThemeProvider enableSystem attribute="class" defaultTheme="system">
        <Navigation />
        <main>{children}</main>
      </ThemeProvider>
    </HeroUIProvider>
  );
}

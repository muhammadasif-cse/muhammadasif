"use client";
import {Button} from "@heroui/button";
import {Moon, Sun} from "lucide-react";
import {useTheme} from "next-themes";
import {useEffect, useState} from "react";

export function ThemeSwitcher() {
  const {theme, setTheme} = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div>
      <Button
        radius="sm"
        isIconOnly
        variant="flat"
        onPress={() => setTheme(theme === "light" ? "dark" : "light")}
      >
        {theme === "light" ? <Sun size={24} /> : <Moon size={24} />}
      </Button>
    </div>
  );
}

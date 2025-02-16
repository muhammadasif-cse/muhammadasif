"use client";
import {navigation} from "@/lib/data";
import {Drawer, DrawerBody, DrawerContent, DrawerFooter, DrawerHeader} from "@heroui/drawer";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem} from "@heroui/navbar";
import {Skeleton} from "@heroui/skeleton";
import Link from "next/link";
const ThemeSwitcher = dynamic(() => import("./theme-switcher").then((mod) => mod.ThemeSwitcher), {
  loading: () => <Skeleton className="w-10 h-10 rounded-xl" />,
});

import {Button} from "@heroui/button";
import {useDisclosure} from "@heroui/use-disclosure";
import {Menu} from "lucide-react";
import dynamic from "next/dynamic";
import {usePathname} from "next/navigation";

export const AsifLogo = () => {
  return (
    <svg fill="none" height="36" viewBox="0 0 32 32" width="36">
      <path
        clipRule="evenodd"
        d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  );
};

export default function Navigation() {
  const pathname = usePathname();
  const {isOpen, onOpen, onOpenChange} = useDisclosure();

  const isActiveRoute = (href: string) => {
    return pathname === href;
  };

  return (
    <nav aria-label="Main navigation">
      <Navbar isBordered>
        <NavbarBrand as={Link} href="/">
          <AsifLogo />
          <p className="font-bold text-inherit">ASIF</p>
        </NavbarBrand>
        <NavbarContent className="hidden gap-4 sm:flex" justify="center">
          {navigation.map((item) => (
            <NavbarItem key={item.id}>
              <Link href={item.href} className={isActiveRoute(item?.href) ? "text-secondary" : ""}>
                {item.name}
              </Link>
            </NavbarItem>
          ))}
        </NavbarContent>
        <NavbarContent justify="end">
          <NavbarItem className="flex items-center gap-1">
            <div className="items-center hidden gap-1 lg:flex">
              <ThemeSwitcher />
              <Button radius="sm" as={Link} color="secondary" href="/resume" variant="flat">
                Resume
              </Button>
            </div>
            <Button
              className="flex lg:hidden"
              isIconOnly
              color="secondary"
              variant="flat"
              onPress={onOpen}
            >
              <Menu />
            </Button>
          </NavbarItem>
        </NavbarContent>
      </Navbar>
      <Drawer size="xs" isOpen={isOpen} onOpenChange={onOpenChange}>
        <DrawerContent>
          {(onClose) => (
            <>
              <DrawerHeader className="flex items-center gap-1">
                <AsifLogo />
                <p className="font-bold text-inherit">ASIF</p>
              </DrawerHeader>
              <DrawerBody className="w-full space-y-1">
                {navigation.map((item) => (
                  <div key={item.id}>
                    <Link href={item.href}>
                      <p
                        className={`${
                          isActiveRoute(item?.href) && "bg-secondary text-white"
                        } w-full p-3 border-b shadow-lg shadow-divider drop-shadow hover:bg-secondary rounded-xl`}
                      >
                        {item.name}
                      </p>
                    </Link>
                  </div>
                ))}
              </DrawerBody>
              <DrawerFooter className="items-center justify-between w-full">
                <Button color="danger" variant="flat" onPress={onClose}>
                  Close
                </Button>
                <div className="flex items-center gap-1 lg:hidden">
                  <ThemeSwitcher />
                  <Button as={Link} color="secondary" href="/resume" variant="flat">
                    Resume
                  </Button>
                </div>
              </DrawerFooter>
            </>
          )}
        </DrawerContent>
      </Drawer>
    </nav>
  );
}

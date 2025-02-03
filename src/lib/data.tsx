export interface INavigation {
  id: number;
  name: string;
  href: string;
}
export interface ISocial {
  id: number;
  name: string;
  href: string;
  icon: string;
}
export const navigation: INavigation[] = [
  {
    id: 0,
    name: "Home",
    href: "/",
  },
  {
    id: 1,
    name: "About",
    href: "/about",
  },
  {
    id: 2,
    name: "Projects",
    href: "/projects",
  },
  {
    id: 3,
    name: "Blogs",
    href: "/blogs",
  },
];

export const socials: ISocial[] = [
  {
    id: 1,
    name: "Github",
    href: "https://github.com/muhammadasif-cse",
    icon: "github",
  },
  {
    id: 2,
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/muhammadasif-cse/",
    icon: "linkedin",
  },
  {
    id: 2,
    name: "Youtube",
    href: "https://www.youtube.com/@muhammadasif_cse",
    icon: "youtube",
  },
  {
    id: 3,
    name: "Instagram",
    href: "https://www.instagram.com/muhammadasif_cse/",
    icon: "instagram",
  },
  {
    id: 4,
    name: "Facebook",
    href: "https://www.facebook.com/muhammadasif.cse",
    icon: "facebook",
  },
];

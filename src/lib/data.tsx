export interface INavigation {
  id: number;
  name: string;
  href: string;
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

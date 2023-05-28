export const menuItems: {
  title: string;
  url: string;
  submenu?: { title: string; url: string }[];
}[] = [
  {
    title: "About",
    url: "/about",
    submenu: [{ title: "About", url: "/About" }],
  },
  {
    title: "Services",
    url: "/services",
  },
  {
    title: "Our Fleet",
    url: "/ourfleet",
  },
  {
    title: "Contact",
    url: "/contact",
  },
  {
    title: "Blog",
    url: "/blog",
  },
];

/* export const navMenuItemsData = [
  {
    title: "Pages",
    to: "/",
    submenu: [
      {
        title: "About",
        to: "/About",
      },
      {
        title: "Contact",
        to: "/Contact",
      },
      {
        title: "Login",
        to: "/",
      },
      {
        title: "Register",
        to: "/",
      },
      {
        title: "Faq",
        to: "/Faq",
      },
      {
        title: "Testimonials",
        to: "/Testimonials",
      },
      {
        title: "404 Page",
        to: "/404",
      },
      {
        title: "Coming Soon",
        to: "/Coming-soon",
      },
    ],
  },
];
 */

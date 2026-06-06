import { navItems } from "@/constants/site";

export type CurrentLocation = {
  pathname: string;
  hash: string;
};

export function getCurrentLocation(): CurrentLocation {
  return {
    pathname: window.location.pathname,
    hash: window.location.hash
  };
}

export function isNavItemActive(item: (typeof navItems)[number], location: CurrentLocation) {
  if (item.href === "/") {
    return location.pathname === "/" && location.hash !== "#faq";
  }

  if (item.href === "/products") {
    return location.pathname === "/products" || location.pathname.startsWith("/products/");
  }

  return location.pathname === item.href;
}

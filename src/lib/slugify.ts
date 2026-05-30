export function slugifyNavItem(item: string) {
  if (item === "Shop") return "shop";
  if (item === "FAQ") return "faq";
  return item.toLowerCase().replace(/\s+/g, "-");
}

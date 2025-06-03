export const scrollToElement = (
  event: React.MouseEvent<Element, MouseEvent>
) => {
  event.preventDefault();

  const href = (event.currentTarget as HTMLAnchorElement).getAttribute("href");
  if (!href) return;

  const element = document.querySelector(href);
  element?.scrollIntoView({ behavior: "smooth" });
};

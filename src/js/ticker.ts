export default function ticker() {
  const elements = Array.from(
    document.querySelectorAll<HTMLElement>(".ticker")
  );
  elements.forEach((element) => {
    const list = element.querySelector<HTMLUListElement>("ul");
    if (!list) return;
    const children = Array.from(list.children);
    children.forEach((child) => {
      const childClone = child.cloneNode(true) as HTMLElement;
      childClone.setAttribute("aria-hidden", "");
      list.appendChild(childClone);
    });
  });
}

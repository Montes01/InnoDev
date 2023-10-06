import { useState } from "preact/hooks";

type Props = {
  children: React.ReactNode;
};
export const Header = ({ children }: Props) => {
  const [isFixed, setIsFixed] = useState(false);
  const StickyButtons = document.getElementById("StickyButtons");
  if (StickyButtons) {
    StickyButtons.className = isFixed
      ? StickyButtons.className.concat(" bg-primary ")
      : StickyButtons.className.replace("bg-primary", "");
    StickyButtons.style.position = isFixed ? "fixed" : "";
    StickyButtons.style.padding = isFixed ? "1.3rem" : "";
    StickyButtons.style.top = isFixed ? "0" : "";
  }

  document.addEventListener("scroll", () => {
    if (window.scrollY > 70) {
      setIsFixed(true);
    } else if (window.scrollY < 45) {
      setIsFixed(false);
    }
  });
  return (
    <header className="max-w-[1000px] z-20 w-full absolute flex flex-col top-0 items-center justify-center gap-3 h-40 p-5 bg-primary">
      {children}
    </header>
  );
};

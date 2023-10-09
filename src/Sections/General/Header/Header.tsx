import { useState } from "preact/hooks";

type Props = {
  children: React.ReactNode;
};
export const Header = ({ children }: Props) => {
  const [isFixed, setIsFixed] = useState(false);
  const StickyButtons = document.getElementById("StickyButtons");
  const newStyle =
    " bg-primary fixed pt-[1.3rem] w-full rounded-b-xl border border-[#aaa] pb-[1.3rem] top-0 z-50 border-x-2";
  if (StickyButtons) {
    if (isFixed) StickyButtons.className = StickyButtons.className.replace("w-3/6", newStyle);
    else
      StickyButtons.className = StickyButtons.className.replace(newStyle, "w-3/6");
  }

  document.addEventListener("scroll", () => {
    if (window.scrollY > 70) setIsFixed(true);
    else if (window.scrollY < 45) setIsFixed(false);
  });
  return (
    <header 
      className="1500px:border-x 2000px:border-[#ccc] 1500px:flex-row 1500px:justify-center z-20 w-full relative flex flex-col top-0 items-center justify-center gap-3 h-40 1500px:h-32 p-5 bg-primary">
      {children}
    </header>
  );
};

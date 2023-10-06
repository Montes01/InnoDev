import { useState } from "preact/hooks";

type Props = {
  children: React.ReactNode;
};
export const Header = ({ children }: Props) => {
  const [isFixed, setIsFixed] = useState(false);
  const StickyButtons = document.getElementById("StickyButtons");
  const newStyle =
    " bg-primary fixed pt-[1.3rem] rounded-b-xl border border-[#aaa] pb-[1.3rem] top-0 z-50 border-x-2";
  if (StickyButtons) {
    if (isFixed) {
      StickyButtons.className = StickyButtons.className + newStyle;
    } else {
      StickyButtons.className = StickyButtons.className.replace(newStyle, "");
    }
  }

  document.addEventListener("scroll", () => {
    if (window.scrollY > 70) {
      setIsFixed(true);
    } else if (window.scrollY < 45) {
      setIsFixed(false);
    }
  });
  return (
    <header 
    className="max-w-[1000px] border-x border-[#aaa] z-20 w-full relative flex flex-col top-0 items-center justify-center gap-3 h-40 p-5 bg-primary">
      {children}
    </header>
  );
};

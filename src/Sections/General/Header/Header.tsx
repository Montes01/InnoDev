import { SolidfyHeader } from "../../../Helpers/StyleFunctions";
type Props = {
  children: React.ReactNode;
};
export const Header = ({ children }: Props) => {
  document.addEventListener("scroll", () => {
    if (screen.width < 500) return;
    if (window.scrollY > 70)
      SolidfyHeader(document.getElementById("StickyButtons"), false);
    else if (window.scrollY < 45)
      SolidfyHeader(document.getElementById("StickyButtons"), true);
  });
  return (
    <header
      id="Header"
      className=" mobile:flex-col mobile:h-[95vh] mobile:mt-[5vh] mobile:fixed mobile:p-5 1500px:border-x 2000px:border-[#ccc] 1500px:flex-row 1500px:justify-center z-30 w-full relative flex flex-col top-0 items-center justify-center gap-3 h-40 1500px:h-32 p-5 bg-primary transition-transform  mobile:translate-x-[-100%]"
    >
      {children}
    </header>
  );
};
  
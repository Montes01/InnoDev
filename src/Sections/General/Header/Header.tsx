import { SolidfyHeader } from "../../../Helpers/StyleFunctions";
type Props = {
  children: React.ReactNode;
};
export const Header = ({ children }: Props) => {
  document.addEventListener("scroll", () => {
    const StickyButtons = document.getElementById("StickyButtons");
    if (window.scrollY > 70) SolidfyHeader(StickyButtons, false);
    else if (window.scrollY < 45) SolidfyHeader(StickyButtons, true);
  });
  return (
    <header
      id="Header"
      className=" mobile:flex-col mobile:justify-start mobile:gap-12 mobile:h-[95vh] mobile:mt-[5vh] mobile:fixed mobile:py-20  1500px:flex-row 1500px:justify-center z-30 w-full relative flex flex-col top-0 items-center justify-center gap-3 h-40 1500px:h-32 p-5 bg-contrast transition-transform  mobile:translate-x-[-100%]"
    >
      {children}
    </header>
  );
};

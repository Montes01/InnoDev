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
      className="z-30 w-full relative flex flex-col top-0 items-center justify-center gap-3 h-40  p-5 bg-contrast transition-transform  
      
      1000px:flex-row 1000px:justify-center 1000px:h-32

      mobile:flex-col mobile:justify-start mobile:gap-12 mobile:h-[95vh] mobile:mt-[5vh] mobile:fixed mobile:py-20 mobile:translate-x-[-100%]
      mobileX:flex-col mobileX:justify-start mobileX:gap-12 mobileX:h-[95vh] mobileX:mt-[5vh] mobileX:fixed mobileX:py-20 mobileX:translate-x-[-100%]
      HStretch:items-start HStretch:justify-between
      "
    >
      {children}
    </header>
  );
};

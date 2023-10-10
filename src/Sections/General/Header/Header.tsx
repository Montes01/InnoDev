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
    <header className="mobile:flex-col mobile:h-screen mobile:fixed mobile:p-5 1500px:border-x 2000px:border-[#ccc] 1500px:flex-row 1500px:justify-center z-20 w-full relative flex flex-col top-0 items-center justify-center gap-3 h-40 1500px:h-32 p-5 bg-primary  mobile:translate-x-[-100%]">
      <svg width="24" height="24" viewBox="0 0 24 24">
        <path
          fill="currentColor"
          fill-rule="evenodd"
          d="M5.75 5.25h12.5a.75.75 0 1 1 0 1.5H5.75a.75.75 0 0 1 0-1.5zm0 6h12.5a.75.75 0 1 1 0 1.5H5.75a.75.75 0 1 1 0-1.5zm0 6h12.5a.75.75 0 1 1 0 1.5H5.75a.75.75 0 1 1 0-1.5z"
        ></path>
      </svg>
      {children}
    </header>
  );
};

export const SolidfyHeader = (element: HTMLElement, isSolid: Boolean) => {
  
  if (window.innerHeight < 650 || window.innerWidth < 500) return;
  const newStyle =
    "bg-contrast/75 backdrop-brightness-25 backdrop-invert backdrop-blur-xl backdrop-grayscale fixed py-6 rounded-b-xl border-b border-[#aaa] top-0 z-50 border-x-2";
  if (element) {
    if (!isSolid)
      element.className = element.className.replace(
        "1000px:py-2 1000px:w-3/6",
        newStyle
      );
    else
      element.className = element.className.replace(
        newStyle,
        "1000px:py-2 1000px:w-3/6"
      );
  }
};

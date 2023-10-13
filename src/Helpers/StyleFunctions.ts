export const SolidfyHeader = (element: HTMLElement, isSolid: Boolean) => {
  if (screen.width <= 500 || screen.height <= 700) {
    return;
  }
  const newStyle =
    "bg-contrast/75 backdrop-brightness-25 backdrop-invert backdrop-blur-xl backdrop-grayscale fixed py-6 rounded-b-xl border-b border-[#aaa] top-0 z-50 border-x-2";
  if (element) {
    if (!isSolid)
      element.className = element.className.replace(
        "1500px:py-2 1500px:w-3/6",
        newStyle
      );
    else
      element.className = element.className.replace(
        newStyle,
        "1500px:py-2 1500px:w-3/6"
      );
  }
};

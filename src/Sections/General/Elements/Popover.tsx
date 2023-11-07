import { useRef } from "preact/hooks";
import { CheckIcon } from "../../../Consts/svgs.tsx";
import type { Feature } from "../../../Consts/Types.tsx";
import { ShowAndDisappear } from "../../../Helpers/StyleFuncionts.ts";

export default function popover({ popover, title }: Feature) {
  const popoverRef = useRef<HTMLDivElement>(null);
  const handleClick = () => {
    ShowAndDisappear(popoverRef, 2, true);
  };
  return (
    <div className="relative flex items-center flex-col w-full">
      <button
        onClick={handleClick}
        className="flex justify-start gap-4 h-full items-center w-full bg-white py-3 px-6 font-sans text-xs text-black  rounded-lg shadow-md font-bold uppercase shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
      >
        <CheckIcon className="h-7" />
        {title}
      </button>
      <div
        ref={popoverRef}
        class={`hidden absolute border-primary shadow-[0_0_5px_black] -left-5 -top-16 text-white bg-contrast transition-opacity opacity-0 whitespace-normal break-words rounded-lg border border-blue-gray-50 py-4 px-12 font-sans text-sm font-normal text-blue-gray-500 shadow-blue-gray-500/10 focus:outline-none`}
      >
        {popover}
      </div>
    </div>
  );
}

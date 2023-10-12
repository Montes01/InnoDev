import type { Question as Quest } from "../../../../Consts/Types";
import { useState, useRef } from "preact/hooks";

export const Question = ({ question, response }: Quest) => {
  const [isOpen, setIsOpen] = useState(false);
  const responseRef = useRef(null);
  const handleClick = () => {
    const res = responseRef.current
    if (isOpen) {
      setTimeout(() => {
        res.style.height = "0";
      }, 300)
      res.style.opacity = "0";
    } else {
      res.style.height = "auto";
      res.style.opacity = "1";
    }
    setIsOpen(!isOpen);
  };
  return (
    <div className=" flex flex-col gap-5 items-center">
      <button
        type="button"
        onClick={handleClick}
        className="bg-secondary mobile:text-base text-2xl mobile:px-3 px-36 py-5 rounded-xl"
      >
        {question}
      </button>
      <p
        ref={responseRef}
        className="text-lg max-w-[40ch] transition-opacity ease-in-out duration-300 opacity-0 overflow-hidden h-0 w-full"
      >
        {response}
      </p>
    </div>
  );
};

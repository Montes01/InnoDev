import { useEffect, useState } from "preact/hooks";

export const Hamburguer = () => {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    const Head = document.getElementById("Header");

    if (!isOpen && Head)
      Head.className +=
        " mobile:translate-x-[-100%] mobileX:translate-x-[-100%]";
    else if (Head) {
      Head.className = Head.className.replace("mobile:translate-x-[-100%]", "");
      Head.className = Head.className.replace(
        "mobileX:translate-x-[-100%]",
        ""
      );
    }
  }, [isOpen]);

  return (
    <section class="mobile:flex mobileX:flex max-w-[2000px] fixed z-50 bg-contrast hidden w-full px-5">
      <div class="relative w-full h-[5vh] min-h-[50px] ">
        <button onClick={() => setIsOpen(!isOpen)} class="h-full invert">
          <svg width="24" height="24" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              fill-rule="evenodd"
              d="M5.75 5.25h12.5a.75.75 0 1 1 0 1.5H5.75a.75.75 0 0 1 0-1.5zm0 6h12.5a.75.75 0 1 1 0 1.5H5.75a.75.75 0 1 1 0-1.5zm0 6h12.5a.75.75 0 1 1 0 1.5H5.75a.75.75 0 1 1 0-1.5z"
            ></path>
          </svg>
        </button>
        <a
          href="/"
          class="absolute text-center font-bold text-white text-xl top-0 h-full left-1/2 -translate-x-1/2 flex items-center gap-3 px-2"
        >
          <img
            src="/Images/InnoDev.png"
            class="h-full drop-shadow-[0_0_3px_black]"
            alt=""
          />
        </a>
      </div>
    </section>
  );
};

export const Hamburguer = () => {
  const handleClick = () => {
    const Head = document.getElementById("Header");
    if (Head.className.indexOf("translate-x-[-100%]") === -1)
      Head.className +=
        " mobile:translate-x-[-100%] mobileX:translate-x-[-100%]";
    else {
      Head.className = Head.className.replace("mobile:translate-x-[-100%]", "");
      Head.className = Head.className.replace(
        "mobileX:translate-x-[-100%]",
        ""
      );
    }
  };

  return (
    <section class="mobile:flex mobileX:flex fixed z-50 bg-primary hidden w-full px-5">
      <div class="relative w-full h-[5vh] min-h-[50px] ">
        <button onClick={handleClick} class="h-full">
          <svg width="24" height="24" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              fill-rule="evenodd"
              d="M5.75 5.25h12.5a.75.75 0 1 1 0 1.5H5.75a.75.75 0 0 1 0-1.5zm0 6h12.5a.75.75 0 1 1 0 1.5H5.75a.75.75 0 1 1 0-1.5zm0 6h12.5a.75.75 0 1 1 0 1.5H5.75a.75.75 0 1 1 0-1.5z"
            ></path>
          </svg>
        </button>
        <a href="/" class="absolute text-center font-bold text-contrast text-xl top-0 h-full left-1/2 -translate-x-1/2 flex items-center gap-3 p-2">
          <img
            src="/Images/InnoDev.png"
            class="h-full drop-shadow-[0_0_3px_black]"
            alt=""
          />
          InnoDev
        </a>
      </div>
    </section>
  );
};

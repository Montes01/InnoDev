export const Hamburguer = () => {
  const handleClick = () => {
    const Head = document.getElementById("Header");
    if (Head.className.indexOf("translate-x-[-100%]") === -1)
      Head.className += " mobile:translate-x-[-100%]";
    else Head.className = Head.className.replace("translate-x-[-100%]", "");
  };

  return (
    <section
      onClick={handleClick}
      class="mobile:flex h-[5vh] min-h-[50px] fixed z-50 bg-primary hidden w-full px-5"
    >
      <button>
        <svg width="24" height="24" viewBox="0 0 24 24">
          <path
            fill="currentColor"
            fill-rule="evenodd"
            d="M5.75 5.25h12.5a.75.75 0 1 1 0 1.5H5.75a.75.75 0 0 1 0-1.5zm0 6h12.5a.75.75 0 1 1 0 1.5H5.75a.75.75 0 1 1 0-1.5zm0 6h12.5a.75.75 0 1 1 0 1.5H5.75a.75.75 0 1 1 0-1.5z"
          ></path>
        </svg>
      </button>
    </section>
  );
};

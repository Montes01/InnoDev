type Props = {
  className?: string;
};

export const CheckIcon = ({ className }: Props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    data-popover-target="popover"
    className={className}
  >
    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
    <g
      id="SVGRepo_tracerCarrier"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></g>
    <g id="SVGRepo_iconCarrier">
      {" "}
      <path
        d="M8.95043 20.6471C6.17301 19.9956 4.00437 17.827 3.35287 15.0496C2.88237 13.0437 2.88237 10.9563 3.35287 8.95043C4.00437 6.17301 6.17301 4.00437 8.95043 3.35288C10.9563 2.88237 13.0437 2.88237 15.0496 3.35287C17.827 4.00437 19.9956 6.173 20.6471 8.95043C21.1176 10.9563 21.1176 13.0437 20.6471 15.0496C19.9956 17.827 17.827 19.9956 15.0496 20.6471C13.0437 21.1176 10.9563 21.1176 8.95043 20.6471Z"
        stroke="#00e04f"
        stroke-width="1.5"
      ></path>{" "}
      <path
        d="M8.95043 20.6471C10.9563 21.1176 13.0437 21.1176 15.0496 20.6471C17.827 19.9956 19.9956 17.827 20.6471 15.0496C21.1176 13.0437 21.1176 10.9563 20.6471 8.95043C19.9956 6.173 17.827 4.00437 15.0496 3.35288C13.0437 2.88237 10.9563 2.88237 8.95043 3.35288C6.173 4.00437 4.00437 6.17301 3.35287 8.95043"
        stroke="#044819"
        stroke-width="1.5"
        stroke-linecap="round"
      ></path>{" "}
      <path
        d="M9.25 11.75L11.25 13.75L14.75 10"
        stroke="#00e04f"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></path>{" "}
    </g>
  </svg>
);

export const MenuIcon = () => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24">
      <path
        fill="currentColor"
        fill-rule="evenodd"
        d="M5.75 5.25h12.5a.75.75 0 1 1 0 1.5H5.75a.75.75 0 0 1 0-1.5zm0 6h12.5a.75.75 0 1 1 0 1.5H5.75a.75.75 0 1 1 0-1.5zm0 6h12.5a.75.75 0 1 1 0 1.5H5.75a.75.75 0 1 1 0-1.5z"
      ></path>
    </svg>
  );
};

type Props = {
  children: React.ReactNode;
};
export const Header = ({ children }: Props) => {

  return (
    <header
      id="Header"
      className="z-30 w-full fixed flex top-0 2000px:border-x max-w-[2000px] items-center justify-center gap-3 h-20 bg-contrast/95 backdrop-brightness-50 transition-transform  
      fullMobile:flex-col fullMobile:justify-start fullMobile:mt-[5vh]
      fullMobile:gap-12 fullMobile:h-[95vh] fullMobile:fixed fullMobile:px-0
      HStretch:items-start HStretch:justify-between
      "
    >
      {children}
    </header>
  );
};

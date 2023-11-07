import { useState } from "preact/hooks";
import { Features } from "../../../../Consts/Consts";
import Popover from "../../../General/Elements/Popover";

export const FeaturesInfo = () => {
  const [list, setList] = useState(Features.slice(0, 3));
  const handleClick = () => {
    setList(Features);
  };
  return (
    <aside className="flex flex-col items-center justify-center gap-12 w-2/6 px-12">
      <section class=" w-full flex flex-col gap-12 items-start">
        {list.map((el) => (
          <Popover title={el.title} popover={el.popover} />
        ))}
      </section>
      <button onClick={handleClick} className="underline bg-none text-white">
        ver mas
      </button>
      <p>
        Elementos que garantizan que un software sea de alta calidad y fácil de
        usar, lo que a su vez contribuye a una experiencia positiva para los
        usuarios.
      </p>
    </aside>
  );
};

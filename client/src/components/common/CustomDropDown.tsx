import React from "react";
import { IDropDownProps } from "./interfaces/interface";

export const CustomDropDown = (props: IDropDownProps) => {
  const [selected, setSelected] = React.useState<string>("");

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    event.preventDefault();
    setSelected(event.target.value);
    console.log(selected);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("onSubmit");
  };

  return (
    <div className="hidden sm:flex">
      <div className="relative inline-flex">
        <svg
          className="w-2 h-2 absolute top-0 right-0 m-3 pointer-events-none font-mono"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 412 232"
        >
          <path
            d="M206 171.144L42.678 7.822c-9.763-9.763-25.592-9.763-35.355 0-9.763 9.764-9.763 25.592 0 35.355l181 181c4.88 4.882 11.279 7.323 17.677 7.323s12.796-2.441 17.678-7.322l181-181c9.763-9.764 9.763-25.592 0-35.355-9.763-9.763-25.592-9.763-35.355 0L206 171.144z"
            fill="#648299"
            fillRule="nonzero"
          />
        </svg>
        <form className="text-sm" onSubmit={(e) => handleSubmit(e)}>
          <select
            value={selected}
            onChange={(e) => handleChange(e)}
            className="bg-gray-100 h-8 pl-3 pr-8 border-none active:border-none focus:outline-none appearance-none cursor-pointer"
          >
            <option value="FIN">{props.options.header}</option>
            {props.options.content.map((c, i) => (
              <option key={i} value={c}>
                {c}
              </option>
            ))}
          </select>
        </form>
      </div>
    </div>
  );
};

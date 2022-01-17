import React, { forwardRef } from "react";
import { IOption } from "../../interfaces/IOption";
import { SelectWrap } from "./styles";

interface IProps {
  isMulti?: boolean;
  name: string;
  options: IOption[];
  value?: IOption | IOption[];
  onChange(value: any): void;
  placeholder?: string;
}

const Select = forwardRef(
  ({ isMulti = false, options = [], ...props }: IProps, ref: any) => {
    return (
      <SelectWrap
        isMulti
        options={options}
        {...props}
        className="orchestrator-select"
        classNamePrefix="orchestrator"
        noOptionsMessage={() => "no option to show"}
        ref={ref}
      />
    );
  }
);

export default Select;

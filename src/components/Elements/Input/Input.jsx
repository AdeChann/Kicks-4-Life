import { forwardRef } from "react";

const Input = forwardRef((props, ref) => {
  const { type, placeholder, name } = props;
  return (
    <input
      type={type}
      className=" font-fontCustoms bg-slate-50 text-sm input input-bordered input-success w-full max-w-xs selection:"
      placeholder={placeholder}
      name={name}
      id={name}
      ref={ref}
    />
  );
});
export default Input;

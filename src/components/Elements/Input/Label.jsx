const Label = (props) => {
  const { htmlFor, children } = props;
  return (
    <label
      htmlFor={htmlFor}
      className="block text-slate-500 text-base font-bold mb-2 font-fontCustoms "
    >
      {children}
    </label>
  );
};
export default Label;

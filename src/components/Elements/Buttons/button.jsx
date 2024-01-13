const Button = (props) => {
  const {
    children,
    classname = "bg-hijauTua",
    onClick = () => {},
    type = "button",
  } = props;
  return (
    <button
      className={` font-fontCustoms text-xl h-10 px-6 font-bold rounded-md border-teal-400 ${classname} hover:bg-lime-600 hover:shadow-lg duration-300 ease-in-out text-putih`}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;

const CardProducts = (props) => {
  const { children } = props;
  return (
    <div className="card w-56 max-h-full bg-base-100 shadow-xl flex justify-between items-center mx-2 flex-col my-2">
      {children}
    </div>
  );
};

const Header = (props) => {
  const { image } = props;
  return (
    <a href="">
      <img src={image} alt="Shoes" className="w-full h-60 " />
    </a>
  );
};

const Body = (props) => {
  const { name, children } = props;
  return (
    <div className="card-body h-full">
      <a href="">
        <h2 className="card-title">{name.substring(0, 25)}...</h2>
        <p>{children.substring(0, 100)}...</p>
      </a>
    </div>
  );
};

const Footer = (props) => {
  const { price, handleAdtoCart, id } = props;
  return (
    <div className="card-actions justify-end pb-5">
      <span className="text-xl font-bold justify-center">
        Rp{" "}
        {price.toLocaleString("id-ID", { styles: "currency", currency: "IDR" })}
      </span>
      <button
        className="btn btn-primary px-3"
        onClick={() => handleAdtoCart(id)}
      >
        Add to Chart
      </button>
    </div>
  );
};

CardProducts.Header = Header;
CardProducts.Body = Body;
CardProducts.Footer = Footer;
export default CardProducts;

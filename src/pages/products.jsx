import { Fragment, useRef, useState } from "react";
import CardProducts from "../components/Fragments/CardProducts";
import { useEffect } from "react";
import { getProducts } from "../services/products.Services";
import { getUsername } from "../services/auth.services";

// const products = [
//   {
//     id: 1,
//     name: "Nike Air",
//     price: 1000000,
//     image:
//       "https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg",
//     description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi eos
//     labore itaque.`,
//   },
//   {
//     id: 2,
//     name: "Adidas Samba",
//     price: 2500000,
//     image:
//       "https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg",
//     description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi eos
//     labore itaque.`,
//   },
//   {
//     id: 3,
//     name: "Adidas Samba",
//     price: 2500000,
//     image:
//       "https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg",
//     description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi eos
//     labore itaque.`,
//   },
//   {
//     id: 4,
//     name: "Adidas Samba",
//     price: 2500000,
//     image:
//       "https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg",
//     description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi eos
//     labore itaque.`,
//   },
//   {
//     id: 5,
//     name: "Adidas Samba",
//     price: 2500000,
//     image:
//       "https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg",
//     description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi eos
//     labore itaque.`,
//   },
// ];

const ProductsPage = () => {
  // ...
  const [cart, setCart] = useState([]); // Ubah inisialisasi cart menjadi array kosong
  const [totalPrice, setTotalPrice] = useState(0); //Ubah
  const [products, setProducts] = useState([]);
  const [username, setUsername] = useState("");

  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem("cart")) || []);
  }, []);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setUsername(getUsername(token));
    } else {
      window.location.href = "/login";
    }
  }, []);

  useEffect(() => {
    getProducts((data) => {
      setProducts(data);
    });
  }, []);

  useEffect(() => {
    if (products.length > 0 && cart.length > 0) {
      const sum = cart.reduce((acc, item) => {
        const product = products.find((products) => products.id === item.id);
        return acc + product.price * item.qty;
      }, 0);
      setTotalPrice(sum);
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart, products]);
  const handleAdtoCart = (id) => {
    // Update cart menggunakan fungsi callback pada setState
    if (cart.find((item) => item.id === id)) {
      setCart(
        cart.map((item) =>
          item.id === id ? { ...item, qty: item.qty + 1 } : item
        )
      );
    } else {
      setCart([...cart, { id, qty: 1 }]);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("password");
    window.location.href = "/login";
  };

  return (
    <Fragment>
      <div className="avatar flex justify-end h-20 text-slate-950 items-center px-10 text-lg font-fontCustoms">
        <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 mr-5">
          <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        </div>
        {username}
        <button className="btn btn-accent ml-5" onClick={handleLogout}>
          Logout
        </button>
      </div>
      <div className="flex justify-center py-5 mx-auto">
        <div className="w-[70%] flex flex-wrap">
          {products.length > 0 &&
            products.map((products) => (
              <CardProducts key={products.id}>
                <CardProducts.Header image={products.image} />
                <CardProducts.Body name={products.title}>
                  {products.description}
                </CardProducts.Body>
                <CardProducts.Footer
                  price={products.price}
                  id={products.id}
                  handleAdtoCart={handleAdtoCart}
                />
              </CardProducts>
            ))}
        </div>
        <div className="w-[40%]">
          <h1 className="text-orange-500 ml-5 mb-2">Cart</h1>

          <table className="text-left table-auto  border-separate border-spacing-x-5">
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {products.length > 0 &&
                cart.map((item) => {
                  const product = products.find(
                    (product) => product.id === item.id
                  );
                  return (
                    <tr key={item.id}>
                      <td>{product.title}</td>
                      <td>
                        Rp{" "}
                        {product.price.toLocaleString("id-ID", {
                          styles: "currency",
                          currency: "IDR",
                        })}
                      </td>
                      <td>{item.qty}</td>
                      <td>
                        Rp
                        {(item.qty * product.price).toLocaleString("id-ID", {
                          styles: "currency",
                          currency: "IDR",
                        })}
                      </td>
                    </tr>
                  );
                })}
              <tr>
                <td colSpan={3}>
                  <b>Total Price</b>
                </td>
                <td>
                  <b>
                    Rp{" "}
                    {totalPrice.toLocaleString("id-ID", {
                      styles: "currency",
                      currency: "IDR",
                    })}
                  </b>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </Fragment>
  );
};
export default ProductsPage;

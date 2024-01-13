import { login } from "../../services/auth.services";
import Button from "../Elements/Buttons/button";
import InputForm from "../Elements/Input";
import { useRef, useEffect, useCallback, useState } from "react";
const FormLogin = () => {
  const [loginFailed, setLoginFailed] = useState("");
  const HandleLogin = (event) => {
    event.preventDefault();
    // localStorage.setItem("email", event.target.email.value);
    // localStorage.setItem("password", event.target.password.value);
    // console.log(event.target.email.value);
    // console.log(event.target.password.value);
    // console.log("login");
    // window.location.href = "/products";
    const data = {
      username: event.target.username.value,
      password: event.target.password.value,
    };

    login(data, (status, res) => {
      if (status) {
        localStorage.setItem("token", res);
        window.location.href = "/products";
      } else {
        setLoginFailed(res.response.data);
        console.log(res.response.data);
      }
    });
  };

  const usernameRef = useRef(null);

  useEffect(() => {
    usernameRef.current.focus();
  }, []);

  return (
    <form onSubmit={HandleLogin}>
      {loginFailed && (
        <p className="text-red-500 font-fontCustoms">{loginFailed}</p>
      )}
      <InputForm
        label="Username"
        type="text"
        placeholder="AdeChann"
        name="username"
        ref={usernameRef}
      ></InputForm>
      <InputForm
        label="Password"
        type="password"
        placeholder="********"
        name="password"
      ></InputForm>
      <Button classname="bg-semiHijau w-full" type="submit">
        Login{" "}
      </Button>
    </form>
  );
};

export default FormLogin;

import Button from "../Elements/Buttons/button";
import InputForm from "../Elements/Input";
const FormLogin = () => {
  return (
    <form action="">
      <InputForm
        label="Email"
        type="email"
        placeholder="example@gmail.com"
        name="email"
      ></InputForm>
      <InputForm
        label="Password"
        type="password"
        placeholder="********"
        name="password"
      ></InputForm>
      <Button classname="bg-semiHijau w-full  ">Login</Button>
    </form>
  );
};

export default FormLogin;

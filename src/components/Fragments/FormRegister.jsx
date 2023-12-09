import Button from "../Elements/Buttons/button";
import InputForm from "../Elements/Input";
const FormRegister = () => {
  return (
    <form action="">
      <InputForm
        label="Fullname"
        type="text"
        placeholder="Insert a fullname"
        name="Fullname"
      ></InputForm>
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
      <InputForm
        label="Confirm Password"
        type="password"
        placeholder="********"
        name="confirm password"
      ></InputForm>
      <Button classname="bg-lime-400 w-full ">Register</Button>
    </form>
  );
};

export default FormRegister;

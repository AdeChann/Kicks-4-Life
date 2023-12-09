import { useState, useEffect } from "react";
import FormLogin from "../components/Fragments/FormLogin";
import AuthLayout from "../components/Layouts/AuthLayout";
import AdidasImg1 from "../assets/images/1.jpg";
import AdidasImg2 from "../assets/images/4.jpg";
import AdidasImg3 from "../assets/images/3.jpg";

const LoginPage = () => {
  const [currentImage, setCurrentImage] = useState(AdidasImg1);
  const images = [AdidasImg1, AdidasImg2, AdidasImg3];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, [images]);

  useEffect(() => {
    setCurrentImage(images[index]);
  }, [index, images]);

  return (
    <>
      <div className="flex min-h-screen items-center bg-gray-200 justify-center font-fontCustoms">
        <div className="bg-gray-50 p-5 rounded-2xl shadow-lg max-w-3xl flex my-10 py-8">
          <div className="w-1/2">
            <AuthLayout title="Login" type="login">
              <FormLogin />
            </AuthLayout>
          </div>
          <div className="w-1/2 flex justify-center items-center ms-8">
            <img
              src={currentImage}
              alt="adidas Originals"
              className="rounded-2xl max-w-full h-auto animate-fade-in"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;

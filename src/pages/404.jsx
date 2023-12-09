import { useRouteError } from "react-router-dom";
const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div className="flex justify-center min-h-screen items-center flex-col">
      <h1 className="text-2xl font-bold">404</h1>
      <p>{error.statusText || error.message}</p>
    </div>
  );
};

export default ErrorPage;

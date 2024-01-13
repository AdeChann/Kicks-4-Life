import { Link } from "react-router-dom";

const AuthLayout = (props) => {
  const { children, title, type } = props;
  return (
    <div className="mb">
      <div className="text-left font-fontCustoms">
        <h1 className="text-3xl font-bold text-semiHijau ">{title}</h1>
        <p className="text-sm font-medium text-slate-400 py-4 ">
          Welcome, please login for details
        </p>
        {children}
        <p className="mt-5 text-center py-2 px-3 text-sm ">
          {type === "login"
            ? "Don't have an account? "
            : "Already have an account? "}
          {type === "login" && (
            <Link to="/register" className="font-bold text-lime-500">
              Register
            </Link>
          )}
          {type === "register" && (
            <Link to="/login" className="font-bold text-lime-500">
              Login
            </Link>
          )}
        </p>
      </div>
    </div>
  );
};

export default AuthLayout;

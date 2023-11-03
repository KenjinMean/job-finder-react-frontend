import { Fragment, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useStateContext } from "../../context/ContextProvider";

import { PageTitleUtil } from "../utils/PageTitle.Util";
import LoadingSpinnerUtil from "../utils/LoadingSpinnder.Util";

import { useRegister } from "../../hooks/useAuthRequestHandler";
import PasswordChecklistView from "../views/PasswordChecklist.View";

// ICON SOURCES  "https://www.flaticon.com/free-icons/password" title="password icons" Password icons created by th studio - Flaticon
import showPass from "../../assets/icons/showPass.png";
import hidePass from "../../assets/icons/hidePass.png";
import appLogo from "../../assets/logo/JobFinderLogo.png";

const FOCUSED = {
  email: "false",
  password: "false",
  password_confirmation: "false",
};

const PAYLOAD = {
  email: "",
  password: "",
  password_confirmation: "",
};

export default function RegisterPage() {
  const navigate = useNavigate();

  const { token, setToken, setUser } = useStateContext();

  const [focused, setFocused] = useState(FOCUSED);
  const [payload, setpayload] = useState(PAYLOAD);
  const [showPassword, setShowpassword] = useState(false);

  const onSuccess = (data) => {
    setToken(data);
    setUser(data.user);
    navigate("/profile/setup");
  };

  const onError = () => {
    setpayload({
      ...payload,
      password: "",
      password_confirmation: "",
    });
    setFocused(FOCUSED);
  };

  const {
    isLoading,
    isError,
    error,
    mutate: registerMutation,
  } = useRegister(onSuccess, onError);

  const onSubmit = (e) => {
    e.preventDefault();
    registerMutation(payload);
  };

  const handleFocus = (e) => {
    // show "password dont match" error immediately
    //  when the confirm password input is focused
    if (e.target.name === "password_confirmation" || "password") {
      setFocused({
        ...focused,
        [e.target.name]: "true",
      });
    }
  };

  const hanldeBlur = (e) => {
    setFocused({
      ...focused,
      [e.target.name]: "true",
    });
  };

  const handleInputChange = (e) => {
    setpayload({
      ...payload,
      [e.target.name]: e.target.value,
    });
  };

  const checkPassword = (value, check) => {
    // if you plan to add more check, take note that password field
    // also has a regex pattern check to trigger input error used for input-error show/hide error class
    switch (check) {
      case "letter":
        return /[a-zA-Z]/.test(value);
        break;
      case "number":
        return /\d/.test(value);
        break;
      case "character":
        return /[$@#&!%*?]/.test(value);
        break;
      case "length":
        return value.length >= 8;
        break;
      case "validate":
        return /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(
          value
        );
        break;
      default:
        throw new Error("Invalid check type");
    }
  };

  if (token) {
    return <Navigate to="/" />;
  }

  return (
    <Fragment>
      <PageTitleUtil title="Register | JobFinder" />
      <div className="p-6 sm:p-12">
        <Link to="/">
          <div className="flex justify-center">
            <img src={appLogo} alt="" />
          </div>
        </Link>
        <div className="flex flex-col items-center mt-12">
          <h1 className="text-2xl font-extrabold xl:text-3xl">
            Sign up for Job Finder
          </h1>
          <div className="flex-1 w-full mt-8">
            <div className="max-w-xs mx-auto">
              <div
                aria-hidden={isError ? "false" : "true"}
                className="max-w-xs mb-5 text-center height-auto"
              >
                <span className="block text-red-500">
                  {error?.response?.data?.message}
                </span>
              </div>
              <form onSubmit={onSubmit}>
                <div>
                  <input
                    className="w-full px-8 py-4 mt-5 text-sm font-medium placeholder-gray-500 bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:border-gray-400 focus:bg-white"
                    type="email"
                    name="email"
                    required
                    autoFocus
                    placeholder="Email"
                    value={payload.email}
                    onChange={(e) => handleInputChange(e)}
                    focused={focused.email}
                    onBlur={(e) => hanldeBlur(e)}
                  />
                  <div className="relative text-center top-2 input-error">
                    <span className="text-sm text-red-500">
                      Must be a valid email address
                    </span>
                  </div>
                </div>

                <div>
                  <div className="relative">
                    <input
                      className={`w-full px-8 py-4 mt-5 text-sm font-medium placeholder-gray-500 bg-gray-100 border border-gray-200 rounded-lg h-14 focus:outline-none focus:border-gray-400 focus:bg-white`}
                      type={showPassword ? "text" : "password"}
                      name="password"
                      placeholder="Password"
                      required
                      pattern="^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$"
                      value={payload.password}
                      focused={focused.password}
                      onChange={(e) => handleInputChange(e)}
                      onFocus={(e) => handleFocus(e)}
                    />
                    <button
                      type="button"
                      tabIndex="-1"
                      className="absolute right-5 top-[33px] p-1 rounded-full hover:bg-slate-300 transition-colors "
                      onClick={() => setShowpassword((prev) => !prev)}
                    >
                      <img
                        className="w-5 h-5"
                        src={showPassword ? hidePass : showPass}
                        alt={
                          showPassword
                            ? "hide password image"
                            : "show password image"
                        }
                      />
                    </button>

                    <div className="text-sm font-medium text-slate-500 input-error">
                      <span>
                        <PasswordChecklistView
                          payload={payload}
                          checkPassword={checkPassword}
                        />
                      </span>
                    </div>
                  </div>
                </div>
                <div
                  className={`height-auto ${
                    checkPassword(payload.password, "validate") ? "active" : ""
                  }`}
                >
                  <span>
                    <input
                      className="w-full px-8 py-4 mt-5 text-sm font-medium placeholder-gray-500 bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:border-gray-400 focus:bg-white"
                      type={showPassword ? "text" : "password"}
                      name="password_confirmation"
                      placeholder="Confirm Password"
                      value={payload.password_confirmation}
                      focused={focused.password_confirmation}
                      onChange={(e) => handleInputChange(e)}
                      onFocus={(e) => handleFocus(e)}
                      required
                      pattern={payload.password}
                    />
                    <div className="mt-2 text-center input-error">
                      <span className="text-sm text-red-500">
                        Password dont match
                      </span>
                    </div>
                  </span>
                </div>
                <button
                  disabled={isLoading}
                  className="flex items-center justify-center w-full py-4 mt-5 font-semibold tracking-wide text-gray-100 transition-all duration-300 ease-in-out bg-indigo-500 rounded-lg hover:bg-indigo-700 focus:shadow-outline focus:outline-none"
                >
                  {isLoading ? (
                    <LoadingSpinnerUtil size={6} />
                  ) : (
                    <>
                      <svg
                        className="w-6 h-6 -ml-2"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                        <circle cx="8.5" cy="7" r="4" />
                        <path d="M20 8v6M23 11h-6" />
                      </svg>
                      <span className="ml-3">Sign Up</span>
                    </>
                  )}
                </button>
                <p className="px-2 mt-5 font-medium leading-none tracking-wide text-center text-gray-600 transform translate-y-1/2 bg-white ">
                  Alrady have an account?{" "}
                  <Link to="/auth/login" className="font-bold text-indigo-500">
                    Login
                  </Link>
                </p>
                <p className="mt-6 text-xs text-center text-gray-600">
                  I agree to abide by templatana's
                  <a
                    href="#"
                    className="border-b border-gray-500 border-dotted"
                  >
                    Terms of Service
                  </a>
                  and its
                  <a
                    href="#"
                    className="border-b border-gray-500 border-dotted"
                  >
                    Privacy Policy
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

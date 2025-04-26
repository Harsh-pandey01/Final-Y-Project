import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useLogin } from "../context/LoginContext";
import { useFirebase } from "../context/FirebaseContext";
import { useHamburgur } from "../context/HamburgurContext";
export default function Header() {
  const [isLogin] = useLogin();
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation(); // Detects route changes
  const firebase = useFirebase();
  const [isHamburgur] = useHamburgur();

  const navigate = useNavigate();

  const logOut = () => {
    firebase.handleLogOut();
    navigate("/");
  };

  // Close menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <div className="w-full z-500 h-[80px] flex items-center justify-between py-3 wrapper shadow-[0_0px_0_1px_rgba(0,0,0,0.25)]">
      <h1 className="font-bold text-3xl text-[#1F7D53]">
        <Link to={"/"}>Kheti Karo</Link>
      </h1>
      <div>
        {isHamburgur ? (
          <div>
            <div className="relative">
              <div
                onClick={() => {
                  setIsOpen((prev) => !prev);
                }}
                className="h-14 cursor-pointer  w-14 rounded-full border-[#479773] border-2 overflow-hidden"
              >
                <img
                  className="object-cover  w-full h-full"
                  src="https://img.freepik.com/premium-vector/avatar-profile-icon-flat-style-female-user-profile-vector-illustration-isolated-background-women-profile-sign-business-concept_157943-38866.jpg"
                  alt=""
                />
              </div>

              <div
                className={` ${
                  isOpen ? "block" : "hidden"
                } absolute flex flex-col gap-4 max-w-full min-w-[500px] h-fit mt-4 cursor-pointer right-0 whitespace-nowrap bg-white text-black border-1 border-[#479773] p-2`}
              >
                <div className="hover:text-[#479773]">
                  <Link to={`/userdetail/${isLogin?.uid}`}>Your Profile</Link>
                </div>
                <button
                  className="p-2 w-full bg-red-500  transition-shadow duration-300 cursor-pointer text-white rounded-sm"
                  onClick={logOut}
                >
                  Log Out
                </button>

                {!isLogin ? (
              <li className="flex flex-col gap-5">
                <Link to={"./login"}>
                  <button className="py-[8px] px-5 bg-[#479773] w-full rounded-sm text-white cursor-pointer">
                    Login
                  </button>
                </Link>
                <Link to={"./signup"}>
                  <button className="py-[8px] px-5 border-1 rounded-sm w-full cursor-pointer border-[#479773]">
                    Sign Up
                  </button>
                </Link>
              </li>
            ) : (
              ""
            )}
              </div>
            </div>
          </div>
        ) : (
          <ul className="flex items-center justify-between gap-25 poppins">
            <li className="hover:text-[#1F7D53] cursor-pointer">
              <Link to="/">Home</Link>
            </li>
            <li className="hover:text-[#1F7D53] cursor-pointer">
              <Link to="/about">About</Link>
            </li>
            <li className="hover:text-[#1F7D53] cursor-pointer">
              <Link>Instruction</Link>
            </li>
            {!isLogin ? (
              <li className="flex items-center gap-5 cursor-pointer">
                <Link to={"./login"}>
                  <button className="py-[8px] px-5 bg-[#479773] rounded-sm text-white cursor-pointer">
                    Login
                  </button>
                </Link>
                <Link to={"./signup"}>
                  <button className="py-[8px] px-5 border-1 rounded-sm cursor-pointer border-[#479773]">
                    Sign Up
                  </button>
                </Link>
              </li>
            ) : (
              ""
            )}
            {isLogin ? (
              <li className="relative">
                <div
                  onClick={() => {
                    setIsOpen((prev) => !prev);
                  }}
                  className="h-14 cursor-pointer  w-14 rounded-full border-[#479773] border-2 overflow-hidden"
                >
                  <img
                    className="object-cover  w-full h-full"
                    src="https://img.freepik.com/premium-vector/avatar-profile-icon-flat-style-female-user-profile-vector-illustration-isolated-background-women-profile-sign-business-concept_157943-38866.jpg"
                    alt=""
                  />
                </div>

                <div
                  className={` ${
                    isOpen ? "block" : "hidden"
                  } absolute flex flex-col gap-4 mt-4 cursor-pointer right-0 whitespace-nowrap bg-white text-black border-1 border-[#479773] p-2`}
                >
                  <div className="hover:text-[#479773]">
                    <Link to={`/userdetail/${isLogin?.uuId}`}>Your Profile</Link>
                  </div>
                  <button
                    className="p-2 w-full bg-red-500  transition-shadow duration-300 cursor-pointer text-white rounded-sm"
                    onClick={logOut}
                  >
                    Log Out
                  </button>
                </div>
              </li>
            ) : (
              ""
            )}
          </ul>
        )}
      </div>
    </div>
  );
}

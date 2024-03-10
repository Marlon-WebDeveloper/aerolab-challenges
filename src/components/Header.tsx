import React, {useContext, useState} from "react";
import {useNavigate} from "react-router-dom";

import Logo from "../assets/icons/aerolab-logo-2.svg";
import AeroLogo from "../assets/icons/aeropay-1.svg";
import Cross from "../assets/icons/cross-active.svg";
import {userContext} from "~/App/App";
type Props = {
  loading: boolean;
};

const Header = ({loading}: Props) => {
  const [modal, setModal] = useState(false);
  const [active, setActive] = useState<"1000" | "5000" | "7500">("1000");
  const {user, setuser} = useContext(userContext);
  const navigate = useNavigate();

  return (
    <nav className="p-2 px-4 pt-4 w-full flex justify-between items-center">
      <img alt="Logo" className="" src={Logo} />
      {loading ? (
        <div role="status">
          <svg
            aria-hidden="true"
            className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-300 fill-violet-500"
            fill="none"
            viewBox="0 0 100 101"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
          <span className="sr-only">Loading...</span>
        </div>
      ) : (
        <div className="relative text-white">
          <div
            className=" border p-2 text-violet-600 rounded-lg font-bold"
            onClick={() => setModal(!modal)}
          >
            <h2 className="flex">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#3971ED] to-[#E58CFD]">
                {user.points}
              </span>
              <span>
                {modal ? (
                  <svg
                    className="icon ml-1 icon-tabler icon-tabler-eye-x"
                    fill="none"
                    height="24"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M0 0h24v24H0z" fill="none" stroke="none" />
                    <path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
                    <path d="M13.048 17.942a9.298 9.298 0 0 1 -1.048 .058c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6a17.986 17.986 0 0 1 -1.362 1.975" />
                    <path d="M22 22l-5 -5" />
                    <path d="M17 22l5 -5" />
                  </svg>
                ) : (
                  <svg
                    className="icon ml-1 icon-tabler icon-tabler-eye-share"
                    fill="none"
                    height="24"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M0 0h24v24H0z" fill="none" stroke="none" />
                    <path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
                    <path d="M12.597 17.981a9.467 9.467 0 0 1 -.597 .019c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6c-.205 .342 -.415 .67 -.63 .983" />
                    <path d="M16 22l5 -5" />
                    <path d="M21 21.5v-4.5h-4.5" />
                  </svg>
                )}
              </span>
            </h2>
          </div>
          <div
            className={`text-start ${
              modal ? "block" : "hidden"
            } transition absolute right-0 p-4  mt-2 font-bold shadow-2xl border-2 text-gray-500 rounded-md bg-white`}
          >
            <div className="flex items-center justify-between">
              <h4 className="flex items-center mb-2">
                {user.name}
                <span className="ml-2">
                  <img alt="Logo" src={AeroLogo} />
                </span>
              </h4>
              <button className="mb-2" onClick={() => setModal(false)}>
                <img alt="" src={Cross} />
              </button>
            </div>
            <hr />
            <p className="mt-2">Add Balance : </p>
            <div className="flex mt-2 justify-between text-md">
              <button
                className={`p-2 rounded-md bg-zinc-400 ${
                  active == "1000" ? "bg-gradient-to-r from-[#3971ED] to-[#E58CFD]" : ""
                } hover:opacity-95 hover:to-[#3971ED] transition  hover:from-[#E58CFD]  text-white font-extrabold  mr-1`}
                onClick={() => {
                  setActive("1000");
                }}
              >
                1000
              </button>
              <button
                className={`p-2 rounded-md bg-zinc-400 ${
                  active == "5000" ? "bg-gradient-to-r from-[#3971ED] to-[#E58CFD]" : ""
                }  text-white font-extrabold  mr-1`}
                onClick={() => {
                  setActive("5000");
                }}
              >
                5000
              </button>
              <button
                className={`p-2 rounded-md bg-zinc-400 ${
                  active == "7500" ? "bg-gradient-to-r from-[#3971ED] to-[#E58CFD]" : ""
                }  text-white font-extrabold`}
                onClick={() => {
                  setActive("7500");
                }}
              >
                7500
              </button>
            </div>
            <button
              className="text-white p-2 w-full hover:opacity-75 mt-2 transition rounded-md bg-gradient-to-r from-[#3971ED] to-[#E58CFD]"
              onClick={() => setuser({...user, points: user.points + Number(active)})}
            >
              Add Points
            </button>
            <button
              className="border w-full text-center hover:text-white hover:bg-zinc-400 rounded-md p-2 mt-2"
              onClick={() => {
                navigate("/redeemHistory", {state: user.redeemHistory});
              }}
            >
              Redeem History
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;

import React, {useState} from "react";
import Toastify from "toastify-js";

import "toastify-js/src/toastify.css";
import Icon from "../assets/icons/aeropay-1.svg";
import {User} from "~/App/App";

import {Product} from "./Products";

type PropsType = {
  imageUrl: string;
  title: string;
  price: number;
  category: string;
  points: number;
  user: {
    id: string;
    name: string;
    points: number;
    redeemHistory: Product[];
  };
  setuser: React.Dispatch<React.SetStateAction<User>>;
};

const ProductCard = ({imageUrl, title, price, category, points, setuser, user}: PropsType) => {
  const [buying, setBuying] = useState<boolean>(false);
  const product: Product = {
    name: title,
    category: category,
    cost: price,
    img: {
      url: imageUrl,
    },
  };

  return (
    <article className="flex flex-col items-center w-[250px]">
      <div className="border rounded-lg flex flex-col w-[250px]">
        <div className="mx-auto pb-4 rounded-md">
          <img alt={title} className="w-[250px] h-[200px] rounded-md" src={imageUrl} />
        </div>
        <div className="flex border-t flex-col p-4 items-start">
          <h3 className="font-bold text-gray-800">{title}</h3>
          <p className="font-medium text-gray-500">{category}</p>
        </div>
      </div>
      <button
        className="mt-4 disabled:bg-gradient-to-r  disabled:from-zinc-300 disabled:to-zinc-300 flex justify-evenly bg-gradient-to-r from-[#3971ED] to-[#E58CFD] hover:to-[#3971ED] transition  hover:from-[#E58CFD] mb-8 w-full rounded-md p-4 text-white font-extrabold"
        disabled={points < price}
        onClick={() => {
          setBuying(true);
          setTimeout(() => {
            setuser({
              ...user,
              points: user.points - price,
              redeemHistory: [...user.redeemHistory, product],
            });

            setBuying(false);
          }, 1500);

          return Toastify({
            text: `Bought ${title}`,
            duration: 3000,
            destination: "https://github.com/apvarun/toastify-js",
            newWindow: true,
            close: false,
            gravity: "top", // `top` or `bottom`
            position: "left", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
              background: "#fff",
              borderBottom: "4px solid #E58CFD",
              color: "#131313",
              fontWeight: "bold",
              fontSize: "10px",
            },
          }).showToast();
        }}
      >
        {!buying ? (
          <>
            {points >= price ? `Redeem for ${price}` : `You need ${price - points}`}
            <span>
              <img alt="AeroLab icon" src={Icon} />
            </span>{" "}
          </>
        ) : (
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
            <span className="sr-only">Buying...</span>
          </div>
        )}
      </button>
    </article>
  );
};

export default ProductCard;

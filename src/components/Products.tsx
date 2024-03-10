import React, {ChangeEvent, useContext, useEffect, useMemo, useState} from "react";

import {getProducts} from "~/helpers/getProducts";
import RightArrow from "../assets/icons/chevron-active.svg";
import LeftArrow from "../assets/icons/chevronLeft-active.svg";
import {userContext} from "~/App/App";

import ProductCard from "./ProductCard";

export interface Product {
  id?: string;
  category: string;
  img: {url: string};
  name: string;
  cost: number;
}

const Products = () => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const {user, setuser} = useContext(userContext);
  const [categories, setCategories] = useState<string[]>([]);
  const [start, setStart] = useState(0);
  const [end, setend] = useState(16);
  const handleSelect = (e: ChangeEvent<HTMLSelectElement>) => {
    setFilteredProducts(products.filter((product) => product.category == e.target.value));
  };

  const handleLowPriceSort = () => {
    const sortedProducts = [...products].sort((a, b) => a.cost - b.cost);
    const sortedFilteredProducts = [...filteredProducts].sort((a, b) => a.cost - b.cost);

    setProducts(sortedProducts);
    setFilteredProducts(sortedFilteredProducts);
  };
  const handleHighPriceSort = () => {
    const sortedProducts = [...products].sort((a, b) => b.cost - a.cost);
    const sortedFilteredProducts = [...filteredProducts].sort((a, b) => b.cost - a.cost);

    setProducts(sortedProducts);
    setFilteredProducts(sortedFilteredProducts);
  };

  useEffect(() => {
    setLoading(true);
    getProducts()
      .then((data) => {
        setProducts((products) => products.concat(data));
      })
      .then(() => setLoading(false));
  }, []);

  useMemo(() => {
    setCategories(Array.from(new Set(products.map((p) => p.category))));
  }, [products]);

  if (loading) {
    return <h1>...Loading</h1>;
  }

  return (
    <>
      <h4 className="uppercase mt-10 text-4xl font-extrabold text-wrap" id="tech">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#3971ED] to-[#E58CFD]">
          Tech{" "}
        </span>
        Products{" "}
      </h4>
      <section className="mt-10 px-20 grid grid-cols-1 md:grid-cols-3 gap-2 text-center">
        <select
          className="border max-w-[250px] font-semibold mr-8 tracking-wider p-2 rounded-md text-xs w-full"
          onChange={handleSelect}
        >
          <option value="all">All Products</option>
          {categories.length > 0 &&
            categories.map((c) => {
              return (
                <option key={c} value={c}>
                  {c}
                </option>
              );
            })}
        </select>

        <button
          className="bg-gradient-to-r w-full max-w-[250px] text-xs mr-2 p-2 from-[#3971ED] to-[#E58CFD] hover:opacity-65 hover:to-[#3971ED] transition  hover:from-[#E58CFD] rounded-md  text-white font-extrabold"
          onClick={handleHighPriceSort}
        >
          Highest Price
        </button>
        <button
          className="bg-gradient-to-r w-full max-w-[250px] text-xs p-2  from-[#3971ED] to-[#E58CFD] hover:opacity-65 hover:to-[#3971ED] transition  hover:from-[#E58CFD] rounded-md text-white font-extrabold"
          onClick={handleLowPriceSort}
        >
          Lowest Price
        </button>
      </section>
      <main className="grid justify-items-center grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-4 px-12 pt-12">
        {filteredProducts.length > 0
          ? filteredProducts
              .map((product) => {
                return (
                  <ProductCard
                    key={product.id}
                    category={product.category}
                    imageUrl={product.img.url}
                    points={user.points}
                    price={product.cost}
                    setuser={setuser}
                    title={product.name}
                    user={user}
                  />
                );
              })
              .slice(start, end)
          : products
              .map((product) => {
                return (
                  <ProductCard
                    key={product.id}
                    category={product.category}
                    imageUrl={product.img.url}
                    points={user.points}
                    price={product.cost}
                    setuser={setuser}
                    title={product.name}
                    user={user}
                  />
                );
              })
              .slice(start, end)}
      </main>
      <div className="w-full flex justify-center items-center">
        <div className="flex p-2 border rounded-md items-center">
          <button
            className="p-2 bg-zinc-200 hover:bg-gradient-to-r hover:from-[#3972edcc] hover:to-[#e48cfdc4] transition rounded-md disabled:opacity-35
             disabled:cursor-not-allowed"
            disabled={start == 0 ? true : false}
            onClick={() => {
              setStart(0);
              setend(16);
            }}
          >
            <img alt="" src={LeftArrow} />
          </button>
          <p className="text-md ml-2 mr-2 font-bold">
            <span className="bg-clip-text text-nowrap text-transparent bg-gradient-to-r from-[#3971ED] to-[#E58CFD]">
              <span className="text-gray-700">Page </span>
              {start === 0 ? (
                <>
                  1 <span className="text-gray-700">of</span> 2
                </>
              ) : (
                <>
                  2 <span className="text-gray-700">of</span> 2
                </>
              )}
            </span>
          </p>
          <button
            className="p-2 bg-zinc-200 rounded-md disabled:opacity-65 hover:bg-gradient-to-r hover:from-[#3972edcc] hover:to-[#e48cfdc4] transition"
            disabled={start == 16 ? true : false}
            onClick={() => {
              setStart(16);
              setend(32);
            }}
          >
            <img alt="" src={RightArrow} />
          </button>
        </div>
      </div>
    </>
  );
};

export default Products;

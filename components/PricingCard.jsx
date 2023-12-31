import React from "react";

export default function PricingCard({ details }) {
  if (details.featured) {
    return (
      <div className="w-full h-auto flex flex-col bg-white max-w-sm rounded-lg p-6 border-4 border-yellow-400">
        <h3 className="text-purple-500 text-xl mb-4 uppercase">
          {details.title}
        </h3>
        <p className="text-purple-500 text-6xl font-bold mb-10">
          {details.isFree ? (
            <span>Free</span>
          ) : (
            <span>{details.priceInCents / 100}</span>
          )}
          {details.priceSuffix ? (
            <span className="text-lg m-1">{details.priceSuffix}</span>
          ) : null}
        </p>
        <ul className="grow">
          {details.description.split("*").map((item, index) => (
            <li className="text-purple-100 my-2 text-sm" key={index}>
              {item}
            </li>
          ))}
        </ul>
        <button className="mx-auto w-full block bg-purple-400 px-4 py-2 rounded-md text-white mt-6 mb-4 cursor-pointer">
          {details.buttonText}
        </button>
        {details.finePrint ? (
          <small className="text-purple-200 block text-center text-xs">
            {details.finePrint}
          </small>
        ) : null}
      </div>
    );
  } else {
    return (
      <div className="w-full h-auto flex flex-col bg-purple-500 max-w-sm rounded-lg p-6">
        <h3 className="text-white text-xl mb-4 uppercase">{details.title}</h3>
        <p className="text-white text-6xl font-bold mb-10">
          {details.isFree ? (
            <span>Free</span>
          ) : (
            <span>{details.priceInCents / 100}</span>
          )}
          {details.priceSuffix ? (
            <span className="text-lg m-1">{details.priceSuffix}</span>
          ) : null}
        </p>
        <ul className="grow">
          {details.description.split("*").map((item, index) => (
            <li className="text-purple-100 my-2 text-sm" key={index}>
              {item}
            </li>
          ))}
        </ul>
        <button className="mx-auto w-full block bg-purple-400 px-4 py-2 rounded-md text-white mt-6 mb-4 cursor-pointer">
          {details.buttonText}
        </button>
        {details.finePrint ? (
          <small className="text-purple-200 block text-center text-xs">
            {details.finePrint}
          </small>
        ) : null}
      </div>
    );
  }
}

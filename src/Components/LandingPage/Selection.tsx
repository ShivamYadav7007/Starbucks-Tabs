import React, { Fragment, useState } from "react";
import blackCofee from "../../Images/blackCoffee.webp";
import coffeeMug from "../../Images/coffeeMug.webp";
import food from "../../Images/food.webp";
import packetRice from "../../Images/packetRice.webp";
import pinkJuice from "../../Images/pinkJuice.webp";
import { Transition } from "@headlessui/react";

interface Props {}

const Selection: React.FC<Props> = (props) => {
  const starNumbers = [25, 50, 150, 200, 400];
  const starImages = [coffeeMug, blackCofee, pinkJuice, food, packetRice];
  const [iNumber, setINumber] = useState(0);
  const starWidth = 100 / starNumbers.length;
  return (
    <div>
      <div className="bg-primary">
        <h1 className="py-5 text-xl font-medium text-center md:text-2xl">
          Get your favorites for free
        </h1>
        <div className="relative max-w-md mx-auto">
          <div className="flex text-lg font-bold md:text-xl">
            {starNumbers.map((item, index) => {
              return (
                <div
                  key={index}
                  className="flex-1 px-2 py-4 text-center cursor-pointer"
                  onClick={() => setINumber(index)}
                >
                  {item}
                  <span className="my-auto text-xs text-gold">★</span>
                </div>
              );
            })}
          </div>
          <div
            className={`absolute -mt-1 h-1 ease-in-out duration-300 bg-secondary`}
            style={{ width: starWidth + "%", left: starWidth * iNumber + "%" }}
          ></div>
        </div>
      </div>
      <div className="relative bg-primary-light">
        {starImages.map((item, index) => {
          return (
            <Transition.Root
              appear
              key={index}
              as={Fragment}
              show={iNumber === index}
              enter="transition-opacity duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <img
                src={item}
                className="absolute inset-0 mx-auto text-center max-h-64 top-3"
                alt="coffee material"
              />
            </Transition.Root>
          );
        })}
      </div>
    </div>
  );
};

Selection.defaultProps = {};

export default React.memo(Selection);

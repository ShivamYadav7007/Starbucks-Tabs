import React, { Fragment, useState } from "react";
import { Transition } from "@headlessui/react";

interface Props {
  children: React.ReactElement[];
}

const TabList: React.FC<Props> = ({ children }) => {
  const [iNumber, setINumber] = useState(0);
  const starWidth = 100 / children.length;

  return (
    <div>
      <div className="bg-primary">
        <h1 className="py-5 text-xl font-medium text-center md:text-2xl">
          Get your favorites for free
        </h1>
        <div className="relative max-w-md mx-auto">
          <div className="flex text-lg font-bold md:text-xl">
            {children.map((child, index) => {
              return (
                <div
                  key={index}
                  className="flex-1 px-2 py-4 text-center cursor-pointer"
                  onClick={() => setINumber(index)}
                >
                  {child.props.title}
                  <span className="my-auto text-xs text-gold">★</span>
                </div>
              );
            })}
          </div>
          <div
            className={`absolute -mt-1 h-1 ease-in-out duration-300 bg-secondary`}
            style={{
              width: starWidth + "%",
              // left: `${starWidth * iNumber}%`,  //using left
              transform: `translateX(${100 * iNumber}%)`, // using transform
            }}
          ></div>
        </div>
      </div>
      <div className="relative bg-primary-light h-72">
        {children.map((child, index) => {
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
                src={child.props.src}
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

TabList.defaultProps = {};

export default React.memo(TabList);

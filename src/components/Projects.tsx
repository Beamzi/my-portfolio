//SHUFFLE ON REVEAL COMPONENT NAME

//import React, { ReactNode } from "react";
import Image from "next/image";
import { useState, useEffect } from "react";
import {
  ChevronDoubleDownIcon,
  ChevronDoubleRightIcon,
  ChevronDoubleLeftIcon,
} from "@heroicons/react/24/outline";

interface Props {
  flexFlip: string;
  title: string;
  imgSrc?: string;
  imgAlt?: string;
  describe1: string[];
  describe2: string[];
  imgUrls?: string[];
}

const flexRow1 = ["", "flex-row-reverse", "flex-col", "flex-row", "flex-col"];

const flexRow2 = ["", "flex-row", "flex-col"];

const Projects = ({
  imgUrls = [],
  describe1,
  describe2,
  flexFlip,
  title,
  imgAlt,
}: Props) => {
  const [isOn, setIsOn] = useState(false);
  const [showMore1, setShowMore1] = useState(0);
  const [showMore2, setShowMore2] = useState(-1);
  const [imgSwitch, setImgSwitch] = useState(0);
  const [localImgUrls] = useState([...imgUrls]);

  useEffect(() => {
    localImgUrls.forEach((url) => {
      const img = new window.Image();
      img.src = url;
    });
  }, [localImgUrls]);

  const getHiddenClass = (index: number, showMore: number) => {
    let hidden = null;
    const length = describe1.length - 1;
    if (showMore > length && length > index) hidden = "hidden";
    else if (showMore === length + 2) hidden = "hidden";
    return hidden;
  };

  const imgShift = () => {
    const shift: string | undefined = localImgUrls.shift();
    if (shift !== undefined) localImgUrls.push(shift);
  };

  return (
    <section className="flex justify-center align-middle">
      <div className="">
        <h1 className="text-center pt-8">Projects</h1>
        <div
          className={`w-full md:flex ${flexFlip} justify-center align-middle border-red-900 border-2 m-0-auto`}
        >
          <div className="w-full md:w-1/2 border-red-900 border-2">
            <h1 className="mb-4 mx-4">{title}</h1>
            <div className="px-5 flex flex-wrap flex-row-reverse w-full">
              {describe1?.map((item, index) => {
                const hidden = getHiddenClass(index, showMore1);
                return index < showMore1 ? (
                  <div
                    className={`border-solid border-2 w-1/2 h-full text-wrap break-normal flex ${
                      flexRow1[showMore1]
                    } ${showMore1 - 1 === index && "show-more-anim-right"}`}
                    key={index}
                  >
                    <p className="text-wrap break-normal" key={index}>
                      {item}
                    </p>
                    {
                      <button
                        onClick={() => {
                          setShowMore2((s) => s + 1);
                          setShowMore1((s) => s + 1);
                          setImgSwitch((s) => s + 1);
                          imgShift();
                          setIsOn(false);
                          setTimeout(() => setIsOn(true), 10);
                          console.log(showMore1, "SHOWMORE1");
                        }}
                        className={`bg-white text-black p-2 m-2 ${hidden} flex flex-row justify-center align-middle`}
                      >
                        {(index === 0 && (
                          <ChevronDoubleLeftIcon className="min-h-20 max-h-10 max-w-10"></ChevronDoubleLeftIcon>
                        )) ||
                          (index === 1 && (
                            <ChevronDoubleDownIcon className="max-h-10 max-w-10"></ChevronDoubleDownIcon>
                          ))}
                      </button>
                    }
                  </div>
                ) : null;
              })}
            </div>
            <div className="px-5 flex flex-wrap flex-row w-full">
              {describe2?.map((item, index) => {
                const hidden = getHiddenClass(index, showMore2);
                return index < showMore2 ? (
                  <div
                    className={`border-solid border-2 w-1/2 flex ${
                      flexRow2[showMore2]
                    } ${
                      index === 1
                        ? "show-more-anim-bottom-left"
                        : "show-more-anim-left"
                    }`}
                    key={index}
                  >
                    <p key={index}>{item}</p>

                    <button
                      onClick={() => {
                        setShowMore2((s) => s + 1);
                        setImgSwitch((s) => s + 1);
                        imgShift();

                        console.log(showMore2, "SHOWMORE2");
                      }}
                      className={`bg-white text-black p-2 m-2 ${hidden} flex flex-row justify-center align-middle`}
                    >
                      {(index === 0 && (
                        <ChevronDoubleRightIcon className="min-h-20 max-h-10 max-w-10"></ChevronDoubleRightIcon>
                      )) ||
                        (index === 1 && (
                          <ChevronDoubleDownIcon className="max-h-10 max-w-10"></ChevronDoubleDownIcon>
                        ))}
                    </button>
                  </div>
                ) : null;
              })}
            </div>

            <button
              onClick={() => {
                setShowMore1((s) => s + 1);
                setImgSwitch((s) => s + 1);
                setIsOn(true);
                imgShift();
              }}
              className="bg-white text-black p-2 m-2"
            >
              learn more
            </button>
          </div>
          <div className="flex justify-center align-middle">
            <div className="flex flex-wrap h-50 w-[80%] sm:w-sm relative justify-center align-middle stack-container -skew-x-8 border-red-900 border-2">
              {localImgUrls?.map((item, index) => (
                <div
                  key={index}
                  className={`absolute top-0 left-0 w-full h-full rounded-l overflow-hidden ml-7 ${
                    (index === 3 && isOn && "img-front-anim") || ""
                  }
              ${index !== 3 && isOn && "img-back-anim"}`}
                >
                  {localImgUrls[imgSwitch] && (
                    <Image
                      src={item}
                      alt={imgAlt || "default alt text"}
                      layout="fill"
                      className="object-cover w-full h-full rounded-lg shadow-xl"
                      priority
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;

/* width={800}
                  height={800}*/
/*
        <div className="relative shadow-2xl w-lg bg-white mx-4 rounded-lg">
          {imgUrls[imgSwitch] && (
            <Image
              src={imgUrls[imgSwitch]}
              alt={imgAlt || "default alt text"}
              layout="fill"
              className="object-cover rounded-lg -skew-8 shadow-xl"
              priority
            />
          )}
        </div>
        */

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
  const [sequence, setSequence] = useState(true);
  const [firstRowReveal, setFirstRowReveal] = useState(0);
  const [secondRowReveal, setSecondRowReveal] = useState(-1);
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
    <section className="flex justify-center align-middle pb-20 overflow-hidden">
      <div className="">
        <h1 className="text-center pt-8 pb-5">Projects</h1>
        <div
          className={`w-full md:flex ${flexFlip} justify-center align-middle`}
        >
          <div className="w-full md:w-1/2 px-2">
            <div className=" bg-neutral-900/50 border-dashed border-1 border-neutral-600/50 py-5 md:mr-10 px-5 rounded-2xl">
              <h1 className="mb-4">{title}</h1>
              <hr className="pb-5 w-[70%]"></hr>
              <div
                className={`flex flex-wrap flex-row-reverse w-full pl-20 pr-[3.5px] relative left-[1.75%]
                     ${imgSwitch > 2 ? "justify-end" : "justify-end"}`}
              >
                {describe1?.map((item, index) => {
                  const hidden = getHiddenClass(index, firstRowReveal);
                  return index < firstRowReveal ? (
                    <div
                      className={`relative outline outline-offset-2 w-[48%] mb-0.25 mr-1 mx-0.25 text-wrap break-normal flex ${
                        flexRow1[firstRowReveal]
                      } ${
                        firstRowReveal - 1 === index && "show-more-anim-right"
                      }`}
                      key={index}
                    >
                      <p className="p-2 text-wrap break-normal" key={index}>
                        {item}
                      </p>
                      {
                        <button
                          onClick={() => {
                            setSecondRowReveal((s) => s + 1);
                            setFirstRowReveal((s) => s + 1);
                            setImgSwitch((s) => s + 1);
                            imgShift();
                            setIsOn(false);
                            setTimeout(() => setIsOn(true), 10);
                          }}
                          className={`bg-white text-black p-2 m-2 ${hidden} flex justify-center align-middle text-center`}
                        >
                          {(index === 0 && (
                            <ChevronDoubleLeftIcon className="min-h-20 max-w-10 arrow-left-anim"></ChevronDoubleLeftIcon>
                          )) ||
                            (index === 1 && (
                              <ChevronDoubleDownIcon className="max-w-10 arrow-bottom-anim"></ChevronDoubleDownIcon>
                            ))}
                        </button>
                      }
                    </div>
                  ) : null;
                })}
              </div>
              <div className="flex flex-wrap flex-row w-full justify-start relative left-[1.75%]">
                {describe2?.map((item, index) => {
                  const hidden = getHiddenClass(index, secondRowReveal);
                  return index < secondRowReveal ? (
                    <div
                      className={`outline outline-offset-2 w-[48%] flex mr-1 mt-1 mx-0.25 ${
                        flexRow2[secondRowReveal]
                      } ${
                        index === 1
                          ? "show-more-anim-bottom-left"
                          : "show-more-anim-left"
                      }`}
                      key={index}
                    >
                      <p className="p-2" key={index}>
                        {item}{" "}
                      </p>

                      <button
                        onClick={() => {
                          setSecondRowReveal((s) => s + 1);
                          setImgSwitch((s) => s + 1);
                          imgShift();
                        }}
                        className={`bg-white text-black p-2 m-2 ${hidden} flex flex-row justify-center align-middle`}
                      >
                        {(index === 0 && (
                          <ChevronDoubleRightIcon className="min-h-20 max-w-10 arrow-right-anim"></ChevronDoubleRightIcon>
                        )) ||
                          (index === 1 && (
                            <ChevronDoubleDownIcon
                              className="max-w-10 
                              arrow-bottom-anim"
                            ></ChevronDoubleDownIcon>
                          ))}
                      </button>
                    </div>
                  ) : null;
                })}
              </div>

              {sequence && (
                <button
                  onClick={() => {
                    setFirstRowReveal((s) => s + 1);
                    setImgSwitch((s) => s + 1);
                    setIsOn(true);
                    setSequence(false);
                    imgShift();
                  }}
                  className="bg-white text-black p-2 m-2"
                >
                  learn more
                </button>
              )}
            </div>
          </div>

          <div className="flex justify-center align-middle">
            <div className="flex flex-wrap h-50 w-[80%] sm:w-sm relative justify-center align-middle stack-container -skew-x-8">
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

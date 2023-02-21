import React, { useState, useEffect } from "react";
import { Input } from "@mantine/core";
import { ImageCheckbox, ImageCheckboxes } from "./ImageCheckbox";
import { Switch, Text, Image } from "@mantine/core";
import arcade from "../assets/images/icon-arcade.svg";
import advanced from "../assets/images/icon-advanced.svg";
import pro from "../assets/images/icon-pro.svg";
import { Dispatch, SetStateAction } from "react";
import { useMediaQuery } from "react-responsive";

type Props = {
  arcadeBtn: boolean;
  setArcadeBtn: Dispatch<SetStateAction<boolean>>;
  advancedBtn: boolean;
  setAdvancedBtn: Dispatch<SetStateAction<boolean>>;
  proBtn: boolean;
  setProBtn: Dispatch<SetStateAction<boolean>>;
  monthOrYear: boolean;
  setMonthOrYear: Dispatch<SetStateAction<boolean>>;
  total: number;
  setTotal: Dispatch<SetStateAction<number>>;
};

const StepTwo: React.FC<Props> = (props) => {
  const tailwindMd = useMediaQuery({ query: "(min-width: 768px)" });
  const handleArcade = () => {
    if (!props.advancedBtn && !props.proBtn)
      props.setArcadeBtn(!props.arcadeBtn);
    if (props.advancedBtn || props.proBtn) alert("Uncheck your option first!");
  };
  const handleAdvanced = () => {
    if (!props.arcadeBtn && !props.proBtn)
      props.setAdvancedBtn(!props.advancedBtn);
    if (props.arcadeBtn || props.proBtn) alert("Uncheck your option first!");
  };
  const handlePro = () => {
    if (!props.arcadeBtn && !props.advancedBtn) props.setProBtn(!props.proBtn);
    if (props.advancedBtn || props.arcadeBtn)
      alert("Uncheck your option first!");
  };

  useEffect(() => {
    console.log(props.monthOrYear);
    if (!props.monthOrYear) {
      if (props.arcadeBtn) {
        props.setTotal(9);
      }
      if (props.advancedBtn) {
        props.setTotal(12);
      }
      if (props.proBtn) {
        props.setTotal(15);
      }
    }
    if (props.monthOrYear) {
      if (props.arcadeBtn) {
        props.setTotal(90);
      }
      if (props.advancedBtn) {
        props.setTotal(120);
      }
      if (props.proBtn) {
        props.setTotal(150);
      }
    }
  }, [props.monthOrYear, props.arcadeBtn, props.advancedBtn, props.proBtn]);

  return (
    <>
      <h1 className="mx-6 mt-6 md:ml-[340px] md:mr-20 duration-500 text-blue-900 font-bold">
        Select your plan
      </h1>
      <p className="mx-6 mb-4 md:ml-[340px] md:mr-20 duration-500 text-gray-400">
        You have the option for monthly or yearly billing.
      </p>

      <div className="md:grid md:grid-cols-3 md:w-[50%] md:ml-[340px] duration-500">
        <button
          onClick={() => {
            handleArcade();
          }}
          className={
            props.arcadeBtn
              ? "flex items-center w-[86%] md:w-[105%] md:h-auto md:mx-0 mx-6 py-6 rounded-md border-2 group hover:scale-105 duration-300 scale-105 bg-gray-50 border-purple-900"
              : "flex items-center w-[86%] md:w-[105%] md:h-auto md:mx-0 mx-6 py-6 rounded-md border-2 group hover:scale-105 duration-300"
          }
        >
          {!tailwindMd && (
            <Image
              className="ml-4 md:ml-0"
              src={arcade}
              alt="arcade"
              width={40}
            />
          )}
          <div className="ml-4">
            {tailwindMd && (
              <Image
                className="ml-4 mt-0 md:ml-0"
                src={arcade}
                alt="arcade"
                width={50}
              />
            )}
            <Text
              className={`mr-11 md:mt-16 ${
                props.monthOrYear ? "md:mt-10" : "md:mt-16"
              } duration-300`}
              weight={500}
              size="lg"
              sx={{ lineHeight: 1 }}
            >
              Arcade
            </Text>
            {!props.monthOrYear && (
              <Text
                className="mt-2  duration-300"
                color="dimmed"
                size="md"
                sx={{ lineHeight: 1 }}
                mb={5}
                align="left"
              >
                $9/mo
              </Text>
            )}
            {props.monthOrYear && (
              <>
                <Text
                  className="mt-2 duration-300"
                  color="dimmed"
                  size="md"
                  sx={{ lineHeight: 1 }}
                  mb={5}
                  align="left"
                >
                  $90/yr
                </Text>
                <Text
                  className="mt-2 duration-300"
                  color="blue.7"
                  size="md"
                  sx={{ lineHeight: 1 }}
                  mb={5}
                  align="left"
                >
                  2 months free
                </Text>
              </>
            )}
          </div>
        </button>
        <button
          onClick={handleAdvanced}
          className={
            props.advancedBtn
              ? "flex items-center w-[86%] md:w-[105%] md:h-auto md:mx-4 mx-6 py-6 mt-3 md:mt-0 rounded-md border-2 group hover:scale-105 duration-300 scale-105 bg-gray-50 border-purple-900"
              : "flex items-center w-[86%] md:w-[105%] md:h-auto md:mx-4 mx-6 py-6 mt-3 md:mt-0 rounded-md border-2 group hover:scale-105 duration-300"
          }
        >
          {!tailwindMd && (
            <Image
              className="ml-4 md:ml-0 "
              src={advanced}
              alt="advanced"
              width={40}
            />
          )}
          <div className="ml-4">
            {tailwindMd && (
              <Image
                className="ml-4 md:ml-0 "
                src={advanced}
                alt="advanced"
                width={50}
              />
            )}
            <Text
              className={`mr-11 md:mt-16 ${
                props.monthOrYear ? "md:mt-10" : "md:mt-16"
              } duration-300`}
              weight={500}
              size="lg"
              sx={{ lineHeight: 1 }}
            >
              Advanced
            </Text>
            {!props.monthOrYear && (
              <Text
                className="mt-2  duration-300"
                color="dimmed"
                size="md"
                sx={{ lineHeight: 1 }}
                mb={5}
                align="left"
              >
                $12/mo
              </Text>
            )}
            {props.monthOrYear && (
              <>
                <Text
                  className="mt-2 duration-300"
                  color="dimmed"
                  size="md"
                  sx={{ lineHeight: 1 }}
                  mb={5}
                  align="left"
                >
                  $120/yr
                </Text>
                <Text
                  className="mt-2 duration-300"
                  color="blue.7"
                  size="md"
                  sx={{ lineHeight: 1 }}
                  mb={5}
                  align="left"
                >
                  2 months free
                </Text>
              </>
            )}
          </div>
        </button>
        <button
          onClick={handlePro}
          className={
            props.proBtn
              ? "flex items-center w-[86%] md:w-[105%] md:h-auto md:mx-8 mx-6 py-6 mt-3 md:mt-0 rounded-md border-2 group hover:scale-105 duration-300 scale-105 bg-gray-50 border-purple-900"
              : "flex items-center w-[86%] md:w-[105%] md:h-auto md:mx-8 mx-6 py-6 mt-3 md:mt-0 rounded-md border-2 group hover:scale-105 duration-300"
          }
        >
          {!tailwindMd && (
            <Image className="ml-4" src={pro} alt="pro" width={40} />
          )}
          <div className="ml-5">
            {tailwindMd && (
              <Image className="" src={pro} alt="pro" width={50} />
            )}
            <Text
              className={`mr-20 md:mt-16 ${
                props.monthOrYear ? "md:mt-10" : "md:mt-16"
              } duration-300`}
              weight={500}
              size="lg"
              sx={{ lineHeight: 1 }}
            >
              Pro
            </Text>
            {!props.monthOrYear && (
              <Text
                className="mt-2 duration-300"
                color="dimmed"
                size="md"
                sx={{ lineHeight: 1 }}
                mb={5}
                align="left"
              >
                $15/mo
              </Text>
            )}
            {props.monthOrYear && (
              <>
                <Text
                  className="mt-2 duration-300"
                  color="dimmed"
                  size="md"
                  sx={{ lineHeight: 1 }}
                  mb={5}
                  align="left"
                >
                  $150/yr
                </Text>
                <Text
                  className="mt-2 duration-300"
                  color="blue.7"
                  size="md"
                  sx={{ lineHeight: 1 }}
                  mb={5}
                  align="left"
                >
                  2 months free
                </Text>
              </>
            )}
          </div>
        </button>
      </div>

      <div className="flex justify-center mx-6 md:w-[465px] md:mt-6 md:mx-6 md:mb-[-35px] md:ml-[340px] mt-4 mb-6 duration-300">
        <div className="bg-gray-100 rounded-md  w-full h-11 md:h-14 flex justify-center items-center duration-300">
          <h1 className="text-base mx-8 font-bold">Monthly</h1>
          <Switch
            checked={props.monthOrYear}
            onChange={(event) =>
              props.setMonthOrYear(event.currentTarget.checked)
            }
            size="md"
            color="blue.7"
          />
          <h1 className="text-base mx-8 font-bold">Yearly</h1>
        </div>
      </div>
    </>
  );
};

export default StepTwo;

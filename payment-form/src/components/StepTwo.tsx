import React, { useState } from "react";
import { Input } from "@mantine/core";
import { ImageCheckbox, ImageCheckboxes } from "./ImageCheckbox";
import { Switch, Text, Image } from "@mantine/core";
import arcade from "../assets/images/icon-arcade.svg";
import advanced from "../assets/images/icon-advanced.svg";
import pro from "../assets/images/icon-pro.svg";
import { Dispatch, SetStateAction } from "react";

type Props = {
  arcadeBtn: boolean;
  setArcadeBtn: Dispatch<SetStateAction<boolean>>;
  advancedBtn: boolean;
  setAdvancedBtn: Dispatch<SetStateAction<boolean>>;
  proBtn: boolean;
  setProBtn: Dispatch<SetStateAction<boolean>>;
  monthOrYear: boolean;
  setMonthOrYear: Dispatch<SetStateAction<boolean>>;
};

const StepTwo: React.FC<Props> = (props) => {
  //const [arcadeBtn, setArcadeBtn] = useState(false as boolean);
  const handleArcade = () => {
    if (!props.advancedBtn && !props.proBtn)
      props.setArcadeBtn(!props.arcadeBtn);
    if (props.advancedBtn || props.proBtn) alert("Uncheck your option first!");
  };
  //const [advancedBtn, setAdvancedBtn] = useState(false as boolean);
  const handleAdvanced = () => {
    if (!props.arcadeBtn && !props.proBtn)
      props.setAdvancedBtn(!props.advancedBtn);
    if (props.arcadeBtn || props.proBtn) alert("Uncheck your option first!");
  };
  //const [proBtn, setProBtn] = useState(false as boolean);
  const handlePro = () => {
    if (!props.arcadeBtn && !props.advancedBtn) props.setProBtn(!props.proBtn);
    if (props.advancedBtn || props.arcadeBtn)
      alert("Uncheck your option first!");
  };
  //const [monthOrYear, setMonthOrYear] = useState(false as boolean);

  return (
    <>
      <h1 className="mx-6 mt-6 text-blue-900 font-bold">Select your plan</h1>
      <p className="mx-6 mb-4 text-gray-400">
        You have the option for monthly or yearly billing.
      </p>

      {/* <ImageCheckboxes /> */}
      <div>
        <button
          onClick={handleArcade}
          className={
            props.arcadeBtn
              ? "flex items-center w-[86%] mx-6 py-6 rounded-md border-2 group hover:scale-105 duration-300 scale-105 bg-gray-50 border-purple-900"
              : "flex items-center w-[86%] mx-6 py-6 rounded-md border-2 group hover:scale-105 duration-300"
          }
        >
          <Image className="ml-4" src={arcade} alt="arcade" width={40} />
          <div className="ml-4">
            <Text
              className="mr-6"
              weight={500}
              size="md"
              sx={{ lineHeight: 1 }}
            >
              Arcade
            </Text>
            {!props.monthOrYear && (
              <Text
                className="mt-2  duration-300"
                color="dimmed"
                size="xs"
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
                  size="xs"
                  sx={{ lineHeight: 1 }}
                  mb={5}
                  align="left"
                >
                  $90/yr
                </Text>
                <Text
                  className="mt-2 duration-300"
                  color="blue.7"
                  size="xs"
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
              ? "flex items-center w-[86%] mx-6 py-6 mt-3 rounded-md border-2 group hover:scale-105 duration-300 scale-105 bg-gray-50 border-purple-900"
              : "flex items-center w-[86%] mx-6 py-6 mt-3 rounded-md border-2 group hover:scale-105 duration-300"
          }
        >
          <Image className="ml-4" src={advanced} alt="arcade" width={40} />
          <div className="ml-4">
            <Text className="" weight={500} size="md" sx={{ lineHeight: 1 }}>
              Advanced
            </Text>
            {!props.monthOrYear && (
              <Text
                className="mt-2  duration-300"
                color="dimmed"
                size="xs"
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
                  size="xs"
                  sx={{ lineHeight: 1 }}
                  mb={5}
                  align="left"
                >
                  $120/yr
                </Text>
                <Text
                  className="mt-2 duration-300"
                  color="blue.7"
                  size="xs"
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
              ? "flex items-center w-[86%] mx-6 py-6 mt-3 rounded-md border-2 group hover:scale-105 duration-300 scale-105 bg-gray-50 border-purple-900"
              : "flex items-center w-[86%] mx-6 py-6 mt-3 rounded-md border-2 group hover:scale-105 duration-300"
          }
        >
          <Image className="ml-4" src={pro} alt="arcade" width={40} />
          <div className="ml-5">
            <Text
              className="mr-12"
              weight={500}
              size="md"
              sx={{ lineHeight: 1 }}
            >
              Pro
            </Text>
            {!props.monthOrYear && (
              <Text
                className="mt-2 duration-300"
                color="dimmed"
                size="xs"
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
                  size="xs"
                  sx={{ lineHeight: 1 }}
                  mb={5}
                  align="left"
                >
                  $150/yr
                </Text>
                <Text
                  className="mt-2 duration-300"
                  color="blue.7"
                  size="xs"
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

      <div className="flex justify-center mx-6 mt-4 mb-6">
        <div className="bg-gray-100 rounded-md  w-full h-11 flex justify-center items-center">
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

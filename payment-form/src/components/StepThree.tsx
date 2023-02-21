import React, { useState, useEffect } from "react";
import { Checkbox, Text } from "@mantine/core";
import { Dispatch, SetStateAction } from "react";

type Props = {
  onlineServ: boolean;
  setOnlineServ: Dispatch<SetStateAction<boolean>>;
  lgStorage: boolean;
  setLgStorage: Dispatch<SetStateAction<boolean>>;
  customProf: boolean;
  setCustomProf: Dispatch<SetStateAction<boolean>>;
  total: number;
  setTotal: Dispatch<SetStateAction<number>>;
  monthOrYear: boolean;
  setMonthOrYear: Dispatch<SetStateAction<boolean>>;
};

const StepThree: React.FC<Props> = (props) => {
  return (
    <>
      <h1 className="mx-6 mt-6 md:ml-[340px] md:mr-20 duration-500 text-blue-900 font-bold">
        Pick add-ons
      </h1>
      <p className="mx-6 mb-4 md:ml-[340px] md:mr-20 duration-500 text-gray-400">
        Add-ons help enhance your gaming experience.
      </p>
      <div className="mx-6 md:w-[55%] md:ml-[340px] mb-6 md:mb-[-34px] flex flex-col">
        <div
          className={
            props.onlineServ
              ? "border px-5 py-6 w-full border-purple-900 rounded-md duration-300"
              : "border px-5 py-6 w-full rounded-md duration-300"
          }
        >
          <div>
            <Text size="sm" color="indigo.9" className="float-right mt-2">
              {`+$${props.monthOrYear ? "10" : "1"}/${
                props.monthOrYear ? "yr" : "mo"
              }`}
            </Text>
            <Checkbox
              size="md"
              checked={props.onlineServ}
              onChange={(event) =>
                props.setOnlineServ(event.currentTarget.checked)
              }
              label="Online Service"
              description="Access to multiplayer games"
            />
          </div>
        </div>
        <div
          className={
            props.lgStorage
              ? "border mt-3 px-5 py-6 w-full border-purple-900 rounded-md duration-300"
              : "border mt-3 px-5 py-6 w-full rounded-md duration-300"
          }
        >
          <Text size="sm" color="indigo.9" className="float-right mt-2">
            {`+$${props.monthOrYear ? "20" : "2"}/${
              props.monthOrYear ? "yr" : "mo"
            }`}
          </Text>
          <Checkbox
            size="md"
            checked={props.lgStorage}
            onChange={(event) =>
              props.setLgStorage(event.currentTarget.checked)
            }
            label="Larger Storage"
            description="Extra 1TB of cloud save"
          ></Checkbox>
        </div>
        <div
          className={
            props.customProf
              ? "border mt-3 px-5 py-6 w-full border-purple-900 rounded-md duration-300"
              : "border mt-3 px-5 py-6 w-full rounded-md duration-300"
          }
        >
          <Text size="sm" color="indigo.9" className="float-right mt-2">
            {`+$${props.monthOrYear ? "20" : "1"}/${
              props.monthOrYear ? "yr" : "mo"
            }`}
          </Text>
          <Checkbox
            size="md"
            checked={props.customProf}
            onChange={(event) =>
              props.setCustomProf(event.currentTarget.checked)
            }
            label="Customizable Profile"
            description="Custom theme on your profile"
          />
        </div>
      </div>
    </>
  );
};

export default StepThree;

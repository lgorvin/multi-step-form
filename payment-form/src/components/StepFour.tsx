import React, { useState, useEffect } from "react";
import { Text, Paper, Divider } from "@mantine/core";
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
  onlineServ: boolean;
  setOnlineServ: Dispatch<SetStateAction<boolean>>;
  lgStorage: boolean;
  setLgStorage: Dispatch<SetStateAction<boolean>>;
  customProf: boolean;
  setCustomProf: Dispatch<SetStateAction<boolean>>;
  total: number;
  setTotal: Dispatch<SetStateAction<number>>;
  stepTwo: boolean;
  setStepTwo: Dispatch<SetStateAction<boolean>>;
  stepFour: boolean;
  setStepFour: Dispatch<SetStateAction<boolean>>;
};

const StepFour = ({
  arcadeBtn,
  advancedBtn,
  proBtn,
  monthOrYear,
  onlineServ,
  lgStorage,
  customProf,
  total,
  setStepTwo,
  setStepFour,
}: Props): JSX.Element => {
  const prices = {
    arcademonth: 9,
    advancedmonth: 12,
    promonth: 15,
    arcadeyear: 90,
    advancedyear: 120,
    proyear: 150,
    onlinemonth: 1,
    storagemonth: 2,
    customprofmonth: 2,
    onlineyear: 10,
    storageyear: 20,
    customprofyear: 20,
  };
  return (
    <>
      <h1 className="mx-6 mt-6 md:ml-[340px] md:mr-20 duration-500 text-blue-900 font-bold">
        Finishing up
      </h1>

      <p className="mx-6 mb-4 md:ml-[340px] md:mr-20 duration-500 text-gray-400">
        Double-check everything looks OK before continuing
      </p>
      <Paper
        className="mx-6 md:w-[470px] md:ml-[340px] bg-gray-100"
        shadow="sm"
        p="sm"
      >
        <div className="flex">
          <Text className="text-sky-800" fw={700}>
            {`${
              arcadeBtn
                ? "Arcade"
                : "" || advancedBtn
                ? "Advanced"
                : "" || proBtn
                ? "Pro"
                : ""
            } (${monthOrYear ? "Yearly" : "Monthly"})`}
          </Text>
          <Text className="text-sky-800 absolute right-12 pt-3" fw={700}>
            {`$${
              arcadeBtn && !monthOrYear
                ? prices.arcademonth
                : "" || (arcadeBtn && monthOrYear)
                ? prices.arcadeyear
                : "" || (advancedBtn && !monthOrYear)
                ? prices.advancedmonth
                : "" || (advancedBtn && monthOrYear)
                ? prices.advancedyear
                : "" || (proBtn && !monthOrYear)
                ? prices.promonth
                : "" || (proBtn && monthOrYear)
                ? prices.proyear
                : ""
            }/${monthOrYear ? "yr" : "mo"}`}
          </Text>
        </div>
        <div
          onClick={() => {
            setStepFour(false);
            setStepTwo(true);
          }}
          className="mt-[-4px] cursor-pointer"
        >
          <Text className="text-gray-400 underline " fw={500}>
            Change
          </Text>
        </div>
        {onlineServ || lgStorage || customProf ? <Divider my="sm" /> : <></>}
        {onlineServ && (
          <div className="flex">
            <Text className="text-gray-400" fw={500}>
              Online service
            </Text>
            <Text className="text-sky-800 absolute right-12" fw={600}>
              {`+$${monthOrYear ? prices.onlineyear : prices.onlinemonth}${
                monthOrYear ? "/yr" : "/mo"
              }`}
            </Text>
          </div>
        )}
        {lgStorage && (
          <div className="flex mt-2">
            <Text className="text-gray-400" fw={500}>
              Larger storage
            </Text>
            <Text className="text-sky-800 absolute right-12" fw={600}>
              {`+$${monthOrYear ? prices.storageyear : prices.storagemonth}${
                monthOrYear ? "/yr" : "/mo"
              }`}
            </Text>
          </div>
        )}
        {customProf && (
          <div className="flex mt-2">
            <Text className="text-gray-400" fw={500}>
              Custom profile
            </Text>
            <Text className="text-sky-800 absolute right-12" fw={600}>
              {`+$${
                monthOrYear ? prices.customprofyear : prices.customprofmonth
              }${monthOrYear ? "/yr" : "/mo"}`}
            </Text>
          </div>
        )}
      </Paper>
      <div className="flex mx-6 mt-4">
        <Text className="text-gray-400 md:ml-[330px]" fw={500}>
          Total (per {`${monthOrYear ? "year" : "month"}`})
        </Text>
        <Text
          style={{ fontSize: "22px" }}
          className="text-blue-800 absolute right-7 md:right-14 mt-[-7px]"
          fw={600}
        >
          ${total}
        </Text>
      </div>
      <div className="mx-6 mb-6 md:mb-10 flex flex-col"></div>
    </>
  );
};

export default StepFour;

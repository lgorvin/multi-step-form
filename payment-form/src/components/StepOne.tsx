import React, { useState } from "react";
import { Input, Autocomplete } from "@mantine/core";
import { Dispatch, SetStateAction } from "react";

type Props = {
  name: string;
  setName: Dispatch<SetStateAction<string>>;
  email: string;
  setEmail: Dispatch<SetStateAction<string>>;
  phone: string;
  setPhone: Dispatch<SetStateAction<string>>;
};

const StepOne: React.FC<Props> = (props) => {
  const data =
    props.email.trim().length > 0 && !props.email.includes("@")
      ? ["gmail.com", "outlook.com", "yahoo.com", "hotmail.com"].map(
          (provider) => `${props.email}@${provider}`
        )
      : [];

  return (
    <>
      <h1 className="mx-6 md:ml-[340px] md:mr-20 mt-6 text-blue-900 font-bold duration-500">
        Personal info
      </h1>
      <p className="mx-6 md:ml-[340px] text-gray-400 duration-500">
        Please provide your name, email address, and phone number.
      </p>
      <Input.Wrapper
        className="mx-6 mt-6 md:ml-[340px] md:mr-16 duration-500"
        id="input-demo1"
        withAsterisk
        label="Name"
      >
        <Input
          required
          value={props.name}
          onChange={(event) => props.setName(event.target.value)}
          id="name-input"
          placeholder="e.g. Stephen King"
        />
      </Input.Wrapper>
      <Input.Wrapper
        className="mx-6 mt-6 md:ml-[340px] md:mr-16 duration-500"
        id="email-input"
        withAsterisk
        label="Email Address"
      >
        <Autocomplete
          value={props.email}
          onChange={props.setEmail}
          placeholder="e.g. stephenking@lorem.com"
          data={data}
        />
      </Input.Wrapper>
      <Input.Wrapper
        className="mx-6 mt-6 mb-8 md:ml-[340px] md:mr-16 duration-500"
        id="phone-input"
        label="Phone Number"
      >
        <Input
          value={props.phone}
          onChange={(event) => props.setPhone(event.target.value)}
          id="input-demo3"
          placeholder="e.g. +1 234 567 890"
        />
      </Input.Wrapper>
    </>
  );
};

export default StepOne;

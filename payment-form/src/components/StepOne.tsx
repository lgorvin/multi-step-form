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
      <h1 className="mx-6 mt-6 text-blue-900 font-bold">Personal info</h1>
      <p className="mx-6 text-gray-400">
        Please provide your name, email address, and phone number.
      </p>
      <Input.Wrapper
        className="mx-6 mt-6"
        id="input-demo"
        withAsterisk
        label="Name"
      >
        <Input
          required
          value={props.name}
          onChange={(event) => props.setName(event.target.value)}
          id="input-demo"
          placeholder="e.g. Stephen King"
        />
      </Input.Wrapper>
      <Input.Wrapper
        className="mx-6 mt-6"
        id="input-demo"
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
        className="mx-6 mt-6 mb-8"
        id="input-demo"
        label="Phone Number"
      >
        <Input
          value={props.phone}
          onChange={(event) => props.setPhone(event.target.value)}
          id="input-demo"
          placeholder="e.g. +1 234 567 890"
        />
      </Input.Wrapper>
    </>
  );
};

export default StepOne;

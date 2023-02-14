import React from "react";
import { Input } from "@mantine/core";

const StepOne = () => {
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
        <Input id="input-demo" placeholder="e.g. Stephen King" />
      </Input.Wrapper>
      <Input.Wrapper
        className="mx-6 mt-6"
        id="input-demo"
        withAsterisk
        label="Email Address"
      >
        <Input id="input-demo" placeholder="e.g. stephenking@lorem.com" />
      </Input.Wrapper>
      <Input.Wrapper className="mx-6 mt-6" id="input-demo" label="Phone Number">
        <Input id="input-demo" placeholder="e.g. +1 234 567 890" />
      </Input.Wrapper>
    </>
  );
};

export default StepOne;

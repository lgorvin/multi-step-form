import { useState } from "react";
import { Button } from "@mantine/core";
import { MantineProvider, Input, Modal, Popover, Text } from "@mantine/core";
import StepOne from "./components/StepOne";
import StepTwo from "./components/StepTwo";
import StepThree from "./components/StepThree";
import StepFour from "./components/StepFour";
import StepButtons from "./components/StepButtons";

function App() {
  //StepButtons props
  const [stepOne, setStepOne] = useState(true as boolean);
  const [stepTwo, setStepTwo] = useState(false);
  const [stepThree, setStepThree] = useState(false as boolean);
  const [stepFour, setStepFour] = useState(false as boolean);

  //Step One Props
  const [name, setName] = useState("" as string);
  const [email, setEmail] = useState("" as string);
  const [phone, setPhone] = useState("" as string);
  const data =
    email.trim().length > 0 && !email.includes("@")
      ? ["gmail.com", "outlook.com", "yahoo.com", "hotmail.com"].map(
          (provider) => `${email}@${provider}`
        )
      : [];

  //Step Two Props
  const [arcadeBtn, setArcadeBtn] = useState(false as boolean);
  const [advancedBtn, setAdvancedBtn] = useState(false as boolean);
  const [proBtn, setProBtn] = useState(false as boolean);
  const [monthOrYear, setMonthOrYear] = useState(false as boolean);

  //Step Three Props
  const [onlineServ, setOnlineServ] = useState(false as boolean);
  const [lgStorage, setLgStorage] = useState(false as boolean);
  const [customProf, setCustomProf] = useState(false as boolean);

  const [opened, setOpened] = useState(false);

  return (
    <>
      <MantineProvider withGlobalStyles withNormalizeCSS>
        <div className="h-screen bg-sky-50">
          <StepButtons
            stepOne={stepOne}
            setStepOne={setStepOne}
            stepTwo={stepTwo}
            setStepTwo={setStepTwo}
            stepThree={stepThree}
            setStepThree={setStepThree}
            stepFour={stepFour}
            setStepFour={setStepFour}
            name={name}
            setName={setName}
            email={email}
            setEmail={setEmail}
            opened={opened}
            setOpened={setOpened}
            advancedBtn={advancedBtn}
            setAdvancedBtn={setAdvancedBtn}
            arcadeBtn={arcadeBtn}
            setArcadeBtn={setArcadeBtn}
            proBtn={proBtn}
            setProBtn={setProBtn}
          />
          <div className="bg-white absolute top-[99px] left-1/2 transform -translate-x-1/2 h-auto w-[350px] rounded-lg shadow-lg">
            {stepOne && (
              <StepOne
                name={name}
                setName={setName}
                email={email}
                setEmail={setEmail}
                phone={phone}
                setPhone={setPhone}
              />
            )}
            {stepTwo && (
              <StepTwo
                arcadeBtn={arcadeBtn}
                setArcadeBtn={setArcadeBtn}
                advancedBtn={advancedBtn}
                setAdvancedBtn={setAdvancedBtn}
                proBtn={proBtn}
                setProBtn={setProBtn}
                monthOrYear={monthOrYear}
                setMonthOrYear={setMonthOrYear}
              />
            )}
            {stepThree && (
              <StepThree
                onlineServ={onlineServ}
                setOnlineServ={setOnlineServ}
                lgStorage={lgStorage}
                setLgStorage={setLgStorage}
                customProf={customProf}
                setCustomProf={setCustomProf}
              />
            )}
            {stepFour && <StepFour />}
          </div>

          <div
            style={{
              boxShadow:
                "0 -4px 16px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
            }}
            className="bg-white w-screen h-24 absolute bottom-0 left-1/2 transform -translate-x-1/2"
          >
            <div className="flex items-center h-full w-full">
              {!stepOne && (
                <button
                  onClick={() => {
                    if (stepTwo) {
                      setStepTwo(false);
                      setStepOne(true);
                    } else if (stepThree) {
                      setStepThree(false);
                      setStepTwo(true);
                    } else if (stepFour) {
                      setStepFour(false);
                      setStepThree(true);
                    }
                  }}
                  className="px-4 py-3 ml-2 active:scale-95 duration-300 rounded-md text-gray-400"
                >
                  Go Back
                </button>
              )}
              {stepOne && (
                <div
                  className={
                    !name && !email
                      ? `absolute z-10 w-[101px] h-10 right-4`
                      : `hidden` && !name
                      ? "absolute z-10 w-[101px] h-10 right-4"
                      : "hidden" && !email
                      ? "absolute z-10 w-[101px] h-10 right-4"
                      : "hidden"
                  }
                  onClick={() => {
                    if (!name && email) setOpened(true);
                    if (!email && name) setOpened(true);
                    if (!email && !name) setOpened(true);
                  }}
                ></div>
              )}
              {stepTwo && (
                <div
                  className={
                    !arcadeBtn && !advancedBtn && !proBtn
                      ? "absolute z-10 w-[101px] h-10 right-4"
                      : "hidden"
                  }
                  onClick={() => {
                    if (!arcadeBtn && !advancedBtn && !proBtn) setOpened(true);
                  }}
                ></div>
              )}
              <Popover
                position="bottom"
                width="30%"
                withArrow
                shadow="md"
                opened={opened}
                onChange={setOpened}
              >
                <Popover.Target>
                  <button
                    disabled={name === "" || email == ""}
                    onClick={() => {
                      if (stepOne) {
                        setStepOne(false);
                        setStepTwo(true);
                      } else if (stepTwo) {
                        setStepTwo(false);
                        setStepThree(true);
                      } else if (stepThree) {
                        setStepThree(false);
                        setStepFour(true);
                      }
                    }}
                    className={
                      !stepOne
                        ? "bg-blue-900 px-4 py-3 ml-[155px] active:scale-95 duration-300 rounded-md text-white"
                        : "bg-blue-900 px-4 py-3 ml-[255px] active:scale-95 duration-300 rounded-md text-white"
                    }
                  >
                    {!stepFour ? "Next Step" : "Confirm"}
                  </button>
                </Popover.Target>

                <Popover.Dropdown>
                  {stepOne && (
                    <Text fw={700} color="red.6" align="center">{`Missing ${
                      !name && email ? "Name" : ""
                    }${!email && name ? "Email" : ""}${
                      !name && !email ? "Name & Email" : ""
                    }`}</Text>
                  )}
                  {stepTwo && (
                    <Text fw={700} color="red.6" align="center">{`${
                      !arcadeBtn && !advancedBtn && !proBtn ? "Pick One!" : ""
                    }`}</Text>
                  )}
                </Popover.Dropdown>
              </Popover>
            </div>
          </div>
        </div>
        {/* <div className="h-screen">
          <Button color="indigo">Settings</Button>
        </div> */}
      </MantineProvider>
    </>
  );
}

export default App;

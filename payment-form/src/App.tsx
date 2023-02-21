import { useState } from "react";
import { Button } from "@mantine/core";
import { MantineProvider, Input, Modal, Popover, Text } from "@mantine/core";
import { useMediaQuery } from "react-responsive";
import StepOne from "./components/StepOne";
import StepTwo from "./components/StepTwo";
import StepThree from "./components/StepThree";
import StepFour from "./components/StepFour";
import StepButtons from "./components/StepButtons";
import EndPage from "./components/EndPage";

function App() {
  //StepButtons props
  const [stepOne, setStepOne] = useState(true as boolean);
  const [stepTwo, setStepTwo] = useState(false);
  const [stepThree, setStepThree] = useState(false as boolean);
  const [stepFour, setStepFour] = useState(false as boolean);
  const [thankYou, setThankYou] = useState(false as boolean);

  //Step One Props
  const [name, setName] = useState("" as string);
  const [email, setEmail] = useState("" as string);
  const [phone, setPhone] = useState("" as string);

  //Step Two Props
  const [arcadeBtn, setArcadeBtn] = useState(false as boolean);
  const [advancedBtn, setAdvancedBtn] = useState(true as boolean);
  const [proBtn, setProBtn] = useState(false as boolean);
  const [monthOrYear, setMonthOrYear] = useState(false as boolean);

  //Step Three Props
  const [onlineServ, setOnlineServ] = useState(false as boolean);
  const [lgStorage, setLgStorage] = useState(false as boolean);
  const [customProf, setCustomProf] = useState(false as boolean);

  const [opened, setOpened] = useState(false);
  const [total, setTotal] = useState(0);

  const tailwindMd = useMediaQuery({ query: "(min-width: 768px)" });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  const isPortrait = useMediaQuery({ query: "(orientation: portrait)" });
  const isRetina = useMediaQuery({ query: "(min-resolution: 2dppx)" });

  const totalChecker = () => {
    if (!monthOrYear) {
      if (onlineServ && lgStorage && customProf) {
        setTotal(total + 5);
        console.log("Online service + storage + custom profile");
      } else if (onlineServ && lgStorage && !customProf) {
        setTotal(total + 3);
        console.log("Online service + storage");
      } else if (onlineServ && !lgStorage && customProf) {
        setTotal(total + 3);
        console.log("Online service + custom profile");
      } else if (!onlineServ && lgStorage && customProf) {
        setTotal(total + 4);
        console.log("storage + custom profile");
      } else if (onlineServ && !lgStorage && !customProf) {
        setTotal(total + 1);
        console.log("Online service");
      } else if (!onlineServ && lgStorage && !customProf) {
        setTotal(total + 2);
        console.log("storage");
      } else if (!onlineServ && !lgStorage && customProf) {
        setTotal(total + 2);
        console.log("custom profile");
      }
    }

    if (monthOrYear) {
      if (onlineServ && lgStorage && customProf) {
        setTotal(total + 50);
        console.log("Online service + storage + custom profile");
      } else if (onlineServ && lgStorage && !customProf) {
        setTotal(total + 30);
        console.log("Online service + storage");
      } else if (onlineServ && !lgStorage && customProf) {
        setTotal(total + 30);
        console.log("Online service + custom profile");
      } else if (!onlineServ && lgStorage && customProf) {
        setTotal(total + 40);
        console.log("storage + custom profile");
      } else if (onlineServ && !lgStorage && !customProf) {
        setTotal(total + 10);
        console.log("Online service");
      } else if (!onlineServ && lgStorage && !customProf) {
        setTotal(total + 20);
        console.log("storage");
      } else if (!onlineServ && !lgStorage && customProf) {
        setTotal(total + 20);
        console.log("custom profile");
      }
    }
  };

  return (
    <>
      <MantineProvider withGlobalStyles withNormalizeCSS>
        <main>
          <div className="h-screen bg-sky-50">
            <h1 className="text-sm p-2">Made by LGorvin</h1>
            {!tailwindMd && (
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
                totalChecker={totalChecker}
                thankYou={thankYou}
                setThankYou={setThankYou}
              />
            )}

            <div className="bg-white absolute top-[99px] left-1/2 transform -translate-x-1/2 h-auto md:h-[600px] w-[350px] md:w-[850px] duration-500 rounded-lg shadow-lg">
              {!thankYou && (
                <>
                  {tailwindMd && (
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
                      totalChecker={totalChecker}
                      thankYou={thankYou}
                      setThankYou={setThankYou}
                    />
                  )}
                </>
              )}
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
                  total={total}
                  setTotal={setTotal}
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
                  total={total}
                  setTotal={setTotal}
                  monthOrYear={monthOrYear}
                  setMonthOrYear={setMonthOrYear}
                />
              )}
              {stepFour && (
                <StepFour
                  arcadeBtn={arcadeBtn}
                  setArcadeBtn={setArcadeBtn}
                  advancedBtn={advancedBtn}
                  setAdvancedBtn={setAdvancedBtn}
                  proBtn={proBtn}
                  setProBtn={setProBtn}
                  monthOrYear={monthOrYear}
                  setMonthOrYear={setMonthOrYear}
                  onlineServ={onlineServ}
                  setOnlineServ={setOnlineServ}
                  lgStorage={lgStorage}
                  setLgStorage={setLgStorage}
                  customProf={customProf}
                  setCustomProf={setCustomProf}
                  total={total}
                  setTotal={setTotal}
                  stepTwo={stepTwo}
                  setStepTwo={setStepTwo}
                  stepFour={stepFour}
                  setStepFour={setStepFour}
                />
              )}
              {thankYou && <EndPage />}

              {tailwindMd && (
                <div className="">
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
                      className={
                        !thankYou
                          ? "px-4 py-3 ml-2 md:ml-[320px] md:mt-[145px] active:scale-95 duration-300 rounded-md text-gray-400 hover:text-black"
                          : "hidden"
                      }
                    >
                      Go Back
                    </button>
                  )}
                  {stepOne && (
                    <div
                      className={
                        !name && !email
                          ? `absolute mt-36 z-10 w-[101px] h-10 right-10`
                          : `hidden` && !name
                          ? "absolute z-10 w-[101px] mt-36 h-10 right-10"
                          : "hidden" && !email
                          ? "absolute z-10 w-[101px] mt-36 h-10 right-10"
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
                          ? "absolute mt-[-46px] z-10 w-[101px] h-12 right-10"
                          : "hidden"
                      }
                      onClick={() => {
                        if (!arcadeBtn && !advancedBtn && !proBtn)
                          setOpened(true);
                      }}
                    ></div>
                  )}
                  {!thankYou && (
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
                              totalChecker();
                              setStepThree(false);
                              setStepFour(true);
                            } else if (stepFour) {
                              setStepFour(false);
                              setThankYou(true);
                            }
                          }}
                          className={
                            !stepOne
                              ? "bg-blue-900 hover:bg-blue-600 px-4 py-3 float-right mt-36 mr-16 md:mr-10 active:scale-95 duration-300 rounded-md text-white"
                              : "bg-blue-900 hover:bg-blue-600 px-4 py-3 float-right mt-36 mr-16 md:mr-10 active:scale-95 duration-300 rounded-md text-white"
                          }
                        >
                          {!stepFour ? "Next Step" : "Confirm"}
                        </button>
                      </Popover.Target>

                      <Popover.Dropdown>
                        {stepOne && (
                          <Text
                            fw={700}
                            color="red.6"
                            align="center"
                          >{`Missing ${!name && email ? "Name" : ""}${
                            !email && name ? "Email" : ""
                          }${!name && !email ? "Name & Email" : ""}`}</Text>
                        )}
                        {stepTwo && (
                          <Text fw={700} color="red.6" align="center">{`${
                            !arcadeBtn && !advancedBtn && !proBtn
                              ? "Pick One!"
                              : ""
                          }`}</Text>
                        )}
                      </Popover.Dropdown>
                    </Popover>
                  )}
                </div>
              )}
            </div>

            {!thankYou && (
              <div
                style={{
                  boxShadow:
                    "0 -4px 16px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
                }}
                className="bg-white w-screen h-24 absolute bottom-0 left-1/2 transform -translate-x-1/2 md:hidden"
              >
                <div className="flex justify-center items-center h-full w-full">
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
                      className="px-4 py-3 ml-2 md:ml-[320px] md:mt-[145px] active:scale-95 duration-300 rounded-md text-gray-400 hover:text-black"
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
                          ? "absolute z-10 w-[101px] h-10 pl-[110px] ml-[255px]"
                          : "hidden"
                      }
                      onClick={() => {
                        if (!arcadeBtn && !advancedBtn && !proBtn)
                          setOpened(true);
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
                            totalChecker();
                            setStepThree(false);
                            setStepFour(true);
                          } else if (stepFour) {
                            setStepFour(false);
                            setThankYou(true);
                          }
                        }}
                        className={
                          !stepOne
                            ? "bg-blue-900 hover:bg-blue-600 px-4 py-3 ml-[155px] active:scale-95 duration-300 rounded-md text-white"
                            : "bg-blue-900 hover:bg-blue-600 px-4 py-3 ml-[255px]  active:scale-95 duration-300 rounded-md text-white"
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
                          !arcadeBtn && !advancedBtn && !proBtn
                            ? "Pick One!"
                            : ""
                        }`}</Text>
                      )}
                    </Popover.Dropdown>
                  </Popover>
                </div>
              </div>
            )}
          </div>
        </main>
      </MantineProvider>
    </>
  );
}

export default App;

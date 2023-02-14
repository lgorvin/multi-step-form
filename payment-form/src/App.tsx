import { useState } from "react";
import { Button } from "@mantine/core";
import { MantineProvider, Input } from "@mantine/core";
import StepOne from "./components/StepOne";

function App() {
  const [count, setCount] = useState(0);
  const [stepOne, setStepOne] = useState(useState(true as boolean));

  return (
    <>
      <MantineProvider withGlobalStyles withNormalizeCSS>
        <div className="h-screen bg-sky-50">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              width="375"
              height="172"
              viewBox="0 0 375 172"
            >
              <defs>
                <path id="a" d="M0 0h375v172H0z" />
              </defs>
              <g fill="none" fill-rule="evenodd">
                <mask id="b" fill="#fff">
                  <use xlinkHref="#a" />
                </mask>
                <use xlinkHref="#a" fill="#483EFF" />
                <g mask="url(#b)">
                  <g transform="translate(-151.029 -133.957)">
                    <path
                      fill="#6259FF"
                      d="M79.546 349.634c54.547 128.646 292.524 204.132 354.626 99.852 62.102-104.28-95.035-123.204-150.583-230.963-55.547-107.759-98.711-175.015-178.973-150.466C24.354 92.607 25 220.987 79.546 349.634Z"
                    />
                    <ellipse
                      cx="129.864"
                      cy="258.711"
                      fill="#FFAF7E"
                      rx="96.329"
                      ry="96.373"
                    />
                    <path
                      fill="#F9818E"
                      d="M464.88 433.146c87.31-40.69 133.585-206.525 60.253-246.82-73.333-40.293-82.587 68.465-155.485 109.343-72.898 40.877-118.192 72.245-99.348 126.973 18.845 54.728 107.27 51.194 194.58 10.504Z"
                    />
                    <g
                      stroke="#FFF"
                      stroke-linecap="round"
                      stroke-linejoin="bevel"
                      stroke-width="5"
                    >
                      <path d="m367.336 243.125 15.263-15.549M430.872 251.016l-17.995-15.112M399.36 271.751l-9.94 21.293" />
                    </g>
                  </g>
                </g>
              </g>
            </svg>
          </div>
          <div className=" absolute top-7 left-1/2 transform -translate-x-1/2">
            <div className="grid grid-cols-4 gap-6 items-center">
              <div className="bg-cyan-200 rounded-full h-9 w-9 flex justify-center items-center">
                <h1 className="font-bold text-base text-black">1</h1>
              </div>
              <div className="bg-transparent border-2 rounded-full h-9 w-9 flex justify-center items-center">
                <h1 className="font-bold text-base text-white">2</h1>
              </div>
              <div className="bg-transparent border-2 rounded-full h-9 w-9 flex justify-center items-center">
                <h1 className="font-bold text-base text-white">3</h1>
              </div>
              <div className="bg-transparent border-2 rounded-full h-9 w-9 flex justify-center items-center">
                <h1 className="font-bold text-base text-white">4</h1>
              </div>
            </div>
          </div>
          <div className="bg-white absolute top-[99px] left-1/2 transform -translate-x-1/2 h-[425px] w-[350px] rounded-lg shadow-lg">
            {stepOne && <StepOne />}
          </div>

          <div
            style={{
              boxShadow:
                "0 -4px 16px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
            }}
            className="bg-white w-screen h-24  absolute bottom-0 left-1/2 transform -translate-x-1/2"
          >
            <div className="flex items-center h-full w-full">
              <button
                onClick={() => {}}
                className="bg-blue-900 px-4 py-3 ml-[256px] mr-4 active:scale-95 duration-300 rounded-md text-white"
              >
                Next Step
              </button>
            </div>
          </div>
        </div>
        <div className="h-screen">
          <Button color="indigo">Settings</Button>
        </div>
      </MantineProvider>
    </>
  );
}

export default App;

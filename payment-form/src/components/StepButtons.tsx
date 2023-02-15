import React from "react";
import { Dispatch, SetStateAction } from "react";

type Props = {
  stepOne: boolean;
  setStepOne: Dispatch<SetStateAction<boolean>>;
  stepTwo: boolean;
  setStepTwo: Dispatch<SetStateAction<boolean>>;
  stepThree: boolean;
  setStepThree: Dispatch<SetStateAction<boolean>>;
  stepFour: boolean;
  setStepFour: Dispatch<SetStateAction<boolean>>;
  name: string;
  setName: Dispatch<SetStateAction<string>>;
  email: string;
  setEmail: Dispatch<SetStateAction<string>>;
  opened: boolean;
  setOpened: Dispatch<SetStateAction<boolean>>;
  arcadeBtn: boolean;
  setArcadeBtn: Dispatch<SetStateAction<boolean>>;
  advancedBtn: boolean;
  setAdvancedBtn: Dispatch<SetStateAction<boolean>>;
  proBtn: boolean;
  setProBtn: Dispatch<SetStateAction<boolean>>;
};

const StepButtons: React.FC<Props> = (props) => {
  return (
    <>
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
          <div
            onClick={() => {
              props.setStepOne(true);
              props.setStepTwo(false);
              props.setStepThree(false);
              props.setStepFour(false);
            }}
            className={
              props.stepOne
                ? "bg-cyan-200 rounded-full h-9 w-9 flex justify-center items-center cursor-pointer transition-colors duration-500 ease-linear"
                : "bg-transparent border-2 rounded-full h-9 w-9 flex justify-center items-center cursor-pointer transition-colors duration-500 ease-linear"
            }
          >
            <h1
              className={
                props.stepOne
                  ? "font-bold text-base text-black duration-300"
                  : "font-bold text-base text-white duration-300"
              }
            >
              1
            </h1>
          </div>
          <div
            onClick={() => {
              if (props.name && props.email) {
                props.setStepOne(false);
                props.setStepTwo(true);
              } else {
                props.setOpened(true);
              }
              props.setStepThree(false);
              props.setStepFour(false);
            }}
            className={
              props.stepTwo
                ? "bg-cyan-200 rounded-full h-9 w-9 flex justify-center items-center cursor-pointer transition-colors duration-500 ease-linear"
                : "bg-transparent border-2 rounded-full h-9 w-9 flex justify-center items-center cursor-pointer transition-colors duration-500 ease-linear"
            }
          >
            <h1
              className={
                props.stepTwo
                  ? "font-bold text-base text-black duration-300"
                  : "font-bold text-base text-white duration-300"
              }
            >
              2
            </h1>
          </div>
          <div
            onClick={() => {
              props.setStepOne(false);
              if (props.advancedBtn || props.arcadeBtn || props.proBtn) {
                props.setStepTwo(false);
                props.setStepThree(true);
              } else {
                props.setOpened(true);
              }
              props.setStepFour(false);
            }}
            className={
              props.stepThree
                ? "bg-cyan-200 rounded-full h-9 w-9 flex justify-center items-center cursor-pointer transition-colors duration-500"
                : "bg-transparent border-2 rounded-full h-9 w-9 flex justify-center items-center cursor-pointer transition-colors duration-500"
            }
          >
            <h1
              className={
                props.stepThree
                  ? "font-bold text-base text-black duration-300"
                  : "font-bold text-base text-white duration-300"
              }
            >
              3
            </h1>
          </div>
          <div
            onClick={() => {
              props.setStepOne(false);
              props.setStepTwo(false);
              props.setStepThree(false);
              props.setStepFour(true);
            }}
            className={
              props.stepFour
                ? "bg-cyan-200 rounded-full h-9 w-9 flex justify-center items-center cursor-pointer transition-colors duration-500"
                : "bg-transparent border-2 rounded-full h-9 w-9 flex justify-center items-center cursor-pointer transition-colors duration-500"
            }
          >
            <h1
              className={
                props.stepFour
                  ? "font-bold text-base text-black duration-300"
                  : "font-bold text-base text-white duration-300"
              }
            >
              4
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default StepButtons;
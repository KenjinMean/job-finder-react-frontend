import React, { useRef, useState } from "react";

import { useMultistepForm } from "../../hooks/useMultistepForm";

import Details from "../views/Details";
import Payment from "../views/Payment";
import MaxWidthWrapperUtil from "../utils/MaxWidthWrapper.Util";
import PersonalInformationStep from "../views/PersonalInformationStep";

/** WARNING fix: find a way
  to not store password on state
  as this could add a security risk 
*/

const INITIAL_DATA = {
  firstname: "",
  lastname: "",
  additionalName: "",
  pronouns: "",
  headline: "",
  aboutMe: "",
  location: "",
};

export default function UserProfileWizardPage() {
  const [data, setData] = useState(INITIAL_DATA);

  const updateFields = (fields) => {
    setData((prev) => {
      return { ...prev, ...fields };
    });
  };

  const { steps, currentStepIndex, step, isFirstStep, back, next, isLastStep } =
    useMultistepForm([
      <PersonalInformationStep {...data} updateFields={updateFields} />,
      <Details {...data} updateFields={updateFields} />,
      <Payment {...data} updateFields={updateFields} />,
    ]);

  const submitNext = async (e) => {
    e.preventDefault();

    if (isFirstStep) {
      next();
    } else {
      if (!isLastStep) {
        return next();
      }
    }

    if (isLastStep) {
      alert("Successful Account Creation");
    }
  };

  return (
    <MaxWidthWrapperUtil>
      <div className="flex w-full overflow-hidden rounded-xl mt-14 h-72">
        <div className="w-1/4 border bg-blue-950">steps</div>
        <div className="w-3/4 border bg-slate-300">step component</div>
      </div>
    </MaxWidthWrapperUtil>
  );
  // return (
  //   <div className="flex justify-center min-h-screen text-gray-900 bg-gray-50">
  //     <div className="flex items-center justify-center flex-1 m-0 bg-white shadow sm:max-w-xl sm:m-14 sm:rounded-lg">
  //       <div className="p-6 sm:p-12">
  //         <div className="flex flex-col items-center mt-12">
  //           <div className="flex-1 w-full">
  //             <div>
  //               {currentStepIndex + 1} / {steps.length}
  //             </div>
  //             <form onSubmit={submitNext}>
  //               <div className="max-w-xs mx-auto mt-5">
  //                 {/* RENDERIGN STEPS */}
  //                 {step}
  //                 {/* ***** */}
  //                 <UserProfileWizardStepsButtonView
  //                   isFirstStep={isFirstStep}
  //                   isLastStep={isLastStep}
  //                   back={back}
  //                 />
  //               </div>
  //             </form>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // );
}

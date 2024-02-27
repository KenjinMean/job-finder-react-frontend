import React from "react";

export default function LabeledPhoneInputUiComponent({
  payload,
  label,
  name,
  id,
  form,
  phoneFieldName,
  countryCodeFieldName,
  validationSchema,
  ...inputProps
}) {
  const {
    register,
    formState: { errors },
  } = form;

  return (
    <div className="text-sm">
      <div class="flex items-center border border-border-100  bg-input-gray rounded-md">
        <select
          id="phone-numbers"
          aria-describedby="helper-text-explanation"
          class="z-10 hover:border-accent-blue500 cursor-pointer inline-flex items-center py-2.5 howve px-4 text-sm font-medium text-center text-content-gray bg-input-gray border border-border-100 rounded-s-lg focus:ring-4 focus:ring-accent-blue500 focus:border-accent-blue500"
          {...register(countryCodeFieldName)}
        >
          <option selected value="+63">
            +63
          </option>
          <option value="+1">+1</option>
          <option value="+23">+23</option>
        </select>
        <label
          for="phone-input"
          class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          Phone number:
        </label>
        <div class="relative w-full">
          <input
            type="text"
            id="phone-input"
            class="block p-2.5 w-full z-20 text-sm text-content-gray bg-input-gray rounded-e-lg border-s-0  focus:ring-accent-blue500 focus:border-accent-blue500"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            placeholder="123-456-7890"
            {...register(phoneFieldName, validationSchema)}
          />
        </div>
      </div>
      <p className="text-red-500">
        {errors[phoneFieldName]?.message ||
          errors[countryCodeFieldName]?.message}
      </p>
    </div>

    // <div className="text-sm">
    //   <label htmlFor={id} className="font-medium text-content-black">
    //     {label}
    //   </label>
    //   <div className="relative flex items-center mt-2">
    //     <select
    //       id="phone-numbers"
    //       aria-describedby="helper-text-explanation"
    //       className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 font-medium text-center text-content-black bg-input-gray rounded-s-lg "
    //     >
    //       <option selected value="+1 234 456 7890">
    //         +1 234 456 7890
    //       </option>
    //       <option value="+1 456 234 7890">+1 456 234 7890</option>
    //       <option value="+1 432 621 3163">+1 432 621 3163</option>
    //     </select>
    //     {/* <span className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 font-medium text-centertext-content-black bg-input-gray border border-border-100 rounded-s-lg ">
    //       +63{" "}
    //     </span> */}
    //     <div className="relative w-full">
    //       <input
    //         type="text"
    //         id="phone-input"
    //         aria-describedby="helper-text-explanation"
    //         className="block p-2.5 w-full z-20 text-content-black bg-input-gray rounded-e-lg border-s-0 border border-border-100 focus:ring-accent-blue500 focus:border-accent-blue500 "
    //         placeholder="123-456-7890"
    //         {...register(name, {
    //           required: "Phone field is required",
    //           pattern: {
    //             value: /[0-9]{3}-[0-9]{3}-[0-9]{4}/,
    //             message: "Invalid phone format",
    //           },
    //         })}

    //         // pattern: {
    //         //   value: /[0-9]{3}-[0-9]{3}-[0-9]{4}/,
    //         //   message: "Invalid phone format",
    //         // },
    //       />
    //     </div>
    //   </div>
    //   <p className="text-red-500">{errors[name]?.message}</p>
    // </div>
  );
}

// <div className="text-sm">
//   <label htmlFor={id} className="font-medium text-content-black">
//     {label}
//   </label>
//   <div className="relative flex items-center mt-2">
//     <select
//       id="phone-numbers"
//       aria-describedby="helper-text-explanation"
//       className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 font-medium text-center text-content-black bg-input-gray rounded-s-lg "
//     >
//       <option selected value="+1 234 456 7890">
//         +1 234 456 7890
//       </option>
//       <option value="+1 456 234 7890">+1 456 234 7890</option>
//       <option value="+1 432 621 3163">+1 432 621 3163</option>
//     </select>
//     {/* <span className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 font-medium text-centertext-content-black bg-input-gray border border-border-100 rounded-s-lg ">
//       +63{" "}
//     </span> */}
//     <div className="relative w-full">
//       <input
//         type="text"
//         id="phone-input"
//         aria-describedby="helper-text-explanation"
//         className="block p-2.5 w-full z-20 text-content-black bg-input-gray rounded-e-lg border-s-0 border border-border-100 focus:ring-accent-blue500 focus:border-accent-blue500 "
//         placeholder="123-456-7890"
//         {...register(name, {
//           required: "Phone field is required",
//           pattern: {
//             value: /[0-9]{3}-[0-9]{3}-[0-9]{4}/,
//             message: "Invalid phone format",
//           },
//         })}

//         // pattern: {
//         //   value: /[0-9]{3}-[0-9]{3}-[0-9]{4}/,
//         //   message: "Invalid phone format",
//         // },
//       />
//     </div>
//   </div>
//   <p className="text-red-500">{errors[name]?.message}</p>
// </div>

{
  /* <input
            type="phone"
            id={id}
            name={name}
            className="block p-2.5 w-full z-20 text-content-black bg-input-gray rounded-e-lg border-s-0 border border-border-100 focus:ring-accent-blue500 focus:border-accent-blue500 "
            {...inputProps}
          /> */
}
// <div class="">
//   <label
//     for="phone-input"
//     class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
//   >
//     Phone number:
//   </label>
//   <div class="relative">
//     <div class="absolute inset-y-0 start-0 top-0 flex items-center ps-3.5 pointer-events-none">
//       <svg
//         class="w-4 h-4 text-gray-500 dark:text-gray-400"
//         aria-hidden="true"
//         xmlns="http://www.w3.org/2000/svg"
//         fill="currentColor"
//         viewBox="0 0 19 18"
//       >
//         <path d="M18 13.446a3.02 3.02 0 0 0-.946-1.985l-1.4-1.4a3.054 3.054 0 0 0-4.218 0l-.7.7a.983.983 0 0 1-1.39 0l-2.1-2.1a.983.983 0 0 1 0-1.389l.7-.7a2.98 2.98 0 0 0 0-4.217l-1.4-1.4a2.824 2.824 0 0 0-4.218 0c-3.619 3.619-3 8.229 1.752 12.979C6.785 16.639 9.45 18 11.912 18a7.175 7.175 0 0 0 5.139-2.325A2.9 2.9 0 0 0 18 13.446Z" />
//       </svg>
//     </div>
//     <input
//       type="text"
//       id="phone-input"
//       aria-describedby="helper-text-explanation"
//       class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//       pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
//       placeholder="123-456-7890"
//       required
//     />
//   </div>
//   <p
//     id="helper-text-explanation"
//     class="mt-2 text-sm text-gray-500 dark:text-gray-400"
//   >
//     Select a phone number that matches the format.
//   </p>
// </div>

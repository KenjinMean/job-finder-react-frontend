import React from "react";
import showPass from "../../assets/icons/showPass.png";
import hidePass from "../../assets/icons/hidePass.png";

export default function LabeledPasswordInputUiComponent({
  form,
  name,
  label,
  disabled,
  placeholder,
  showPassword,
  setShowPassword,
  validationSchema,
  ...restProps
}) {
  const {
    register,
    formState: { errors },
  } = form;

  return (
    <div className="text-sm">
      <label
        htmlFor={name}
        className={`block mb-1 font-medium text-content-gray `}
      >
        {label}
      </label>
      <div className="relative">
        <input
          id={name}
          name={name}
          type={showPassword ? "text" : "password"}
          placeholder={placeholder}
          disabled={disabled}
          className={`bg-input-gray border border-border-100 text-content-black rounded-lg focus:ring-accent-blue500 focus:border-accent-blue500 block w-full p-2.5 disabled:opacity-50 ${
            errors[name] && "border-red-500"
          }`}
          {...register(name, {
            minLength: {
              value: 8,
              message: "Password must be at least 8 characters long",
            },
            validate: {
              hasLowercase: (fieldValue) => {
                return (
                  /^(?=.*[a-z])/.test(fieldValue) ||
                  "Password must contain at least one lowercase letter"
                );
              },
              hasUppercase: (fieldValue) => {
                return (
                  /^(?=.*[A-Z])/.test(fieldValue) ||
                  "Password must contain at least one uppercase letter"
                );
              },
              hasNumeric: (fieldValue) => {
                return (
                  /^(?=.*\d)/.test(fieldValue) ||
                  "Password must contain at least one number"
                );
              },
              hasSpecialChar: (fieldValue) => {
                return (
                  /^(?=.*[@$!%*?&])/.test(fieldValue) ||
                  "Password must contain at least one special character"
                );
              },
            },
          })}
          {...restProps}
        />
        <button
          type="button"
          tabIndex="-1"
          className="absolute p-1 transition-colors rounded-full top-[50%] -translate-y-[50%] right-3 hover:bg-background-slate300"
          onClick={() => setShowPassword((prev) => !prev)}
        >
          <img
            className="w-5 h-5"
            src={showPassword ? hidePass : showPass}
            alt={showPassword ? "hide password image" : "show password image"}
          />
        </button>
      </div>

      <p className="text-red-500">{errors[name]?.message}</p>
    </div>
  );
}

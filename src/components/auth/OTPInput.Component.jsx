import React, { useState, useRef, useEffect } from "react";

const OTPInput = ({ length = 6, setOtpValue, isLoading }) => {
  const [otp, setOTP] = useState(Array(length).fill(""));

  const inputRefs = useRef([]);

  const handleInputChange = (index, value) => {
    const newOTP = [...otp];
    newOTP[index] = value;
    setOTP(newOTP);
    if (value && inputRefs.current[index + 1]) {
      inputRefs.current[index + 1].focus();
    }
    setOtpValue(newOTP.join(""));
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && inputRefs.current[index - 1]) {
      inputRefs.current[index - 1].focus();
    }
  };

  useEffect(() => {
    inputRefs.current[0].focus();
  }, []);

  useEffect(() => {
    if (isLoading) {
      setOTP(Array(length).fill(""));
      if (inputRefs.current[0]) {
        inputRefs.current[0].focus();
      }
    }
  }, [isLoading]);

  return (
    <div className="flex justify-center">
      {otp.map((digit, index) => (
        <input
          key={index}
          type="password"
          value={digit}
          maxLength={1}
          onChange={(e) => handleInputChange(index, e.target.value)}
          onKeyDown={(e) => handleKeyDown(e, index)}
          ref={(ref) => (inputRefs.current[index] = ref)}
          className="w-12 h-12 mx-1 text-center border border-gray-300 rounded-md text-content-black_inverted"
          autoComplete="off"
        />
      ))}
    </div>
  );
};

export default OTPInput;

import React, { useRef } from "react";

export default function LoginForm({ name, handleSubmit, isLoading }) {
  const emailRef = useRef();
  const passwordRef = useRef();

  const handleLogin = (e) => {
    e.preventDefault();

    const payload = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };

    handleSubmit(payload);
  };

  return (
    <form
      onSubmit={handleLogin}
      className="max-w-xs mx-auto mt-5"
      id={name}
      name={name}
    >
      <input
        className="w-full px-8 py-4 text-sm font-medium border rounded-lg placeholder-content-gray text-content-black border-border-100 bg-input-gray focus:ring-4 focus:outline-none focus:ring-accent-blue500 disabled:opacity-50"
        type="email"
        ref={emailRef}
        placeholder="Email"
        id="email"
        name="email"
        autoComplete="username"
        required
        disabled={isLoading}
      />
      <input
        className="w-full px-8 py-4 mt-5 text-sm font-medium border rounded-lg placeholder-content-gray text-content-black border-border-100 bg-input-gray focus:ring-4 focus:outline-none focus:ring-accent-blue500 disabled:opacity-50"
        type="password"
        ref={passwordRef}
        placeholder="Password"
        name="password"
        autoComplete="current-password"
        id="password"
        required
        disabled={isLoading}
      />
    </form>
  );
}

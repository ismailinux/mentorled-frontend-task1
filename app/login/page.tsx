"use client";

import { useState } from "react"; // Add useState for toggle
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema, LoginFormData } from "../schemas/loginSchema";
import Link from "next/link";

export default function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  // State to toggle password visibility
  const [showPassword, setShowPassword] = useState(false);

  // Handle form submission with a mock API call
  const onSubmit = async (data: LoginFormData) => {
    // Simulate sending form data to an API endpoint
    try {
      // Mock API call to a hypothetical "/api/auth/login" endpoint
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data), // Send email and password as JSON
      });

      // Check if the response is successful (assuming a real API's behavior)
      if (!response.ok) {
        throw new Error("Login failed with status: " + response.status);
      }

      // Parse the mock response (assuming a JSON success message)
      const result = await response.json();
      console.log("Mock API Response:", result); // Log the response for debugging

      // TODO: Handle successful login (e.g., redirect to dashboard, store token)
      // Example: window.location.href = "/dashboard";
    } catch (error) {
      // Handle errors (e.g., network issues, API failure)
      if (error instanceof Error) {
        console.error("Login Error:", error.message);
      } else {
        console.error("Login Error:", error);
      }

      // TODO: Display error to user (e.g., "Invalid credentials, please try again")
      // Example: setError("root", { message: "Login failed. Please check your credentials." });
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 px-6">
      <h1 className="text-2xl font-bold mb-4">Login</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <input
            {...register("email")}
            placeholder="Email"
            className="w-full p-2 border rounded"
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
        </div>
        <div className="relative">
          <input
            {...register("password")}
            type={showPassword ? "text" : "password"} 
            placeholder="Password"
            className="w-full p-2 border rounded pr-10" 
          />
          <span
            onClick={() => setShowPassword(!showPassword)} 
            className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer text-gray-500 hover:text-gray-700"
          >
            {showPassword ? "🙈" : "👁️"} {/* normally I'd use icons here */}
          </span>
          {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
        </div>
        <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          Login
        </button>
      </form>
      <p className="mt-2 text-center">
        Don’t have an account? <Link href="/signup" className="text-blue-500">Sign up</Link>
      </p>
    </div>
  );
}
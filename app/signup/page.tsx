"use client";

import { useState } from "react"; 
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signupSchema, SignupFormData } from "../schemas/signupSchema";
import Link from "next/link";

export default function SignupPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupFormData>({
    resolver: zodResolver(signupSchema),
  });

  // State to toggle password visibility for both fields
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // Handle form submission with a mock API call
  const onSubmit = async (data: SignupFormData) => {
    // Simulate sending form data to an API endpoint assuming we have one
    try {
      // Mock API call to a hypothetical "/api/auth/signup" endpoint
      const response = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data), // Send name, email, password as JSON
      });

      // Check if the response is successful (assuming a real API's behavior)
      if (!response.ok) {
        throw new Error("Signup failed with status: " + response.status);
      }

      // Parse the mock response (assuming a JSON success message)
      const result = await response.json();
      console.log("Mock API Response:", result); // Log the response for debugging

      // TODO: Handle successful signup (e.g., redirect to login, show success message)
      // Example: window.location.href = "/login";
    } catch (error) {
      // Handle errors (e.g. network issues, API failure)
      if (error instanceof Error) {
        console.error("Signup Error:", error.message);
      } else {
        console.error("Signup Error:", error);
      }

      // TODO: Display error to user (e.g., "Signup failed, please try again")
      // Example: setError("root", { message: "Signup failed. Please check your details." });
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-4">Sign Up</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <input
            {...register("name")}
            placeholder="Name"
            className="w-full p-2 border rounded"
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
        </div>
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
            {showPassword ? "🙈" : "👁️"} {/* icons go here */}
          </span>
          {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
        </div>
        <div className="relative">
          <input
            {...register("confirmPassword")}
            type={showConfirmPassword ? "text" : "password"} 
            placeholder="Confirm Password"
            className="w-full p-2 border rounded pr-10"
          />
          <span
            onClick={() => setShowConfirmPassword(!showConfirmPassword)} 
            className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer text-gray-500 hover:text-gray-700"
          >
            {showConfirmPassword ? "🙈" : "👁️"} {/* normally i'd use icons here */}
          </span>
          {errors.confirmPassword && (
            <p className="text-red-500 text-sm">{errors.confirmPassword.message}</p>
          )}
        </div>
        <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          Sign Up
        </button>
      </form>
      <p className="mt-2 text-center">
        Already have an account? <Link href="/login" className="text-blue-500">Login</Link>
      </p>
    </div>
  );
}
export default function HomePage() {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-100 to-gray-200">
        <div className="bg-white p-8 rounded-lg shadow-md text-center">
          <h1 className="text-4xl font-extrabold text-gray-800 mb-4 tracking-tight">
            Welcome to the Auth UI App
          </h1>
          <p className="text-lg text-gray-600">
            Go to{" "}
            <a
              href="/login"
              className="text-blue-600 font-medium hover:text-blue-800 transition-colors duration-200"
            >
              Login
            </a>{" "}
            or{" "}
            <a
              href="/signup"
              className="text-blue-600 font-medium hover:text-blue-800 transition-colors duration-200"
            >
              Sign Up
            </a>
            .
          </p>
        </div>
      </div>
    );
  }
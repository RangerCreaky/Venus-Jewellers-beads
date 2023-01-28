const Register = () => {
  return (
    <>
      <div className="bg-gray-lighter min-h-screen flex flex-col">
        <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
          <div className="bg-white px-6 py-8 rounded shadow-md text-gray-800 w-full">
            <h1 className="mb-8 text-3xl text-center text-[#D2AC47]">Sign up</h1>
            <input
              type="text"
              className="block border border-gray-300 w-full p-3 rounded mb-4"
              name="fullname"
              placeholder="Full Name"
            />

            <input
              type="text"
              className="block border border-gray-300 w-full p-3 rounded mb-4"
              name="email"
              placeholder="Email"
            />

            <input
              type="password"
              className="block border border-gray-300 w-full p-3 rounded mb-4"
              name="password"
              placeholder="Password"
            />
            <input
              type="password"
              className="block border border-gray-300 w-full p-3 rounded mb-4"
              name="confirm_password"
              placeholder="Confirm Password"
            />

            <button
              type="submit"
              className="w-full text-center py-3 rounded bg-[#D2AC47] text-white hover:bg-[#D2AC47] focus:no-outline my-1"
            >
              Create Account
            </button>

            <div className="text-center text-sm text-gray-dark mt-4">
              By signing up, you agree to the
              <a
                className="ml-1 no-underline border-b border-gray-dark text-gray-dark"
                href="/"
              >
                Terms of Service
              </a>{" "}
              and
              <a
                className="ml-1 no-underline border-b border-gray-dark text-gray-dark"
                href="/"
              >
                Privacy Policy.
              </a>
            </div>
          </div>

          <div className="text-gray-700 mt-6">
            Already have an account?
            <a
              className="ml-2 no-underline border-b border-[#D2AC47] text-[#D2AC47]"
              href="/"
            >
              Log in
            </a>
            .
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;

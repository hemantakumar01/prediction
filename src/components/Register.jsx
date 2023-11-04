import React from "react";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import { registrationFormSchema } from "../utils/formValidation.js";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const initialValue = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  cpassword: "",
};
const Register = () => {
  const navigate = useNavigate();
  const { values, handleChange, handleBlur, handleSubmit, errors } = useFormik({
    initialValues: initialValue,
    onSubmit: async (value) => {
      try {
        const { data, status } = await axios.post(
          "http://localhost:8080/api/register",
          value
        );
        console.log("And Status", status);
        if (status === 201) {
          toast.success("User Created Succesfully");
          setTimeout(() => {
            navigate("/");
          }, "1500");
        }
      } catch (error) {
        toast.error(error?.response?.data?.message);
      }
    },
    validationSchema: registrationFormSchema,
  });
  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <Toaster position="top-center" reverseOrder={false} />
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <Link
          to="/"
          className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
        >
          <img
            className="w-8 h-8 mr-2"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
            alt="logo"
          />
          Flowbite
        </Link>
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Register a new user
            </h1>
            <form
              className="space-y-4 md:space-y-6 gap-3"
              onSubmit={handleSubmit}
            >
              <div className="space-y-4">
                <input
                  type="text"
                  id="firstName"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="First Name"
                  required={true}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.firstName}
                />
                {errors.firstName && (
                  <small className="text-red-500">{errors.firstName}</small>
                )}
                <input
                  type="text"
                  id="lastName"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Last Name"
                  required={true}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.lastName}
                />
                {errors.lastName && (
                  <small className="text-red-500">{errors.lastName}</small>
                )}
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@company.com"
                  required={true}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.email}
                />
                {errors.email && (
                  <small className="text-red-500">{errors.email}</small>
                )}
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required={true}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.password}
                />
                {errors.password && (
                  <small className="text-red-500">{errors.password}</small>
                )}
                <input
                  type="password"
                  name="cpassword"
                  id="cpassword"
                  placeholder="Conform Password"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required={true}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.cpassword}
                />
                {errors.cpassword && (
                  <small className="text-red-500">{errors.cpassword}</small>
                )}
              </div>

              <button
                type="submit"
                className="w-full text-white bg-blue-800 bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Register
              </button>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Already Registered ?{" "}
                <Link
                  to="/login"
                  className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Login Now
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;

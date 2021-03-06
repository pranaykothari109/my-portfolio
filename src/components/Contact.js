import React, { useRef } from "react";
import { Formik, Form } from "formik";
import MailIcon from "@mui/icons-material/Mail";
import * as Yup from "yup";
import "./Contact.css";
import emailjs from "@emailjs/browser";

function Contact() {
  const initialValues = {
    userName: "",
    userEmail: "",
    message: "",
  };
  const form = useRef();

  const userDataSchema = Yup.object().shape({
    userName: Yup.string()
      .min(3, "Minimum 3 Charcters Required")
      .max(15, "Max 15 Charcters Allowed")
      .required("Name is Required"),
    userEmail: Yup.string()
      .email("Invalid Email")
      .min(3, "Minimum 3 Charcters Required")
      .max(30, "Max 30 Charcters Allowed")
      .required("Email is Required"),
    message: Yup.string()
      .min(5, "Minimum 5 Charcters Required")
      .max(150, "Max 150 Characters Allowed")
      .required("Message is Required"),
  });

  const handleSubmit = async (values, { resetForm }) => {
    try {
      console.log(values);
      emailjs
        .sendForm(
          "service_xbhyqmr",
          "template_o82twxm",
          form.current,
          "ML47rnvb2HKHcvq8v"
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
      resetForm();
      alert("Successfully submitted!");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    // <div className="contact grid grid-rows-5">
    //   <div className="left">
    //     <img src={MailIcon} alt=""></img>
    //     <a class="underline" href="mailto: pranay.kothari109@gmail.com?subject= &body= ">
    //       pranay.kothari109@gmail.com
    //     </a>
    //   </div>
    //   <div className="right">right container</div>
    // </div>
    // <div className="contact w-2/3 mt-3 mx-auto bg-slate-300">

    // </div>

    <div className="Contact">
      <Formik
        initialValues={initialValues}
        validationSchema={userDataSchema}
        onSubmit={handleSubmit}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          isValid,
        }) => (
          <Form ref={form} onSubmit={handleSubmit}>
            <section className="text-gray-600 body-font">
              <div className="container px-5 sm:py-24 mx-auto flex">
                <div className="lg:w-1/3 md:w-1/2 mt-0 bg-white rounded-lg p-8 flex flex-col md:mx-auto w-full md:mt-10 md:mt-0 z-10 shadow-md">
                  <h2 className="text-center text-gray-900 text-3xl mb-1 font-medium title-font">
                    Send me Message
                  </h2>
                  <div className="relative mb-4">
                    <label
                      htmlFor="name"
                      className="leading-7 text-lg text-gray-600"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="userName"
                      className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      value={values.userName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    <div className="errorMessage">
                      {touched.userName && errors.userName}
                    </div>
                  </div>
                  <div className="relative mb-4">
                    <label
                      htmlFor="email"
                      className="leading-7 text-lg text-gray-600"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="userEmail"
                      className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      value={values.userEmail}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    <div className="errorMessage">
                      {touched.userEmail && errors.userEmail}
                    </div>
                  </div>
                  <div className="relative mb-4">
                    <label
                      htmlFor="message"
                      className="leading-7 text-lg text-gray-600"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                      value={values.message}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    ></textarea>
                    <div className="errorMessage">
                      {touched.message && errors.message}
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="send-button border-0 py-2 px-6 focus:outline-none rounded text-lg"
                    // className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                  >
                    Send
                  </button>
                </div>
              </div>
            </section>
          </Form>
        )}
      </Formik>
      {/* <Footer /> */}
    </div>
  );
}

export default Contact;

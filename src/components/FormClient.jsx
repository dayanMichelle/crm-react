import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import Alert from "./Alert";
export const FormClient = () => {
  const newClientSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Too Short!")
      .max(20, "Too Long!")
      .required("Required"),
    company: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
    phone: Yup.number()
      .typeError("Must be a number")
      .integer("Number is not valid")
      .positive("Number is not valid"),
  });

  const handleSubmit = (values) => {
    console.log(values);
  };
  return (
    <div className="bg-white mt-10 px-5 py-10 rounded-md shadow-md md:w-3/4 mx-auto">
      <h1 className="text-gray-600 font-bold text-xl uppercase text-center">
        Add Client
      </h1>
      <Formik
        initialValues={{
          name: "",
          company: "",
          email: "",
          phone: "",
          note: "",
        }}
        onSubmit={(values) => {
          handleSubmit(values);
        }}
        validationSchema={newClientSchema}
      >
        {({ errors, touched }) => {
          return (
            <Form>
              <div className="mb-4">
                <label className="text-gray-800" htmlFor="name">
                  Name:
                </label>
                <Field
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Enter customer name"
                  className="mt-2 block w-full p-3 bg-gray-50"
                />
                {errors.name && touched.name ? (
                  <Alert> {errors.name} </Alert>
                ) : null}
              </div>
              <div className="mb-4">
                <label className="text-gray-800" htmlFor="company">
                  Company:
                </label>
                <Field
                  name="company"
                  type="text"
                  id="company"
                  placeholder="Enter customer Company"
                  className="mt-2 block w-full p-3 bg-gray-50"
                />
                {errors.company && touched.company ? (
                  <Alert> {errors.company} </Alert>
                ) : null}
              </div>
              <div className="mb-4">
                <label className="text-gray-800" htmlFor="email">
                  E-mail:
                </label>
                <Field
                  name="email"
                  type="email"
                  id="email"
                  placeholder="Enter customer email"
                  className="mt-2 block w-full p-3 bg-gray-50"
                />
                {errors.email && touched.email ? (
                  <Alert> {errors.email} </Alert>
                ) : null}
              </div>
              <div className="mb-4">
                <label className="text-gray-800" htmlFor="phone">
                  Phone:
                </label>
                <Field
                  name="phone"
                  type="tel"
                  id="phone"
                  placeholder="Enter customer phone"
                  className="mt-2 block w-full p-3 bg-gray-50"
                />
                {errors.phone && touched.phone ? (
                  <Alert> {errors.phone} </Alert>
                ) : null}
              </div>
              <div className="mb-4">
                <label className="text-gray-800" htmlFor="note">
                  Note:
                </label>
                <Field
                  name="note"
                  as="textarea"
                  type="text"
                  id="note"
                  placeholder="Notes..."
                  className="mt-2 block w-full p-3 bg-gray-50"
                />
              </div>
              <input
                type="submit"
                value="Add Client"
                className="mt-5 w-full bg-orange-500 p-3 text-white uppercase font-bold text-lg"
              />
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

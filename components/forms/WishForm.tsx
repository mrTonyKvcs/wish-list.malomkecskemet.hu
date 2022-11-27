import { Formik, Field, Form, ErrorMessage } from "formik";
import { wishSchema } from "../../validation/wishShema";

const WishForm = () => {
  return (
    <>
      <Formik
        initialValues={{
          name: "",
          email: "",
          phoneNumber: "",
          wishList: "",
        }}
        validationSchema={wishSchema}
        onSubmit={(values) => {
          alert(JSON.stringify(values, null, 2));
        }}
      >
        <Form>
          <div>
            <label
              className="block text-lg font-medium text-gray-700"
              htmlFor="Email"
            >
              Név
            </label>
            <Field
              className="block w-full px-3 py-2 placeholder-gray-400 border border-gray-300 shadow-sm appearance-none focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
              id="name"
              name="name"
            />
            <ErrorMessage
              component="a"
              className="text-red-500 text-lg"
              name="name"
            />
          </div>
          <div className="my-5">
            <label
              className="block text-lg font-medium text-gray-700"
              htmlFor="Email"
            >
              Email cím
            </label>
            <Field
              className="block w-full px-3 py-2 placeholder-gray-400 border border-gray-300 shadow-sm appearance-none focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
              id="email"
              name="email"
            />
            <ErrorMessage
              component="a"
              className="text-red-500 text-lg"
              name="email"
            />
          </div>
          <div>
            <label
              className="block text-lg font-medium text-gray-700"
              htmlFor="Email"
            >
              Telefonszám
            </label>
            <Field
              className="block w-full px-3 py-2 placeholder-gray-400 border border-gray-300 shadow-sm appearance-none focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
              id="phoneNumber"
              name="phoneNumber"
            />
            <ErrorMessage
              component="a"
              className="text-red-500 text-lg"
              name="phoneNumber"
            />
          </div>
          <div className="mt-5">
            <label
              className="block text-lg font-medium text-gray-700"
              htmlFor="wishList"
            >
              Kívánságlista
            </label>
            <textarea
              id="wishList"
              name="wishList"
              rows={20}
              className="mt-1 p-10 block w-full border border-gray-300 focus:border-red-500 focus:ring-red-500 sm:text-lg"
              placeholder="Karácsonyra szeretnék egy..."
            />
            <ErrorMessage
              component="a"
              className="text-red-500 text-lg"
              name="wishList"
            />
          </div>
          <div className="mt-8">
            <button
              type="submit"
              className="font-great-vibes flex justify-center w-full px-4 py-2 text-2xl font-medium text-white bg-red-600 border border-transparent shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
            >
              Küldés
            </button>
          </div>
        </Form>
      </Formik>
    </>
  );
};

export default WishForm;

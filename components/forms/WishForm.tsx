import axios from "axios";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { WishFormProps } from "../../types/wish";
import { wishSchema } from "../../validation/wishShema";

const WishForm = ({ setSuccess, setError, load, setLoad }: WishFormProps) => {
  return (
    <>
      <Formik
        initialValues={{
          name: "",
          email: "",
          phoneNumber: "",
          content: "",
        }}
        validationSchema={wishSchema}
        onSubmit={(values) => {
          setLoad(true);
          setSuccess(false);
          setError([]);

          const headers = {
            "Content-Type": "application/json",
            SecretKey: "x6HFLNn7axgOQp7cJCEYKpHZEj7zWae3",
            "Access-Control-Allow-Methods":
              "GET, POST, PATCH, PUT, DELETE, OPTIONS",
          };
          axios
            .post("https://api-malom.tony-dev.hu/api/wish", values, {
              headers: headers,
            })
            .then((response) => {
              setSuccess(true);
              setLoad(false);
            })
            .catch((error) => {
              setError(error.response.data.data);
              setLoad(false);
            });
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
              className="text-lg text-red-500"
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
              className="text-lg text-red-500"
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
              className="text-lg text-red-500"
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
            {/* <textarea
              id="content"
              name="content"
              rows={20}
              className="block w-full p-10 mt-1 border border-gray-300 focus:border-red-500 focus:ring-red-500 sm:text-lg"
              placeholder="Karácsonyra szeretnék egy..."
            /> */}
            <Field
              as="textarea"
              className="block w-full h-40 px-3 py-2 placeholder-gray-400 border border-gray-300 shadow-sm appearance-none md:h-96 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
              id="content"
              name="content"
            />
            <ErrorMessage
              component="a"
              className="text-lg text-red-500"
              name="content"
            />
          </div>
          <div className="mt-8">
            <button
              disabled={load}
              type="submit"
              className="flex justify-center w-full px-4 py-2 text-2xl font-medium text-white bg-red-600 border border-transparent shadow-sm font-great-vibes hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
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

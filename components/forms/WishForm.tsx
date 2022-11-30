import axios from "axios";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { WishFormProps } from "../../types/wish";
import { wishSchema } from "../../validation/wishShema";
import { gdprLink } from "../../constants/form";

const WishForm = ({ setSuccess, setError, load, setLoad }: WishFormProps) => {
  return (
    <>
      <Formik
        initialValues={{
          name: "",
          email: "",
          age: null,
          phoneNumber: "",
          content: "",
          gdpr20221201: "",
        }}
        validationSchema={wishSchema}
        onSubmit={(values, { resetForm }) => {
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
            .post("https://api.malomkecskemet.hu/api/wish", values, {
              headers: headers,
            })
            .then((response) => {
              setSuccess(true);
              setLoad(false);
              resetForm();
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
          <div className="mt-5">
            <label
              className="block text-lg font-medium text-gray-700"
              htmlFor="Email"
            >
              Életkor
            </label>
            <Field
              type="number"
              className="block w-full px-3 py-2 placeholder-gray-400 border border-gray-300 shadow-sm appearance-none focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
              id="age"
              name="age"
            />
            <ErrorMessage
              component="a"
              className="text-lg text-red-500"
              name="age"
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

          <div className="mt-5">
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
          <div className="flex flex-col mt-5">
            <label className="text-sm">
              <Field className="mr-2" type="checkbox" name="gdpr20221201" />
              AZ{" "}
              <a
                href={gdprLink}
                className="text-red-malom"
                target="_blank"
                rel="noreferrer"
              >
                ADATKEZELÉSI TÁJÉKOZTATÓT
              </a>{" "}
              MEGISMERTEM. KIFEJEZETTEN AKKÉNT NYILATKOZOM, HOGY HOZZÁJÁRULOK,
              HOGY A SZERVEZŐ A REGISZTRÁCIÓ SORÁN MEGADOTT ADATAIMAT AZ
              ADATKEZELÉSI TÁJÉKOZTATÓBAN FOGLALTAK SZERINT KEZELJE.
            </label>
            <ErrorMessage
              component="a"
              className="text-lg text-red-500"
              name="gdpr20221201"
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

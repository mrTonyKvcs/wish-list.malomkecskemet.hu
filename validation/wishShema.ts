import * as Yup from "yup";
export const wishSchema = Yup.object().shape({
  name: Yup.string().required("Név megadása kötelező!"),
  email: Yup.string()
    .email("Az email cím nem egfelelő formátumú!")
    .required("Email cím megadása kötelező!"),
  age: Yup.number()
    .typeError("Életkor megadása kötelező!")
    .min(6, "Életkornak 6 - 14 évesnek kell lennie!")
    .max(14, "Életkornak 6 - 14 évesnek kell lennie!")
    .required("Életkor megadása kötelező!"),
  phoneNumber: Yup.string().required("Telefonszám megadása kötelező!"),
  content: Yup.string()
    .min(6, "Minimum karakter: 10")
    .required("Kívánságlista megadása kötelező!"),
  gdpr20221201: Yup.string().required(
    "Adatkezelési tájékoztató elfogadása kötelező!"
  ),
});

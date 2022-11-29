import * as Yup from "yup";
export const wishSchema = Yup.object().shape({
  name: Yup.string().required("Név megadása kötelező!"),
  email: Yup.string()
    .email("Az email cím nem egfelelő formátumú!")
    .required("Email cím megadása kötelező!"),
  phoneNumber: Yup.string().required("Telefonszám megadása kötelező!"),
  content: Yup.string().required("Kívánságlista megadása kötelező!"),
});

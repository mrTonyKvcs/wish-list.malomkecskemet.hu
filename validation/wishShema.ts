import * as Yup from "yup";
export const wishSchema = Yup.object().shape({
  name: Yup.string().required("Név megadása kötelező!"),
  email: Yup.string().email().required("Email cím megadása kötelező!"),
  phoneNumber: Yup.string().required("Telefonszám megadása kötelező!"),
  wishList: Yup.string().required("Kívánságlista megadása kötelező!"),
});

import * as yup from "yup";

export const validateNewUser = yup.object({
   name: yup.string().required("Name is required."),
   email: yup.string().required("E-mail is required").email("E-mail's format is invalid."),
   password: yup.string().required("Password is required."),
   photo: yup.string(),
});

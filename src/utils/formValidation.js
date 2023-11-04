import * as Yup from "yup";

export const registrationFormSchema = Yup.object({
  firstName: Yup.string().min(3).max(40).required("Enter Name"),
  lastName: Yup.string().min(3).max(40).required("Enter Name"),
  email: Yup.string().min(5).required("Enter Email"),
  password: Yup.string().min(5).required("Enter Password"),
  cpassword: Yup.string().oneOf(
    [Yup.ref("password"), null],
    "Password Not Matched"
  ),
});

import * as Yup from "yup";

export const userSchema = Yup.object().shape({
    fullname: Yup.string().required("Full name is required").matches(
      /^[a-zA-Z\s]+$/,
      "Full name can only contain letters and spaces"
    ).min(5, "Full name must be at least 5 characters"),
    email: Yup.string().email("Invalid email").required("Email is required").matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      "Invalid email format"
    ),
    password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
    mobile: Yup.string().required("Mobile number is required").matches(
      /^[0-9]{10}$/,
      "Mobile number must be digits"
    ),
    address: Yup.string().required("Address is required"),
    roleId: Yup.number().required("Role is required"),
    createdBy: Yup.number().required("Created By is required"),
});

export const loginSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
});
export const rLoginSchema = Yup.object().shape({
  mobile : Yup.string()
    .required("Mobile number is required")
    .matches(/^[0-9]{10}$/, "Mobile number must be 10 digits"),
})
export const lLoginSchema = Yup.object().shape({
  mobile : Yup.string()
    .required("Mobile number is required")
    .matches(/^[0-9]{10}$/, "Mobile number must be 10 digits"),
})
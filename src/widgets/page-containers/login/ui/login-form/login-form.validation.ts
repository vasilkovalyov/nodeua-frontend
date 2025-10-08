import * as yup from "yup";

export default yup.object().shape({
  email: yup.string().email("auth_validation_email_invalid_format").required("auth_validation_required_field"),
  password: yup.string().required("auth_validation_required_field")
});

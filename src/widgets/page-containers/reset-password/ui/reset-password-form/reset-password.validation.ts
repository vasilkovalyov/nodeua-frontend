import * as yup from "yup";

export default yup.object().shape({
  password: yup.string().email("auth_validation_email_invalid_format").required("auth_validation_required_field")
});

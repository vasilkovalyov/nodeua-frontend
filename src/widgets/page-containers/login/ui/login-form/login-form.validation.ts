import * as yup from "yup";

export default yup.object().shape({
  email: yup.string().email("validation_email_invalid_format").required("validation_required_field"),
  password: yup.string().required("validation_required_field")
});

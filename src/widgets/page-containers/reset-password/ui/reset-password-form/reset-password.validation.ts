import * as yup from "yup";

export default yup.object().shape({
  password: yup.string().email("validation_email_invalid_format").required("validation_required_field")
});

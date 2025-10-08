import * as yup from "yup";

import { PASSWORD_REGEX } from "@/src/shared/config/regex";

export default yup.object().shape({
  email: yup.string().email("validation_email_invalid_format").required("validation_required_field"),
  password: yup.string().matches(PASSWORD_REGEX, "validation_required_field").required("validation_required_field"),
  confirm_password: yup
    .string()
    .notOneOf([yup.ref("password")], "validation_required_field")
    .matches(PASSWORD_REGEX, "password_requirements")
    .required("validation_required_field")
});

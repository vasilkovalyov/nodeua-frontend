import * as yup from "yup";

import { PASSWORD_REGEX } from "@/src/shared/config/regex";

export default yup.object().shape({
  email: yup.string().email("auth_validation_email_invalid_format").required("auth_validation_required_field"),
  password: yup
    .string()
    .matches(PASSWORD_REGEX, "auth_validation_required_field")
    .required("auth_validation_required_field")
});

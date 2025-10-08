import * as yup from "yup";

import { PASSWORD_REGEX } from "@/src/shared/config/regex";

export default yup.object().shape({
  email: yup.string().email("validation_email_invalid_format").required("validation_required_field"),
  password: yup.string().matches(PASSWORD_REGEX, "validation_required_field").required("validation_required_field")
});

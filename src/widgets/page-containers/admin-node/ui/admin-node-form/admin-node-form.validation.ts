import * as yup from "yup";

export default yup.object().shape({
  name: yup.string().required("validation_required_field"),
  image: yup.string().required("validation_required_field"),
  price: yup.string().min(0, "Price must be greater than 0").required("validation_required_field"),
  ip_node: yup.string().required("validation_required_field"),
  id_node: yup.string().required("validation_required_field"),
  key_node: yup.string().required("validation_required_field"),
  description: yup.string().required("validation_required_field"),
  max_duration_months: yup.number().required("validation_required_field"),
  type: yup.string().required("validation_required_field"),
  site_link: yup.string(),
  twitter_link: yup.string(),
  github_link: yup.string(),
  telegram_link: yup.string(),
  guide_link: yup.string(),
  expiration_date: yup.string().required("validation_required_field")
});

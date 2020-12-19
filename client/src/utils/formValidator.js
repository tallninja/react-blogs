const formValidator = (values) => {
  const errors = {};
  if (!values.title) errors.title = "Please provide a title";
  if (!values.content) {
    errors.content = "Please Write the contents of your blog";
  }
  return errors;
};

export default formValidator;

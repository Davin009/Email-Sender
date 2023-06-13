const MyValidate = (sendToData) => {
  const errors = {};

  const email_required = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

  if (sendToData.subject === "") {
    errors.subject = "Subject is Required";
  }

  if (sendToData.message === "") {
    errors.message = "Message is Required";
  }

  if (sendToData.to === "") {
    errors.to = "Email is Required !";
  } else if (!email_required.test(sendToData.to)) {
    errors.to = "Email didn't match";
  }

  return errors;
};
export default MyValidate;

export default function ConvertToForm(elements, formKeys) {
  const formData = {};
  formKeys.forEach(formKey => {
    formData[formKey] = elements[formKey].value;
  });

  return formData;
}
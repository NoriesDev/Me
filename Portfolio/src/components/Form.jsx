import React from "react";
import {Input} from "@nextui-org/react";

function Form1() {
  const [value, setValue] = React.useState();
  const [textValue, setTextValue] = React.useState();

  const validateEmail = (value) => {
    if (!value || value === "") return false;
    return value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i);
  };
  

  const isInvalid = React.useMemo(() => {
    if (value === "") return false;

    return validateEmail(value) ? false : true;
  }, [value]);

  const validateText = (textValue) => {
    if (!textValue || textValue === "") return false;
    return textValue.match(/^[A-Z][" "]{2,4}$/i);
  };
  

  const isInvalidText = React.useMemo(() => {
    if (textValue === "") return false;

    return validateText(textValue) ? false : true;
  }, [textValue]);

  return (
    <>
    <Input
      value={value}
      type="email"
      label="Email"
      variant="bordered"
      isInvalid={isInvalid}
      color={isInvalid ? "danger" : "success"}
      errorMessage={isInvalid && "Please enter a valid email"}
      onValueChange={setValue}
      className="max-w-xs"
    />
    <Input
    value={textValue}
    type="textField"
    label="Message"
    variant="bordered"
    isInvalid={isInvalidText}
    color={isInvalidText ? "rosa" : "success"}
    errorMessage={isInvalidText && "Please your message here"}
    onValueChange={setTextValue}
    className="max-w-xs"
  />
  </>
  );
}
export default Form1
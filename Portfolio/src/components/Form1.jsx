import { useState, useMemo } from "react";
import { Input, Textarea, Button, Card } from "@nextui-org/react";

function Form() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const validateEmail = (value) => {
    if (!value || value === "") return false;
    return value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i);
  };

  const isEmailInvalid = useMemo(() => {
    if (email === "" || !validateEmail(email)) return true;
    return false;
  }, [email]);

  const validateMessage = (value) => {
    if (!value || value === "") return false;
    return value.length >= 25; 
  };

  const isMessageInvalid = useMemo(() => {
    if (message === "" || !validateMessage(message)) return true;
    return false;
  }, [message]);

  const handleSendEmail = () => {
    if (!isEmailInvalid && !isMessageInvalid) {
      const mailToLink = `mailto:nora.martiny.dev@gmail.com?subject=Message from ${email}&body=${message}`;
      window.location.href = mailToLink;
    }
  };

  return (
    <>
      <Card className="grid gap-4 justify-center mx-auto text-white font-four bg-black/20 w-[370px] my-4 rounded">
            <h3 className="font-bold text-xl text-center text-beige mt-10">Send a Mail</h3>
        <Input 
          value={email}
          type="email"
          label="Email"
          variant="bordered"
          color={isEmailInvalid ? "danger" : "success"}
          errorMessage={isEmailInvalid && "Please enter a valid email"}
          onValueChange={setEmail}
          className="max-w-xs"
        />
        <Textarea 
          value={message}
          type="text"
          label="Message"
          variant="bordered"
          color={isMessageInvalid ? "danger" : "success"}
          errorMessage={isMessageInvalid && "Please enter a valid message"}
          onValueChange={setMessage}
          className="max-w-xs"
        />
        <Button className="bg-white/20 text-white hover:bg-rosa/50 hover:text-beige w-[315px] mb-8"
          onClick={handleSendEmail}
          variant="primary"
          disabled={isEmailInvalid || isMessageInvalid}
        >
          Send Email
        </Button>
      </Card>
    </>
  );
}

export default Form;

import { createContext } from "react";

const RegisterContext = createContext({
  name: "",
  number: "",
  date: "",
  cvc: "",
});

export default RegisterContext;

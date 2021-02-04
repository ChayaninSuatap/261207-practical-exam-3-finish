import { createContext } from "react";

export const languages = {
  english: {
    code: "ENG"
  },
  thai: {
    code: "TH"
  }
};

const LanguageContext = createContext(languages);

export default LanguageContext;

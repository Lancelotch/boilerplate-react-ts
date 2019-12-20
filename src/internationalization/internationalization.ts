import i18n from "i18next";
import { initReactI18next } from "react-i18next";

//indonesia
import authentication_id from "../assets/languages/authentication/id.json";
//english
import authentication_en from "../assets/languages/authentication/en.json";

i18n.use(initReactI18next).init({
  lng: "en",
  fallbackLng: "en",
  debug: true,
  interpolation: {
    escapeValue: false
  },
  resources: {
    id: {
      authentication: authentication_id
    },
    en: {
      authentication: authentication_en
    }
  }
});

export default i18n;
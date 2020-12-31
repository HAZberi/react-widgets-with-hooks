import React, { useState, useEffect } from "react";
import { sendJSON } from "../helper.js";

const Convert = ({ language, text }) => {
  const [translated, setTranslated] = useState("");
  const [debouncedText, setDebouncedText] = useState(text);

  useEffect(() => {
    const timerId = setTimeout(() => {
      if (!text) return 
      setDebouncedText(text);
    }, 750);

    return () => {
      clearTimeout(timerId);
    };
  }, [text]);

  useEffect(() => {
    const doTranslation = async () => {
      const { data } = await sendJSON(
        `https://translation.googleapis.com/language/translate/v2?q=${debouncedText}&target=${language.value}&key=AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM`,
        {}
      );
      setTranslated(data.translations[0].translatedText);
    };
    doTranslation();
  }, [language, debouncedText]);
  return <h3 className="ui header">{translated}</h3>;
};

export default Convert;

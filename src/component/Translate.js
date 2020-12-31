//API_KEY = AIzaSyCHUCmpR7cT_yDFH98CZJy2LTms-IwDlM



import React, { useState } from "react";
import Dropdown from "./Dropdown.js";
import Convert from "./Convert.js"

const options = [
  {
    label: "Afrikaans",
    value: "af",
  },
  {
    label: "Arabic",
    value: "ar",
  },
  {
    label: "Hindi",
    value: "hi",
  },
  {
      label:"Dutch",
      value: 'nl'
  }
];

const label = "Select a language";

const Translate = () => {
  const [language, setLanguage] = useState(options[0]);
  const [text, setText] = useState('');
  return (
    <div>
        <div className='ui form'>
            <div className='field'>
                <label>Enter Text</label>
                <input 
                    onChange={(e)=>setText(e.target.value)}
                    type='text'
                    value={text}
                />
            </div>
        </div>
        <div>
        <Dropdown
            options={options}
            selected={language}
            onSeletedChange={setLanguage}
            label={label}
        />
        </div>
        <h3 className='ui header'>Output</h3>
        <Convert language={language} text={text}/>
    </div>
  );
};

export default Translate;

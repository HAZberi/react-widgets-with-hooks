import React, { useState, useEffect, useRef } from "react";

const Dropdown = ({ options, selected, onSeletedChange, label }) => {

    const [open, setOpen] = useState(false);
    const formRef = useRef();

    useEffect(()=>{
        const bodyOnClick = (e) => {
            if (formRef.current && formRef.current.contains(e.target)) return;
            setOpen(false);
        }
        document.body.addEventListener('click', bodyOnClick);
        return () => { 
            document.body.removeEventListener('click', bodyOnClick)
        }
    }, [])

    const renderedOptions = options.map(option => {
        if(selected.value === option.value) return null;
        return (
            <div 
            key={option.value} 
            className='item' 
            //on click is an actual DOM event handler
            //so we have to use arrow function here
            onClick={() => onSeletedChange(option)}
            >
                {option.label}
            </div>
        )
    })
  return (
      <div className='ui form' ref= {formRef}>
          <div className='field'>
              <label className='label'>{label}</label>
              <div 
                onClick={()=>setOpen(!open)}
                className={`ui selection dropdown ${open ? 'visible active' : ''}`}
                >
                  <i className="dropdown icon"></i>
                  <div className='text'>{selected.label}</div>
                  <div className={`menu ${open ? 'visible transition' : ''}`}>
                      {renderedOptions}
                  </div>
              </div>
          </div>
      </div>
  )
};

export default Dropdown;

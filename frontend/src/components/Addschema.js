import React from 'react';
import "../styles/Addscheme.css"

export default function Addscheme ({currentSelected,setCurrentSelected,selectOptions,setSelectOptions,setSelectedOptions,selectedOptions}){

    const handle_selectedoption=( e)=>{
        const value = e.target.value;
        const label =  e.target.options[e.target.selectedIndex].text;
        if (value) {
          setSelectOptions(selectOptions.filter((option) => option.value !== value));
          setSelectedOptions([...selectedOptions, { value, label }]);
          setCurrentSelected('');
        }
  }

    return(
        <>
           <div>
                <select value={currentSelected} onChange={(e)=>handle_selectedoption(e)} className='Addscheme_select' >
                 <option value='' label='Add schema to segment'  disabled >Add scheme to segment</option>
                {selectOptions.map(option => (
                   option.value && option.label !== '' ?
                   <option key={option.value} value={option.value}>{option.label}</option>
                   :
                   null
                 ))}
                </select>
              </div>
        </>
    )

}
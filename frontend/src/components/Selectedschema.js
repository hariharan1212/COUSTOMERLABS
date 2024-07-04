import React from 'react';
import "../styles/Selectedschema.css"

export default function Selectedschema ({selectedOptions,setSelectedOptions,selectOptions,setSelectOptions}){

    const handle_reselected=(index,e)=>{
        const value = e.target.value;
        const label = e.target.options[e.target.selectedIndex].text;
    
        // Add the previously selected option back to the available options list
        const previousOption = selectedOptions[index];
        setSelectOptions((prevOptions) => [...prevOptions, previousOption]);
        //setSelectOptions([...selectOptions, previousOption]);
    
        // Update the selected options with the newly selected value
        const updatedSelectedOptions = selectedOptions.map((option, i) =>
          i === index ? { value, label } : option
        );
        setSelectedOptions(updatedSelectedOptions);
    
        // Remove the newly selected option from the available options list
        setSelectOptions((prevOptions) => prevOptions.filter((option) => option.value !== value));
      };


    return(
        <> 
        {selectedOptions.length ? 
          <div className= "Selectedschema_div" >
                 {
                    selectedOptions.map((option,index)=>(
                        <div key={index}>
                        <select className='Selectedschema_select' onChange={(e)=>handle_reselected(index,e)} >
                            <option value=''>{option.label || 'Select schema' }</option>
                            {
                                selectOptions.map(opt=>(
                                  opt.value && opt.label !== '' ?
                                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                                    :
                                    null
                                ))
                            }
                        </select>
                        </div>
                    ))
                   
                 }  
              </div>
              : <div></div>}
        </>
     )

}
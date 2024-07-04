import React from 'react';

export default function AddnewSchema ({hadle_addNewScheme,selectedOptions,selectOptions}){

    return(
        <> 
        {
          selectOptions.length >0 && selectedOptions.length <7? 
          <p className="btn btn-link small" onClick={ hadle_addNewScheme} >+Add new schema</p>
         : <p className=" disabled" >+Add new schema</p>}
        </>
    )

}
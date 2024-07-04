import React from 'react';
import { Button } from 'react-bootstrap';
import axios from "axios";

export default function HandlesaveData ({segmentName,selectedOptions,hadle_close}){

    const handleSaveSegment=()=>{
        if(segmentName&&selectedOptions){
        const segmentdatas = {
          segment_name : segmentName,
          schema:selectedOptions.filter(option => option.value).map(option=>({
            [option.value]:option.label
          }))
        }
        console.log(segmentdatas);
         // backend url
         const backendURL = "http://localhost:1212/save-segment";

         //using axios for post 
         axios.post(backendURL,segmentdatas)
         .then(res => {
          console.log(`Data posted successfully: ${res}`);
          alert('datas saved succesfully')
          hadle_close();
          window.location.reload();
      })
         .catch(err => console.error(`Error Occured: ${err}`))
      }

      else{
        alert("Enter datas in respected fields")
      }
      
      }

    return(
        <>
         <div>
              <Button className='btn btn-success' onClick={handleSaveSegment}>Save the segment</Button>
             </div>
        </>
    )

}
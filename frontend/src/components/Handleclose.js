import React from 'react';
import { Button } from 'react-bootstrap';

export default function Handleclose ({hadle_close}){

    const handle_closeall=()=>{
        hadle_close()
        window.location.reload();
      }

    return(
        <>
          <Button className='btn btn-light text-danger' onClick={handle_closeall}>close</Button>
        </>
     )

}
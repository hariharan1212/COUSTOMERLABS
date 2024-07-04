import React, { useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import Drawerscreen from './Drawerscreen';
import '../styles/Mainscreen.css'

export default function Mainscreen (){

  const [showmodal,setShowmodal] = useState(false)

  const hadle_open=()=>{
     console.log('clicked')
     setShowmodal(!showmodal)
  }

const hadle_close=()=>{
    setShowmodal(!showmodal)
} 

    return(
        <>
          <Container fluid>
            {/* savesegment buttonsection */}
            <div className="hole-div"> 
                  <Button variant="outline-light mt-5 offset-1" onClick={hadle_open}>
                    Save Segment</Button>
            </div>
            {/* Drawer screen section */}
            <Drawerscreen showmodal={showmodal} hadle_close={hadle_close} />
            
          </Container>
        </>
    )

}
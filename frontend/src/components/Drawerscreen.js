import React, { useState } from 'react';
import { Drawer } from 'antd';
import HandlesaveData from './Handlesavedata';
import Handleclose from './Handleclose';
import Addscheme from './Addschema';
import Segmentname from './Segmentname';
import Selectedschema from './Selectedschema';
import AddnewSchema from './AddnewSchema'
import { Col, Row } from 'react-bootstrap';
import "../styles/Drawerscreen.css"

export default function Drawerscreen ({showmodal,hadle_close}){

    const [segmentName,setSegmentName] = useState('');   

    const [selectedOptions , setSelectedOptions] = useState([]);

    const [selectOptions, setSelectOptions] = useState([
        { value: 'first_name', label: 'First Name' },
        { value: 'last_name', label: 'Last Name' },
        { value: 'gender', label: 'Gender' },
        { value: 'age', label: 'Age' },
        { value: 'account_name', label:'Account Name'}, 
        { value: 'city', label: 'City' },
        { value: 'state', label: 'State' }
      ]);

      const [currentSelected, setCurrentSelected] = useState('');  
    

      const hadle_addNewScheme=()=>{
          setSelectedOptions([...selectedOptions, { value: '', label: ''}]);
      }
      
    return(
        <>
           <Drawer
              open={showmodal}
              title="Saving Segment"
              onClose={hadle_close}
              closable={true}
              width={400}
              styles={{
                header: { backgroundColor: '#39AEBC', color: 'white' }
              }}
            >
              {/* Segmentname section */}
              <Segmentname 
              segmentName={segmentName} 
              setSegmentName={setSegmentName} 
              />

              {/* Selectedschema section */}
              <Selectedschema 
              currentSelected={currentSelected} 
              setCurrentSelected={setCurrentSelected} 
              selectOptions={selectOptions} 
              setSelectOptions={setSelectOptions} 
              setSelectedOptions={setSelectedOptions} 
              selectedOptions={selectedOptions} 
              />

             {/* Addscheme section */}
              <Addscheme 
              currentSelected={currentSelected} 
              setCurrentSelected={setCurrentSelected} 
              selectOptions={selectOptions} 
              setSelectOptions={setSelectOptions} 
              setSelectedOptions={setSelectedOptions} 
              selectedOptions={selectedOptions} 
              />

              {/* AddnewSchema section */}
            
              <AddnewSchema 
              hadle_addNewScheme={hadle_addNewScheme} 
              selectedOptions={selectedOptions}  
              selectOptions={selectOptions} 
              />

             <div className='drawerscreen_footer'>
              <Row className=' mt-3 '>
                <Col>
              {/* segmentdata save button */}
              <HandlesaveData
               segmentName={segmentName} 
               selectedOptions={selectedOptions} 
               hadle_close={hadle_close} 
               />
               </Col>
                <Col>
              {/* Handleclose button */}
              <Handleclose 
              hadle_close={hadle_close} 
              />
                </Col>
              </Row>
             </div>
            </Drawer>
        </>
    )

}
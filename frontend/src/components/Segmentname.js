import React from 'react';
import "../styles/segmentname.css"

export default function Segmentname ({segmentName,setSegmentName}){

    return(
        <> 
        <div>
                <p className='segmentname_para1'>Enter The Name Of Segment</p>
                <input className='segmentname_input' placeholder='name of the segment' type="text" value={segmentName} onChange={(e) => setSegmentName(e.target.value)} />
              </div>
              <div>
                <p>To save your segment,you need to add the schemas to build the query</p>
              </div>
        </>
    )

}
import React from 'react';
import { DatePicker} from 'antd';

const { RangePicker } = DatePicker;
export default function App() {
	
 return (
  <div>
  <RangePicker />
  <div className='app'>
			<div style={{display:"flex",flexDirection:"column", padding:"10px",justifyContent:"flex-start"}}>
     <div className='score-section'>
    No of Participants : 10
				</div>
    <div className='score-section'>
    No of Participants in quiz 1 : 5
				</div>
    <div className='score-section'>
    No of Participants quiz 1: 3
				</div>
    <div className='score-section'>
     No of Participants quiz 1: 2
				</div>
    </div>
   </div>
   </div>
	);
}

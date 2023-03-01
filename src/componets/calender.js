import React, { useState ,useEffect} from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import 'rsuite/styles/index.less'; 
import {FcCalendar} from 'react-icons/fc'
import { motion } from "framer-motion";
function CalenderSection() {
const [start, setStart] = useState('');
const [end, setend] = useState('');
const [show,setshow] = useState(false)
useEffect(()=>{
    localStorage.setItem('date',JSON.stringify({start:'',end:''}))

    if (start !== '' && end !== ''  )
    {   
        if(checkfunction(start,end)){

        
            localStorage.setItem('date',JSON.stringify({start:start,end:end}))
        }
    }
},[end])

const setshowsecton = ()=>{
    show === true ? setshow(false) :setshow(true)
}


  return (
    <div className='container text-center'>
        
        <button className='btn btn-light'  onClick={setshowsecton}>< FcCalendar className='fs-2' /></button>
        {show && 
        <motion.div className=''   
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0 }}>
            <motion.div 
            className=''   
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}>
                <h2>start date</h2>
            <Calendar className="rounded shadow m-auto "  minDate={new Date()}  onChange={setStart} value={start} />
             </motion.div>
            
            {
                start !== '' && <motion.div 
                className=' '   
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }} >
                <h2>end date</h2>
                <Calendar className="rounded shadow m-auto" minDate={start}   onChange={setend} value={end}  />        
                    </motion.div>

            }
            
            
        </motion.div>}

    </div>
  );
}
export default CalenderSection

const checkfunction = (s,e)=> {
    return  parseInt(s.toString().split(' ')[2]) < parseInt(e.toString().split(' ')[2]) &&
    parseInt(s.toString().split(' ')[3]) <= parseInt(e.toString().split(' ')[3])
    
}




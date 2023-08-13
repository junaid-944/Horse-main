import React from 'react';
import Dental, { Dental2, Dental3 } from '../config/Dental';
import Sidebar from '../Compunents/Sidebar';

const Dental1 = () => {
  return (
    
    <div className='px-4'>
     
  
      {Dental.map((item) => (
        <div key={item.text}>
     <div className='flex'>       
    <h1 className='font-[Quicksand]'>SELECT HORSE</h1>
    <div  className='px-44'>
    <label>Select All</label>
    <input type='radio' ></input>
    </div>
   </div>
          <input
            type="text"
            placeholder="Search"
            className="w-[380px] h-[45px] bg-[#F4F6F9] rounded-full px-2 "
          />
          <div className='flex pt-6'>
            <img src={item.img} alt={item.text} />
            <div>
              <p className='pt-4 px-2 font-[Quicksand] text-[15px] '>{item.text}</p>
              <p>{item.text1}</p>
            </div>
            <input className='mx-40 mt-6' type='radio' />
          </div>
          <hr />
          <div>
            {Dental2.map((subItem) => (
              <div key={subItem.text} className='flex pt-4'>
                <img src={subItem.img} alt={subItem.text} />
                <div>
                  <p className='pt-4 px-2 font-[Quicksand] text-[15px] '>{subItem.text}</p>
                  <p>{subItem.text1}</p>
                </div>
                <input className='mx-40 mt-6' type='radio' />
              </div>
            ))}
            <hr/>
            {Dental3.map((subItem) => (
              <div key={subItem.text} className='flex pt-4'>
                <img src={subItem.img} alt={subItem.text} />
                <div>
                  <p className='pt-4 px-2 font-[Quicksand] text-[15px] '>{subItem.text}</p>
                  <p>{subItem.text1}</p>
                </div>
                <input className='mx-40 mt-6' type='radio' />
              </div>
            ))}
          </div>
          <hr />
          <div className='pt-14'>
          <button type='submit' className='w-[382px] h-[51.1px] bg-[#000032] text-white rounded-full'>Next</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Dental1;

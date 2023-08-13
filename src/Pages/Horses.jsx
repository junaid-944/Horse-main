import React, { useState } from "react";
import Sidebar from "../Compunents/Sidebar";
import { contact, finance, health, horse, schedule } from "../config/Horses";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { Box, Modal, Typography } from "@mui/material";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    bgcolor:"#000032",
    borderRadius:"50px",
    width:'759px',
    
    boxShadow: 12,
   
  };

const Horses = () => {
  const navi = useNavigate();
  const toBasicInfo = () => {
    navi("/basicInfo");
    // console.log('zahiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiid')
  };
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [modals, setModals] = useState(Array(horse.length).fill(false));
  const handleOpenModal = (index) => {
    const newModals = [...modals];
    newModals[index] = true;
    setModals(newModals);
  };

  

  return (
    <div>
      <div className="flex gap-x-5">
        <div className="relative p-8">
          <div className="w-[746px] flex py-5 bg-[#F4F4F4] rounded-xl flex-col ">
            <div className=" w-full px-8  ">
              <h3 className="text-[#000032] mt-4 font-[700] text-[20px] text-center">
                Horses
              </h3>

              <div className="flex  justify-between mt-4  w-full">
                {horse.map((items, index) => (
                  <>
                    <div
                      key={index}
                      onClick={() => handleOpen(index)}
                      className=" cursor-pointer h-[65px] w-[75px] flex flex-col space-y-2 items-center justify-center"
                    >
                      <img src={items.img} className="w-[36px] h-[36px]"></img>
                      <p>{items.text}</p>
                    </div>
                    <Modal
                      open={open}
                      onClose={handleClose}
                      aria-labelledby="modal-modal-title"
                      aria-describedby="modal-modal-description"
                    >
                      <Box sx={style}>
                       <div className="bg-[#000032] text-white rounded-3xl">
                        <h2 className="text-center text-[18px] font-[700] py-3">Report Record</h2>
                        <hr className="w-1/2 m-auto text-gray-300 mt-1"/>
                        <h2  className="text-center text-[18px] font-[700] py-3">Choose a health record Type</h2>
                       <div className="flex  flex-wrap gap-x-12 w-[60%] gap-y-7 py-7 m-auto  items-center justify-center">
                       {
                            health.map((items)=>(
                                <div className="flex">
                                    <div className="">
                                        <img src={items.img} className="w-[50px] h-[50px]"/>
                                        <p className="text-white">{items.text}</p>
                                    </div>
                                </div>
                            ))
                        }
                       </div>
                       </div>
                      </Box>
                    </Modal>
                  </>
                ))}
              </div>
            </div>
            <div className=" w-full px-36   ">
              <h3 className="text-[#000032] font-[700] mt-4 text-[20px] text-center">
                Contacts
              </h3>

              <div className="flex justify-between mt-4  w-full">
                {contact.map((items) => (
                  <>
                    <div className=" h-[65px] w-[115px]  flex flex-col space-y-2 items-center justify-center">
                      <img src={items.img} className="w-[36px] h-[36px]"></img>
                      <p>{items.text}</p>
                    </div>
                  </>
                ))}
              </div>
            </div>
            <div className=" w-full px-36 ">
              <h3 className="text-[#000032] mt-4 font-[700] text-[20px] text-center">
                Schedule
              </h3>

              <div className="flex justify-between mt-4  w-full">
                {schedule.map((items) => (
                  <>
                    <div className=" h-[65px] w-[75px] space-y-2 flex flex-col items-center justify-center">
                      <img src={items.img} className="w-[36px] h-[36px]"></img>
                      <p>{items.text}</p>
                    </div>
                  </>
                ))}
              </div>
            </div>
            <div className=" w-full  ">
              <h3 className="text-[#000032] mt-4 font-[700] text-[20px] text-center">
                Financial
              </h3>

              <div className="flex justify-center mt-4 w-full">
                {finance.map((items) => (
                  <>
                    <div className=" h-[65px] w-[150px] space-y-2 flex flex-col items-center justify-center">
                      <img src={items.img} className="w-[36px] h-[36px]"></img>
                      <p>{items.text}</p>
                    </div>
                  </>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Horses;

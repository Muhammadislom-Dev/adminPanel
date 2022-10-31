import React, { useState } from "react";
import "./Product.css";
import ProductTable from "./ProductTable/ProductTable";
import file from "../../assets/img/file.png";
import credit from "../../assets/img/creditcard.png";
import top from "../../assets/img/top.png";
import tolov from "../../assets/img/banknote.png";
import Modal from 'react-modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal1 from '@mui/material/Modal';



const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  height: 130,
  bgcolor: 'background.paper',
  border: '2px solid #6f6af8',
  boxShadow: 24,
  borderRadius:"8px",
  p: 4,
};


const customStyles = {
  content: {
    top: '50%',
    left: '86%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    height: '100%',
    width:"30%",
    transform: 'translate(-50%, -50%)',
  },
};

export default function Product() {

  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }

  //Delete modal function

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="product">
      <div className="container">
        <div className="user-title">
          <label htmlFor="" className="user-label">
            <img src={file} alt="" className="user-logo" />
            <input type="text" placeholder="Izlash" className="user-input" />
          </label>
          <div className="user-titles">
            <button onClick={openModal} className="user-button">
              <img src={credit} alt="" className="user-image" /> Qo'shish
            </button>
            <button onClick={openModal} className="user-buttons">
              <img src={tolov} alt="" className="user-image" /> Tahrirlash
            </button>
            <button onClick={handleOpen} className="user-btn">
              <img src={top} alt="" className="user-image" /> O'chirish
            </button>
          </div>
        </div>
        <div className="product-page">
          <ProductTable />
        </div>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <button className="user-close" onClick={closeModal}>&times;</button>
        <form action="" className="user-form">
          <label htmlFor="" className="user-labels">
             Product Name  <input type="text" required placeholder="Product Name" className="user-inputs" />
          </label>
          <label htmlFor="" className="user-labels">
              Product Description  <textarea type="text" required placeholder="Description" className="user-inputs" />
          </label>
          <label htmlFor="" className="user-labels">
              Price  <input type="number" required placeholder="Price" className="user-inputs" />
          </label>
          <div className="user-bottom product-bottom">
            <button type="submit" className="user-submit">Create</button>
          </div>
        </form>
      </Modal>

      <Modal1
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              Siz shu user haqidagi ma'lumotlarni o'chirmoqchimisiz?
          </Typography>
        </Box>
      </Modal1>
    </div>
  );
}

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Modal from 'react-modal'
// import { Modal } from 'flowbite-react'


function ProfileModal({ handleClose, text }) {
    const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

    const [modalIsOpen, setIsOpen] =useState(false);

     function openModal() {
        setIsOpen(true);
     }
    
      function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }


  return (
    //   <motion.div
    //       onClick={(e) => e.stopPropagation()}
    //       className="w-auto h-auto max-w-[600px] max-h-[400px] m-5 px-0 py-[2rem] border-[12px] flex justify-center"
    //       variants={dropIn}
    //    >
    // </ motion.div>
      <Modal
          isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Profile"
      >
           <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2>
        <button onClick={closeModal}>close</button>
        <div>I am a modal</div>
        <form>
          <input />
          <button>tab navigation</button>
          <button>stays</button>
          <button>inside</button>
          <button>the modal</button>
        </form>
          
    </Modal>
  )
}

export default ProfileModal
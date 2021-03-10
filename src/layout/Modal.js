import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';

const ModalEvent = (props) => {
    
    console.log(props)
    // console.log(props.modal_trigger_value)

  const [open, setOpen] = useState(props.modal_trigger_value);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  return (
    <div>
      <button onClick={onOpenModal}>Open modal</button>
      <Modal open={open} onClose={onCloseModal} center>
        <h2>Simple centered modal</h2>
      </Modal>
    </div>
  );
};

export default ModalEvent
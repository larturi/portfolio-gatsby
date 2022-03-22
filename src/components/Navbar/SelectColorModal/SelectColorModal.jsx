import React, { useState } from 'react';
import { VscColorMode } from 'react-icons/vsc';

import './SelectColorModal.scss';

const SelectColorModal = ({ setColorTheme, colorTheme }) => {
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => {
    setOpenModal(!openModal);
  };

  return (
    <>
      <button
        type="button"
        onClick={handleOpenModal}
        className={`color-icon-btn ${colorTheme}`}
      >
        <span>
          <VscColorMode />
        </span>
      </button>

      {openModal && (
        <div className="modal-content">
          <button
            type="button"
            className="btn-color dark"
            onClick={() => {
              setColorTheme('dark');
              localStorage.setItem('theme', 'dark');
              handleOpenModal();
            }}
          >
            <VscColorMode />
          </button>
          <button
            type="button"
            className="btn-color light"
            onClick={() => {
              setColorTheme('light');
              localStorage.setItem('theme', 'light');
              handleOpenModal();
            }}
          >
            <VscColorMode />
          </button>
          <button
            type="button"
            className="btn-color blue"
            onClick={() => {
              setColorTheme('blue');
              localStorage.setItem('theme', 'blue');
              handleOpenModal();
            }}
          >
            <VscColorMode />
          </button>
        </div>
      )}
    </>
  );
};

export default SelectColorModal;

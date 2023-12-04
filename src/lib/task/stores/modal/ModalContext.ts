import React from 'react';

export const ModalContext = React.createContext<{
  toggleModal: boolean;
  setToggleModal: React.Dispatch<React.SetStateAction<boolean>>;
}>({
  toggleModal: false,
  setToggleModal: () => {},
});
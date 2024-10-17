import { motion } from 'framer-motion';
import React, { useEffect } from 'react';

import useStoreGlobal, { setStoreGlobal } from '~/store/useStoreGlobal';

interface ModalIF {
  isOpen: boolean;
  children: React.ReactNode;
  onClose?: () => void;
  hideClose?: boolean;
  className?: string;
}

const initZIndex = 120;

const Modal: React.FC<ModalIF> = ({ isOpen, children, onClose = () => {}, hideClose = false, className = '' }) => {
  const zIndexModal = useStoreGlobal((state) => state.zIndexModal);
  const [zIndex, setZIndex] = React.useState(initZIndex);

  useEffect(() => {
    if (isOpen) {
      setZIndex((prev) => prev + zIndexModal);
      setStoreGlobal({ zIndexModal: zIndexModal + 1 });
    } else {
      setZIndex(initZIndex);
      setStoreGlobal({ zIndexModal: zIndexModal - 1 });
    }
  }, [isOpen]);

  return (
    <>
      {isOpen && (
        <motion.div
          key={zIndex}
          className="absolute top-0 left-0 right-0 bottom-0 grid place-items-center"
          style={{
            zIndex,
          }}
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          exit={{
            opacity: 0,
          }}
        >
          <div className="bg-[#11111188] absolute w-full h-full z-[150]" onClick={onClose}></div>
          {children}
        </motion.div>
      )}
    </>
  );
};

export default Modal;

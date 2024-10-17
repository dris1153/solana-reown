import { AnimatePresence, motion } from 'framer-motion';
import React, { useMemo } from 'react';
import { ToastIF, ToastType } from '~/@types/toast';
import { Close } from '~/public/assets/svgs';
import toast, { Toast as ToastHot } from 'react-hot-toast';

type DEFINE_COLOR_TYPE = {
  [key in ToastType]: {
    backgroundColor: string;
    closeColor: string;
    borderContentColor: string;
    backgroundContentColor: string;
    contentColor: string;
  };
};

const DEFINE_COLOR: DEFINE_COLOR_TYPE = {
  ['success']: {
    backgroundColor: '#2e7d32',
    closeColor: '#FFF',
    borderContentColor: '#1b5e20',
    backgroundContentColor: '#4caf50',
    contentColor: '#FEFEFE',
  },
  ['error']: {
    backgroundColor: '#d32f2f',
    closeColor: '#FFF',
    borderContentColor: '#c62828',
    backgroundContentColor: '#ef5350',
    contentColor: '#FEFEFE',
  },
};

interface ToastProps extends ToastIF {
  t: ToastHot;
}

const Toast: React.FC<ToastProps> = ({ type = 'success', title, content, t }) => {
  function remove() {
    toast.dismiss(t.id);
  }

  const BoxTypeDefine = useMemo(() => {
    return DEFINE_COLOR[type];
  }, [type]);

  return (
    <AnimatePresence>
      {t.visible ? (
        <motion.div
          layout
          key={t.id}
          className="w-max h-max pointer-events-auto"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
        >
          <div
            className="p-[4px] rounded-[6px]"
            style={{
              width: '248px',
              maxWidth: 'calc(100vw - 24px)',
              height: 'max-content',
              backgroundColor: BoxTypeDefine.backgroundColor,
            }}
          >
            <div className="flex items-center justify-between gap-[12px]">
              <div className="flex items-center gap-[8px]">
                <p className="text-[14px] font-bold text-white">{title}</p>
              </div>
              <div className="flex items-center justify-center p-[4px]">
                <Close
                  className="cursor-pointer"
                  style={{
                    color: BoxTypeDefine.closeColor,
                    width: '8px',
                    height: '8px',
                    cursor: 'pointer',
                    flexShrink: 0,
                    flexGrow: 0,
                  }}
                  onClick={() => {
                    remove();
                  }}
                />
              </div>
            </div>
            <div
              className="border border-solid rounded-[8px] px-[8px] py-[4px] min-h-[48px]"
              style={{
                borderColor: BoxTypeDefine.borderContentColor,
                backgroundColor: BoxTypeDefine.backgroundContentColor,
              }}
            >
              {typeof content === 'string' ? (
                <p
                  style={{
                    color: BoxTypeDefine.contentColor,
                    wordBreak: 'break-all',
                  }}
                  dangerouslySetInnerHTML={{
                    __html: content,
                  }}
                />
              ) : (
                content
              )}
            </div>
          </div>
        </motion.div>
      ) : (
        <></>
      )}
    </AnimatePresence>
  );
};

export default Toast;

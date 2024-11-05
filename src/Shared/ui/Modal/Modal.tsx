import React, { FC, MouseEvent, KeyboardEvent, PropsWithChildren, useCallback, useRef } from 'react';
import { createPortal } from 'react-dom';
import css from './Modal.css';

type ModalProps = {
  name: string;
  opened?: boolean;
  onClose?: () => void;
};

export const Modal: FC<PropsWithChildren<ModalProps>> = ({ onClose, opened, name, children }) => {
  const modalContainer = useRef(null);
  const handleClickOutside = useCallback(
    (e: MouseEvent<HTMLDivElement>) => {
      if (e.target === modalContainer.current) onClose?.();
    },
    [onClose]
  );
  const handleKeyboard = useCallback(
    (e: KeyboardEvent<HTMLDivElement>) => {
      if (e.key === 'Escape') onClose?.();
    },
    [onClose]
  );
  return (
    <>
      {opened
        ? createPortal(
            <div
              className={css.container}
              id={name}
              onClick={handleClickOutside}
              onKeyDown={handleKeyboard}
              role="dialog"
              ref={modalContainer}
            >
              <div className={css.modal}>{children}</div>
            </div>,
            document.body
          )
        : null}
    </>
  );
};

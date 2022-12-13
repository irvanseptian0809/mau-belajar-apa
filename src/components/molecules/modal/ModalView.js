import React from "react";
import styled from "styled-components";

import {
  Button,
  Typography,
} from "../../atoms"

const Background = styled.div`
  background-color: rgba(0, 0, 0, 0.2);
  width: 100vw;
  height: 100vh;
  z-index: 1;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: fixed;
`

const Centered = styled.div`
  position: fixed;
  z-index: 10;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

const Modal = styled.div`
  width: 400px;
  background: white;
  color: white;
  border-radius: 8px;
  box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.04);
`

const ModalHeader = styled.div`
  padding: 20px;
  background: #f4f4f4;
  overflow: hidden;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`

const ModalContent = styled.div`
  padding: 10px;
  font-size: 14px;
  color: #2c3e50;
  text-align: center;
`

const ModalAction = styled.div`
`

const ActionContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 20px;
  background: #f4f4f4;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  gap: 15px;
`

export default function ModalView({
  isOpen,
  title,
  children,
  isSaveDisabled,
  handleOpen,
  handleSave,
  handleCancel,
}) {
  return (
    <>
      {isOpen && (
        <>
          <Background onClick={() => handleOpen(false)} />
          <Centered>
            <Modal>
              <ModalHeader>
                <Typography>{title}</Typography>
              </ModalHeader>
              <ModalContent>
                {children}
              </ModalContent>
              <ModalAction>
                <ActionContainer>
                  <Button
                    onClick={handleCancel}
                  >
                    Cancel
                  </Button>
                  <Button
                    onClick={handleSave}
                    primary
                    inline
                    disabled={isSaveDisabled}
                  >
                    Save
                  </Button>
                </ActionContainer>
              </ModalAction>
            </Modal>
          </Centered>
        </>
      )}
    </>
  );
};
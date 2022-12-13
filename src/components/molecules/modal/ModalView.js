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
  z-index: 0;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: absolute;
`

const Centered = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

const Modal = styled.div`
  max-width: 800px;
  min-height: 170px;
  background: white;
  color: white;
  z-index: 10;
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
  position: absolute;
  bottom: 2px;
  margin-bottom: 10px;
  width: 100%;
`

const ActionContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`

export default function ModalView({
  isOpen,
  setIsOpen,
  title,
  children,
}) {
  return (
    <>
      {isOpen && (
        <>
          <Background onClick={() => setIsOpen(false)} />
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
                    onClick={() => setIsOpen(false)}
                  >
                    Cancel
                  </Button>
                  <Button
                    onClick={() => setIsOpen(false)}
                    primary
                    inline
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
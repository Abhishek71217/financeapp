import { useState } from 'react';
import { withConfiguration, Flex, Button, Modal } from '@pega/cosmos-react-core';
import '../create-nonce';

type ActionableButtonProps = {
  value: string;
  localAction: string;
  url: string; // new prop to pass the URL
};

export const PegaExtensionsActionableButton = (props: ActionableButtonProps) => {
  const { value, localAction, url } = props;

  // State to manage the modal visibility
  const [isModalOpen, setModalOpen] = useState(false);

  // Function to open the modal
  const openModal = () => {
    setModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setModalOpen(false);
  };

  if (value && localAction) {
    return (
      <>
        <Flex container={{ direction: 'row' }}>
          <Button onClick={openModal}>Open Browser in Modal</Button>{' '}
          {/* Open modal on button click */}
        </Flex>

        {/* Modal component */}
        {isModalOpen && (
          <Modal isOpen={isModalOpen} onClose={closeModal} heading='Embedded URL'>
            {/* Embed the URL using iframe */}
            <div style={{ padding: '20px' }}>
              <iframe
                src={url}
                style={{ width: '100%', height: '500px', border: 'none' }}
                title='Open URL'
              />
            </div>
            <div>
              <Button onClick={closeModal}>Close</Button>
            </div>
          </Modal>
        )}
      </>
    );
  }

  return null;
};

export default withConfiguration(PegaExtensionsActionableButton);

import React from 'react';
import { sendGTMEvent } from '@next/third-parties/google';
import {MyButton} from './button'

const GoogleTagManager: React.FC = () => {
  const handleClick = () => {
    sendGTMEvent({
      type: 'event',
      action: 'buttonClicked',
      payload: { value: 'xyz' }
    });
  };

  return (
    <div>
      <MyButton onClick={handleClick} label="Send Event" />
    </div>
  );
};

export default GoogleTagManager;

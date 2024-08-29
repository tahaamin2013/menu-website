'use client'

import { Button } from '@/src/components/ui/button'
import { sendGTMEvent } from '@next/third-parties/google'

import React from 'react'

const GoogleTagManager: React.FC = () => {
  const handleClick = () => {
    sendGTMEvent('event', 'buttonClicked', { value: 'xyz' });
  }

  return (
    <div>
      <Button onClick={handleClick}>
        Send Event
      </Button>
    </div>
  )
}

export default GoogleTagManager

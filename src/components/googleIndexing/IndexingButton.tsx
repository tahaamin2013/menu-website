'use client'

import React, { useState } from 'react';
import { Input } from '@/src/components/ui/input';
import { Button } from '@/src/components/ui/button';
import { AlertCircle, CheckCircle } from 'lucide-react';
import { Alert, AlertDescription } from '@/src/components/ui/alert';

export default function UrlIndexingComponent() {
  const [url, setUrl] = useState('');
  const [isIndexing, setIsIndexing] = useState(false);
  const [message, setMessage] = useState('');
  const [isError, setIsError] = useState(false);

  const handleIndexing = async () => {
    if (!url) {
      setMessage('Please enter a URL');
      setIsError(true);
      return;
    }

    setIsIndexing(true);
    setMessage('');
    setIsError(false);

    try {
      const response = await fetch('/api/google-indexing', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          url,
          type: 'URL_UPDATED'
        }),
      });

      if (!response.ok) {
        throw new Error('Indexing request failed');
      }

      const result = await response.json();
      setMessage('URL submitted successfully for indexing');
      setIsError(false);
      console.log('Indexing result:', result);
    } catch (error) {
      console.error('Error submitting URL for indexing:', error);
      setMessage('Error submitting URL for indexing');
      setIsError(true);
    } finally {
      setIsIndexing(false);
    }
  };

  return (
    <div className="space-y-4">
      <Input
        type="url"
        placeholder="Enter URL to index"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        className="w-full"
      />
      <Button onClick={handleIndexing} disabled={isIndexing} className="w-full">
        {isIndexing ? 'Submitting...' : 'Submit URL for Indexing'}
      </Button>
      {message && (
        <Alert variant={isError ? "destructive" : "default"}>
          {isError ? <AlertCircle className="h-4 w-4" /> : <CheckCircle className="h-4 w-4" />}
          <AlertDescription>{message}</AlertDescription>
        </Alert>
      )}
    </div>
  );
}
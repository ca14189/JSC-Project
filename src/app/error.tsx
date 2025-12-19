'use client';

import * as React from 'react';
import Warning from './Warning';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  React.useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div>
      {/* Static Warning */}
      <Warning
        title="Something went wrong"
        message="Please try again."
        buttonText="Go Home"
        buttonHref="/"
      />

      {/* Retry button (interactive) */}
      <div className="text-center mt-6">
        <button
          onClick={reset}
          className="px-4 py-2 bg-black text-white rounded"
        >
          Retry
        </button>
      </div>
    </div>
  );
}

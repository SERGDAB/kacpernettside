import React, { useState } from 'react';

const SimpleBackendTest: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Backend Connection Test</h2>
      
      <div className="mb-4">
        <p className="text-sm text-gray-600 mb-2">
          Click the button below to test the backend connection
        </p>
      </div>

      <div className="space-y-3">
        <button
          onClick={() => setIsVisible(!isVisible)}
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded transition-colors"
        >
          {isVisible ? 'Hide' : 'Show'} Test Component
        </button>
      </div>

      {isVisible && (
        <div className="mt-4 p-3 bg-gray-100 rounded">
          <h3 className="font-semibold mb-2">Component Loaded Successfully!</h3>
          <p className="text-sm text-gray-600">
            If you can see this, the component is working. Next step: add API calls.
          </p>
        </div>
      )}
    </div>
  );
};

export default SimpleBackendTest;

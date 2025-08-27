import React, { useState, useEffect } from 'react';
import { api } from '../utils/api';

const BackendTest: React.FC = () => {
  const [status, setStatus] = useState<string>('Testing connection...');
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    testBackendConnection();
  }, []);

  const testBackendConnection = async () => {
    try {
      setStatus('Connecting to backend...');
      const response = await api.get('/api/test');
      setData(response);
      setStatus('✅ Backend connected successfully!');
      setError('');
    } catch (err: any) {
      setError(err.message);
      setStatus('❌ Backend connection failed');
      setData(null);
    }
  };

  const testHealthEndpoint = async () => {
    try {
      setStatus('Testing health endpoint...');
      const response = await api.get('/health');
      setData(response);
      setStatus('✅ Health endpoint working!');
      setError('');
    } catch (err: any) {
      setError(err.message);
      setStatus('❌ Health endpoint failed');
      setData(null);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Backend Connection Test</h2>
      
      <div className="mb-4">
        <p className="text-sm text-gray-600 mb-2">{status}</p>
        {error && <p className="text-sm text-red-600">{error}</p>}
      </div>

      <div className="space-y-3">
        <button
          onClick={testBackendConnection}
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded transition-colors"
        >
          Test API Endpoint
        </button>
        
        <button
          onClick={testHealthEndpoint}
          className="w-full bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded transition-colors"
        >
          Test Health Endpoint
        </button>
      </div>

      {data && (
        <div className="mt-4 p-3 bg-gray-100 rounded">
          <h3 className="font-semibold mb-2">Response Data:</h3>
          <pre className="text-xs text-gray-700 overflow-auto">
            {JSON.stringify(data, null, 2)}
          </pre>
        </div>
      )}
    </div>
  );
};

export default BackendTest;

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

interface Test {
  id: string;
  name: string;
  description: string;
}

interface WriteTestFormValues {
  name: string;
  description: string;
}

const WriteTests: React.FC = () => {
  const [tests, setTests] = useState<Test[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const { register, handleSubmit, reset } = useForm<WriteTestFormValues>();

  const handleCreateTest = async (data: WriteTestFormValues) => {
    try {
      setLoading(true);
      const response = await axios.post('/api/tests', data);
      setTests([...tests, response.data]);
      reset();
    } catch (error) {
      console.error('Failed to create test:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md space-y-2 sm:p-4">
      <h1 className="text-xl font-semibold">Create a New Test</h1>
      <form onSubmit={handleSubmit(handleCreateTest)}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 sr-only">
            Name
          </label>
          <input
            id="name"
            type="text"
            placeholder="Name of the test"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
            {...register('name', { required: true })}
            aria-label="Test Name"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block text-sm font-medium text-gray-700 sr-only">
            Description
          </label>
          <textarea
            id="description"
            placeholder="Description of the test"
            rows={3}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
            {...register('description')}
            aria-label="Test Description"
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          className={`w-full px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 ${loading ? 'cursor-not-allowed opacity-50' : ''}`}
        >
          {loading ? 'Creating...' : 'Create Test'}
        </button>
      </form>

      <div className="mt-4">
        <h2 className="text-xl font-semibold">Your Tests</h2>
        <ul role="list" aria-label="List of tests" className="space-y-1 mt-2">
          {tests.map((test) => (
            <li key={test.id} className="flex items-center justify-between p-2 border rounded-lg bg-gray-50">
              <div>{test.name}</div>
              <button
                onClick={() => {
                  // Handle delete logic here
                }}
                className="text-red-600 hover:text-red-900"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default WriteTests;

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

interface Test {
  id: string;
  name: string;
  description: string;
}

interface WriteTestFormValues {
  name: string;
  description: string;
}

const WriteTests: React.FC = () => {
  const [tests, setTests] = useState<Test[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const { register, handleSubmit, reset } = useForm<WriteTestFormValues>();

  const handleCreateTest = async (data: WriteTestFormValues) => {
    try {
      setLoading(true);
      const response = await axios.post('/api/tests', data);
      setTests([...tests, response.data]);
      reset();
    } catch (error) {
      console.error('Failed to create test:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md space-y-2 sm:p-4">
      <h1 className="text-xl font-semibold">Create a New Test</h1>
      <form onSubmit={handleSubmit(handleCreateTest)}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 sr-only">
            Name
          </label>
          <input
            id="name"
            type="text"
            placeholder="Name of the test"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
            {...register('name', { required: true })}
            aria-label="Test Name"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block text-sm font-medium text-gray-700 sr-only">
            Description
          </label>
          <textarea
            id="description"
            placeholder="Description of the test"
            rows={3}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
            {...register('description')}
            aria-label="Test Description"
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          className={`w-full px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 ${loading ? 'cursor-not-allowed opacity-50' : ''}`}
        >
          {loading ? 'Creating...' : 'Create Test'}
        </button>
      </form>

      <div className="mt-4">
        <h2 className="text-xl font-semibold">Your Tests</h2>
        <ul role="list" aria-label="List of tests" className="space-y-1 mt-2">
          {tests.map((test) => (
            <li key={test.id} className="flex items-center justify-between p-2 border rounded-lg bg-gray-50">
              <div>{test.name}</div>
              <button
                onClick={() => {
                  // Handle delete logic here
                }}
                className="text-red-600 hover:text-red-900"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default WriteTests;
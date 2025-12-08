import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useRouter } from 'next/router';

interface TestFormInputs {
  testName: string;
  testDescription: string;
}

const WriteTests: React.FC = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const { register, handleSubmit, formState: { errors } } = useForm<TestFormInputs>();

  const onSubmit: SubmitHandler<TestFormInputs> = async (data) => {
    try {
      setLoading(true);
      setError(null); // Clear any previous error

      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));

      router.push('/tests'); // Redirect to tests page after successful submission
    } catch (err: any) {
      console.error('Error submitting test:', err);
      setError(err.message || 'An unexpected error occurred.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md space-y-2 sm:p-4">
      <h1 className="text-xl font-bold">Write a New Test</h1>
      {error && <p role="alert" aria-live="assertive" className="text-red-500">{error}</p>}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label htmlFor="testName" className="block mb-2 text-sm font-medium">Test Name</label>
          <input
            type="text"
            id="testName"
            placeholder="Enter test name..."
            {...register('testName', { required: 'This is required' })}
            aria-invalid={errors.testName ? true : undefined}
            aria-describedby={errors.testName ? 'test-name-error' : undefined}
            className={`block w-full p-2 text-gray-900 border rounded-lg ${errors.testName ? 'border-red-500 focus:ring-red-500' : ''}`}
          />
          {errors.testName && (
            <p id="test-name-error" role="alert" aria-live="polite" className="mt-1 text-sm text-red-600 dark:text-red-400">
              {errors.testName.message}
            </p>
          )}
        </div>

        <div className="mb-4">
          <label htmlFor="testDescription" className="block mb-2 text-sm font-medium">Test Description</label>
          <textarea
            id="testDescription"
            placeholder="Enter test description..."
            {...register('testDescription', { required: 'This is required' })}
            aria-invalid={errors.testDescription ? true : undefined}
            aria-describedby={errors.testDescription ? 'test-description-error' : undefined}
            className={`block w-full p-2 text-gray-900 border rounded-lg ${errors.testDescription ? 'border-red-500 focus:ring-red-500' : ''}`}
          />
          {errors.testDescription && (
            <p id="test-description-error" role="alert" aria-live="polite" className="mt-1 text-sm text-red-600 dark:text-red-400">
              {errors.testDescription.message}
            </p>
          )}
        </div>

        <button type="submit"
                disabled={loading}
                className={`w-full py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 ${loading ? 'cursor-not-allowed opacity-70' : ''}`}
        >
          {loading ? 'Loading...' : 'Submit'}
        </button>
      </form>
    </div>
  );
};

export default WriteTests;

import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useRouter } from 'next/router';

interface TestFormInputs {
  testName: string;
  testDescription: string;
}

const WriteTests: React.FC = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const { register, handleSubmit, formState: { errors } } = useForm<TestFormInputs>();

  const onSubmit: SubmitHandler<TestFormInputs> = async (data) => {
    try {
      setLoading(true);
      setError(null); // Clear any previous error

      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));

      router.push('/tests'); // Redirect to tests page after successful submission
    } catch (err: any) {
      console.error('Error submitting test:', err);
      setError(err.message || 'An unexpected error occurred.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md space-y-2 sm:p-4">
      <h1 className="text-xl font-bold">Write a New Test</h1>
      {error && <p role="alert" aria-live="assertive" className="text-red-500">{error}</p>}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label htmlFor="testName" className="block mb-2 text-sm font-medium">Test Name</label>
          <input
            type="text"
            id="testName"
            placeholder="Enter test name..."
            {...register('testName', { required: 'This is required' })}
            aria-invalid={errors.testName ? true : undefined}
            aria-describedby={errors.testName ? 'test-name-error' : undefined}
            className={`block w-full p-2 text-gray-900 border rounded-lg ${errors.testName ? 'border-red-500 focus:ring-red-500' : ''}`}
          />
          {errors.testName && (
            <p id="test-name-error" role="alert" aria-live="polite" className="mt-1 text-sm text-red-600 dark:text-red-400">
              {errors.testName.message}
            </p>
          )}
        </div>

        <div className="mb-4">
          <label htmlFor="testDescription" className="block mb-2 text-sm font-medium">Test Description</label>
          <textarea
            id="testDescription"
            placeholder="Enter test description..."
            {...register('testDescription', { required: 'This is required' })}
            aria-invalid={errors.testDescription ? true : undefined}
            aria-describedby={errors.testDescription ? 'test-description-error' : undefined}
            className={`block w-full p-2 text-gray-900 border rounded-lg ${errors.testDescription ? 'border-red-500 focus:ring-red-500' : ''}`}
          />
          {errors.testDescription && (
            <p id="test-description-error" role="alert" aria-live="polite" className="mt-1 text-sm text-red-600 dark:text-red-400">
              {errors.testDescription.message}
            </p>
          )}
        </div>

        <button type="submit"
                disabled={loading}
                className={`w-full py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 ${loading ? 'cursor-not-allowed opacity-70' : ''}`}
        >
          {loading ? 'Loading...' : 'Submit'}
        </button>
      </form>
    </div>
  );
};

export default WriteTests;
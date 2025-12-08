import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';

interface Requirement {
  name: string;
  description: string;
  priority: 'high' | 'medium' | 'low';
}

interface GatherRequirementsFormValues {
  requirements: Requirement[];
}

const GatherRequirements: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit, reset } = useForm<GatherRequirementsFormValues>();
  const router = useRouter();

  const onSubmit = async (data: GatherRequirementsFormValues) => {
    try {
      setLoading(true);
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      alert('Requirements submitted successfully!');
      reset();
      router.push('/confirmation');
    } catch (error) {
      console.error('Error submitting requirements:', error);
      alert('Failed to submit requirements. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Gather Requirements</h2>
      {Array.from({ length: 3 }, (_, i) => (
        <div key={`requirement-${i}`} className="mb-4">
          <label htmlFor={`name-${i}`} className="block text-sm font-medium text-gray-700">
            Requirement Name
          </label>
          <input
            id={`name-${i}`}
            name={`requirements[${i}].name`}
            type="text"
            placeholder="Enter requirement name"
            ref={register}
            className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>
      ))}
      <button
        type="submit"
        disabled={loading}
        className={`py-2 px-4 mt-6 text-white bg-blue-500 rounded hover:bg-blue-600 ${loading ? 'cursor-not-allowed opacity-70' : ''}`}
      >
        {loading ? 'Submitting...' : 'Submit Requirements'}
      </button>
    </form>
  );
};

export default GatherRequirements;

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';

interface Requirement {
  name: string;
  description: string;
  priority: 'high' | 'medium' | 'low';
}

interface GatherRequirementsFormValues {
  requirements: Requirement[];
}

const GatherRequirements: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit, reset } = useForm<GatherRequirementsFormValues>();
  const router = useRouter();

  const onSubmit = async (data: GatherRequirementsFormValues) => {
    try {
      setLoading(true);
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      alert('Requirements submitted successfully!');
      reset();
      router.push('/confirmation');
    } catch (error) {
      console.error('Error submitting requirements:', error);
      alert('Failed to submit requirements. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Gather Requirements</h2>
      {Array.from({ length: 3 }, (_, i) => (
        <div key={`requirement-${i}`} className="mb-4">
          <label htmlFor={`name-${i}`} className="block text-sm font-medium text-gray-700">
            Requirement Name
          </label>
          <input
            id={`name-${i}`}
            name={`requirements[${i}].name`}
            type="text"
            placeholder="Enter requirement name"
            ref={register}
            className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>
      ))}
      <button
        type="submit"
        disabled={loading}
        className={`py-2 px-4 mt-6 text-white bg-blue-500 rounded hover:bg-blue-600 ${loading ? 'cursor-not-allowed opacity-70' : ''}`}
      >
        {loading ? 'Submitting...' : 'Submit Requirements'}
      </button>
    </form>
  );
};

export default GatherRequirements;
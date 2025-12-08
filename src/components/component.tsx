import React, { useState, useEffect } from 'react';
import axios from 'axios';
import clsx from 'clsx';
import { useMediaQuery } from '@material-ui/core';

interface BusinessSpec {
  id: string;
  name: string;
  description: string;
  features: string[];
}

const CreateBusinessSpecification: React.FC = () => {
  const [specification, setSpecification] = useState<BusinessSpec | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBusinessSpecification = async () => {
      try {
        const response = await axios.get<BusinessSpec>('https://api.example.com/business-spec');
        setSpecification(response.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to load business specification.');
        setLoading(false);
      }
    };

    fetchBusinessSpecification();
  }, []);

  if (loading) return <div className="text-center">Loading...</div>;
  if (error) return <div className="text-red-500 text-center">{error}</div>;

  const isMobile = useMediaQuery('(max-width:600px)');
  const containerClass = clsx('p-4', { 'w-full': isMobile, 'w-1/2 mx-auto': !isMobile });

  return (
    <div className={containerClass}>
      <h1 className="text-xl font-bold mb-4">{specification?.name}</h1>
      <p className="mb-6">{specification?.description}</p>
      <ul role="list" aria-label="Business Specification Features">
        {specification?.features.map((feature, index) => (
          <li key={index} className="mb-2">
            <span className="text-gray-500 mr-1">•</span> {feature}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CreateBusinessSpecification;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import clsx from 'clsx';
import { useMediaQuery } from '@material-ui/core';

interface BusinessSpec {
  id: string;
  name: string;
  description: string;
  features: string[];
}

const CreateBusinessSpecification: React.FC = () => {
  const [specification, setSpecification] = useState<BusinessSpec | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBusinessSpecification = async () => {
      try {
        const response = await axios.get<BusinessSpec>('https://api.example.com/business-spec');
        setSpecification(response.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to load business specification.');
        setLoading(false);
      }
    };

    fetchBusinessSpecification();
  }, []);

  if (loading) return <div className="text-center">Loading...</div>;
  if (error) return <div className="text-red-500 text-center">{error}</div>;

  const isMobile = useMediaQuery('(max-width:600px)');
  const containerClass = clsx('p-4', { 'w-full': isMobile, 'w-1/2 mx-auto': !isMobile });

  return (
    <div className={containerClass}>
      <h1 className="text-xl font-bold mb-4">{specification?.name}</h1>
      <p className="mb-6">{specification?.description}</p>
      <ul role="list" aria-label="Business Specification Features">
        {specification?.features.map((feature, index) => (
          <li key={index} className="mb-2">
            <span className="text-gray-500 mr-1">•</span> {feature}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CreateBusinessSpecification;
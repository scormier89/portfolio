import React, { useState, useEffect } from 'react';

const Age = () => {
  const [age, setAge] = useState();

  const tick = () => {
    const divisor = 1000 * 60 * 60 * 24 * 365.2421897; // ms in an average year
    const birthTime = new Date('1989-01-30T00:00:00'); // Your real birthdate
    setAge(((Date.now() - birthTime) / divisor).toFixed(11));
  };

  useEffect(() => {
    const timer = setInterval(() => tick(), 25);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return <>{age}</>;
};

const data = [
  {
    key: 'age',
    label: 'Current age',
    value: <Age />,
  },
  {
    key: 'countries',
    label: 'Countries visited',
    value: 7, // Cuba, UK, Italy, US, Mexico, France, Canada
    link: 'https://www.google.com/maps', // Placeholder, can be replaced with a custom map
  },
  {
    key: 'location',
    label: 'Current city',
    value: 'Memramcook, NB', // Your real location
  },
];

export default data;

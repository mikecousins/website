import React, { FunctionComponent } from 'react';

const Job: FunctionComponent = ({ children }) => (
  <div className="bg-gray-100 p-4 font-sans mt-2">
    {children}
  </div>
);

export default Job;
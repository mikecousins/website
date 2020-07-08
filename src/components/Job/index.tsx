import React, { FunctionComponent } from 'react';

const Job: FunctionComponent = ({ children }) => (
  <div className="bg-gray-100 p-4 font-sans">
    {children}
  </div>
);

export default Job;
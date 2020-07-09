import React, { FunctionComponent } from 'react';

const Job: FunctionComponent = ({ children }) => (
  <div className="bg-gray-50 rounded-lg shadow p-4">
    {children}
  </div>
);

export default Job;
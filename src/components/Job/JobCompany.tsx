import React, { FunctionComponent } from 'react';

const JobCompany: FunctionComponent = ({ children }) => (
  <span className="font-bold mr-2 text-lg">
    {children}
  </span>
);

export default JobCompany;
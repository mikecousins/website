import React from 'react';
import Job from './Job';
import JobCompany from './Job/JobCompany';
import JobDate from './Job/JobDate';
import JobTitle from './Job/JobTitle';
import JobDescription from './Job/JobDescription';

const Passiv = () => (
  <Job>
    <JobCompany>
      Passiv
    </JobCompany>
    <JobDate>
      July 2018 - Present
    </JobDate>
    <JobTitle>
      Front End Architect
    </JobTitle>
    <JobDescription>
      <ul className="list-disc ml-8">
        <li>Healthcare telemedicine startup, focused on remote communities and temporarily pivoting to COVID-19 support</li>
        <li>Responsible for managing the development team including both local and offshore resources</li>
        <li>Converting business requirements into software architecture and passing technical requirements to the development team</li>
      </ul>
    </JobDescription>
  </Job>
);

export default Passiv;
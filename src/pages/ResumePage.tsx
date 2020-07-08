import React from 'react';
import Job from '../components/Job';
import JobCompany from '../components/Job/JobCompany';
import JobDate from '../components/Job/JobDate';
import JobTitle from '../components/Job/JobTitle';
import JobDescription from '../components/Job/JobDescription';

const ResumePage = () => (
  <div className="bg-gray-200 min-h-screen p-4">
    <div className="max-w-7xl mx-auto bg-white p-4">
      <h1 className="text-4xl font-serif">Mike Cousins</h1>
      <Job>
        <JobCompany>
          PurposeMed
        </JobCompany>
        <JobDate>
          January 2020 - Present
        </JobDate>
        <JobTitle>
          VP Software
        </JobTitle>
        <JobDescription>
        <ul className="list-disc ml-8">
          <li>Healthcare telemedicine startup, focused on remote communities and temporarily pivoting to COVID-19 support</li>
          <li>Responsible for managing the development team including both local and offshore resources</li>
          <li>Converting business requirements into software architecture and passing technical requirements to the development team</li>
        </ul>
        </JobDescription>
      </Job>
    </div>
  </div>
);

export default ResumePage;
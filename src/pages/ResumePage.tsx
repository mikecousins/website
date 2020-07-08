import React from 'react';
import PurposeMed from '../components/PurposeMed';
import PureWeb from '../components/PureWeb';
import Brightsquid from '../components/Brightsquid';
import Passiv from '../components/Passiv';
import Markit from '../components/Markit';
import CalgaryScientific from '../components/CalgaryScientific';

const ResumePage = () => (
  <div className="bg-gray-200 min-h-screen p-4">
    <div className="max-w-7xl mx-auto bg-white p-4">
      <h1 className="text-4xl font-serif">Mike Cousins</h1>
      <PurposeMed />
      <Passiv />
      <PureWeb />
      <Brightsquid />
      <Markit />
      <CalgaryScientific />
    </div>
  </div>
);

export default ResumePage;
import PurposeMed from '../components/PurposeMed';
import PureWeb from '../components/PureWeb';
import Brightsquid from '../components/Brightsquid';
import Passiv from '../components/Passiv';
import Markit from '../components/Markit';
import CalgaryScientific from '../components/CalgaryScientific';
import UVic from '../components/UVic';
import Subnet from '../components/Subnet';
import Pason from '../components/Pason';
import Nortel from '../components/Nortel';

const ResumePage = () => (
  <div className="bg-gray-50 min-h-screen p-4">
    <div className="max-w-7xl mx-auto bg-white">
      <h1 className="text-4xl font-extrabold font-serif p-4">Mike Cousins</h1>
      <h3 className="font-semibold w-full px-4 uppercase">Experience</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4">
        <PurposeMed />
        <Passiv />
        <PureWeb />
        <Brightsquid />
        <Markit />
        <CalgaryScientific />
        <Subnet />
        <Pason />
        <Nortel />
      </div>
      <h3 className="font-semibold w-full px-4 uppercase">Education</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-4">
        <UVic />
      </div>
    </div>
  </div>
);

export default ResumePage;
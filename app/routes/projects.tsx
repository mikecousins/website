import { V2_MetaFunction } from '@remix-run/node';
import Layout from '~/layouts';

export const meta: V2_MetaFunction = () => {
  return [
    {
      title: 'Mike Cousins - Projects',
    },
  ];
};

const Projects = () => (
  <Layout>
    <h1 className="text-6xl font-serif leading-none mb-2 mt-16">Projects</h1>
    <div className="font-mono flex flex-col gap-8">
      <div>
        <div className="text-xl font-bold">Foos</div>
        <a
          href="https://www.foos.ca"
          className="text-orange-500 hover:underline"
        >
          www.foos.ca
        </a>
        <div>Personal finance planning app.</div>
      </div>
      <div>
        <div className="text-xl font-bold">@mikecousins/react-pdf</div>
        <a
          href="https://www.npmjs.com/package/@mikecousins/react-pdf"
          className="text-orange-500 hover:underline"
        >
          NPM
        </a>
        <div>React/Typescript library for viewing PDFs in a web app.</div>
      </div>
      <div>
        <div className="text-xl font-bold">New Relic Windows Azure</div>
        <a
          href="https://www.nuget.org/packages/NewRelicWindowsAzure"
          className="text-orange-500 hover:underline"
        >
          Nuget
        </a>
        <div>
          Library to easily add New Relic performance monitoring to an ASP.NET
          MVC app running in Windows Azure.
        </div>
      </div>
      <div>
        <div className="text-xl font-bold">Shuttr</div>
        <div className="text-gray-600 italic">Dead</div>
        <div>
          Canadian event photographer e-commerce website. Allows photographers
          to upload photos after an event, price them, tag them and sell them.
        </div>
      </div>
    </div>
  </Layout>
);

export default Projects;

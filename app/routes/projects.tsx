import { type MetaFunction } from '@remix-run/node';
import { Container } from '~/components/Container';
import { Layout } from '~/components/Layout';

export const meta: MetaFunction = () => {
  return [
    {
      title: 'Mike Cousins - Projects',
    },
  ];
};

const Projects = () => (
  <Layout>
    <Container>
      <h1 className="text-6xl font-serif leading-none mb-8 mt-16">Projects</h1>
      <div className="font-mono flex flex-col gap-8">
        <div>
          <div className="text-xl font-bold">PurposeMed</div>
          <div>VP Technology</div>
          <a
            href="https://www.purposemed.com"
            className="text-orange-500 hover:underline"
          >
            www.purposemed.com
          </a>
          <div>
            Improving healthcare access and quality for underserved groups. Grew
            the company from 3 to over 200 employees and revenue from $0 to $50m
            ARR. Built a high performing, collaborative engineering org. Drove 3
            major pivots before finding product-market fit. Member of the
            executive team. Responsible for all technology decisions and overall
            platform architecture.
          </div>
        </div>
        <div>
          <div className="text-xl font-bold">Passiv/SnapTrade</div>
          <div>Front End Architect (Contract)</div>
          <a
            href="https://www.passiv.com"
            className="text-orange-500 hover:underline"
          >
            www.passiv.com
          </a>
          <div>
            Helping self-directed investors manage their investment portfolios.
            Rewrote the Django front end into React/Typescript. Got into
            YCombinator with the new platform play called SnapTrade.
          </div>
        </div>
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
    </Container>
  </Layout>
);

export default Projects;

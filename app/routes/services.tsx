import { type MetaFunction } from '@remix-run/node';
import { Link } from '@remix-run/react';
import { Container } from '~/components/Container';
import { Layout } from '~/components/Layout';

export const meta: MetaFunction = () => {
  return [
    {
      title: 'Mike Cousins - Services',
    },
  ];
};

const Services = () => (
  <Layout>
    <Container>
      <h1 className="text-6xl font-serif leading-none mb-2 mt-16">Services</h1>
      <p className="font-mono">
        I am available for contract work, fractional CTO engagements, and
        technical consulting. Check out the <Link to="/work">work</Link> that I
        have done. I have experience in many stages of companies and in many
        different industries. Reach out if you would like to work together!
      </p>
    </Container>
  </Layout>
);

export default Services;

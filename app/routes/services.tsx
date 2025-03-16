import { type MetaFunction } from '@remix-run/node';
import { Container } from '~/components/Container';
import { Layout } from '~/components/Layout';
import StyledLink from '~/components/StyledLink';

export const meta: MetaFunction = () => {
  return [
    {
      title: 'Mike Cousins - Services',
    },
  ];
};

const Services = () => (
  <Layout>
    <Container className="mt-16 sm:mt-32">
      <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
        Services
      </h1>
      <div className="mt-6 space-y-7">
        <p>
          I am available for contract software development, technical
          co-founder, fractional CTO engagements, and technical consulting
          roles. Check out the <StyledLink to="/projects">projects</StyledLink>{' '}
          that I have done. I have experience in many stages of companies and in
          many different industries.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-16">
          <div>
            <h3 className="text-xl font-bold tracking-tight text-zinc-800 sm:text-2xl dark:text-zinc-100">
              Technical Co-founder
            </h3>
            <p>
              I have been a technical co-founder for multiple companies. I can
              help you get your idea off the ground, build a team, and scale
              your technology as your company grows.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold tracking-tight text-zinc-800 sm:text-2xl dark:text-zinc-100">
              Fractional CTO
            </h3>
            <p>
              Need some high level advice on your technology stack, team, or
              architecture? I can help you with that. I can also help you build
              and scale your team.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold tracking-tight text-zinc-800 sm:text-2xl dark:text-zinc-100">
              Software Development
            </h3>
            <p>
              I have been a software developer for over 20 years. I specialize
              in front end development, but I have experience in all areas of
              software development. I can help you build your product from start
              to finish.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold tracking-tight text-zinc-800 sm:text-2xl dark:text-zinc-100">
              Technical Consulting
            </h3>
            <p>
              Any other technical needs? I can help you with that. I can do a
              lot of things myself and I also have a large network of technical
              professionals that I can bring in to help with any solutions that
              you need.
            </p>
          </div>
        </div>
        <p>
          Reach out if you would like to work together! I have various ways to
          contact me on my <StyledLink to="/about">about</StyledLink> page.
        </p>
      </div>
    </Container>
  </Layout>
);

export default Services;

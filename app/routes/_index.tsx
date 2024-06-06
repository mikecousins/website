import IconLink from '../components/IconLink';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub,
  faLinkedin,
  faMastodon,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { type MetaFunction } from '@remix-run/node';
import Layout from '~/layouts';

export const meta: MetaFunction = () => {
  return [
    {
      title: 'Mike Cousins',
    },
    { name: 'description', content: 'The personal site of Mike Cousins' },
  ];
};

const Index = () => (
  <Layout>
    <h1 className="text-6xl font-serif leading-none mb-2 mt-16">
      Mike Cousins
    </h1>
    <p className="font-mono">
      Software professional specializing in front end development, UX,
      architecture and team leadership. Early-stage startup junkie. Fractional
      CTO. Contract mercenary. React, Typescript, Remix, and Tailwind. Crafting
      modern, simple, user-focused software.
    </p>
    <div className="text-xl mt-4 flex">
      <IconLink href="https://github.com/mikecousins" title="Github" first>
        <FontAwesomeIcon icon={faGithub} />
      </IconLink>
      <IconLink href="https://twitter.com/mikecousins" title="Twitter">
        <FontAwesomeIcon icon={faTwitter} />
      </IconLink>
      <IconLink href="https://hachyderm.io/@mikecousins" title="Mastodon">
        <FontAwesomeIcon icon={faMastodon} />
      </IconLink>
      <IconLink
        href="https://www.linkedin.com/in/mikecousins/"
        title="LinkedIn"
      >
        <FontAwesomeIcon icon={faLinkedin} />
      </IconLink>
      <IconLink href="mailto:mike@mikecousins.com" title="Email">
        <FontAwesomeIcon icon={faEnvelope} />
      </IconLink>
    </div>
  </Layout>
);

export default Index;

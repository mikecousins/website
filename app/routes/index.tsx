import type { MetaFunction } from 'remix';
import IconLink from '../components/IconLink';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub,
  faLinkedin,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import ThemeToggle from '../components/ThemeToggle';

export let meta: MetaFunction = () => {
  return {
    title: 'Mike Cousins',
    description: 'The personal site of Mike Cousins',
  };
};

const Index = () => (
  <>
    <h1 className="text-6xl font-serif leading-none mb-2">Mike Cousins</h1>
    <p className="font-mono">
      Software professional specializing in front end development, UX and team
      leadership. React/Typescript, Swift, Kotlin. Crafting modern, simple,
      user-focused software.
    </p>
    <div className="text-xl mt-4 flex">
      <IconLink href="https://github.com/mikecousins" title="Github" first>
        <FontAwesomeIcon icon={faGithub} />
      </IconLink>
      <IconLink href="https://twitter.com/mikecousins" title="Twitter">
        <FontAwesomeIcon icon={faTwitter} />
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
      <div className="flex-1" />
      <ThemeToggle />
    </div>
  </>
);

export default Index;
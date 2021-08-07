import { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import clsx from 'clsx';
import IconLink from '../components/IconLink';
import { store } from '../providers/ThemeProvider';
import ThemeToggle from '../components/ThemeToggle';

const LandingPage = () => {
  const { theme } = useContext(store);
  
  return (
    <div className={clsx(
        'flex h-screen transition-colors ease-in-out duration-1000',
        theme === 'light' ? 'text-gray-800 bg-gray-50' : ' text-gray-100 bg-gray-700'
    )}>
      <div className="p-2 mx-auto my-auto max-w-2xl">
        <h1 className="text-6xl font-serif leading-none mb-2">Mike Cousins</h1>
        <p className="font-mono">
          Software professional specializing in front end development, UX and team leadership. React/Typescript, Swift, Kotlin. Crafting modern, simple, user-focused software.
        </p>
        <div className="text-xl mt-4">
          <IconLink
            href="https://github.com/mikecousins"
            title="Github"
            first
          >
            <FontAwesomeIcon icon={faGithub} />
          </IconLink>
          <IconLink
            href="https://twitter.com/mikecousins"
            title="Twitter"
          >
            <FontAwesomeIcon icon={faTwitter} />
          </IconLink>
          <IconLink
            href="https://www.linkedin.com/in/mikecousins/"
            title="LinkedIn"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </IconLink>
          <IconLink
            href="mailto:mike@mikecousins.com"
            title="Email"
          >
            <FontAwesomeIcon icon={faEnvelope} />
          </IconLink>
          <ThemeToggle />
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
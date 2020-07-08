import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import IconLink from '../components/IconLink';

const LandingPage = () => (
  <div className="flex h-screen bg-gray-50">
    <div className="p-2 mx-auto my-auto max-w-2xl">
      <h1 className="text-6xl font-serif">Mike Cousins</h1>
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
      </div>
    </div>
  </div>
);

export default LandingPage;
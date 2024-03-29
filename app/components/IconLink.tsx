import { FC, PropsWithChildren } from 'react';
import clsx from 'clsx';

type Props = {
  title: string;
  href: string;
  first?: boolean;
};

const IconLink: FC<PropsWithChildren<Props>> = ({
  children,
  title,
  href,
  first = false,
}) => (
  <a
    href={href}
    className={clsx('py-2 pr-2 mr-2 hover:text-orange-500', !first && 'pl-2')}
    title={title}
    rel="me"
  >
    {children}
    <span className="sr-only">{title}</span>
  </a>
);

export default IconLink;

import { Link } from '@remix-run/react';

type Props = React.ComponentProps<typeof Link>;

const StyledLink = ({ children, ...props }: Props) => (
  <Link className="text-teal-500 dark:text-teal-300 hover:underline" {...props}>
    {children}
  </Link>
);

export default StyledLink;

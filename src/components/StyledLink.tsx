type Props = React.ComponentPropsWithoutRef<'a'>;

const StyledLink = ({ children, ...props }: Props) => (
  <a className="text-teal-500 dark:text-teal-300 hover:underline" {...props}>
    {children}
  </a>
);

export default StyledLink;

export { StyledLink as Link };

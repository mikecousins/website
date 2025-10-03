import * as Headless from '@headlessui/react';
import React from 'react';

export const Link = React.forwardRef(function Link(
  props: React.ComponentPropsWithoutRef<'a'>,
  ref: React.ForwardedRef<HTMLAnchorElement>
) {
  return (
    <Headless.DataInteractive>
      <a {...props} ref={ref} />
    </Headless.DataInteractive>
  );
});

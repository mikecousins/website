import { Link } from '@remix-run/react';
import { type ReactNode } from 'react';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => (
  <div className="flex flex-col text-white">
    <div className="max-w-4xl w-full mx-auto text-xl font-mono">
      <NavigationMenu.Root className="relative flex justify-end z-[1]">
        <NavigationMenu.List className="flex justify-center p-4 gap-4 list-none">
          <NavigationMenu.Item>
            <NavigationMenu.Link asChild>
              <Link
                to="/"
                className="decoration-orange-500 underline-offset-4 hover:underline"
              >
                Home
              </Link>
            </NavigationMenu.Link>
          </NavigationMenu.Item>
          <NavigationMenu.Item>
            <NavigationMenu.Link asChild>
              <Link
                to="/services"
                className="decoration-orange-500 underline-offset-4 hover:underline"
              >
                Services
              </Link>
            </NavigationMenu.Link>
          </NavigationMenu.Item>
          <NavigationMenu.Item>
            <NavigationMenu.Link asChild>
              <Link
                to="/work"
                className="decoration-orange-500 underline-offset-4 hover:underline"
              >
                Work
              </Link>
            </NavigationMenu.Link>
          </NavigationMenu.Item>
          <NavigationMenu.Item className="">
            <NavigationMenu.Trigger className="flex">
              <span>
                Other <FontAwesomeIcon icon={faCaretDown} />
              </span>
            </NavigationMenu.Trigger>
            <NavigationMenu.Content className="absolute top-12 right-0 w-full sm:w-auto bg-gray-950 border border-gray-700 p-4">
              <div className="flex gap-4">
                <NavigationMenu.Link asChild>
                  <Link
                    to="/movies"
                    className="decoration-orange-500 underline-offset-4 hover:underline"
                  >
                    Movies
                  </Link>
                </NavigationMenu.Link>
                <NavigationMenu.Link asChild>
                  <Link
                    to="/stuff"
                    className="decoration-orange-500 underline-offset-4 hover:underline"
                  >
                    Stuff
                  </Link>
                </NavigationMenu.Link>
              </div>
            </NavigationMenu.Content>
          </NavigationMenu.Item>
        </NavigationMenu.List>
      </NavigationMenu.Root>
    </div>
    <div className="max-w-4xl w-full mx-auto mt-4 dark:text-gray-100 dark:bg-black dark:bg-opacity-20 px-4">
      {children}
    </div>
  </div>
);

export default Layout;

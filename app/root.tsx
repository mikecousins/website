import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  type MetaFunction,
} from '@remix-run/react';
import styles from '~/tailwind.css?url';

export const links = () => {
  return [{ rel: 'stylesheet', href: styles }];
};

export const meta: MetaFunction = () => {
  return [
    {
      title: 'Mike Cousins',
    },
    { name: 'description', content: 'The personal site of Mike Cousins' },
  ];
};

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function () {
                window.counterscale = {
                  q: [["set", "siteId", "mikecousins"], ["trackPageview"]],
                };
            })();`,
          }}
        />
        <script
          id="counterscale-script"
          src="https://counterscale.cousins.ai/tracker.js"
          defer
        ></script>
      </head>
      <body className="bg-black dark">
        <Outlet />
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

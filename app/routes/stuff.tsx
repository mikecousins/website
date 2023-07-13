import { type V2_MetaFunction } from '@remix-run/node';
import Layout from '~/layouts';

export const meta: V2_MetaFunction = () => {
  return [
    {
      title: 'Mike Cousins - Stuff',
    },
  ];
};

const Stuff = () => (
  <Layout>
    <h1 className="text-6xl font-serif leading-none mb-2 mt-16">Stuff</h1>
    <p className="font-mono">All the stuff that I use and recommend.</p>
    <div>
      <h2>Monos</h2>
      <a href="https://i.refs.cc/gP0U0I5C?smile_ref=eyJzbWlsZV9zb3VyY2UiOiJzbWlsZV91aSIsInNtaWxlX21lZGl1bSI6IiIsInNtaWxlX2NhbXBhaWduIjoicmVmZXJyYWxfcHJvZ3JhbSIsInNtaWxlX2N1c3RvbWVyX2lkIjoxMzUzNzkxMTU1fQ%3D%3D">
        Link
      </a>
    </div>
  </Layout>
);

export default Stuff;

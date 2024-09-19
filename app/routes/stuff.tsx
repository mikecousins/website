import { type MetaFunction } from '@remix-run/node';
import { Container } from '~/components/Container';
import { Layout } from '~/components/Layout';

export const meta: MetaFunction = () => {
  return [
    {
      title: 'Mike Cousins - Stuff',
    },
  ];
};

const Stuff = () => (
  <Layout>
    <Container className="mt-16 sm:mt-32">
      <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
        Stuff
      </h1>
      <div>
        <p>All of the stuff that I personally use and recommend.</p>
        <Category name="Tech" />
        <div>
          Phone -{' '}
          <ExtLink
            href="https://i.refs.cc/gP0U0I5C?smile_ref=eyJzbWlsZV9zb3VyY2UiOiJzbWlsZV91aSIsInNtaWxlX21lZGl1bSI6IiIsInNtaWxlX2NhbXBhaWduIjoicmVmZXJyYWxfcHJvZ3JhbSIsInNtaWxlX2N1c3RvbWVyX2lkIjoxMzUzNzkxMTU1fQ%3D%3D"
            text="Apple iPhone 14 Pro Max"
          />
        </div>
        <div>
          Networking -{' '}
          <ExtLink href="https://ca.store.ui.com" text="Ubiquiti Unifi" />
        </div>
        <div>
          NAS -{' '}
          <ExtLink
            href="https://i.refs.cc/gP0U0I5C?smile_ref=eyJzbWlsZV9zb3VyY2UiOiJzbWlsZV91aSIsInNtaWxlX21lZGl1bSI6IiIsInNtaWxlX2NhbXBhaWduIjoicmVmZXJyYWxfcHJvZ3JhbSIsInNtaWxlX2N1c3RvbWVyX2lkIjoxMzUzNzkxMTU1fQ%3D%3D"
            text="Synology RS2423+"
          />
        </div>
        <div>
          UPS -{' '}
          <ExtLink
            href="https://i.refs.cc/gP0U0I5C?smile_ref=eyJzbWlsZV9zb3VyY2UiOiJzbWlsZV91aSIsInNtaWxlX21lZGl1bSI6IiIsInNtaWxlX2NhbXBhaWduIjoicmVmZXJyYWxfcHJvZ3JhbSIsInNtaWxlX2N1c3RvbWVyX2lkIjoxMzUzNzkxMTU1fQ%3D%3D"
            text="APC Smart-UPS 1500VA"
          />
        </div>
        <div>
          Webcam -{' '}
          <ExtLink
            href="https://i.refs.cc/gP0U0I5C?smile_ref=eyJzbWlsZV9zb3VyY2UiOiJzbWlsZV91aSIsInNtaWxlX21lZGl1bSI6IiIsInNtaWxlX2NhbXBhaWduIjoicmVmZXJyYWxfcHJvZ3JhbSIsInNtaWxlX2N1c3RvbWVyX2lkIjoxMzUzNzkxMTU1fQ%3D%3D"
            text="Logitech Brio 4k"
          />
        </div>
        <Category name="Home Theatre" />
        <div>
          TV -{' '}
          <ExtLink
            href="https://i.refs.cc/gP0U0I5C?smile_ref=eyJzbWlsZV9zb3VyY2UiOiJzbWlsZV91aSIsInNtaWxlX21lZGl1bSI6IiIsInNtaWxlX2NhbXBhaWduIjoicmVmZXJyYWxfcHJvZ3JhbSIsInNtaWxlX2N1c3RvbWVyX2lkIjoxMzUzNzkxMTU1fQ%3D%3D"
            text="LG C3 OLED"
          />
        </div>
        <div>
          Streamer -{' '}
          <ExtLink
            href="https://i.refs.cc/gP0U0I5C?smile_ref=eyJzbWlsZV9zb3VyY2UiOiJzbWlsZV91aSIsInNtaWxlX21lZGl1bSI6IiIsInNtaWxlX2NhbXBhaWduIjoicmVmZXJyYWxfcHJvZ3JhbSIsInNtaWxlX2N1c3RvbWVyX2lkIjoxMzUzNzkxMTU1fQ%3D%3D"
            text="Nvidia Shield Pro"
          />
        </div>
        <Category name="Financial" />
        <div>
          Credit Card -{' '}
          <ExtLink
            href="https://i.refs.cc/gP0U0I5C?smile_ref=eyJzbWlsZV9zb3VyY2UiOiJzbWlsZV91aSIsInNtaWxlX21lZGl1bSI6IiIsInNtaWxlX2NhbXBhaWduIjoicmVmZXJyYWxfcHJvZ3JhbSIsInNtaWxlX2N1c3RvbWVyX2lkIjoxMzUzNzkxMTU1fQ%3D%3D"
            text="AMEX Platinum"
          />
        </div>
        <div>
          Brokerage -{' '}
          <ExtLink
            href="https://i.refs.cc/gP0U0I5C?smile_ref=eyJzbWlsZV9zb3VyY2UiOiJzbWlsZV91aSIsInNtaWxlX21lZGl1bSI6IiIsInNtaWxlX2NhbXBhaWduIjoicmVmZXJyYWxfcHJvZ3JhbSIsInNtaWxlX2N1c3RvbWVyX2lkIjoxMzUzNzkxMTU1fQ%3D%3D"
            text="Questrade"
          />
        </div>
        <Category name="Audio" />
        <div>
          Headphones -{' '}
          <ExtLink
            href="https://i.refs.cc/gP0U0I5C?smile_ref=eyJzbWlsZV9zb3VyY2UiOiJzbWlsZV91aSIsInNtaWxlX21lZGl1bSI6IiIsInNtaWxlX2NhbXBhaWduIjoicmVmZXJyYWxfcHJvZ3JhbSIsInNtaWxlX2N1c3RvbWVyX2lkIjoxMzUzNzkxMTU1fQ%3D%3D"
            text="Focal Bathys"
          />
        </div>
        <div>
          Minimal Headphones -{' '}
          <ExtLink
            href="https://i.refs.cc/gP0U0I5C?smile_ref=eyJzbWlsZV9zb3VyY2UiOiJzbWlsZV91aSIsInNtaWxlX21lZGl1bSI6IiIsInNtaWxlX2NhbXBhaWduIjoicmVmZXJyYWxfcHJvZ3JhbSIsInNtaWxlX2N1c3RvbWVyX2lkIjoxMzUzNzkxMTU1fQ%3D%3D"
            text="Apple Airpods Pro"
          />
        </div>
        <div>
          Speakers -{' '}
          <ExtLink
            href="https://i.refs.cc/gP0U0I5C?smile_ref=eyJzbWlsZV9zb3VyY2UiOiJzbWlsZV91aSIsInNtaWxlX21lZGl1bSI6IiIsInNtaWxlX2NhbXBhaWduIjoicmVmZXJyYWxfcHJvZ3JhbSIsInNtaWxlX2N1c3RvbWVyX2lkIjoxMzUzNzkxMTU1fQ%3D%3D"
            text="Paradigm Founder Series"
          />
        </div>
        <div>
          Receiver -{' '}
          <ExtLink
            href="https://i.refs.cc/gP0U0I5C?smile_ref=eyJzbWlsZV9zb3VyY2UiOiJzbWlsZV91aSIsInNtaWxlX21lZGl1bSI6IiIsInNtaWxlX2NhbXBhaWduIjoicmVmZXJyYWxfcHJvZ3JhbSIsInNtaWxlX2N1c3RvbWVyX2lkIjoxMzUzNzkxMTU1fQ%3D%3D"
            text="Anthem MRX 540"
          />
        </div>
        <Category name="Coffee" />
        <div>
          Pot Brewer -{' '}
          <ExtLink
            href="https://i.refs.cc/gP0U0I5C?smile_ref=eyJzbWlsZV9zb3VyY2UiOiJzbWlsZV91aSIsInNtaWxlX21lZGl1bSI6IiIsInNtaWxlX2NhbXBhaWduIjoicmVmZXJyYWxfcHJvZ3JhbSIsInNtaWxlX2N1c3RvbWVyX2lkIjoxMzUzNzkxMTU1fQ%3D%3D"
            text="Technivorm Moccamaster"
          />
        </div>
        <div>
          Cold Brew -{' '}
          <ExtLink
            href="https://i.refs.cc/gP0U0I5C?smile_ref=eyJzbWlsZV9zb3VyY2UiOiJzbWlsZV91aSIsInNtaWxlX21lZGl1bSI6IiIsInNtaWxlX2NhbXBhaWduIjoicmVmZXJyYWxfcHJvZ3JhbSIsInNtaWxlX2N1c3RvbWVyX2lkIjoxMzUzNzkxMTU1fQ%3D%3D"
            text="OXO Cold Brew"
          />
        </div>
        <Category name="Travel" />
        <div>
          Suitcase -{' '}
          <ExtLink
            href="https://i.refs.cc/gP0U0I5C?smile_ref=eyJzbWlsZV9zb3VyY2UiOiJzbWlsZV91aSIsInNtaWxlX21lZGl1bSI6IiIsInNtaWxlX2NhbXBhaWduIjoicmVmZXJyYWxfcHJvZ3JhbSIsInNtaWxlX2N1c3RvbWVyX2lkIjoxMzUzNzkxMTU1fQ%3D%3D"
            text="Monos"
          />
        </div>
        <Category name="Personal Care" />
        <div>
          Face Wash - <ExtLink href="http://rwrd.io/5a4vare?c" text="Cerave" />
        </div>
        <div>
          Lip Balm -{' '}
          <ExtLink href="http://rwrd.io/5a4vare?c" text="DR Harris Lip Balm" />
        </div>
      </div>
    </Container>
  </Layout>
);

const Category = ({ name }: { name: string }) => (
  <h2 className="font-bold text-xl my-2 text-zinc-800 dark:text-zinc-100">
    {name}
  </h2>
);

const ExtLink = ({ href, text }: { href: string; text: string }) => (
  <a
    href={href}
    className="decoration-orange-500 underline-offset-4 decoration-dashed hover:text-orange-500 underline"
  >
    {text}
  </a>
);

export default Stuff;

import Image from 'next/image';
import { useRouter } from 'next/router';
import Logo from '../../ui/logo';

const services = [
  {
    label: 'List My Hotel',
    link: '/',
  },
  {
    label: 'Become a Supplier',
    link: '/',
  },
  {
    label: 'Investor Relations',
    link: '/',
  },
  {
    label: 'Affiliate Program',
    link: '/',
  },
];

const about = [
  {
    label: 'News',
    link: '/',
  },
  {
    label: 'About Triptips',
    link: '/',
  },
  {
    label: 'Careers',
    link: '/',
  },
  {
    label: 'Triptips Rewards',
    link: '/',
  },
];

const legal = [
  {
    label: 'Terms & Condition',
    link: '/',
  },
  {
    label: 'Privacy Policy',
    link: '/',
  },
  {
    label: 'Cookies Policy',
    link: '/',
  },
];

const Footer = () => {
  const router = useRouter();
  return (
    <footer className="bg-branddark">
      <div className="container mx-auto py-16 px-6">
        <div className="flex flex-col lg:flex-row space-y-6 lg:space-y-0 lg:justify-between">
          {/* app stores and social */}
          <div className="flex flex-col space-y-4 pb-8">
            <Logo light={true} />
            <div className="bg-slate-100 flex space-x-2 p-2 rounded-md">
              <Image
                src="/images/playstore.png"
                alt="playstore"
                width={50}
                height={50}
                className="object-cover"
              />

              <div className="pr-2">
                <p className="text-gray-500">Download on the</p>
                <p className="headingxs">Play Store</p>
              </div>
            </div>

            <div className="bg-slate-100 flex space-x-2 p-2 rounded-md">
              <Image
                src="/images/appstore.png"
                alt="appstore"
                height={50}
                width={50}
                className="object-cover"
              />

              <div className="pr-2">
                <p className="text-gray-500">Download on the</p>
                <p className="headingxs">App Store</p>
              </div>
            </div>
          </div>

          {/* our services */}
          <div>
            <h2 className="headingxs text-white">Our Services</h2>

            <ul className="mt-4 flex flex-col space-y-4">
              {services.map((service, i) => (
                <li
                  key={i}
                  onClick={() => router.push(`${service.link}`)}
                  className="text-white cursor-pointer hover:text-gray-200"
                >
                  {service.label}
                </li>
              ))}
            </ul>
          </div>

          {/* About us */}
          <div>
            <h2 className="headingxs text-white">About Us</h2>

            <ul className="mt-4 flex flex-col space-y-4">
              {about.map((item, i) => (
                <li
                  key={i}
                  onClick={() => router.push(`${item.link}`)}
                  className="text-white cursor-pointer hover:text-gray-200"
                >
                  {item.label}
                </li>
              ))}
            </ul>
          </div>

          {/* legal */}
          <div>
            <h2 className="headingxs text-white">Legal</h2>

            <ul className="mt-4 flex flex-col space-y-4">
              {legal.map((item, i) => (
                <li
                  key={i}
                  onClick={() => router.push(item.link)}
                  className="text-white cursor-pointer hover:text-gray-200"
                >
                  {item.label}
                </li>
              ))}
            </ul>
          </div>

          {/* subscribe */}
          <div>
            <h2 className="headingxs text-white">Subscribe</h2>

            {/* <SubscribeForm /> */}
          </div>
        </div>

        <div className="mt-4 border-t-2 border-gray-700 pt-8">
          <p className="text-blue-50 text-center">
            Copyright &copy; {new Date().getFullYear()} tripSafari.Inc All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

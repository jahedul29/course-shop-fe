import { BiSolidChevronRight } from 'react-icons/bi';
import {
  GrFacebookOption,
  GrGoogle,
  GrLinkedinOption,
  GrTwitter,
} from 'react-icons/gr';
import { Link } from 'react-router-dom';

const Footer = () => {
  const socialLinks = [
    {
      id: 1,
      url: '/',
      icon: <GrFacebookOption />,
    },
    {
      id: 2,
      url: '/',
      icon: <GrTwitter />,
    },
    {
      id: 3,
      url: '/',
      icon: <GrLinkedinOption />,
    },
    {
      id: 4,
      url: '/',
      icon: <GrGoogle />,
    },
  ];

  const siteLinks = [
    {
      id: 1,
      url: '/',
      label: 'Home',
    },
    {
      id: 2,
      url: '/dashboard',
      label: 'Dashboard',
    },
  ];
  return (
    <footer className="bg-primary">
      <div className="grid grid-cols-4 py-10 container mx-auto px-3 md:px-0">
        <div className="col-span-4 md:col-span-1 text-gray-400 space-y-4">
          <h2 className="text-xl font-bold">About us</h2>
          <p className="text-gray-100">
            Explore a world of books on our online library. Dive into
            captivating stories, expand your knowledge, and connect with fellow
            book lovers. Join us in the joy of reading!
          </p>
          <div className="flex items-center space-x-2">
            {socialLinks.map((item) => {
              return (
                <Link
                  className="bg-gray-800 rounded flex items-center justify-center text-white text-lg p-2 hover:bg-primary"
                  key={item.id}
                  to={item.url}
                  target="_blank"
                >
                  {item.icon}
                </Link>
              );
            })}
          </div>
        </div>
        <div className="col-span-4 md:col-span-2 mt-10 md:mt-0"></div>
        <div className="col-span-4 md:col-span-1 space-y-4 text-gray-400">
          <h2 className="text-xl font-bold">Quick Links</h2>
          <div className="flex flex-col space-y-3">
            {siteLinks.map((item) => (
              <Link
                to={item.url}
                className="text-gray-100 hover:text-black flex"
              >
                <BiSolidChevronRight className="text-primary mr-2" />{' '}
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <hr className="border-gray-700" />
      <div className="h-[65px] flex items-center justify-center text-white container mx-auto">
        All rights reserved by @{' '}
        <span className="text-green">Md Jahedul Hoque</span>
      </div>
    </footer>
  );
};

export default Footer;

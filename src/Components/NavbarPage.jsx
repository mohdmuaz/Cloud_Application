import React, { useState } from 'react';
import LogoImage from '../Assets/cloudlogo.png';

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeHostingOption, setActiveHostingOption] = useState(null);
  const [domainHovered, setDomainHovered] = useState(false);
  const [emailHovered, setEmailHovered] = useState(false);
  const [serverHovered, setServerHovered] = useState(false);
  const [dataHovered, setDataHovered] = useState(false);


  const Links = [
    { name: 'Domain', link: '/' },
    { name: 'Hosting', link: '/' },
    { name: 'Email & Productivity', link: '/' },
    { name: 'Server Management', link: '/' },
    { name: 'Data Center', link: '/' },
    { name: 'AWS', link: '/' },
    { name: 'Blog', link: '/' },
  ];

  const hostingOptions = [
    {
      name: 'Shared Hosting',
      icon: 'fas fa-server',
      subOptions: [
        { name: 'Linux Shared Hosting', link: '/linux-shared-hosting' },
        { name: 'Windows Shared Hosting', link: '/windows-shared-hosting' },
      ],
    },
    {
      name: 'VPS Hosting',
      icon: 'fas fa-cloud',
      subOptions: [
        { name: 'Managed VPS', link: '/managed-vps' },
        { name: 'Unmanaged VPS', link: '/unmanaged-vps' },
      ],
    },
    {
      name: 'Dedicated Hosting',
      icon: 'fas fa-hdd',
      subOptions: [
        { name: 'Linux Dedicated Server', link: '/linux-dedicated' },
        { name: 'Windows Dedicated Server', link: '/windows-dedicated' },
      ],
    },
    {
      name: 'Cloud Hosting',
      icon: 'fas fa-cloud-upload-alt',
      subOptions: [
        { name: 'Public Cloud', link: '/public-cloud' },
        { name: 'Private Cloud', link: '/private-cloud' },
      ],
    },
    {
      name: 'Reseller Hosting',
      icon: 'fas fa-user-friends',
      subOptions: [
        { name: 'Linux Reseller Hosting', link: '/linux-reseller' },
        { name: 'Windows Reseller Hosting', link: '/windows-reseller' },
      ],
    },
    {
      name: 'Managed Hosting',
      icon: 'fas fa-tools',
      subOptions: [
        { name: 'Managed WordPress', link: '/managed-wordpress' },
        { name: 'Managed WooCommerce', link: '/managed-woocommerce' },
      ],
    },
  ];

  const domainOptions = [
    {
      name: 'Domain Register',
      icon: 'fas fa-pencil-alt',
      description: 'Register your domain for lifetime',
    },
    {
      name: 'Domain Transfer',
      icon: 'fas fa-exchange-alt',
      description: 'Transfer your domain using this tool',
    },
  ];

  const EmailOptions = [
    { name: 'Microsoft 365', link: '/microsoft-365' },
    { name: 'SSL Certificate', link: '/ssl-certificate' },
    { name: 'Google WorkSpace', link: '/google-workspace' },
  ];

  const ServerOptions = [
    { name: 'CPanel', link: '/' },
    { name: 'Plesk Support', link: '/' },
    { name: 'Dirtect Admin Support', link: '/' },
    { name: 'SolusVM Support', link: '/' },
    { name: 'Virtualizor Support', link: '/' },
    { name: 'Microsoft Hyper-V Support', link: '/' },
    { name: 'Amazon AWS Support', link: '/' },
    { name: 'Microsoft Azure', link: '/' },
    { name: 'Digital Ocean', link: '/' },
  ];

  const DataOptions = [
    { name: 'India', link: '/' },
    { name: 'Jaipur', link: '/' },
    { name: 'Mumbai', link: '/' },
    { name: 'Noida', link: '/' },
  ];

  const socialIcons = [
    { name: 'Facebook', icon: 'fab fa-facebook' },
    { name: 'Instagram', icon: 'fab fa-instagram' },
    { name: 'Twitter', icon: 'fab fa-twitter' },
    { name: 'LinkedIn', icon: 'fab fa-linkedin' },
    { name: 'Pinterest', icon: 'fab fa-pinterest' },
  ];

  return (
    <div className="w-full">
      {/* Upper Section: Top Nav Bar */}
      <div className="bg-white text-black text-sm z-20 fixed top-0 left-0 w-full border">
        <div className="flex justify-between items-center">
          {/* Left side: Phone and Email */}
          <div className="flex space-x-4">
            <div className="flex items-center space-x-1 ml-4">
              <i className="fas fa-phone text-base text-black"></i>
              <span className="text-black text-base font-semibold"> +91-8447755312</span>
            </div>
            <div className="flex items-center space-x-1">
              <i className="fas fa-envelope text-base text-black"></i>
              <span className="text-black text-base font-semibold">sales@cloudminister.com</span>
            </div>
          </div>

          {/* Right side: Social Media & Buttons */}
          <div className="flex items-center space-x-3 mr-4">
            {socialIcons.map((icon) => (
              <a
                key={icon.name}
                href="/"
                className="text-black text-xl hover:text-gray-400"
              >
                <i className={`${icon.icon}`}></i>
              </a>
            ))}
            <button className="text-black border-2 px-4 py-2 rounded-lg hover:bg-black hover:text-white transition-all duration-300">
              Register
            </button>
            <button className="text-black border-2  px-4 py-2 rounded-lg hover:bg-black hover:text-white transition-all duration-300">
              Sign In
            </button>
          </div>
        </div>
      </div>

      {/* Lower Section: Main Nav Bar */}
      <div className="shadow-md w-full fixed mt-9 left-0 z-10 bg-white">
        <div className="flex items-center justify-between h-20 px-4 md:px-12 ml-5 mr-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img className="h-12 w-auto" src={LogoImage} alt="Logo" />
          </div>

          {/* Hamburger Icon */}
          <div
            className="md:hidden text-gray-700 text-3xl cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <i className={`bx ${isMenuOpen ? 'bx-x' : 'bx-menu'}`} />
          </div>

          {/* Links */}
          <ul
            className={`md:flex md:items-center md:space-x-4 lg:space-x-6 xl:space-x-8 absolute md:static left-0 w-full bg-white md:w-auto md:bg-transparent transition-all duration-300 ease-in ${
              isMenuOpen ? 'block' : 'hidden'
            }`}
          >
            {Links.map((link) => (
              <li
                key={link.name}
                className="text-center text-sm font-bold group relative"
                onMouseEnter={() => {
                  if (link.name === 'Domain') setDomainHovered(true);
                  if (link.name === 'Email & Productivity') setEmailHovered(true);
                  if (link.name === 'Server Management') setServerHovered(true);
                  if (link.name === 'Data Center') setDataHovered(true);

                }}
                onMouseLeave={() => {
                  if (link.name === 'Domain') setDomainHovered(false);
                  if (link.name === 'Email & Productivity') setEmailHovered(false);
                  if (link.name === 'Server Management') setServerHovered(false);
                  if (link.name === 'Data Center') setDataHovered(false);
                }}
              >
                <div className="p-4 hover:bg-gray-100 rounded-md">
                  {link.name === 'Domain' ? (
                    <>
                      <a
                        href={link.link}
                        className="text-blue-800 hover:text-orange-300 duration-300 block text-responsive text-base font-medium"
                      >
                        {link.name}
                      </a>
                      {/* Domain Options */}
                      {domainHovered && (
                        <div className="absolute left-0 mt-2 w-64 bg-white shadow-lg rounded-md">
                          {domainOptions.map((option, index) => (
                            <div key={index} className="p-4 border-b hover:bg-gray-100 flex">
                              <i className={`${option.icon} text-xl text-blue-600 mr-4`}></i>
                              <div>
                                <a
                                  href="/"
                                  className="text-black font-semibold hover:text-blue-800"
                                >
                                  {option.name}
                                </a>
                                <p className="text-gray-600 text-sm">{option.description}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </>
                  ) : link.name === 'Hosting' ? (
                    <>
                      <a
                        href={link.link}
                        className="text-blue-800 hover:text-orange-300 duration-300 block text-responsive text-base font-medium"
                      >
                        {link.name}
                      </a>
                      {/* Hosting Dropdown */}
                      <div className="absolute left-0 mt-2 hidden group-hover:block w-64 bg-white shadow-lg rounded-md">
                        {hostingOptions.map((option, index) => (
                          <div key={index} className="p-4 border-b hover:bg-gray-100">
                            <div
                              className="flex items-center cursor-pointer"
                              onClick={() =>
                                setActiveHostingOption(
                                  activeHostingOption === index ? null : index
                                )
                              }
                            >
                              <i className={`${option.icon} text-xl text-blue-600 mr-4`}></i>
                              <span className="text-black font-semibold hover:text-blue-800">
                                {option.name}
                              </span>
                            </div>
                            {activeHostingOption === index && (
                              <div className="mt-2">
                                {option.subOptions.map((subOption, subIndex) => (
                                  <a
                                    key={subIndex}
                                    href={subOption.link}
                                    className="block text-gray-700 hover:text-blue-800 mt-1 ml-8"
                                  >
                                    {subOption.name}
                                  </a>
                                ))}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </>
                  ) : link.name === 'Email & Productivity' ? (
                    <>
                      <a
                        href={link.link}
                        className="text-blue-800 hover:text-orange-300 duration-300 block text-responsive text-base font-medium"
                      >
                        {link.name}
                      </a>
                      {emailHovered && (
                        <div className="absolute left-0 mt-2 w-64 bg-white shadow-lg rounded-md">
                          {EmailOptions.map((option, index) => (
                            <a
                              key={index}
                              href={option.link}
                              className="block p-4 border-b hover:bg-gray-100 text-black font-semibold hover:text-blue-800"
                            >
                              {option.name}
                            </a>
                          ))}
                        </div>
                      )}
                    </>
                  ): link.name === 'Data Center' ? (
                    <>
                      <a
                        href={link.link}
                        className="text-blue-800 hover:text-orange-300 duration-300 block text-responsive text-base font-medium"
                      >
                        {link.name}
                      </a>
                      {dataHovered && (
                        <div className="absolute left-0 mt-2 w-64 bg-white shadow-lg rounded-md">
                          {DataOptions.map((option, index) => (
                            <a
                              key={index}
                              href={option.link}
                              className="block p-4 border-b hover:bg-gray-100 text-black font-semibold hover:text-blue-800"
                            >
                              {option.name}
                            </a>
                          ))}
                        </div>
                      )}
                    </>
                  ) : link.name === 'Server Management' ? (
                    <>
                      <a
                        href={link.link}
                        className="text-blue-800 hover:text-orange-300 duration-300 block text-responsive text-base font-medium"
                      >
                        {link.name}
                      </a>
                      {serverHovered && (
                        <div className="absolute left-0 mt-2 w-64 bg-white shadow-lg rounded-md">
                          {ServerOptions.map((option, index) => (
                            <a
                              key={index}
                              href={option.link}
                              className="block p-4 border-b hover:bg-gray-100 text-black font-semibold hover:text-blue-800"
                            >
                              {option.name}
                            </a>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <a
                      href={link.link}
                      className="text-blue-800 hover:text-orange-300 duration-300 block text-responsive text-base font-medium"
                    >
                      {link.name}
                    </a>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Nav;

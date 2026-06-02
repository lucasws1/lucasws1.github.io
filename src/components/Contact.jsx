import React from 'react';
import { FiLinkedin, FiGithub, FiInstagram, FiMail, FiArrowUpRight } from 'react-icons/fi';

const links = [
  {
    name: 'LinkedIn',
    icon: <FiLinkedin className="text-xl" />,
    url: '#',
  },
  {
    name: 'Instagram',
    icon: <FiInstagram className="text-xl" />,
    url: '#',
  },
  {
    name: 'Github',
    icon: <FiGithub className="text-xl" />,
    url: '#',
  },
  {
    name: 'E-mail',
    icon: <FiMail className="text-xl" />,
    url: '#',
  },
];

export function Contact() {
  const currentYear = new Date().getFullYear();

  return (
    <section id="contact" className="w-full max-w-4xl mx-auto px-8 pt-24 pb-12 flex flex-col items-center">
      <h2 className="text-4xl md:text-5xl font-bold font-outfit text-white mb-4 text-center">
        Contact<span className="text-primary">.</span>
      </h2>
      <p className="text-slate-400 mb-12 text-center text-sm md:text-base">
        Contact me or follow my social media
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-2xl mb-24">
        {links.map((link) => (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-4 border border-slate-800 rounded bg-[#161a20] hover:border-primary/50 hover:bg-slate-800/50 transition-all group"
          >
            <div className="flex items-center gap-4 text-slate-300 group-hover:text-white transition-colors">
              {link.icon}
              <span className="font-medium text-sm">{link.name}</span>
            </div>
            <FiArrowUpRight className="text-primary opacity-70 group-hover:opacity-100 transition-opacity" />
          </a>
        ))}
      </div>

      <footer className="text-slate-500 text-xs md:text-sm text-center">
        &copy; {currentYear} | Lucas
      </footer>
    </section>
  );
}

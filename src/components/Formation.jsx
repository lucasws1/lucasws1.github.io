import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs } from 'react-icons/fa';
import { SiFigma } from 'react-icons/si';

const courses = [
  {
    id: 1,
    title: 'UI / UX Design',
    platform: 'Origamid',
    hours: '72 hours',
    icon: <SiFigma className="text-white text-2xl" />,
    bgClass: 'bg-purple-500',
  },
  {
    id: 2,
    title: 'HTML & CSS',
    platform: 'Origamid',
    hours: '46 hours',
    icon: (
      <div className="flex -space-x-2">
        <FaHtml5 className="text-white text-2xl" />
        <FaCss3Alt className="text-white text-2xl" />
      </div>
    ),
    bgClass: 'bg-orange-500', // We can use gradient or simple color
    isDoubleIcon: true,
  },
  {
    id: 3,
    title: 'CSS Flexbox & Grid',
    platform: 'Origamid',
    hours: '12 hours',
    icon: <FaCss3Alt className="text-white text-2xl" />,
    bgClass: 'bg-blue-500',
  },
  {
    id: 4,
    title: 'JavaScript',
    platform: 'Origamid',
    hours: '74 hours',
    icon: <FaJs className="text-slate-900 text-3xl" />,
    bgClass: 'bg-yellow-400',
  },
  {
    id: 5,
    title: 'Aprenda a Programar com JS, HTML e CSS',
    platform: 'Rodrigo Branas',
    hours: '12 hours',
    icon: (
      <div className="flex -space-x-1">
        <FaHtml5 className="text-white text-xl" />
        <FaCss3Alt className="text-white text-xl" />
        <FaJs className="text-slate-900 text-xl" />
      </div>
    ),
    bgClass: 'bg-orange-500', // Approximation
    isTripleIcon: true,
  },
];

export function Formation() {
  return (
    <section id="formation" className="w-full max-w-4xl mx-auto px-8 py-24 flex flex-col items-center">
      <h2 className="text-4xl md:text-5xl font-bold font-outfit text-white mb-16 text-center">
        Formation<span className="text-primary">.</span>
      </h2>

      <div className="flex flex-col w-full">
        {courses.map((course, index) => (
          <div
            key={course.id}
            className={`flex flex-col md:flex-row items-start md:items-center justify-between py-6 ${
              index !== courses.length - 1 ? 'border-b border-slate-800' : ''
            }`}
          >
            {/* Left: Icon and Title */}
            <div className="flex items-center gap-6 mb-4 md:mb-0">
              <div
                className={`w-14 h-14 rounded flex items-center justify-center flex-shrink-0 ${course.bgClass}`}
              >
                {course.icon}
              </div>
              <h3 className="text-white font-bold text-lg">{course.title}</h3>
            </div>

            {/* Right: Platform and Hours */}
            <div className="flex items-center gap-4 text-sm text-slate-400 font-mono ml-20 md:ml-0">
              <span>{course.platform}</span>
              <span>{course.hours}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

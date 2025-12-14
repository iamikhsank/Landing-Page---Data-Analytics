import React from 'react';

interface SectionHeadingProps {
  title: string;
  description: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ title, description }) => {
  return (
    <div className="flex flex-col md:flex-row gap-8 items-start md:items-center mb-16">
      <h2 className="text-3xl md:text-4xl font-bold bg-brand-blue text-white px-2 rounded-md border-2 border-transparent inline-block">
        {title}
      </h2>
      <p className="max-w-xl text-gray-600 text-lg">
        {description}
      </p>
    </div>
  );
};

export default SectionHeading;
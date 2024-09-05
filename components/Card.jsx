import React from 'react';
import Link from 'next/link';

const ResponsiveCard = ({ content, href }) => {
  return (
    <Link href={href} legacyBehavior>
      <div
        className="cursor-pointer bg-gradient-to-r from-[#191920] to-[#15151b] h-24 w-full sm:w-72 md:h-60 p-6 rounded-lg shadow-lg border border-[#23232c] mx-auto">
        <p className="text-white">
          {content}
        </p>
      </div>
    </Link>
  );
};

export default ResponsiveCard;
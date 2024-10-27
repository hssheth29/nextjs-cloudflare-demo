// src/app/about/page.tsx

import Link from 'next/link';

const About = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8">
      <h1 className="text-2xl font-bold">About Us</h1>
      <p className="mt-4">This is the about page of our application.</p>
      <Link href="/">Go back to Home</Link>
    </div>
  );
};

export default About;

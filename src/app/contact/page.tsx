// src/app/contact/page.tsx

import Link from 'next/link';

const Contact = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8">
      <h1 className="text-2xl font-bold">Contact Us</h1>
      <p className="mt-4">This is the contact page of our application.</p>
      <Link href="/">Go back to Home</Link>
    </div>
  );
};

export default Contact;

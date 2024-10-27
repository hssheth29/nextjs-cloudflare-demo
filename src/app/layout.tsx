// src/app/layout.tsx

export const metadata = {
    title: 'My Application',
    description: 'A simple Next.js application',
  };
  
  const RootLayout = ({ children }: { children: React.ReactNode }) => {
    return (
      <html lang="en">
        <body>{children}</body>
      </html>
    );
  };
  
  export default RootLayout;
  
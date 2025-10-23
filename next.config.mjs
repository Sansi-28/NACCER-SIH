/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/demo',
        destination: 'https://youtu.be/9n-5QFXCZYM?si=IaNlMVM3WKSyRYwC', // <-- PASTE YOUR YOUTUBE URL HERE
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
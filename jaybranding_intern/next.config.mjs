/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [{ //Privacy access
        protocol: 'https',
        hostname: 'ogawaworld.net.au'
    }]
    }
};

export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [{ //Privacy access
            protocol: 'https',
            hostname: 'ogawaworld.net.au'
        },
        {
            protocol: 'https',
            hostname: 'dangkywebvoibocongthuong.com'
        }
        ]
    }
};

export default nextConfig;

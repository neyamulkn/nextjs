/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'phpstack-1312572-4916907.cloudwaysapps.com',
                pathname: '**',
            },
        ]
    },
};

export default nextConfig;

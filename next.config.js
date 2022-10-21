/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: [
            'klike.net',
            'lh3.googleusercontent.com'
        ],
    },
};

module.exports = nextConfig;

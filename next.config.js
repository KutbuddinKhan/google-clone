/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {

    },
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "www.google.co.in"
            }
        ]
    }
}

module.exports = nextConfig

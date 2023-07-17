/** @type {import('next').NextConfig} */
const nextConfig = {
    env:{
        baseUrl:process.env.baseUrl
    },
    experimental: {
        serverActions: true,
      },
}

module.exports = nextConfig

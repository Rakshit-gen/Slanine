/** @type {import('next').NextConfig} */
const nextConfig = {
    env:{
      UPSTASH_REDIS_REST_URL: process.env.UPSTASH_REDIS_REST_URL,
      UPSTASH_REDIS_REST_TOKEN: process.env.UPSTASH_REDIS_REST_TOKEN,

    },
    images: {
        domains: ['cdn.sanity.io', 'pbs.twimg.com'],
      },
};

export default nextConfig;

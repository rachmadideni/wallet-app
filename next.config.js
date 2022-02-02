/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  // https://github.com/ben-rogerson/twin.macro/discussions/219#discussioncomment-1281706
  webpack: (config) => {
    // Unset client-side javascript that only works server-side
    config.resolve.fallback = { fs: false, module: false, path: false };
    return config;
  },
};

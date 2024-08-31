/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["slgelblgyjvoqznihbbi.supabase.co", "images.pexels.com", "cdn.sanity.io"], // Add your Supabase storage domain here
  },
};

export default nextConfig;

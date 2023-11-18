/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: [
        "oaidalleapiprodscus.blob.core.windows.net",
        "cdn.openai.com"
      ]
  },
  typescript: {
    ignoreBuildErrors:true,
  },
  eslint: {
    ignoreDuringBuilds: true,
    
  },
ignoreBuildErrors:true,
  

  }
  
  module.exports = nextConfig

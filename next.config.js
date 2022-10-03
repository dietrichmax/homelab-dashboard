/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  /*redirects: {
    source: "/fernerkundung-satellitenbilder-downloaden",
    destination: "/articles/satellite-imagery-download-high-resolution",
    permanent: true,
  }*/
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.jsdelivr.net"
      },
      {
        protocol: "https",
        hostname: "api.mxd.codes"
      }
    ]
  }
}

module.exports = nextConfig

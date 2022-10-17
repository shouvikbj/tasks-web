/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    API: "https://tasksweb.pythonanywhere.com"
  }
}

module.exports = nextConfig

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    API: "http://localhost:5000",
    API2: "https://tasksweb.pythonanywhere.com"
  }
}

module.exports = nextConfig

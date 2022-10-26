/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    API2: "http://localhost:5000",
    API: "https://tasksweb.pythonanywhere.com"
  }
}

module.exports = nextConfig

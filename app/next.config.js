/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	env: {
		API_URL: "http://localhost:1337/api",
	},
	trailingSlash: true,
	images: {
		domains: ["localhost:1337"],
	},
}

module.exports = nextConfig

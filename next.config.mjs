/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        // formats: ['*'],
        remotePatterns: [
            {
                hostname: 'res.cloudinary.com',
            },
            {
                hostname: 'images.lumacdn.com',
            },
            {
                hostname: 'indonesiabaik.id',
            },
            {
                hostname: '*',
            },
        ],
    },
    webpack: (config, options) => {
        config.module.rules.push({
            test: /\.(mp3|wav|m4a)$/,
            use: {
                loader: 'file-loader',
                options: {
                    publicPath: '/_next/static/audio/',
                    outputPath: 'static/audio/',
                    name: '[name].[ext]',
                },
            },
        })
        return config
    },
}

export default nextConfig

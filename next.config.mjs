/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // Otimizações de performance para scripts
  compress: true,
  poweredByHeader: false,
  experimental: {
    optimizePackageImports: [
      '@radix-ui/react-badge',
      '@radix-ui/react-button', 
      '@radix-ui/react-card',
      '@radix-ui/react-input',
      '@radix-ui/react-label',
      '@radix-ui/react-select',
      '@radix-ui/react-textarea',
      'lucide-react'
    ],
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  webpack: (config, { isServer }) => {
    // Tree shaking otimizado
    config.optimization.usedExports = true;
    config.optimization.sideEffects = false;
    
    // Configuração simples para MENOS requisições HTTP
    if (!isServer) {
      config.optimization.splitChunks = {
        chunks: 'all',
        cacheGroups: {
          // UM único chunk vendor para todas as dependências
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all',
            enforce: true,
          },
          // Desabilitar outros cache groups
          default: false,
          defaultVendors: false,
        },
      };
      
      // Otimização para scripts defer/async
      config.optimization.runtimeChunk = 'single';
      config.optimization.moduleIds = 'deterministic';
      config.optimization.chunkIds = 'deterministic';
    }
    
    return config;
  },
  // Headers de cache e compressão
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
        ],
      },
      {
        source: '/(.*)\\.(js|css|woff|woff2|ttf|otf|eot|ico|png|jpg|jpeg|gif|webp|svg)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
}

export default nextConfig

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // GitHub Pages não suporta otimização de imagem por default
  },
  trailingSlash: true, // importante para páginas exportadas funcionarem bem no GitHub Pages
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;

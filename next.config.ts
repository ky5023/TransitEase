import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",             // 静的出力
  basePath: "/Motive",          // リポジトリ名に合わせる
  assetPrefix: "/Motive/",      // 静的ファイルの参照も合わせる
  images: { unoptimized: true } // GitHub Pages は画像最適化不可
};

export default nextConfig;
import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/data";

export const alt = siteConfig.title;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div tw="flex h-full w-full flex-col items-center justify-center bg-[#0b0424]">
        <div tw="flex text-center text-[84px] font-bold text-white">
          Explore The Infinite Universe
        </div>
        <div tw="mt-8 flex max-w-[820px] text-center text-[30px] text-[#94a3b8]">
          Galaxies, stars and cosmic phenomena, rendered live in WebGL
        </div>
      </div>
    ),
    { ...size }
  );
}

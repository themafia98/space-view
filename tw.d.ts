// satori (next/og) styles ImageResponse markup through the tw prop
declare module "react" {
  interface HTMLAttributes<T> {
    tw?: string;
  }
}

export {};

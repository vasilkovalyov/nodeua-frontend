import localFont from "next/font/local";

export const robotoFont = localFont({
  src: [
    {
      path: "../public/fonts/Roboto-Regular.woff2",
      weight: "400",
      style: "normal"
    },
    {
      path: "../public/fonts/Roboto-Medium.woff2",
      weight: "500",
      style: "normal"
    },
    {
      path: "../public/fonts/Roboto-SemiBold.woff2",
      weight: "600",
      style: "normal"
    },
    {
      path: "../public/fonts/Roboto-Bold.woff2",
      weight: "700",
      style: "normal"
    }
  ],
  display: "swap",
  preload: true
});

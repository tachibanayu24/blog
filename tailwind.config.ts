import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          '"Inter"',
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: "inherit",
          },
        },
      },
      boxShadow: {
        "inner-diagonal-md":
          "inset 2px 2px 5px rgba(0, 0, 0, 0.6), inset -2px -2px 5px rgba(255, 255, 255, 0.1)",
        "inner-diagonal-lg":
          "inset 4px 4px 10px rgba(0, 0, 0, 0.6), inset -4px -4px 10px rgba(255, 255, 255, 0.1)",
      },
      rounded: {
        "2xl": "1rem",
        "3xl": "1.5rem",
        "4xl": "2rem",
      },
      zIndex: {
        // mainコンテンツ
        main: "0",
        // floating要素
        floating: "1000",
        // HeaderやDrawerなどの前面要素
        front: "1200",
        // dialogなどのoverlay
        overlay: "1300",
        // dialogなど
        dialog: "1400",
        // toastなど
        toast: "1500",
        // popup要素
        popup: "1600",
      },
      spacing: {
        "header-hight": "2.75rem",
        "sidebar-width": "16rem",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
} satisfies Config;

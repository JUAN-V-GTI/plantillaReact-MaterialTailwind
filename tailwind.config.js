// tailwind.config.js
import withMT from "@material-tailwind/react/utils/withMT";

export default withMT({
 content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        light: {
          primary: "#00629D",
          onPrimary: "#FFFFFF",
          primaryContainer: "#CFE5FF",
          onPrimaryContainer: "#001D34",
          secondary: "#4E616D",
          onSecondary: "#FFFFFF",
          background: "#FBFCFF",
          surface: "#F8F9FD",
          onSurface: "#1A1C1E",
          surfaceVariant: "#DDE3EA",
          onSurfaceVariant: "#41484D",
          outline: "#71787E",
          card: "#FFFFFF",
          hover: "#E0F2FE",
          button: {
            base: "#00629D",
            hover: "#004A78",
            text: "#FFFFFF",
            outline: "#71787E",
          },
        },
        dark: {
          primary: "#93CCFF",
          onPrimary: "#003354",
          primaryContainer: "#004A78",
          onPrimaryContainer: "#CFE5FF",
          secondary: "#B6C8D9",
          onSecondary: "#24333E",
          background: "#1A1C1E",
          surface: "#121316",
          onSurface: "#C4C7CA",
          surfaceVariant: "#41484D",
          onSurfaceVariant: "#C0C8CF",
          outline: "#8A9299",
          card: "#1E293B",
          hover: "#334155",
          button: {
            base: "#93CCFF",
            hover: "#004A78",
            text: "#003354",
            outline: "#8A9299",
          },
        },
      },
    },
  },
  plugins: [],
});
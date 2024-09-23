/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        fira_code: ["Fira Code", "monospace"],
      },

      colors: {
        scissors: {
          DEFAULT: "hsl(39, 89%, 49%)",
          light: "hsl(40, 84%, 53%)",
        },

        paper: {
          DEFAULT: "hsl(230, 89%, 62%)",
          light: "hsl(230, 89%, 65%)",
        },

        rock: {
          DEFAULT: "hsl(349, 71%, 52%)",
          light: "hsl(349, 70%, 56%)",
        },

        lizard: {
          DEFAULT: "hsl(261, 73%, 60%)",
          light: "hsl(261, 72%, 63%)",
        },

        cyan: {
          DEFAULT: "hsl(189, 59%, 53%)",
          light: "hsl(189, 58%, 57%)",
        },

        darkText: "hsl(229, 25%, 31%)",
        scoreText: "hsl(229, 64%, 46%)",
        headerOutline: "hsl(217, 16%, 45%)",

        radialBackground: {
          DEFAULT: "hsl(214, 47%, 23%)",
          light: "hsl(237, 49%, 15%)",
        },
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          background: "#FAFAFB",
          lightblue: "#97BEF4",
          green: "#219653",
          blue: "#2F80ED",
          text: "#4F4F4F",
          gray: {
            2: "#4F4F4F",
            3: "#828282",
            4: "#BDBDBD",
            5: "#E0E0E0",
            blue: "#F6F8FB",
            6: "#F2F2F2",
          },
        },
      },
      fontSize: {
        xxs: "10px",
        xxxs: "8px",
      },
    },
  },
  plugins: [],
};

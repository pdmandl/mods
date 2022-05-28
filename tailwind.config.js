module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        inconsolata: ['"Inconsolata"', "monospace"],
        source: ['"Source Code Pro"', "monospace"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("tailwind-scrollbar-hide"), require("tailwind-scrollbar")],
};

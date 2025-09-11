// tailwind.config.js
module.exports = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./node_modules/@shadcn/ui/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "#f9fafb",     // Example light background color
        foreground: "#111827",     // Example foreground color
      },
    },
  },
  plugins: [],
};

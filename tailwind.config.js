module.exports = {
  // mode: 'jit', // Uncomment this line to enable Just-In-Time Mode
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      // Extend the default Tailwind styles here
      // For example, adding custom colors:
      colors: {
        'custom-blue': '#243c5a',
        // Define more custom colors or other theme values here
      },
      // Example to extend spacing
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      // You can also extend other theme values like fonts, breakpoints, borderWidths, etc.
    },
  },
  variants: {
    // Define variants here. For example:
    extend: {
      borderColor: ['focus-visible'],
      opacity: ['disabled'],
    },
  },
  plugins: [
    // Add any Tailwind plugins you wish to use here
    // require('@tailwindcss/forms'),
    // require('@tailwindcss/typography'),
  ],
};

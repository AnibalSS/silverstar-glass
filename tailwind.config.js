/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1F7FD9",
        accent: "#4FC3F7",
        bg: {
          light: "#F7FBFF",
          base: "#FFFFFF",
          card: "#F5F7FA",
        },
        text: {
          primary: "#22252A",
          muted: "#6F7782",
        },
        border: {
          light: "#E3E8EF",
        },
      },
      fontFamily: {
        display: ["Poppins", "Inter", "system-ui", "sans-serif"],
        body: ["Inter", "Source Sans Pro", "system-ui", "sans-serif"],
      },
      lineHeight: {
        body: "1.6",
      },
      borderRadius: {
        card: "12px",
        lg: "16px",
      },
      boxShadow: {
        soft: "0 4px 12px rgba(0, 0, 0, 0.08)",
        card: "0 2px 8px rgba(0, 0, 0, 0.06)",
        lift: "0 12px 24px rgba(0, 0, 0, 0.12)",
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out",
        "slide-up": "slideUp 0.6s ease-out",
        "scale-in": "scaleIn 0.6s ease-out",
      },
      keyframes: {
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        slideUp: {
          from: { opacity: "0", transform: "translateY(20px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        scaleIn: {
          from: { opacity: "0", transform: "scale(0.95)" },
          to: { opacity: "1", transform: "scale(1)" },
        },
      },
    },
  },
  plugins: [],
};

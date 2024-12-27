/** @type {import('tailwindcss').Config} */
module.exports = {
  darkmode: 'class',
  content: [
    "./src/**/*.{html,js,jsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', 'Verdana', 'sans-serif'],
        serif: ['"Baskerville"', 'Roboto Slab', 'Merriweather'],
      }, fontWeight: {
        light: 300,
        regular: 400,
        bold: 900,
      },
      fontSize: {
        tiny: '0.75rem',
        base: '1rem',
        xl: '1.25rem',
      },
      colors: {
        light: {
          primary: "#1D4ED8",      // Primary button color (blue)
          secondary: "#48BB78",    // Grass green for secondary button
          danger: "#EF4444",       // Danger button color (red)
          success: "#10B981",      // Success button color (green)
          warning: "#F59E0B",      // Warning button color (yellow)
        }, 
        textColor: {
          primaryText: "#FFFFFF", // Text color for primary button
          secondaryText: "#FFFFFF", // Text color for secondary button
          dangerText: "#FFFFFF",   // Text color for danger button
          successText: "#FFFFFF",  // Text color for success button
          warningText: "#FFFFFF",  // Text color for warning button
        }, 
        fontWeight: {
          bold: '700', // Ensure bold font weight is available
        },
        borderRadius: {
          'btn': '8px',
        },
        boxShadow: {
          'btn': '0 4px 6px rgba(0, 0, 0, 0.1)',
        },
        dark: {
          primary: '#1e3a8a',
          background: '#1a202c',
          text: '#f9fafb',
        }
      }
    }
  },
  plugins: [],
}


import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        pt: ["var(--font-pt-sans)"],
        // playfair: ["var(--font-playfair-display)"],
        // moda: ["var(--font-bodoni-moda)"],
        poiret: ["var(--font-poiret-one)"],
        raj: ["var(--font-rajdhani)"],
      },
    },
  },
  plugins: [],
}
export default config

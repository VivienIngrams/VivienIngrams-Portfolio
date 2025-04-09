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
        josefin: ["var(--font-josefin)"],
        poiret: ["var(--font-poiret-one)"],
        raj: ["var(--font-rajdhani)"],
      },
    },
  },
  plugins: [],
}
export default config

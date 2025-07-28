/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ["class"],
	content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
	theme: {
	  extend: {
		borderRadius: {
		  lg: "var(--radius)",
		  md: "calc(var(--radius) - 2px)",
		  sm: "calc(var(--radius) - 4px)",
		},
		colors: {
		  background: "hsl(var(--background))",
		  foreground: "hsl(var(--foreground))",
		  card: {
			DEFAULT: "hsl(var(--card))",
			foreground: "hsl(var(--card-foreground))",
		  },
		  popover: {
			DEFAULT: "hsl(var(--popover))",
			foreground: "hsl(var(--popover-foreground))",
		  },
		  primary: {
			DEFAULT: "hsl(var(--primary))", // #204c79
			foreground: "hsl(var(--primary-foreground))", //#fafafa
		  },
		  secondary: {
			DEFAULT: "hsl(var(--secondary))", // #d6e6f5
			foreground: "hsl(var(--secondary-foreground))", // #204c79
		  },
		  line: {
			DEFAULT: "hsl(var(--text-primary))", // #040B0C
			foreground: "hsl(var(--text-primary))", // #040B0C
		  },
		  muted: {
			DEFAULT: "hsl(var(--muted))",
			foreground: "hsl(var(--muted-foreground))",
		  },
		  accent: {
			DEFAULT: "hsl(var(--accent))",
			foreground: "hsl(var(--accent-foreground))",
		  },
		  destructive: {
			DEFAULT: "hsl(var(--destructive))",
			foreground: "hsl(var(--destructive-foreground))",
		  },
		  border: "hsl(var(--border))",
		  input: "hsl(var(--input))",
		  ring: "hsl(var(--ring))",
		  chart: {
			1: "hsl(var(--chart-1))",
			2: "hsl(var(--chart-2))",
			3: "hsl(var(--chart-3))",
			4: "hsl(var(--chart-4))",
			5: "hsl(var(--chart-5))",
		  },
		},
		keyframes: {
		  "caret-blink": {
			"0%,70%,100%": { opacity: "1" },
			"20%,50%": { opacity: "0" },
		  },
		},
		animation: {
		  loader: "spin 1s linear infinite",
		},
	  },
	},
	plugins: [require("tailwindcss-animate")],
  };
  
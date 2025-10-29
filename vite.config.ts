import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(() => ({
  server: {
    host: "::",
    port: 8080,
    headers: {
      'X-Frame-Options': 'DENY',
      'X-Content-Type-Options': 'nosniff',
      'X-XSS-Protection': '1; mode=block',
      'Referrer-Policy': 'strict-origin-when-cross-origin',
      'Permissions-Policy': 'geolocation=(), microphone=(), camera=()',
    },
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
      external: (id) => {
        // Block any external dependencies that might contain tracking
        return id.includes('lovable') || 
               id.includes('analytics') || 
               id.includes('tracker') ||
               id.includes('widget');
      },
    },
    sourcemap: false, // Disable sourcemaps for security
  },
  define: {
    __DISABLE_TRACKING__: true,
    __PRODUCTION__: false,
  },
}));

import { defineConfig } from "vite";

console.log(process.env.NODE_ENV);
console.log(process.env.NODE_ENV === 'production');

export default defineConfig({
  base: "/ololo.me/",
});

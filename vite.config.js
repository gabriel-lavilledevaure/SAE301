import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import { resolve } from "path";

export default defineConfig({
  plugins: [tailwindcss()],
  base: "SAE301", 
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        account: resolve(__dirname, "pages/account.html"),
        article: resolve(__dirname, "pages/article.html"),
        createaccount: resolve(__dirname, "pages/createaccount.html"),
        panier: resolve(__dirname, "pages/panier.html"),
      },
    },
  },
});
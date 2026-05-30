import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath, URL } from "node:url";
import { handlePayMongoDevCheckout } from "./server/paymongo/devMiddleware";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  process.env.PAYMONGO_SECRET_KEY ||= env.PAYMONGO_SECRET_KEY;
  process.env.NEXT_PUBLIC_SITE_URL ||= env.NEXT_PUBLIC_SITE_URL;

  return {
    plugins: [
      react(),
      {
        name: "wagtrail-paymongo-dev-api",
        configureServer(server) {
          server.middlewares.use("/api/checkout/paymongo", (req, res) => {
            void handlePayMongoDevCheckout(req, res);
          });
        }
      }
    ],
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
        "@assets": fileURLToPath(new URL("./assets", import.meta.url))
      }
    }
  };
});

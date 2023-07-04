import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  build: {
    //打包文件目录
    outDir: "dist",
    rollupOptions: {
      external: ["vue"],
      input: ["./src/index.ts"],
      output: {
        globals: {
          vue: "Vue",
        },
      },
    },
    lib: {
      entry: "./src/index.ts",
      name: "yue7872",
      fileName: 'index',
    },
  },
  plugins: [vue()],
});

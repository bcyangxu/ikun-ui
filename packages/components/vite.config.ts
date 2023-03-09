import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
export default defineConfig({
    build:{
        //打包后的目录
        outDir: "es",
        //压缩
        minify: false,
        rollupOptions:{
            output:{
                globals:{
                    vue:"Vue",
                },
                dir:"dist",
            },
        },
        lib: {
            entry: "./index.ts",
            name: "xu-ui",
            fileName: "xu-ui",
            formats: ["es","umd","cjs"],
        },
    },
    plugins: [vue()],
});
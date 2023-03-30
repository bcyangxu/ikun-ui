import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import dts from "vite-plugin-dts";
import DefineOptions from "unplugin-vue-define-options/vite";
export default defineConfig({
    build:{
        //打包后的目录
        outDir: "es",
        //压缩
        //minify: false,
        rollupOptions:{
            //忽略打包vue文件
            external: ["vue",/\.less/],
            input: ["index.ts"],
             output:[
              {
                format: "es",
                entryFileNames: "[name].mjs",
                preserveModules: true,
                exports: "named",
                dir: "../xu-ui/es",
              },
              {
                //打包格式
                format: "cjs",
                //打包后文件名
                entryFileNames: "[name].js",
                //让打包目录和我们目录对应
                preserveModules: true,
                exports: "named",
                //配置打包根目录
                dir: "../xu-ui/lib",
              },
            ],
        },
        lib: {
            entry: "./index.ts",
        },
    },
    plugins: [
        vue(),
        dts({
            entryRoot: "./src",
            outputDir: ["../xu-ui/es/src","../xu-ui/lib/src"],
            tsConfigFilePath: "../../tsconfig.json",
        }),
        DefineOptions(),
        {
            name:"style",
            generateBundle(config,bundle) {
                const keys = Object.keys(bundle);

                for(const key of keys) {
                    const bundler: any = bundle[key as any];

                    this.emitFile({
                        type:"asset",
                        fileName:key,
                        source: bundler.code.replace(/\.less/g,".css"),
                    });
                }
            },
        },
    ],
});
import { defineConfig } from "vite";
import path, { resolve } from "path";

export default defineConfig({
  // 指定預設的根目錄
  base: "./",
  // 判別現在是開發環境或打包後部署上去的遠端環境，遠端名稱要跟你的Github專案一樣
  publicPath: process.env.NODE_ENV === "production" ? "/rainline/" : "./",
  build: {
    // 這裡用的是底層相依套件Rollup，設定入口頁面和打包出來的各個資源目錄要長什麼樣子
    // 和Vue、React等不同，這份教學展示的是靜態網頁，所以可以設定多個入口HTML檔彼此連結
    rollupOptions: {
      input: {
        // 首頁須使用main作為命名，指向index.html，其他依照檔名即可
        main: resolve(__dirname, "index.html"),
        rainline: resolve(__dirname, "rainline.html"),
        rainpit: resolve(__dirname, "rainpit.html"),
        use: resolve(__dirname, "use.html"),
        surface: resolve(__dirname, "surface.html"),
        blind: resolve(__dirname, "blind.html"),
        roof: resolve(__dirname, "roof.html"),
        downloads: resolve(__dirname, "downloads.html"),
        performance: resolve(__dirname, "performance.html"),
        rl_other: resolve(__dirname, "rainline/rl-other.html"),
        rl_100: resolve(__dirname, "rainline/rl100.html"),
        rl_150: resolve(__dirname, "rainline/rl150.html"),
        drainage: resolve(__dirname, "rainpit/drainage.html"),
        rp_other: resolve(__dirname, "rainpit/rp-other.html"),
        rp_2535h: resolve(__dirname, "rainpit/rp2535h.html"),
        rp_4671: resolve(__dirname, "rainpit/rp4671.html"),
      },
      output: {
        /* 
         [name]是對應的檔名，hash則是打包後會加上類似亂碼的字元
         用以防止檔案被Server端Cache住，造成畫面看起來沒更新
        */
        chunkFileNames: "js/[name].[hash].js",
        entryFileNames: "js/[name].[hash].js",
        /*
          對應的副檔名在打包後會自動幫你歸類到所屬的目錄下
        */
        assetFileNames: (info) => {
          let type = info.name.split(".")[1];
          if (/png|jpe?g|svg|gif|tiff|bmp|ico|webp/i.test(type)) {
            type = "img";
          } else if (/ttf|eot|woff|woff2/i.test(type)) {
            type = "fonts"
          } else if (/mp4|webm|ogg/i.test(type)) {
            type = "video"
          } else if (/mp3|wav/i.test(type)) {
            type = "sound"
          }
          return `${type}/[name]-[hash].[ext]`;
        },
      },
    },
    cssCodeSplit: false,
  },
  cssPreprocessOptions: {
    // 如果要使用SASS全域變數就在這裡設定路徑
    scss: {
      // additionalData: '@import "./styles/variable.scss";',
    },
  },
  css: {
    // 官方列為實驗性功能，可以找出是由哪個來源建構的css
    devSourceMap: true,
  },
});

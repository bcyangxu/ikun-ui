import DefaultTheme from "vitepress/theme";
import xuui from "@xu-ui/components";
export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.use(xuui);
  }
};

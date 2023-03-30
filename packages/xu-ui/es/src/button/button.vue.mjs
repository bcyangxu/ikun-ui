import { defineComponent as e, computed as r, openBlock as s, createElementBlock as l, normalizeClass as p, unref as c, renderSlot as a } from "vue";
import "./style/index.css";
const m = e({ name: "xu-button" }), b = /* @__PURE__ */ e({
  ...m,
  props: {
    type: null
  },
  setup(o) {
    const t = o, n = r(() => ({
      [`xu-button--${t.type}`]: t.type
    }));
    return (u, f) => (s(), l("button", {
      class: p(["xu-button", c(n)])
    }, [
      a(u.$slots, "default")
    ], 2));
  }
});
export {
  b as default
};

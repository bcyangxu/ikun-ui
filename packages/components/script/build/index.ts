import delPath from "../utils/delpath";
import { series,parallel,src,dest } from "gulp";
import { componentPath, pkgPath } from "../utils/paths";
import less from "gulp-less";
import autoPrefixer from "gulp-autoprefixer";
import run from "../utils/run";
// 删除xu-ui
export const removeDist = () => {
    return delPath(`${pkgPath}/xu-ui`)

};

// 打包样式
export const bulidStyle = () => {
    return src(`${componentPath}/src/**/style/**.less`)
    .pipe(less())
    .pipe(autoPrefixer())
    .pipe(dest(`${pkgPath}/xu-ui/lib/src`))
    .pipe(dest(`${pkgPath}/xu-ui/es/src`))

};

// 打包组件
export const buildComponent =async () => {
    run("pnpm run build",componentPath);

};

export default series(
    async () => removeDist(),
    parallel(
        async () => buildComponent(),
        async () => bulidStyle()
    )
);
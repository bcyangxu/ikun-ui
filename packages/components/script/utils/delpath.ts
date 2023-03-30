import fs from 'fs';
import { resolve  } from 'path';
import { pkgPath } from './paths';

// 保留的文件
const stayFile = ['package.json','README.md'];

const delPath = async (path:string) => {
    let files: string[] = [];

    if(fs.existsSync(path)) {
        files = fs.readdirSync(path);

        files.forEach(async (file) => {
            let curPath = resolve(path,file);

            if(fs.statSync(curPath).isDirectory()){
                // recure
                if(file!= 'node_modules') await delPath(curPath);

            } else {
                if(!stayFile.includes(curPath)){
                fs.unlinkSync(curPath);
                 }
            }
        });
        if(path != `${pkgPath}/xu-ui`) fs.rmdirSync(path);
    }
}

export default delPath;
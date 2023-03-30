import { spawn } from "child_process";
import { resolve } from "path";

export default async(command: string,path: string) => {
    // cmd表示命令,args 表示参数
    const [cmd,...args] = command.split(" ");
    return new Promise((resolve,reject) => {
        const app = spawn(cmd,args,{
            cwd: path,
            stdio:"inherit",
            shell:true
        });
        // 执行完毕关闭并resolve
        app.on("close",resolve);
    })
}

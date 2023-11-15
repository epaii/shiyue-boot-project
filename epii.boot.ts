import { createServer, App } from "shiyue";
import { onBootFinish } from "epii-boot";
import { getConfig, readConfig } from "epii-read-config";
import { _doBootFunctions } from "./src";
import fs from "fs";
import { ServerOptions } from "https";

export default function (data: any) {

    let app: App = createServer().port(readConfig().port ?? 8080);
    data.app = app;
    onBootFinish(async () => {
        await _doBootFunctions(app);
        if(getConfig("wss",0)-1===0){
            let options:ServerOptions = {
                key: fs.readFileSync( getConfig("wss.key")),
                cert: fs.readFileSync(getConfig("wss.cert"))
            };
            app.listen(null,options);
        }else{
            app.listen();
        }
        
    });

}
import { createServer, App } from "shiyue";
import { onBootFinish } from "epii-boot";
import { readConfig } from "epii-read-config";
import { _doBootFunctions } from "./src";

export default function (data: any) {

    let app: App = createServer().port(readConfig().port ?? 8080);
    data.app = app;
    onBootFinish(async () => {
        await _doBootFunctions(app);
        app.listen();
    });

}
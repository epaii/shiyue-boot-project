"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const shiyue_1 = require("shiyue");
const epii_boot_1 = require("epii-boot");
const epii_read_config_1 = require("epii-read-config");
const src_1 = require("./src");
const fs_1 = __importDefault(require("fs"));
function default_1(data) {
    var _a;
    let app = (0, shiyue_1.createServer)().port((_a = (0, epii_read_config_1.readConfig)().port) !== null && _a !== void 0 ? _a : 8080);
    data.app = app;
    (0, epii_boot_1.onBootFinish)(() => __awaiter(this, void 0, void 0, function* () {
        yield (0, src_1._doBootFunctions)(app);
        if ((0, epii_read_config_1.getConfig)("wss", 0) - 1 === 0) {
            let options = {
                key: fs_1.default.readFileSync((0, epii_read_config_1.getConfig)("wss.key")),
                cert: fs_1.default.readFileSync((0, epii_read_config_1.getConfig)("wss.cert"))
            };
            app.listen(null, options);
        }
        else {
            app.listen();
        }
    }));
}
exports.default = default_1;

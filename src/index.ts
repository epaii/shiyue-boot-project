import { App, ContextHandler, Controller, IController, InitHandler, ResponseAdvice } from "shiyue";



type bootFunction = (app: App) => any;
let bootFunctions: bootFunction[] = [];

export function Use(handler: ContextHandler) {
    bootFunctions.push(function (app) {
        app.use(handler);
    });
}

export function Init(handler: InitHandler) {
    bootFunctions.push(function (app) {
        app.init(handler);
    });
}

export function Module(route: string, module: String | Controller | Function | IController) {
    bootFunctions.push(function (app) {
        app.module(route, module);
    });
}

export function Route(route: string, handler: ContextHandler) {
    bootFunctions.push(function (app) {
        app.route(route, handler);
    });
}

export function ResponseAdvice(handler: ResponseAdvice) {
    bootFunctions.push(function (app) {
        app.responseAdvice(handler);
    });
}

export function Port(port: number) {
    bootFunctions.push(function (app) {
        app.port(port);
    });
}

export async function _doBootFunctions(app: App) {
    for (let index = 0; index < bootFunctions.length; index++) {
        const element = bootFunctions[index];
        await element(app);
    }
}
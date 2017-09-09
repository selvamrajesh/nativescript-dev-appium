export declare var should: any;
import { ElementHelper } from "./element-helper";
import { SearchOptions } from "./search-options";
import { UIElement } from "./ui-element";
import { INsCapabilities } from "./ins-capabilities";
export declare class AppiumDriver {
    private _driver;
    private webio;
    private _driverConfig;
    private _args;
    private static defaultWaitTime;
    private static pngFileExt;
    private static partialUrl;
    private _elementHelper;
    private _storage;
    private _logPath;
    private _isAlive;
    private constructor();
    readonly capabilities: any;
    readonly platformName: any;
    readonly platformVesrion: any;
    readonly elementHelper: ElementHelper;
    readonly isAlive: boolean;
    readonly driver: any;
    wdio(): Promise<any>;
    click(args: any): Promise<any>;
    navBack(): Promise<any>;
    findElementByXPath(xPath: string, waitForElement?: number): Promise<UIElement>;
    findElementsByXPath(xPath: string, waitForElement?: number): Promise<UIElement[]>;
    findElementByText(text: string, match?: SearchOptions, waitForElement?: number): Promise<UIElement>;
    findElementsByText(text: string, match?: SearchOptions, waitForElement?: number): Promise<UIElement[]>;
    findElementsByClassName(className: string, waitForElement?: number): Promise<UIElement[]>;
    findElementByAccessibilityId(id: any, waitForElement?: number): Promise<UIElement>;
    findElementsByAccessibilityId(id: string, waitForElement?: number): Promise<UIElement[]>;
    source(): Promise<any>;
    sessionId(): Promise<any>;
    compareScreen(imageName: string, timeOutSeconds: number, tollerance: number): Promise<boolean>;
    takeScreenshot(fileName: string): Promise<string>;
    logScreenshoot(fileName: string): Promise<string>;
    compareImages(expected: string, actual: string, output: string): Promise<boolean>;
    static createAppiumDriver(port: number, args: INsCapabilities): Promise<AppiumDriver>;
    inint(): Promise<void>;
    quit(): Promise<void>;
    private convertArrayToUIElements(array, searchM, args);
    private static configureLogging(driver, verbose);
}

export interface settings {
    debug: boolean;
    version: string;
    evalOnCompile: boolean;

    outputFolder: string;
    outputFileName: string;
    inputFolder: string;
    inputFile: string;
    debugFile: boolean;
    debugFileName: string;
    debugFileLocation: string;
    obuscateOutput: boolean;

    pluginsFolder: string;
    pluginsSettings: string;
    packagesFolder: string;

    dev: boolean;

    browserify: boolean;
}

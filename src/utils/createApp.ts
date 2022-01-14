import { existsSync, mkdirSync, writeFileSync } from 'fs';
import { join } from 'path';

function createFile(path: string, content: string) {
    writeFileSync(path, content);
}

function createFolder(path: string) {
    if (!existsSync(path)) {
        mkdirSync(path);
    }
}

export function createApp() {
    createFolder(join(__dirname, '../../../../src'));
    createFolder(join(__dirname, '../../../../dist'));
    createFolder(join(__dirname, '../../../../src/components'));
    createFolder(join(__dirname, '../../../../src/pages'));
    createFolder(join(__dirname, '../../../../src/public'));
    createFolder(join(__dirname, '../../../../src/public/imports'));

    createFile(
        join(__dirname, '../../../../src/public/index.html'),
        `<!-- 
    This project was made using .Harvey, a framework and language created and developer by Harvey Randall
    https://www.github.com/Gerald12344
-->

<!DOCTYPE html>
<html lang="en">

<head id="head">
    <!-- this line below tells the packer where to put the bundle files -->
    <!-- {{%Bundle%}} -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width">
    <meta name="description" content="hello">
    <link href="%public%/index.css" rel="stylesheet" type="text/css" />
    <title>.Harvey Web App </title>
</head>

<body id="body">
</body>
<script defer src="%build%"></script>

</html>`,
    );
    createFile(
        join(__dirname, '../../../../src/public/imports/index.css'),
        `@import url("https://fonts.googleapis.com/css2?family=Poppins&display=swap");
    .nav-button{
        background-color: #4CAF50; /* Green */
        border: none;
        color:white;
        padding: 15px 32px;
        text-align: center;
        text-decoration: none;
        font-size: 16px;
        cursor: pointer;
        outline: none;
    }
    .nav-button:hover {
        background-color: #3e8e41;
    }
    body{
        top:0;
        background-color: #2f3640;
        color:white;
        font-family: "Poppins", sans-serif;
    }
    .hidden_tag{
        display: none;
    }`,
    );

    createFile(
        join(__dirname, '../../../../harveySettings.json'),
        `
{
    "debug": true,
    "version": "v1",
    "evalOnCompile": false,
    
    "outputFolder": "dist",
    "outputFileName": "index.js",
    "inputFolder": "src",
    "inputFile": "index.harvey",
    "debugFile": false,
    "debugFileName": "debug.js",
    "debugFileLocation": "dist",
    "obuscateOutput": true,
    
    "pluginsFolder": "",
    "pluginsSettings": "",
    "packagesFolder": "./node_modules/harvey-language/harv-script",
    
    "dev": true,
    "watchmode": true,
    
    "browserify": true
}`,
    );
}

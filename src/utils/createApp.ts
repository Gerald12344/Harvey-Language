import { existsSync, fstat, mkdirSync, readdirSync, readFileSync, writeFileSync } from 'fs';
import { join, relative } from 'path';
import { chalkClass } from './chalk';
import { ensureDirectoryExistence, getAllFiles } from './walkThroughDir';

function createFile(path: string, content: string) {
    writeFileSync(path, content);
}

export function createFolder(path: string) {
    if (!existsSync(path)) {
        mkdirSync(path);
    }
}

export async function createApp(dirName: string) {
    dirName = join(dirName, '../');
    let walk = getAllFiles(join(__dirname, `../../template`), [], dirName);

    let files = walk.map((e) => {
        return {
            name: join(dirName, e.name.replace(/\/\//g, '/').replace(join(__dirname, `../../template`), '')),
            value: e.value,
        };
    });
    files.forEach((e) => {
        try {
            try {
                ensureDirectoryExistence(join(e.name, '../'));
            } catch {}

            createFile(e.name.replace(/\/\//g, '/'), e.value);
        } catch (err) {
            console.log(err);
        }
    });

    try {
        let json = readFileSync(join(__dirname, `../../template/package.json`), 'utf-8');
        writeFileSync(
            join(dirName, 'package.json'),
            JSON.stringify({
                ...JSON.parse(json),
                scripts: {
                    start: 'npx harvey-language watch',
                    build: 'npx harvey-language compile',
                },
            }),
        );
    } catch {
        console.log(new chalkClass().redBold('no package.json'));
    }
}

/*
export function createApp() {
    let logger = fetchLogger();

    logger?.log('info', 'Creating app...');

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
        background-color: #4CAF50; 
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
    
    "dev": true,
    "watchmode": true,
    
    "browserify": true
}`,
    );

    createFile(
        join(__dirname, '../../../../src/index.harvey'),
        `
<comment <string " Add Harv-script ">>
<harvscript>

<hookFunction Clock <body
    <letsmake <split time usetime> <useHook <string "Loading!">>>
    <letsmake starttime <new Date>>

    <function formatClock <body
        <comment "Time globals">
        <letsmake time <new Date>>

        <letsmake hour <call time.getHours>>
        <letsmake min <call time.getMinutes>>
        <letsmake sec <call time.getSeconds>>

        <letsmake hoursString <toString hour>>
        <letsmake hourSplit <call hoursString.split <string "">>>

        <if <equal hourSplit.length 1> <body
            <assign hour <add <string "0"> <var hour>>>
        >>
        
        
        <letsmake minString <toString min>>
        <letsmake minSplit <call minString.split <string "">>>

        <if <equal minSplit.length 1> <body
            <assign min <add <string "0"> <var min>>>
        >>


        <letsmake secString <toString sec>>
        <letsmake secSplit <call secString.split <string "">>>

        <if <equal secSplit.length 1> <body
            <assign sec <add <string "0"> <var sec>>>
        >>
        
        <letsmake outputArray <array <var hour> <string ":"> <var min> <string ":"> <var sec>>>

        <reply <call outputArray.join <string "">>>

    >>


    <useUpdate <Arrowfunc <body
        <call usetime <call formatClock>>
        <letsmake updateloop <interval <Arrowfunc <body
            <call usetime <call formatClock>>
        >> 1000>>

        <reply <Arrowfunc <body
            <call clearInterval updateloop>
        >>>
    >> <array>>

    <render <string "body">
        <div <empty> <string "clock-div">
        <hOne <string "Welcome to Havscript Create app!"> <string "Clock">>
            <hOne <string "The current time is:"> <string "Clock">>

            <hOne <var time> <string "clock-numbers">>

            <hOne <array <string "You current timezone is: GMT+"> <call starttime.getTimezoneOffset>> <string "Clock">>

            <style <scss "
                .clock-div{
                    display:flex;
                    justify-content: center;
                    width: 100vw;
                    height: 90vh;
                    flex-direction: column;

                    .Clock {
                        color: #ffffff;
                        text-align: center;
                        font-size: 40px;
                    }
                    .clock-numbers {
                        font-size: 150px;
                        color: #ffffff;
                        font-family: monospace;
                        text-align: center;
                    }
                }
                body{
                    padding: 0;
                    margin:0;
                }
            "> <empty>>
        >
    >
>>

<call Clock>`,
    );

    logger?.log('info', 'Your app is ready to go! Just use "npx harvey-language watch" to start the server');
}
*/

import { existsSync, mkdirSync, writeFileSync } from 'fs';
import { join } from 'path';
import { dirname } from 'path/posix';

function createFile(path: string, content: string) {
    writeFileSync(join(dirname(require?.main?.filename || ''), path), content);
}

function createFolder(path: string) {
    if (!existsSync(join(dirname(require?.main?.filename || ''), path))) {
        mkdirSync(join(dirname(require?.main?.filename || ''), path));
    }
}

export function createApp() {
    createFolder('../src');
    createFolder('../src/components');
    createFolder('../src/pages');
    createFolder('../src/public');
    createFolder('../src/public/imports');

    createFile(
        '../src/public/index.harvey',
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
        '../src/public/index.css',
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
}

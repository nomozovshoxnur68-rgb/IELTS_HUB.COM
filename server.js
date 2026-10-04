const express = require("express");
const path = require("path");
const fs = require("fs");

const app = express();
const PORT = 3000;

const ROOT_DIR = __dirname;

// =====================================================
// STATIC FILES
// =====================================================

// CSS, JS, images, fonts va boshqa fayllar
app.use(express.static(ROOT_DIR));


// =====================================================
// FIND ALL HTML FILES
// =====================================================

function findHTMLFiles(dir) {
    let results = [];

    const items = fs.readdirSync(dir, {
        withFileTypes: true
    });

    for (const item of items) {
        // Keraksiz papkalarni o'tkazib yuborish
        if (
            item.name === "node_modules" ||
            item.name === ".git" ||
            item.name === ".vscode"
        ) {
            continue;
        }

        const fullPath = path.join(dir, item.name);

        if (item.isDirectory()) {
            results = results.concat(
                findHTMLFiles(fullPath)
            );
        }

        else if (
            item.isFile() &&
            item.name.toLowerCase().endsWith(".html")
        ) {
            results.push(fullPath);
        }
    }

    return results;
}


// =====================================================
// AUTOMATIC HTML ROUTES
// =====================================================

const htmlFiles = findHTMLFiles(ROOT_DIR);

htmlFiles.forEach((filePath) => {

    // server.js joylashgan papkaga nisbatan path
    let relativePath = path.relative(
        ROOT_DIR,
        filePath
    );

    // Windows "\" belgilarini "/" ga o'zgartirish
    relativePath = relativePath.replace(/\\/g, "/");

    // .html ni olib tashlash
    let route = "/" + relativePath.replace(
        /\.html$/i,
        ""
    );

    // index.html -> /
    if (route === "/index") {
        route = "/";
    }

    console.log(
        `HTML route: ${route} -> ${relativePath}`
    );

    app.get(route, (req, res) => {
        res.sendFile(filePath);
    });
});


// =====================================================
// 404 PAGE
// =====================================================

app.use((req, res) => {
    res.status(404).send(`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>404 - IELTSX</title>

    <style>
        * {
            box-sizing: border-box;
        }

        body {
            margin: 0;
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            background: #202222;
            color: white;
            font-family: Arial, sans-serif;
        }

        .error {
            text-align: center;
            padding: 40px;
        }

        h1 {
            margin: 0;
            font-size: 80px;
        }

        h2 {
            margin: 10px 0;
        }

        p {
            color: #aaa;
        }

        code {
            color: #ff4d8d;
            word-break: break-all;
        }

        a {
            display: inline-block;
            margin-top: 20px;
            padding: 12px 22px;
            background: #820241;
            color: white;
            text-decoration: none;
            border-radius: 8px;
        }
    </style>
</head>

<body>

<div class="error">
    <h1>404</h1>
    <h2>Page Not Found</h2>

    <p>
        The requested page does not exist:
    </p>

    <code>${req.originalUrl}</code>

    <br>

    <a href="/">
        Back Home
    </a>
</div>

</body>
</html>
    `);
});


// =====================================================
// SERVER ERROR HANDLER
// =====================================================

app.use((err, req, res, next) => {

    console.error("SERVER ERROR:");
    console.error(err);

    res.status(500).send(`
        <h1>500 - Server Error</h1>
        <pre>${err.message}</pre>
    `);
});


// =====================================================
// START SERVER
// =====================================================

app.listen(PORT, () => {

    console.log("");
    console.log("======================================");
    console.log("          IELTSX SERVER");
    console.log("======================================");
    console.log("");

    console.log(
        `Server running at: http://localhost:${PORT}`
    );

    console.log("");
    console.log("HTML ROUTES:");

    htmlFiles.forEach((filePath) => {

        let relativePath = path.relative(
            ROOT_DIR,
            filePath
        );

        relativePath = relativePath.replace(
            /\\/g,
            "/"
        );

        let route = "/" + relativePath.replace(
            /\.html$/i,
            ""
        );

        if (route === "/index") {
            route = "/";
        }

        console.log(
            `  ${route}`
        );
    });

    console.log("");
});
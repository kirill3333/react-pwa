export const renderTemplate = appHtml => {
    return `<!DOCTYPE html>
        <html>
        <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <title>React PWA</title>
            <link rel="stylesheet" href="static/css/main.css">
        </head>
        <body>
            <div id="app">${appHtml}</div>
            <script src="static/vendor.js"></script>
            <script src="static/app.js"></script>
        </body>
        </html>
   `
}
export const renderTemplate = appHtml => {
    return `<!DOCTYPE html>
        <html>
        <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <title>React PWA</title>
        </head>
        <body>
            <div id="app">${appHtml}</div>
            <script src="static/app.js"></script>
            <link rel="stylesheet" href="static/css/main.css">
        </body>
        </html>
   `
}
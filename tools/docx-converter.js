const fs = require('fs');
const path = require('path');
// showdown is no longer needed
const htmlDocx = require('html-docx-js');

async function convertMdToDocx(inputFile, outputFile) {
    try {
        // 1. Validate paths
        if (!inputFile || !outputFile) {
            console.error('Usage: node md-to-docx-converter.js <input_md_file> <output_docx_file>');
            process.exit(1);
        }

        if (path.extname(inputFile).toLowerCase() !== '.md') {
            console.error('Error: Input file must be a Markdown (.md) file.');
            return;
        }

        // 2. Read file content (treating it as HTML)
        const htmlContent = fs.readFileSync(inputFile, 'utf-8');
        
        // IMPORTANT: html-docx-js requires a full HTML document structure
        const fullHtml = `
            <!DOCTYPE html>
            <html>
            <head>
                <meta charset="UTF-8">
                <title>Document</title>
            </head>
            <body>
                ${htmlContent}
            </body>
            </html>
        `;

        // 3. Convert HTML to DOCX
        const docxBlob = htmlDocx.asBlob(fullHtml);

        // 4. Convert Blob to Buffer for Node.js
        const docxBuffer = await docxBlob.arrayBuffer();
        const buffer = Buffer.from(docxBuffer);

        // 5. Write DOCX file
        fs.writeFileSync(outputFile, buffer);

        console.log(`Successfully converted ${inputFile} to ${outputFile}`);

    } catch (err) {
        console.error(`Error during conversion:`, err);
        process.exit(1);
    }
}

// Get file paths from command line arguments
const inputFile = process.argv[2];
const outputFile = process.argv[3] || path.join(path.dirname(inputFile), `${path.basename(inputFile, '.md')}.docx`);

convertMdToDocx(inputFile, outputFile); 
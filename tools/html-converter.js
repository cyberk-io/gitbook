const md = require('markdown-it')();
const path = require('path');
const fs = require('fs');

function getMimeType(filePath) {
    const ext = path.extname(filePath).toLowerCase();
    switch (ext) {
        case '.png': return 'image/png';
        case '.jpg':
        case '.jpeg': return 'image/jpeg';
        case '.gif': return 'image/gif';
        case '.svg': return 'image/svg+xml';
        default: return 'application/octet-stream';
    }
}

async function convertToHtml() {
    const mdFile = process.argv[2];
    const htmlFile = process.argv[3];
    const logoFile = 'logo.png'; // Assuming logo is in the same directory

    if (!mdFile || !htmlFile) {
        console.error('Usage: node convertToHtml.js <input_md_file> <output_html_file>');
        process.exit(1);
    }

    // Read Markdown file
    const mdContent = fs.readFileSync(mdFile, 'utf-8');

    // Read CSS file
    const cssFile = path.join(__dirname, 'isp-style.css');
    let cssString = '';
    if (fs.existsSync(cssFile)) {
        cssString = fs.readFileSync(cssFile, 'utf-8');
    } else {
        console.warn('Warning: isp-style.css not found. Proceeding without custom styles.');
    }
    
    // Read and encode logo
    let logoBase64 = '';
    let logoMimeType = '';
    if (fs.existsSync(logoFile)) {
        const logoData = fs.readFileSync(logoFile);
        logoBase64 = logoData.toString('base64');
        logoMimeType = getMimeType(logoFile);
    } else {
        console.warn('Warning: logo.png not found. Proceeding without logo.');
    }

    // Convert markdown to HTML
    const htmlContent = md.render(mdContent);
    
    // Create the full HTML document
    const fullHtml = `
<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${path.basename(mdFile, '.md')}</title>
    <style>
        ${cssString}
    </style>
</head>
<body>
    <div class="logo-container">
        ${logoBase64 ? `<img src="data:${logoMimeType};base64,${logoBase64}" alt="Logo" class="logo">` : ''}
    </div>
    <div class="markdown-body">
        ${htmlContent}
    </div>
</body>
</html>
    `;

    // Write to HTML file
    fs.writeFileSync(htmlFile, fullHtml, 'utf-8');
    console.log(`Successfully converted ${mdFile} to ${htmlFile}`);
}

convertToHtml().catch(err => {
    console.error('An error occurred during conversion:', err);
    process.exit(1);
}); 
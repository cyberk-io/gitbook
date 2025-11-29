const { mdToPdf } = require("md-to-pdf");
const path = require("path");
const fs = require("fs");

async function convert() {
  const mdFile = process.argv[2];
  const pdfFile = process.argv[3];

  if (!mdFile || !pdfFile) {
    console.error("Usage: node convert.js <input_md_file> <output_pdf_file>");
    process.exit(1);
  }

  const cssFile = path.join(__dirname, "invoice_style.css");
  let cssString = "";
  if (fs.existsSync(cssFile)) {
    cssString = fs.readFileSync(cssFile, "utf-8");
  } else {
    console.warn(
      "Warning: invoice_style.css not found. Proceeding without custom styles."
    );
  }

  // --- Start of new code to add logo ---
  const logoPath = path.resolve(__dirname, "./logos/LOGO CYBERK TRANS B.png");
  let headerTemplate = "";
  if (fs.existsSync(logoPath)) {
    const logoBase64 = fs.readFileSync(logoPath, "base64");
    headerTemplate = `<div style="width: 100%; text-align: left; padding-top: 2mm; padding-left: 20mm;">
                            <img src="data:image/png;base64,${logoBase64}" style="width: 120px;">
                          </div>`;
  } else {
    console.warn("Warning: Logo file not found. Proceeding without logo.");
  }
  // --- End of new code ---

  try {
    const mdContent = fs.readFileSync(mdFile, "utf-8");

    const pdf = await mdToPdf(
      { content: mdContent },
      {
        basedir: path.resolve(path.dirname(mdFile)),
        // stylesheet: cssFile, // Temporarily disabled for debugging
        puppeteer_timeout: 60000,
        launch_options: {
          args: ["--no-sandbox", "--disable-setuid-sandbox"],
        },
        pdf_options: {
          timeout: 60000, // 60 seconds
          format: "A4",
          margin: {
            top: "40mm", // Increased top margin for header
            right: "20mm",
            bottom: "20mm",
            left: "20mm",
          },
          displayHeaderFooter: true, // Enable header/footer
          headerTemplate: headerTemplate, // Add header template
          footerTemplate: " ", // Add an empty footer to remove default
          preferCSSPageSize: true,
          printBackground: true,
        },
      }
    );

    if (pdf) {
      fs.writeFileSync(pdfFile, pdf.content);
      console.log(`Successfully converted ${mdFile} to ${pdfFile}`);
    } else {
      throw new Error("PDF content could not be generated.");
    }
  } catch (err) {
    console.error(`Error converting ${mdFile}:`, err);
    process.exit(1);
  }
}

convert();

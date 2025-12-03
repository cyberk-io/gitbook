const fs = require("fs");
const path = require("path");

const structureFilePath = path.join(
  __dirname,
  "..",
  "handbook",
  "00.handbook-structure.md"
);
const handbookDir = path.join(__dirname, "..", "handbook");
const outputFilePath = path.join(__dirname, "..", "handbook.md");

const structureContent = fs.readFileSync(structureFilePath, "utf-8");
const lines = structureContent.split("\n");

let finalContent = "";
const tocEntries = [];
const includedFiles = new Set();

// Regular expression to find markdown links like '- [Text](./path/to/file.md)'
const linkRegex = /[*-]\s*\[([^\]]+)\]\((\.\/[^\)]+\.md)\)/;

finalContent += "# The Cyberk Way\n\n";

lines.forEach((line) => {
  if (line.startsWith("##")) {
    const title = line.replace("##", "").trim();
    finalContent += `## ${title}\n\n`;
    tocEntries.push({ level: 1, title, link: slugify(title) });
  } else if (line.startsWith("#")) {
    // We handle the main title separately
  } else {
    const match = line.match(linkRegex);
    if (match) {
      const title = match[1];
      const filePath = path.join(handbookDir, match[2]);

      // Add heading for the chapter
      finalContent += `### ${title}\n\n`;
      tocEntries.push({ level: 2, title, link: slugify(title) });

      if (fs.existsSync(filePath) && !includedFiles.has(filePath)) {
        let fileContent = fs.readFileSync(filePath, "utf-8");
        // We remove the title from the sub-file as we already added it.
        fileContent = fileContent.replace(/^#+.*\n?/, "");
        finalContent += fileContent + "\n\n";
        includedFiles.add(filePath);
      }
    }
  }
});

// Add Table of Contents at the end
finalContent += "## Mục lục\n\n";
tocEntries.forEach((entry) => {
  const indent = entry.level === 1 ? "" : "  ";
  finalContent += `${indent}- [${entry.title}](#${entry.link})\n`;
});

fs.writeFileSync(outputFilePath, finalContent);

console.log("Handbook.md generated successfully!");

function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, "-") // Replace spaces with -
    .replace(/[^\w\-]+/g, "") // Remove all non-word chars
    .replace(/\-\-+/g, "-") // Replace multiple - with single -
    .replace(/^-+/, "") // Trim - from start of text
    .replace(/-+$/, ""); // Trim - from end of text
}

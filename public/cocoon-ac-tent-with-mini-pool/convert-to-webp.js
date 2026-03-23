const fs = require("fs-extra");
const path = require("path");
const sharp = require("sharp");

// Allowed image extensions
const IMAGE_EXTENSIONS = [".jpg", ".jpeg", ".webp", ".png", ".gif", ".avif"];

let imageCounter = 1; // 👈 global counter

async function convertImageToWebp(filePath) {
  const dir = path.dirname(filePath);

  // 👇 new filename format
  const newFileName = `cocoon-ac-tent-with-mini-pool-${imageCounter}.webp`;
  const outputPath = path.join(dir, newFileName);

  try {
    await sharp(filePath).webp({ quality: 80 }).toFile(outputPath);

    console.log(`✔ Converted: ${filePath} → ${outputPath}`);

    imageCounter++; // 👈 increment after success
  } catch (err) {
    console.error(`✖ Error converting ${filePath}:`, err);
  }
}

async function walkDirectory(dir) {
  const files = await fs.readdir(dir);

  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stats = await fs.stat(fullPath);

    if (stats.isDirectory()) {
      await walkDirectory(fullPath);
    } else {
      const ext = path.extname(fullPath).toLowerCase();
      if (IMAGE_EXTENSIONS.includes(ext)) {
        await convertImageToWebp(fullPath);
      }
    }
  }
}

(async () => {
  console.log("🔍 Scanning directories and converting images to WebP...");
  await walkDirectory("./");
  console.log("✅ Conversion complete!");
})();

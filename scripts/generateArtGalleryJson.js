import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename); 

const marqueeDir = path.join(
  __dirname,
  "../public/assets/images/ArtGalleryMarquee"
);
const tileDir = path.join(
  __dirname,
  "../public/assets/images/ArtGalleryTile"
);
const outputFile = path.join(__dirname, "../src/data/artGalleryData.json");

function filterImageFiles(files) {
  const validExtensions = [".jpg", ".jpeg", ".png", ".gif"];
  return files.filter((file) =>
    !file.startsWith(".") &&
    validExtensions.some((ext) => file.endsWith(ext))
  );
}

let marqueeFiles = [];
if (fs.existsSync(marqueeDir)) {
  marqueeFiles = filterImageFiles(fs.readdirSync(marqueeDir));
} else {
  console.error(`Directory not found: ${marqueeDir}`);
}

let tileFiles = [];
if (fs.existsSync(tileDir)) {
  tileFiles = filerImageFiles(fs.readdirSync(tileDir));
} else {
  console.error(`Directory not found: ${tileDir}`);
}

function generateArtGalleryJson() {
  const marqueeImages = marqueeFiles.map((file) => ({
    src: `/assets/images/ArtGalleryMarquee/${file}`,
    alt: path.parse(file).name,
  }));
  const tileImages = tileFiles.map((file) => ({
    src: `/assets/images/ArtGalleryTile/${file}`,
    alt: path.parse(file).name,
  }));

  const artGalleryData = { marqueeImages, tileImages };

  fs.writeFileSync(outputFile, JSON.stringify(artGalleryData, null, 2));

  console.log(`Art gallery data generated and saved to ${outputFile}`);
}

generateArtGalleryJson();

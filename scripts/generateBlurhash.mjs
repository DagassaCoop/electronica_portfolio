import { encode } from "blurhash";
import sharp from "sharp";
import { readdir } from "fs/promises";
import { join } from "path";

/**
 * Generate blurhash for an image
 */
async function generateBlurhash(imagePath) {
  try {
    const image = sharp(imagePath);
    const { data, info } = await image
      .raw()
      .ensureAlpha()
      .resize(32, 32, { fit: "inside" })
      .toBuffer({ resolveWithObject: true });

    const blurhash = encode(
      new Uint8ClampedArray(data),
      info.width,
      info.height,
      4,
      4
    );

    return blurhash;
  } catch (error) {
    console.error(`Error processing ${imagePath}:`, error.message);
    return null;
  }
}

/**
 * Process images in a directory
 */
async function processDirectory(dirPath, label) {
  console.log(`\n=== ${label} ===\n`);

  try {
    const files = await readdir(dirPath);
    const imageFiles = files.filter(
      (file) =>
        file.endsWith(".png") ||
        file.endsWith(".jpg") ||
        file.endsWith(".jpeg") ||
        file.endsWith(".JPG")
    );

    for (const file of imageFiles) {
      const imagePath = join(dirPath, file);
      const hash = await generateBlurhash(imagePath);
      if (hash) {
        console.log(`"${file}": "${hash}",`);
      }
    }
  } catch (error) {
    console.error(`Error reading directory ${dirPath}:`, error.message);
  }
}

// Main execution
const basePath = "src/assets/portfolio";

console.log("Generating blurhash values for all portfolio images...\n");
console.log("Copy these values into your mock data:\n");

// Process photo directories
await processDirectory(
  join(basePath, "photo/on_site_pictures"),
  "On-Site Pictures"
);
await processDirectory(
  join(basePath, "photo/holiday_choc"),
  "Holiday Chocolate"
);

// Process graphic directories
await processDirectory(join(basePath, "graphic/dental"), "Dental Social Media");
await processDirectory(
  join(basePath, "graphic/edgecom_social_media"),
  "Edgecom Social Media"
);
await processDirectory(
  join(basePath, "graphic/lovo_chocolate"),
  "Lovo Chocolate Billboards"
);

console.log("\n✅ Blurhash generation complete!");

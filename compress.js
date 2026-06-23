const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const MAX_WIDTH = 1920;
const QUALITY = 80;

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
  });
}

const imagesDir = path.join(__dirname, 'public');

async function processImages() {
  const filesToProcess = [];
  walkDir(imagesDir, (filePath) => {
    const ext = path.extname(filePath).toLowerCase();
    if (['.png', '.jpg', '.jpeg', '.webp'].includes(ext)) {
      filesToProcess.push(filePath);
    }
  });

  let totalOriginalSize = 0;
  let totalCompressedSize = 0;

  console.log(`Found ${filesToProcess.length} images to check.`);

  for (const filePath of filesToProcess) {
    const stat = fs.statSync(filePath);
    const originalSize = stat.size;
    totalOriginalSize += originalSize;

    // We only process if size is somewhat large to save time or we can just process all
    // Let's process files > 100KB to ensure we don't mess up tiny icons or logos.
    if (originalSize < 100 * 1024) {
      totalCompressedSize += originalSize;
      continue;
    }

    try {
      const metadata = await sharp(filePath).metadata();
      const needsResize = metadata.width && metadata.width > MAX_WIDTH;
      
      const buffer = fs.readFileSync(filePath);
      let pipeline = sharp(buffer);
      
      if (needsResize) {
        pipeline = pipeline.resize(MAX_WIDTH, null, { withoutEnlargement: true });
      }

      if (['.png'].includes(path.extname(filePath).toLowerCase())) {
        pipeline = pipeline.png({ quality: QUALITY, compressionLevel: 8 });
      } else if (['.jpg', '.jpeg'].includes(path.extname(filePath).toLowerCase())) {
        pipeline = pipeline.jpeg({ quality: QUALITY });
      } else if (['.webp'].includes(path.extname(filePath).toLowerCase())) {
        pipeline = pipeline.webp({ quality: QUALITY });
      }

      const outBuffer = await pipeline.toBuffer();
      
      if (outBuffer.length < originalSize) {
        fs.writeFileSync(filePath, outBuffer);
        console.log(`Compressed: ${path.basename(filePath)} | ${(originalSize / 1024 / 1024).toFixed(2)}MB -> ${(outBuffer.length / 1024 / 1024).toFixed(2)}MB`);
        totalCompressedSize += outBuffer.length;
      } else {
        totalCompressedSize += originalSize;
      }
    } catch (e) {
      console.error(`Error processing ${filePath}:`, e.message);
      totalCompressedSize += originalSize;
    }
  }

  console.log(`\nDone!`);
  console.log(`Total Original Size: ${(totalOriginalSize / 1024 / 1024).toFixed(2)} MB`);
  console.log(`Total New Size: ${(totalCompressedSize / 1024 / 1024).toFixed(2)} MB`);
  console.log(`Saved: ${((totalOriginalSize - totalCompressedSize) / 1024 / 1024).toFixed(2)} MB`);
}

processImages();

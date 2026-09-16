const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const srcDir = 'C:/Users/choi/.gemini/antigravity-ide/brain/3054269d-01cd-4a6d-9332-1c8f1e86a4f6';
const destDir = path.join(__dirname, '..', 'public', 'images', 'ongyeol');

if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

const fileMap = [
  { src: 'hero_ongyeol_1789536621266.jpg', dest: 'hero-ongyeol.webp' },
  { src: 'hero_mobile_1789536638576.jpg', dest: 'hero-ongyeol-mobile.webp' },
  { src: 'menu_mushroom_rice_1789536653637.jpg', dest: 'menu-mushroom-rice.webp' },
  { src: 'menu_chicken_set_1789536669249.jpg', dest: 'menu-chicken-set.webp' },
  { src: 'menu_warm_noodles_1789536685254.jpg', dest: 'menu-warm-noodles.webp' },
  { src: 'gallery_prep_1789536705589.jpg', dest: 'gallery-preparation.webp' },
  { src: 'gallery_solo_seat_1789536721656.jpg', dest: 'gallery-solo-seat.webp' }
];

async function convert() {
  for (const item of fileMap) {
    const srcPath = path.join(srcDir, item.src);
    const destPath = path.join(destDir, item.dest);
    const meta = await sharp(srcPath).metadata();
    console.log(`Processing ${item.src} (${meta.width}x${meta.height}) -> ${item.dest}`);
    await sharp(srcPath)
      .webp({ quality: 76 })
      .toFile(destPath);
    const outMeta = await sharp(destPath).metadata();
    console.log(`  Saved to ${destPath} (${outMeta.width}x${outMeta.height})`);
  }
  console.log('All images converted to WebP quality 76 successfully.');
}

convert().catch(console.error);

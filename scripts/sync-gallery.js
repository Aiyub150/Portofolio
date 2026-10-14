const fs = require('fs');
const path = require('path');

function cleanCaption(filename) {
  const nameWithoutExt = path.parse(filename).name;
  return nameWithoutExt
    .replace(/^WhatsApp Image.*$/i, 'Dokumentasi Lapangan Nusantara')
    .replace(/[-_]/g, ' ')
    .trim();
}

function getImageDimensions(filePath) {
  try {
    const buffer = fs.readFileSync(filePath);
    // Simple PNG/JPEG/WEBP dimension sniff or fallback
    if (buffer.length > 30 && buffer.toString('ascii', 0, 4) === 'RIFF' && buffer.toString('ascii', 8, 12) === 'WEBP') {
      const type = buffer.toString('ascii', 12, 16);
      if (type === 'VP8 ') {
        const w = buffer.readUInt16LE(26) & 0x3fff;
        const h = buffer.readUInt16LE(28) & 0x3fff;
        return { w, h };
      } else if (type === 'VP8L') {
        const b1 = buffer[21], b2 = buffer[22], b3 = buffer[23], b4 = buffer[24];
        const w = 1 + (((b2 & 0x3f) << 8) | b1);
        const h = 1 + (((b4 & 0x0f) << 10) | (b3 << 2) | ((b2 & 0xc0) >> 6));
        return { w, h };
      } else if (type === 'VP8X') {
        const w = 1 + buffer.readUIntLE(24, 3);
        const h = 1 + buffer.readUIntLE(27, 3);
        return { w, h };
      }
    }
  } catch (e) {}
  return { w: 1280, h: 960 };
}

function scanFolder(folderKey, dirRel) {
  const rootDir = path.resolve(__dirname, '..');
  const dirAbs = path.join(rootDir, dirRel);
  if (!fs.existsSync(dirAbs)) return [];
  const files = fs.readdirSync(dirAbs);
  const validExts = ['.webp', '.png', '.jpg', '.jpeg', '.svg'];
  const imageFiles = files.filter(f => validExts.includes(path.extname(f).toLowerCase()));

  return imageFiles.map(file => {
    const relPath = `${dirRel}/${file}`.replace(/\\/g, '/');
    const absPath = path.join(dirAbs, file);
    const { w, h } = getImageDimensions(absPath);
    const caption = cleanCaption(file);
    return {
      src: relPath,
      alt: caption,
      caption: caption,
      w,
      h
    };
  });
}

const galleryData = {
  ikn: {
    title: 'Dokumentasi Kegiatan — Otorita IKN',
    subtitle: 'Dokumentasi di Lingkungan Otorita Ibu Kota Nusantara',
    images: scanFolder('ikn', 'img/Gallery/ikn')
  },
  ubig: {
    title: 'Dokumentasi Magang — PT. Universal Big Data',
    subtitle: 'Dokumentasi Tim & Pengembangan di Malang',
    images: scanFolder('ubig', 'img/Gallery/ubig')
  }
};

const rootDir = path.resolve(__dirname, '..');
const outPath = path.join(rootDir, 'gallery-data.json');
fs.writeFileSync(outPath, JSON.stringify(galleryData, null, 2), 'utf8');
console.log(`Generated gallery-data.json: ikn=${galleryData.ikn.images.length} images, ubig=${galleryData.ubig.images.length} images`);

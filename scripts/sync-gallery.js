const fs = require('fs');
const path = require('path');

function cleanCaption(folderKey, filename) {
  if (folderKey === 'ikn') {
    return 'Dokumentasi Magang Di Otorita IKN';
  } else if (folderKey === 'ukm_robotika') {
    return 'Dokumentasi Kegiatan Di UKM Robotika';
  } else if (folderKey === 'ubig') {
    return 'Dokumentasi Magang Di PT. Universal Big Data';
  }
  return 'Dokumentasi Kegiatan';
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
  const validExts = ['.webp'];
  const imageFiles = files.filter(f => validExts.includes(path.extname(f).toLowerCase()));

  // Balance columns: distribute portrait and landscape photos evenly
  const sorted = imageFiles.map(file => {
    const relPath = `${dirRel}/${file}`.replace(/\\/g, '/');
    const absPath = path.join(dirAbs, file);
    const { w, h } = getImageDimensions(absPath);
    const caption = cleanCaption(folderKey, file);
    const isPortrait = h > w;
    return {
      src: relPath,
      alt: caption,
      caption: caption,
      w,
      h,
      isPortrait
    };
  });

  const portraits = sorted.filter(img => img.isPortrait);
  const landscapes = sorted.filter(img => !img.isPortrait);

  // Interleave landscapes and portraits so each column gets equal heights
  const interleaved = [];
  let pIdx = 0, lIdx = 0;
  while (pIdx < portraits.length || lIdx < landscapes.length) {
    if (lIdx < landscapes.length) interleaved.push(landscapes[lIdx++]);
    if (lIdx < landscapes.length) interleaved.push(landscapes[lIdx++]);
    if (pIdx < portraits.length) interleaved.push(portraits[pIdx++]);
  }

  return interleaved;
}

function scanAllGalleries() {
  const rootDir = path.resolve(__dirname, '..');
  const galleryBaseDir = path.join(rootDir, 'img/Gallery');
  const result = {};

  if (!fs.existsSync(galleryBaseDir)) return result;

  const subdirs = fs.readdirSync(galleryBaseDir, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name);

  subdirs.forEach(folderName => {
    const key = folderName.toLowerCase();
    const images = scanFolder(key, `img/Gallery/${folderName}`);
    let title = `Dokumentasi Kegiatan — ${folderName.toUpperCase()}`;
    let subtitle = `Galeri Foto Dokumentasi ${folderName.toUpperCase()}`;

    if (key === 'ikn') {
      title = 'Dokumentasi Kegiatan — Otorita IKN';
      subtitle = 'Dokumentasi di Lingkungan Otorita Ibu Kota Nusantara';
    } else if (key === 'ubig') {
      title = 'Dokumentasi Magang — PT. Universal Big Data';
      subtitle = 'Dokumentasi Tim & Pengembangan di Malang';
    } else if (key === 'ukm_robotika') {
      title = 'Dokumentasi Kegiatan — UKM Robotika IR-64';
      subtitle = 'Dokumentasi Kegiatan & Riset di Politeknik Negeri Jember';
    }

    result[key] = {
      title,
      subtitle,
      images
    };
  });

  return result;
}

const galleryData = scanAllGalleries();

const rootDir = path.resolve(__dirname, '..');
const outPath = path.join(rootDir, 'gallery-data.json');
fs.writeFileSync(outPath, JSON.stringify(galleryData, null, 2), 'utf8');
console.log(`Generated gallery-data.json keys:`, Object.keys(galleryData).map(k => `${k}=${galleryData[k].images.length}`).join(', '));

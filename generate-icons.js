const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

// Create output directory if it doesn't exist
const outputDir = path.join(__dirname, 'public', 'icons');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Source image path (you can replace this with your profile image)
const sourceImage = path.join(__dirname, 'public', 'profile.jpg');

// Icon sizes to generate
const iconSizes = [
  // Standard icons
  { size: 72, purpose: 'any' },
  { size: 96, purpose: 'any' },
  { size: 128, purpose: 'any' },
  { size: 144, purpose: 'any' },
  { size: 152, purpose: 'any' },
  { size: 192, purpose: 'any' },
  { size: 384, purpose: 'any' },
  { size: 512, purpose: 'any' },
  // Maskable icon (for Android)
  { size: 192, purpose: 'maskable' },
  { size: 512, purpose: 'maskable' }
];

// Function to generate a circular mask for maskable icons
const createCircleMask = (size) => {
  const radius = size / 2;
  const center = radius;
  const circle = Buffer.from(
    `<svg viewBox="0 0 ${size} ${size}">
      <circle cx="${center}" cy="${center}" r="${radius}" fill="black" />
    </svg>`
  );
  return circle;
};

// Generate icons
Promise.all(
  iconSizes.map(({ size, purpose }) => {
    const outputPath = path.join(
      outputDir,
      purpose === 'maskable' 
        ? `icon-${size}x${size}-maskable.png`
        : `icon-${size}x${size}.png`
    );
    
    let image = sharp(sourceImage).resize(size, size);
    
    // Apply mask for maskable icons
    if (purpose === 'maskable') {
      const mask = createCircleMask(size);
      image = image.composite([{ input: mask, blend: 'dest-in' }]);
    }
    
    return image
      .toFile(outputPath)
      .then(() => {
        console.log(`Generated ${path.basename(outputPath)}`);
      });
  })
)
.then(() => {
  console.log('All icons generated successfully!');
})
.catch(err => {
  console.error('Error generating icons:', err);
});

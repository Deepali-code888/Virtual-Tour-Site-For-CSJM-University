#!/usr/bin/env node

/**
 * Image Checker Script
 * 
 * This script helps you verify that your building images are properly set up.
 * Run this script after adding your photos to check for any issues.
 */

const fs = require('fs');
const path = require('path');

const buildingsDir = path.join(__dirname, '..', 'src', 'assets', 'buildings');
const buildingsSectionFile = path.join(__dirname, '..', 'src', 'components', 'VirtualTour', 'BuildingsSection.tsx');

// Expected building images
const expectedImages = [
  'central-library',
  'academic-block-a', 
  'science-tech-block',
  'evaluation-building',
  'student-activity-center',
  'international-centre'
];

const imageExtensions = ['.jpg', '.jpeg', '.png', '.webp'];

console.log('🏢 Building Images Checker');
console.log('==========================\n');

// Check if buildings directory exists
if (!fs.existsSync(buildingsDir)) {
  console.log('❌ Buildings directory not found');
  console.log('   Expected: src/assets/buildings/\n');
  process.exit(1);
}

// List all image files in buildings directory
const files = fs.readdirSync(buildingsDir);
const imageFiles = files.filter(file => 
  imageExtensions.some(ext => file.toLowerCase().endsWith(ext))
);

console.log('📁 Found image files:');
if (imageFiles.length === 0) {
  console.log('   No image files found in src/assets/buildings/');
} else {
  imageFiles.forEach(file => console.log(`   ✓ ${file}`));
}
console.log();

// Check for expected images
console.log('🔍 Checking for expected building images:');
expectedImages.forEach(imageName => {
  const found = imageFiles.some(file => 
    file.toLowerCase().startsWith(imageName.toLowerCase())
  );
  
  if (found) {
    console.log(`   ✅ ${imageName}`);
  } else {
    console.log(`   ❌ ${imageName} (missing)`);
  }
});

console.log('\n📋 Next Steps:');
console.log('1. Add your building photos to src/assets/buildings/');
console.log('2. Update the imports in src/components/VirtualTour/BuildingsSection.tsx');
console.log('3. Use the template file for reference');
console.log('4. Run your development server to test the changes');

console.log('\n💡 Tip: Use the README.md in the buildings folder for detailed instructions');
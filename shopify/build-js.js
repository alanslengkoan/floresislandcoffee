/**
 * Simple JavaScript bundler for Shopify theme
 * Creates vendor.js with Alpine.js CDN
 */

import { readFileSync, writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Read Alpine.js from node_modules
let alpineContent = '';
try {
  const alpinePath = join(__dirname, 'node_modules', 'alpinejs', 'dist', 'cdn.min.js');
  alpineContent = readFileSync(alpinePath, 'utf-8');
} catch (err) {
  console.log('⚠ Alpine.js not found in node_modules, using CDN placeholder');
  alpineContent = '/* Alpine.js - Load from CDN in theme.liquid */';
}

// Create vendor.js
const vendorPath = join(__dirname, 'assets', 'vendor.js');
const vendorContent = `/**
 * Vendor JavaScript - Alpine.js
 * Flores Island Coffee Theme
 */

${alpineContent}
`;

writeFileSync(vendorPath, vendorContent);

console.log('✓ JavaScript files bundled successfully');

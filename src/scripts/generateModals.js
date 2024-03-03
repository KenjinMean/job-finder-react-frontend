import { fileURLToPath } from "url";
import { dirname, join, extname, basename } from "path";
import { readdirSync, writeFileSync } from "fs";

// Get the directory path containing this script file
const __dirname = dirname(fileURLToPath(import.meta.url));

// Define the relative path to the modal directory
const modalDirectory = join(__dirname, "../components/modals/user");

// Read the filenames within the modal directory
const modalFiles = readdirSync(modalDirectory);

// Extract modal names without extensions
const modalNames = modalFiles.map((file) => basename(file, extname(file)));

// Define the path to the output file
const outputFile = join(__dirname, "../constants/generatedUserModals.js");

// Write modal names to a JavaScript file as an array
writeFileSync(outputFile, `export default ${JSON.stringify(modalNames)};`);

console.log("Modal names generated successfully.");

process.exit(0);

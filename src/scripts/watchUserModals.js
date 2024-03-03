import { watch } from "fs";
import { dirname, join } from "path";
import { exec } from "child_process";
import { fileURLToPath } from "url"; // Add this import

// Get the directory path containing this script file
const __dirname = dirname(fileURLToPath(import.meta.url));

// Define the relative path to the modal directory
const modalDirectory = join(__dirname, "../components/modals/user");

// Function to generate modal names
const generateModals = () => {
  exec("node src/scripts/generateModals.js", (error, stdout, stderr) => {
    // Fix the path to the generateModals.js script
    if (error) {
      console.error(`Error: ${error.message}`);
      return;
    }
    if (stderr) {
      console.error(`stderr: ${stderr}`);
      return;
    }
    console.log(stdout);
  });
};

// Watch the modal directory for changes
watch(modalDirectory, (eventType, filename) => {
  if (filename) {
    console.log(`${filename} has been ${eventType}`);
    generateModals(); // Run the script when a change occurs
  }
});

console.log(`Watching ${modalDirectory} for changes...`);

process.exit(0);

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// The directories to temporarily hide during 'next build' 
// so that their dynamic API routes don't fail the 'output: export' process.
const dirsToHide = ['src/app/api', 'src/app/admin'];

console.log("==========================================");
console.log("🚀 Starting Safe Static Build (Hiding CMS)");
console.log("==========================================");

dirsToHide.forEach(dir => {
  const fullPath = path.join(process.cwd(), dir);
  const tempPath = path.join(process.cwd(), `${dir}_temp_hidden`);
  
  if (fs.existsSync(fullPath)) {
    console.log(`[HIDE] Moving ${dir} -> ${dir}_temp_hidden`);
    fs.renameSync(fullPath, tempPath);
  }
});

try {
  // Run the actual next build
  console.log("\n[BUILD] Running 'next build'...");
  execSync('next build', { stdio: 'inherit' });
  console.log("\n✅ Build completed successfully.");
} catch (error) {
  console.error("❌ Build failed!");
  process.exitCode = 1;
} finally {
  // Restore the directories
  console.log("\n[RESTORE] Restoring CMS directories...");
  dirsToHide.forEach(dir => {
    const fullPath = path.join(process.cwd(), dir);
    const tempPath = path.join(process.cwd(), `${dir}_temp_hidden`);
    
    if (fs.existsSync(tempPath)) {
      console.log(`[RESTORE] Moving ${dir}_temp_hidden -> ${dir}`);
      fs.renameSync(tempPath, fullPath);
    }
  });
  console.log("==========================================");
}

import { submitToIndexNow } from "../src/lib/indexnow.js";

async function run() {
  console.log("🚀 Running IndexNow automatically after build...");

  const urls = [
    "https://voxelhausconsultancy.com/",
    "https://voxelhausconsultancy.com/about/",
    "https://voxelhausconsultancy.com/services/",
    "https://voxelhausconsultancy.com/gallery/",
    "https://voxelhausconsultancy.com/contact/",
    "https://voxelhausconsultancy.com/real-estate/",
    "https://voxelhausconsultancy.com/object-removal/",
    "https://voxelhausconsultancy.com/color-cast-removal/",
    "https://voxelhausconsultancy.com/sky-replacement/",
    "https://voxelhausconsultancy.com/floor-plans/",
    "https://voxelhausconsultancy.com/virtual-staging/"
  ];

  await submitToIndexNow(urls);
}

run();


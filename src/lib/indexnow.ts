export async function submitToIndexNow(urls = []) {
    const apiKey = "a4cac258fe514175ac6e649310edd96d";
  
    const payload = {
      host: "voxelhausconsultancy.com",
      key: apiKey,
      keyLocation: `https://voxelhausconsultancy.com/${apiKey}.txt`,
      urlList: urls,
    };
  
    try {
      const res = await fetch("https://api.indexnow.org/indexnow", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
  
      console.log("[IndexNow] Status:", res.status);
      return res.status;
    } catch (error) {
      console.error("[IndexNow] Error:", error);
      return null;
    }
  }
  
import fs from "fs/promises";
import path from "path";
import https from "https";

const getRequest = (url) => {
  return new Promise((resolve, reject) => {
    const req = https.get(url, (res) => {
      let result = "";

      res.on("error", reject);

      res.on("data", (chunk) => {
        result += chunk;
      });

      res.on("end", () => {
        resolve(result);
      });
    });

    req.on("error", reject);
    req.end();
  });
};

const apiDeclarationFileData = await getRequest(
  "https://raw.githubusercontent.com/OpenRCT2/OpenRCT2/develop/distribution/openrct2.d.ts"
);

const typePath = path.join(process.cwd(), "types");

await fs.mkdir(typePath, { recursive: true });
await fs.writeFile(
  path.join(typePath, "openrct2.d.ts"),
  apiDeclarationFileData
);

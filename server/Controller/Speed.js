import Networkspeed from "network-speed";
import { exec } from "node:child_process";
const testNetworkSpeed = new Networkspeed();
export async function getDownloadSpeed(req, res, next) {
  try {
    const baseUrl = "https://eu.httpbin.org/stream-bytes/500000";
    const fileSizeInBytes = 500000;
    const speed = await testNetworkSpeed.checkDownloadSpeed(
      baseUrl,
      fileSizeInBytes
    );
    res.json({
      data: speed,
      status: "ok",
    });
  } catch (error) {
    res.send(error);
    next(error);
  }
}

export async function getNetworkUploadSpeed(req, res, next) {
  try {
    const options = {
      hostname: "www.google.com",
      port: 80,
      path: "/catchers/544b09b4599c1d0200000289",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    };
    const fileSizeInBytes = 2000000;
    const speed = await testNetworkSpeed.checkUploadSpeed(
      options,
      fileSizeInBytes
    );
    res.json({
      data: speed,
      status: "ok",
    });
  } catch (error) {
    res.send(error);
    next(error);
  }
}
// export const speedchecker = (req, res) => {
//   exec("speed-test", (error, stdout, stderr) => {
//     if (error) {
//       console.error(`exec error: ${error}`);
//       return;
//     }
//     console.log(`stdout: ${stdout}`);
//     console.error(`stderr: ${stderr}`);
//   });
// };

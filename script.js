function calculateTime() {
  const sizeGB = parseFloat(document.getElementById("fileSize").value);
  const speedMbps = parseFloat(document.getElementById("speed").value);

  if (isNaN(sizeGB) || isNaN(speedMbps) || sizeGB <= 0 || speedMbps <= 0) {
    document.getElementById("result").textContent = "Enter valid numbers.";
    return;
  }

  const sizeGbits = sizeGB * 8;
  const timeSeconds = sizeGbits / (speedMbps / 1000); // convert Mbps to Gbps
  const minutes = Math.floor(timeSeconds / 60);
  const seconds = Math.round(timeSeconds % 60);

  document.getElementById("result").textContent =
    `Estimated time: ${minutes} min ${seconds} sec`;
}

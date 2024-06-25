function FileDownloadButton({ filename }) {
  const downloadFile = async () => {
    const url = `http://localhost:3000/uploads/${filename}`;
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const blob = await response.blob();
      const downloadUrl = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.style.display = "none";
      a.href = downloadUrl;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(downloadUrl);
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
    }
  };

  return <button onClick={downloadFile}>Download </button>;
}

export default FileDownloadButton;

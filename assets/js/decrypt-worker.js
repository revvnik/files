self.onmessage = async function ({ data }) {
    const { filePath, key } = data;
    try {
        const decryptedImageUrl = await decryptFile(filePath, key);
        self.postMessage({ success: true, decryptedImageUrl });
    } catch (error) {
        self.postMessage({ success: false, error: error.message });
    }
};
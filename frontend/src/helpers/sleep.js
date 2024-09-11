// Helper function to sleep, use async await
export default function sleep(ms) {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  }
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Document() {
  const router = useRouter();

  useEffect(() => {
    const userAgent =
      navigator.userAgent || navigator.vendor || (window as any).opera;
    const urlParams = new URLSearchParams(window.location.search);
    const pageId = urlParams.get("pageId");

    // Check if URL matches the expected format
    ///share\.mediceo\.com\/remote/.test(window.location.href) &&
    if (pageId) {
      if (/iPad|iPhone|iPod/.test(userAgent) && !(window as any).MSStream) {
        // iOS Devices
        window.location.href = `app.mediceo.com://shared?pageId=${pageId}`;
      } else if (/android/i.test(userAgent)) {
        // Android Devices
        window.location.href = `app.mediceo.com://shared?pageId=${pageId}`;
      } else {
        // Web Redirection
        router.push(`https://app.mediceo.com/shared?pageId=${pageId}`);
      }
    }
  }, []);
  return <div></div>;
}

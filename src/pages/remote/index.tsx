import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Document() {
  const router = useRouter();

  useEffect(() => {
    const userAgent =
      navigator.userAgent || navigator.vendor || (window as any).opera;
    const urlParams = new URLSearchParams(window.location.search);
    const pageId = urlParams.get("pageId");
    const caseData = urlParams.get("caseData");

    // Check if URL matches the expected format
    ///share\.mediceo\.com\/remote/.test(window.location.href) &&
    if (pageId) {
      if (/iPad|iPhone|iPod/.test(userAgent) && !(window as any).MSStream) {
        // iOS Devices
        window.location.href = `com.mediceo.app://shared?pageId=${pageId}${
          caseData ? `&caseData=${caseData}` : ""
        }`;
      } else if (/android/i.test(userAgent)) {
        // Android Devices
        window.location.href = `com.mediceo.app://shared?pageId=${pageId}${
          caseData ? `&caseData=${caseData}` : ""
        }`;
      } else {
        // Web Redirection
        router.push(
          `https://app.mediceo.com/shared?pageId=${pageId}${
            caseData ? `&caseData=${caseData}` : ""
          }`
        );
      }
      //window.close();
    }
  }, []);
  return <div></div>;
}

import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

export default function CalComEmbed() {
  useEffect(() => {
    (async () => {
      const cal = await getCalApi({ namespace: "freeconsultation" });
      cal("ui", {
        theme: "dark",
        styles: {
          branding: { brandColor: "#00F0FF" },
          body: { background: "#1a1a1a" },
          eventTypeListItem: { background: "#2a2a2a" },
        },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);

  return (
    <Cal
      namespace="freeconsultation"
      calLink="rahms/freeconsultation"
      style={{ width: "100%", height: "100%", overflow: "scroll" }}
      config={{
        theme: "dark",
        styles: {
          branding: "#00F0FF",
          body: "#1a1a1a",
          eventTypeListItem: "#2a2a2a",
        },
      }}
    />
  );
}

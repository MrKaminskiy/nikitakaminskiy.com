import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt =
  "Nikita Kaminskiy — AI Consultant & Automation Specialist, Berlin";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0e0e0c",
          padding: "72px 80px",
          fontFamily: "monospace",
          position: "relative",
        }}
      >
        {/* glow */}
        <div
          style={{
            position: "absolute",
            top: -200,
            left: -160,
            width: 560,
            height: 560,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(255,94,58,0.20), rgba(255,94,58,0))",
          }}
        />

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 14,
              color: "#3dd68c",
              fontSize: 24,
              letterSpacing: 2,
              textTransform: "uppercase",
            }}
          >
            <div
              style={{
                width: 12,
                height: 12,
                borderRadius: "50%",
                background: "#3dd68c",
              }}
            />
            Available for new clients — Berlin &amp; Remote
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontSize: 124,
              fontWeight: 800,
              lineHeight: 0.92,
              letterSpacing: -2,
              color: "#f0ede6",
              textTransform: "uppercase",
            }}
          >
            Nikita
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 124,
              fontWeight: 800,
              lineHeight: 0.92,
              letterSpacing: -2,
              color: "#ff5e3a",
              textTransform: "uppercase",
            }}
          >
            Kaminskiy
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            color: "#8a8878",
            fontSize: 30,
          }}
        >
          <div style={{ display: "flex", maxWidth: 760 }}>
            AI Consultant &amp; Automation — I turn AI into a real competitive
            edge, fast.
          </div>
          <div style={{ display: "flex", color: "#474540", fontSize: 26 }}>
            nikitakaminskiy.com
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}

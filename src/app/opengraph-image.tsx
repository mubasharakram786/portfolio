import { ImageResponse } from "next/og";
import { siteConfig } from "@/data/site";

export const alt = `${siteConfig.name} — ${siteConfig.title}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          background: "radial-gradient(80% 90% at 85% 0%, rgba(45,212,191,0.22), transparent 60%), #0b0c0e",
          color: "#ecebe8",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 64,
              height: 64,
              borderRadius: 16,
              background: "#ecebe8",
              color: "#0b0c0e",
              fontSize: 26,
              fontWeight: 700,
            }}
          >
            {siteConfig.initials}
          </div>
          <div style={{ fontSize: 26, color: "#2dd4bf" }}>{"// portfolio"}</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 88, fontWeight: 700, letterSpacing: -3 }}>{siteConfig.name}</div>
          <div style={{ fontSize: 38, color: "#9d9ca3", marginTop: 12 }}>{siteConfig.title}</div>
        </div>
        <div style={{ display: "flex", gap: 16, fontSize: 24, color: "#9d9ca3" }}>
          {["React.js", "Next.js", "TypeScript", "Tailwind CSS", `${siteConfig.yearsOfExperience} years`].map((t) => (
            <div
              key={t}
              style={{ display: "flex", padding: "10px 22px", borderRadius: 999, border: "1px solid rgba(255,255,255,0.14)" }}
            >
              {t}
            </div>
          ))}
        </div>
      </div>
    ),
    size,
  );
}

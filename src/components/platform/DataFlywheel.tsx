"use client";

import { motion } from "framer-motion";

const nodes = [
  { label: "Ingest", angle: -90, color: "#60A5FA" },
  { label: "Analyze", angle: -18, color: "#2DD4BF" },
  { label: "Predict", angle: 54, color: "#5EEAD4" },
  { label: "Execute", angle: 126, color: "#FBBF24" },
  { label: "Learn", angle: 198, color: "#60A5FA" },
];

const size = 460;
const r = 160;
const cx = size / 2;
const cy = size / 2;

export function DataFlywheel() {
  return (
    <div className="relative mx-auto w-full max-w-[460px]">
      <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-mesh opacity-60 blur-2xl" />
      <svg viewBox={`0 0 ${size} ${size}`} className="h-auto w-full" role="img" aria-label="Data flywheel">
        <defs>
          <linearGradient id="fw-stroke" x1="0" x2="1">
            <stop offset="0%" stopColor="#2DD4BF" />
            <stop offset="100%" stopColor="#60A5FA" />
          </linearGradient>
          <radialGradient id="fw-center" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#2DD4BF" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#2DD4BF" stopOpacity="0" />
          </radialGradient>
        </defs>

        <circle cx={cx} cy={cy} r={r + 30} fill="url(#fw-center)" />

        <motion.circle
          cx={cx}
          cy={cy}
          r={r}
          fill="none"
          stroke="url(#fw-stroke)"
          strokeWidth={1.5}
          strokeDasharray="3 6"
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{ duration: 40, ease: "linear", repeat: Infinity }}
          style={{ transformOrigin: `${cx}px ${cy}px` }}
        />
        <circle cx={cx} cy={cy} r={r} fill="none" stroke="#ffffff" strokeOpacity="0.06" />

        <motion.circle
          r={5}
          fill="#2DD4BF"
          initial={{ offsetDistance: "0%" }}
          animate={{ offsetDistance: "100%" }}
          transition={{ duration: 12, ease: "linear", repeat: Infinity }}
          style={{
            offsetPath: `path("M ${cx} ${cy - r} A ${r} ${r} 0 1 1 ${cx - 0.01} ${cy - r}")`,
            filter: "drop-shadow(0 0 8px rgba(45,212,191,0.9))",
          }}
        />

        {nodes.map((n, i) => {
          const theta = (n.angle * Math.PI) / 180;
          const x = cx + r * Math.cos(theta);
          const y = cy + r * Math.sin(theta);
          return (
            <g key={n.label}>
              <circle cx={x} cy={y} r={11} fill={n.color} fillOpacity="0.15" />
              <circle cx={x} cy={y} r={6} fill={n.color} />
              <text
                x={x}
                y={y + (y < cy ? -18 : 24)}
                textAnchor="middle"
                fill="#F8FAFC"
                fontSize="14"
                fontWeight={600}
                fontFamily="Inter, system-ui, sans-serif"
              >
                {n.label}
              </text>
              <text
                x={x}
                y={y + (y < cy ? -34 : 40)}
                textAnchor="middle"
                fill="#94A3B8"
                fontSize="10"
                fontFamily="JetBrains Mono, ui-monospace, monospace"
                letterSpacing="2"
              >
                0{i + 1}
              </text>
            </g>
          );
        })}

        <g>
          <text
            x={cx}
            y={cy - 4}
            textAnchor="middle"
            fill="#ffffff"
            fontSize="14"
            fontWeight={600}
            fontFamily="Inter, system-ui, sans-serif"
          >
            PARCS
          </text>
          <text
            x={cx}
            y={cy + 16}
            textAnchor="middle"
            fill="#94A3B8"
            fontSize="10"
            fontFamily="JetBrains Mono, ui-monospace, monospace"
            letterSpacing="2"
          >
            DATA FLYWHEEL
          </text>
        </g>
      </svg>
    </div>
  );
}

import React from "react";

type GradientColor = {
  color: string;
  stop: string;
};

type GradientConfig = {
  position: string;
  size: string;
  colors: GradientColor[];
  blur: string;
  opacity: number;
};

const variants = {
  hero: [
    {
      position: "top-1 left-1 -translate-x-1/2 -translate-y-1/2",
      size: "w-[1400px] h-[1400px]",
      colors: [
        { color: "rgba(141,255,105,0.25)", stop: "0%" },
        { color: "rgba(141,255,105,0.5)", stop: "50%" },
        { color: "rgba(141,255,105,0.25)", stop: "100%" },
      ],
      blur: "0px",
      opacity: 0.5,
    },
  ],
  about: [
    {
      position: "bottom-0 left-[75%]",
      size: "w-[700px] h-[700px]",
      colors: [
        { color: "rgba(141,255,105,0.25)", stop: "0%" },
        { color: "rgba(141,255,105,0.5)", stop: "50%" },
        { color: "rgba(141,255,105,0.25)", stop: "100%" },
      ],
      blur: "0px",
      opacity: 0.5,
    },
  ],
};

type VariantType = keyof typeof variants | "custom";

interface RadialGradientBackgroundProps {
  variant?: VariantType;
  gradiants?: GradientConfig[];
}

function RadialGradientBackgorund({
  variant = "hero",
  gradiants = [],
}: RadialGradientBackgroundProps) {
  const activeGradients =
    variant === "custom"
      ? gradiants
      : variants[variant] || variants.hero;

  const generateGradient = (colors: GradientColor[]) => {
    const colorStops = colors
      .map(({ color, stop }) => `${color} ${stop}`)
      .join(", ");

    return `radial-gradient(
      circle at center,
      ${colorStops}
    )`;
  };

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {activeGradients.map((gradient, index) => (
        <div
          key={index}
          className={`absolute ${gradient.position} ${gradient.size} rounded-full`}
          style={{
            background: generateGradient(gradient.colors),
            filter: `blur(${gradient.blur})`,
            opacity: gradient.opacity,
          }}
        />
      ))}
    </div>
  );
}

export default RadialGradientBackgorund;
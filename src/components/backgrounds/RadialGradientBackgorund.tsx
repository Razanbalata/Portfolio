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

const variants: Record<string, GradientConfig[]> = {
  hero: [
    {
      position: "top-1 left-1 -translate-x-1/2 -translate-y-1/2",
      size: "w-[1400px] h-[1400px]",
      colors: [
        { color: "rgba(138,154,91,0.25)", stop: "0%" },   // زيتوني فاتح
        { color: "rgba(207,195,165,0.5)", stop: "50%" },  // بيج متوسط
        { color: "rgba(138,154,91,0.25)", stop: "100%" },
      ],
      blur: "200px",
      opacity: 0.5,
    },
  ],
  about: [
    {
      position: "bottom-0 left-[75%]",
      size: "w-[700px] h-[700px]",
      colors: [
        { color: "rgba(138,154,91,0.25)", stop: "0%" },
        { color: "rgba(207,195,165,0.5)", stop: "50%" },
        { color: "rgba(138,154,91,0.25)", stop: "100%" },
      ],
      blur: "150px",
      opacity: 0.5,
    },
  ],
};

type VariantType = keyof typeof variants | "custom";

interface RadialGradientBackgroundProps {
  variant?: VariantType;
  gradients?: GradientConfig[];
}

const RadialGradientBackgorund: React.FC<RadialGradientBackgroundProps> = ({
  variant = "hero",
  gradients = [],
}) => {
  const activeGradients =
    variant === "custom" ? gradients : variants[variant] || variants.hero;

  const generateGradient = (colors: GradientColor[]) => {
    const colorStops = colors.map(({ color, stop }) => `${color} ${stop}`).join(", ");
    return `radial-gradient(circle at center, ${colorStops})`;
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
};

export default RadialGradientBackgorund;
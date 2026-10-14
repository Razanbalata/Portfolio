"use client";

import React, { useState, useRef, useEffect } from "react";
import { X, Trash2, Snowflake, Computer, Zap, Check, Plus } from "lucide-react";
import useClickOutside from "@/src/hooks/useClickOutside";

interface DrawBackgroundModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const MOVEMENT_STYLES = [
  {
    id: "fall",
    label: "Fall",
    icon: <Snowflake className="w-5 h-5" />,
    desc: "Drifts down with gentle sway",
  },
  {
    id: "matrix",
    label: "Matrix",
    icon: <Computer className="w-5 h-5" />,
    desc: "Streams down in columns",
  },
  {
    id: "float",
    label: "Float",
    icon: <Zap className="w-5 h-5" />,
    desc: "Drifts freely, reacts to cursor",
  },
];

export default function DrawBackgroundModal({
  isOpen,
  onClose,
}: DrawBackgroundModalProps) {
  const [brushSize, setBrushSize] = useState(6);
  const [selectedMovement, setSelectedMovement] = useState("fall");

  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isDrawing, setIsDrawing] = useState(false);

  // تهيئة الـ Canvas عند فتح المودال
  useEffect(() => {
    if (isOpen && canvasRef.current) {
      const canvas = canvasRef.current;
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      const ctx = canvas.getContext("2d");
      if (ctx) {
        ctx.strokeStyle =
          getComputedStyle(document.documentElement).getPropertyValue(
            "--color-primary",
          ) || "#06b6d4";
        ctx.lineWidth = brushSize;
        ctx.lineCap = "round";
        ctx.lineJoin = "round";
      }
    }
  }, [isOpen]);

  // تحديث حجم الفرشاة
  useEffect(() => {
    if (canvasRef.current) {
      const ctx = canvasRef.current.getContext("2d");
      if (ctx) {
        ctx.lineWidth = brushSize;
      }
    }
  }, [brushSize]);

  const startDrawing = (
    e:
      | React.MouseEvent<HTMLCanvasElement>
      | React.TouchEvent<HTMLCanvasElement>,
  ) => {
    setIsDrawing(true);
    draw(e);
  };

  const stopDrawing = () => {
    setIsDrawing(false);
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext("2d");
      ctx?.beginPath();
    }
  };

  const draw = (
    e:
      | React.MouseEvent<HTMLCanvasElement>
      | React.TouchEvent<HTMLCanvasElement>,
  ) => {
    if (!isDrawing || !canvasRef.current) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    let clientX = 0;
    let clientY = 0;

    if ("touches" in e) {
      clientX = e.touches[0].clientX;
      clientY = e.touches[0].clientY;
    } else {
      clientX = e.clientX;
      clientY = e.clientY;
    }

    const x = clientX - rect.left;
    const y = clientY - rect.top;

    // جلب لون الثيم الحالي للرسم به
    const primaryColor =
      getComputedStyle(document.documentElement).getPropertyValue(
        "--color-primary",
      ) || "#06b6d4";
    ctx.strokeStyle = primaryColor.trim();

    ctx.lineTo(x, y);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(x, y);
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (ctx) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
  };

  const handleApplyCustomBackground = () => {
    if (!canvasRef.current) return;

    // تحويل الرسمة إلى صورة (Data URL) وحفظها
    const dataUrl = canvasRef.current.toDataURL();
    localStorage.setItem("portfolio-custom-drawing", dataUrl);
    localStorage.setItem("portfolio-bg-effect", "custom");
    localStorage.setItem("portfolio-movement-style", selectedMovement);

    // تنبيه الموقع لتحديث الخلفية فوراً
    window.dispatchEvent(new Event("background-updated"));
    onClose();
  };

  const modalRef = useClickOutside<HTMLDivElement>(onClose, isOpen);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[40] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in">
      <div
        ref={modalRef}
        className="relative w-full max-w-2xl bg-[var(--color-secondary)]/95 backdrop-blur-2xl border border-[var(--color-accent)]/50 rounded-3xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300"
      >
        {/* Header */}
        <div className="p-6 pb-4 flex items-start justify-between">
          <div>
            <h2 className="text-2xl font-bold text-[var(--color-primary)] tracking-tight">
              Custom Background
            </h2>
            <p className="text-xs text-[var(--color-subtext)] mt-1 tracking-wide">
              Draw any shape - it becomes your background
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-[var(--color-subtext)] hover:text-[var(--color-text)] hover:bg-[var(--color-accent)]/30 transition-all cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 pt-2 space-y-6 max-h-[70vh] overflow-y-auto pr-4">
          {/* لوحة الرسم Canvas */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-semibold text-[var(--color-text)]">
                Draw your shape
              </h3>
              <button
                onClick={clearCanvas}
                className="flex items-center gap-2 text-xs font-medium text-[var(--color-subtext)] hover:text-red-400 transition-colors cursor-pointer group"
              >
                <Trash2 className="w-3.5 h-3.5 group-hover:scale-110" />
                <span>Clear</span>
              </button>
            </div>

            <div className="relative w-full aspect-[16/9] bg-[var(--color-bg)]/80 border border-[var(--color-accent)]/40 rounded-2xl flex items-center justify-center cursor-crosshair overflow-hidden shadow-inner">
              <canvas
                ref={canvasRef}
                onMouseDown={startDrawing}
                onMouseUp={stopDrawing}
                onMouseMove={draw}
                onTouchStart={startDrawing}
                onTouchEnd={stopDrawing}
                onTouchMove={draw}
                className="absolute inset-0 w-full h-full z-10"
              />
              <span className="absolute text-xs font-medium text-[var(--color-subtext)]/50 pointer-events-none">
                Draw here...
              </span>
            </div>
          </div>

          {/* Brush Size Slider */}
          <div className="flex items-center gap-4 p-4 rounded-2xl bg-[var(--color-bg)]/60 border border-[var(--color-accent)]/30">
            <span className="text-xs font-semibold text-[var(--color-text)] whitespace-nowrap">
              Brush: {brushSize}px
            </span>
            <input
              type="range"
              min="1"
              max="25"
              value={brushSize}
              onChange={(e) => setBrushSize(parseInt(e.target.value))}
              className="flex-1 h-1.5 bg-[var(--color-accent)]/40 rounded-full appearance-none cursor-pointer accent-[var(--color-primary)]"
            />
          </div>

          {/* Movement Style */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-[var(--color-text)]">
              Movement style
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {MOVEMENT_STYLES.map((style) => {
                const isSelected = selectedMovement === style.id;
                return (
                  <button
                    key={style.id}
                    onClick={() => setSelectedMovement(style.id)}
                    className={`flex flex-col items-center text-center p-4 rounded-2xl transition-all duration-200 cursor-pointer border-2 ${
                      isSelected
                        ? "bg-[var(--color-primary)]/10 border-[var(--color-primary)]/60 shadow-[0_0_15px_var(--color-primary)]/20"
                        : "bg-[var(--color-bg)]/60 border-[var(--color-accent)]/30 hover:border-[var(--color-primary)]/40"
                    }`}
                  >
                    <div
                      className={
                        isSelected
                          ? "text-[var(--color-primary)]"
                          : "text-[var(--color-subtext)]"
                      }
                    >
                      {style.icon}
                    </div>
                    <span
                      className={`text-sm font-bold mt-2 ${isSelected ? "text-[var(--color-text)]" : "text-[var(--color-subtext)]"}`}
                    >
                      {style.label}
                    </span>
                    <p className="text-[10px] text-[var(--color-subtext)]/80 mt-1 leading-tight">
                      {style.desc}
                    </p>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 pt-2 pb-6 border-t border-[var(--color-accent)]/30 bg-[var(--color-secondary)]/95">
          <button
            onClick={handleApplyCustomBackground}
            className="w-full flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full bg-[var(--color-primary)] hover:opacity-90 text-white font-bold text-sm shadow-lg shadow-[var(--color-primary)]/20 transition-all cursor-pointer group"
          >
            <Check className="w-4 h-4 group-hover:scale-110" />
            <span>Apply as Background</span>
          </button>
        </div>
      </div>
    </div>
  );
}

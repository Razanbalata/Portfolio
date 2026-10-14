"use client";

import { useEffect, useRef } from "react";

export default function useClickOutside<T extends HTMLElement>(
  onClose: () => void,
  enabled = true,
) {
  const ref = useRef<T>(null);

  useEffect(() => {
    if (!enabled) return;

    const handlePointerDown = (event: PointerEvent) => {
      const element = ref.current;
      const target = event.target;

      if (element && target instanceof Node && !element.contains(target)) {
        onClose();
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose, enabled]);

  return ref;
}

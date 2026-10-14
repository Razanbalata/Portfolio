export interface ThemeOption {
  name: string;
  label: string;
  color: string;
  isCustom?: boolean;
}

export const DEFAULT_THEMES: ThemeOption[] = [
  { name: "sea", label: "Sea", color: "#06b6d4" },
  { name: "forest", label: "Forest", color: "#10b981" },
  { name: "ember", label: "Ember", color: "#f97316" },
  { name: "bronze", label: "Bronze", color: "#d97706" },
];

export const CUSTOM_THEMES_KEY = "portfolio-custom-themes";
export const ACTIVE_THEME_KEY = "portfolio-theme-name";
export const ACTIVE_COLOR_KEY = "portfolio-theme-color";

export function getCustomThemes(): ThemeOption[] {
  if (typeof window === "undefined") return [];

  try {
    const saved = localStorage.getItem(CUSTOM_THEMES_KEY);
    return saved ? JSON.parse(saved) : [];
  } catch {
    return [];
  }
}

export function saveCustomTheme(theme: ThemeOption) {
  const themes = getCustomThemes();

  const existingIndex = themes.findIndex(
    (item) =>
      item.color.toLowerCase() === theme.color.toLowerCase()
  );

  let updated: ThemeOption[];

  if (existingIndex !== -1) {
    // اللون موجود مسبقًا؛ لا تضيفي نسخة جديدة
    updated = themes;
  } else {
    // إضافة اللون الجديد للقائمة
    updated = [theme];
  }

  localStorage.setItem(
    CUSTOM_THEMES_KEY,
    JSON.stringify(updated)
  );

  return updated;
}

export function applyThemeColor(color: string, name: string) {
  document.documentElement.style.setProperty("--color-primary", color);

  // الحفاظ على الشفافية المستخدمة في تصميمك
  document.documentElement.style.setProperty("--color-accent", `${color}40`);

  localStorage.setItem(ACTIVE_COLOR_KEY, color);
  localStorage.setItem(ACTIVE_THEME_KEY, name);
}

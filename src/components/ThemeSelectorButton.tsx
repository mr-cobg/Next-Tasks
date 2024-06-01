"use client";

interface IProps {
  theme: string;
}

export default function ThemeSelectorButton({ theme }: IProps) {
  const changeTheme = (theme: string) => {
    document.documentElement.setAttribute("data-theme", theme);
  };

  return <button onClick={() => changeTheme(theme)}>{theme}</button>;
}

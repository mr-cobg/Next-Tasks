"use client";

interface IProps {
  text: string;
  theme: string;
}

export default function ThemeSelectorButton({ text, theme }: IProps) {
  const changeTheme = (theme: string) => {
    document.documentElement.setAttribute("data-theme", theme);
  };

  return <button onClick={() => changeTheme(theme)}>{text}</button>;
}

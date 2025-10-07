export function SunIcon({ className }) {
  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      viewBox="0 0 24 24"
    >
      <circle cx="12" cy="12" r="5" />
      <path d="M12 1v2m0 18v2m11-11h-2M3 12H1m16.95-7.05l-1.41 1.41M6.05 17.95l-1.41 1.41m0-14.14l1.41 1.41M17.95 17.95l1.41 1.41" />
    </svg>
  );
}

export function MoonIcon({ className }) {
  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      viewBox="0 0 24 24"
    >
      <path d="M21 12.79A9 9 0 0111.21 3a7 7 0 100 14A9 9 0 0121 12.79z" />
    </svg>
  );
}

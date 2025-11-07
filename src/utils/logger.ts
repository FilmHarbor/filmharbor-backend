function formatArgs(args: unknown[]): string[] {
  return args.map((arg) =>
    typeof arg === "object" && arg !== null ? JSON.stringify(arg, null, 2) : String(arg)
  );
}

export const logger = {
  info: (...args: unknown[]) => {
    console.log(...formatArgs(args));
  },
  warn: (...args: unknown[]) => {
    console.warn(...formatArgs(args));
  },
  debug: (...args: unknown[]) => {
    console.debug(...formatArgs(args));
  },
  error: (...args: unknown[]) => {
    console.error(...formatArgs(args));
  },
};

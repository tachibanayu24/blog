import type { ComponentBase } from "./component-base";
import { getVariant } from "./get-variant";

type Props = ComponentBase<"info" | "warn" | "error" | "success">;

export const Tip = ({ children, info, warn, error, success }: Props) => {
  const variant = getVariant({ info, warn, error, success }, "info");
  const colors = {
    info: "bg-blue-200 dark:bg-blue-950",
    success: "bg-green-200 dark:bg-green-950",
    warn: "bg-yellow-200 dark:bg-yellow-950",
    error: "bg-red-200 dark:bg-red-950",
  };
  const emojis = {
    info: "ℹ️",
    success: "✅",
    warn: "⚠️",
    error: "❌",
  };

  console.log(variant);

  const reset = "not-prose text-slate-800 dark:text-slate-100";

  return (
    <div
      className={`shadow-inner-diagonal-lg flex py-2 px-3 rounded-lg my-2 text-md whitespace-pre-wrap ${colors[variant]} ${reset}`}
    >
      <div className="h-full mr-2 text-sm">{emojis[variant]}</div>
      <span className="inline-block text-sm">{children}</span>
    </div>
  );
};

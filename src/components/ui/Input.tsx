import { cn } from "@/lib/utils";
import { forwardRef, type InputHTMLAttributes, type TextareaHTMLAttributes, type SelectHTMLAttributes, type ReactNode } from "react";

const baseField =
  "w-full rounded-md border bg-white px-4 py-3 text-body text-gray-900 placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/30 transition-colors disabled:opacity-50";

interface FieldShellProps {
  label?: string;
  error?: string;
  hint?: string;
  required?: boolean;
  id: string;
  children: ReactNode;
}

export function FieldShell({ label, error, hint, required, id, children }: FieldShellProps) {
  return (
    <div className="flex flex-col gap-1.5">
      {label && (
        <label htmlFor={id} className="text-body-sm font-medium text-gray-700">
          {label}
          {required && <span className="ml-1 text-error">*</span>}
        </label>
      )}
      {children}
      {error ? (
        <p className="text-caption text-error">{error}</p>
      ) : hint ? (
        <p className="text-caption text-gray-500">{hint}</p>
      ) : null}
    </div>
  );
}

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  hint?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { label, error, hint, id, required, className, ...props },
  ref,
) {
  const inputId = id ?? props.name ?? crypto.randomUUID();
  return (
    <FieldShell id={inputId} label={label} error={error} hint={hint} required={required}>
      <input
        id={inputId}
        ref={ref}
        required={required}
        className={cn(baseField, error && "border-error focus:border-error focus:ring-error/30", className)}
        {...props}
      />
    </FieldShell>
  );
});

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  hint?: string;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(function Textarea(
  { label, error, hint, id, required, className, ...props },
  ref,
) {
  const inputId = id ?? props.name ?? crypto.randomUUID();
  return (
    <FieldShell id={inputId} label={label} error={error} hint={hint} required={required}>
      <textarea
        id={inputId}
        ref={ref}
        required={required}
        className={cn(
          baseField,
          "min-h-[120px] resize-y",
          error && "border-error focus:border-error focus:ring-error/30",
          className,
        )}
        {...props}
      />
    </FieldShell>
  );
});

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  hint?: string;
  options: ReadonlyArray<{ value: string; label: string }>;
  placeholder?: string;
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(function Select(
  { label, error, hint, id, required, className, options, placeholder = "Select an option", ...props },
  ref,
) {
  const inputId = id ?? props.name ?? crypto.randomUUID();
  return (
    <FieldShell id={inputId} label={label} error={error} hint={hint} required={required}>
      <div className="relative">
        <select
          id={inputId}
          ref={ref}
          required={required}
          className={cn(
            baseField,
            "appearance-none pr-10",
            error && "border-error focus:border-error focus:ring-error/30",
            className,
          )}
          {...props}
        >
          <option value="">{placeholder}</option>
          {options.map((o) => (
            <option key={o.value} value={o.value}>
              {o.label}
            </option>
          ))}
        </select>
        <svg
          aria-hidden
          viewBox="0 0 20 20"
          className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500"
        >
          <path
            fill="currentColor"
            d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 11.09l3.71-3.86a.75.75 0 1 1 1.08 1.04l-4.24 4.41a.75.75 0 0 1-1.08 0L5.21 8.27a.75.75 0 0 1 .02-1.06Z"
          />
        </svg>
      </div>
    </FieldShell>
  );
});

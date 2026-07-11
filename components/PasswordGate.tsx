"use client";

import { useEffect, useState, type FormEvent } from "react";
import { PaloMark } from "./icons";

// NOTE: This is a client-side gate — the password lives in the shipped JS, so
// it's a light access barrier for an internal sales tool, not real security.
// For true protection, put the app behind server auth (e.g. Vercel + a
// password/SSO middleware). Kept simple here so it also works on static hosting.
const PASSWORD = "revenue99";
const UNLOCK_KEY = "palo-chat/unlocked/v1";

export function PasswordGate({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);
  const [unlocked, setUnlocked] = useState(false);
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    setMounted(true);
    try {
      if (localStorage.getItem(UNLOCK_KEY) === "1") setUnlocked(true);
    } catch {
      /* ignore */
    }
  }, []);

  const submit = (e: FormEvent) => {
    e.preventDefault();
    if (value.trim() === PASSWORD) {
      try {
        localStorage.setItem(UNLOCK_KEY, "1");
      } catch {
        /* ignore */
      }
      setUnlocked(true);
    } else {
      setError(true);
    }
  };

  // Avoid a flash of the gate (or the app) before we've checked localStorage.
  if (!mounted) return null;
  if (unlocked) return <>{children}</>;

  return (
    <div className="flex h-dvh items-center justify-center bg-canvas px-6">
      <form
        onSubmit={submit}
        className="w-full max-w-sm rounded-2xl border border-hairline bg-panel/80 p-8 text-center"
      >
        <div className="mb-5 flex justify-center">
          <PaloMark width={44} height={44} />
        </div>
        <h1 className="text-[22px] font-semibold tracking-[-0.02em] text-ink">
          Palo Sales Co-pilot
        </h1>
        <p className="mt-1.5 text-[14px] text-muted">
          Enter the team password to continue.
        </p>

        <input
          type="password"
          autoFocus
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
            setError(false);
          }}
          placeholder="Password"
          className={`mt-6 w-full rounded-xl border bg-elevated px-4 py-3 text-center text-[16px] text-ink outline-none transition placeholder:text-faint ${
            error
              ? "border-red-500/60 focus:border-red-500"
              : "border-hairline focus:border-brand"
          }`}
          aria-label="Team password"
        />

        {error && (
          <p className="mt-2 text-[13px] text-red-400">
            Incorrect password. Try again.
          </p>
        )}

        <button
          type="submit"
          disabled={!value.trim()}
          className="mt-4 w-full rounded-full bg-brand px-4 py-3 text-[15px] font-medium text-white transition enabled:hover:bg-brand-glow disabled:bg-elevated disabled:text-faint"
        >
          Unlock
        </button>
      </form>
    </div>
  );
}

import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

const clarityProjectId = import.meta.env.VITE_CLARITY_PROJECT_ID;

if (clarityProjectId && typeof window !== "undefined") {
	((c: Window & { clarity?: (...args: unknown[]) => void }, l: Document, a: string, r: string, i: string, t?: HTMLScriptElement, y?: HTMLScriptElement) => {
		c[a as keyof Window] = c[a as keyof Window] || ((...args: unknown[]) => {
			((c as Window & { [key: string]: unknown })[a] as { q?: unknown[] }).q = [
				...((((c as Window & { [key: string]: unknown })[a] as { q?: unknown[] }).q) || []),
				args,
			];
		});
		t = l.createElement(r) as HTMLScriptElement;
		t.async = true;
		t.src = `https://www.clarity.ms/tag/${i}`;
		y = l.getElementsByTagName(r)[0] as HTMLScriptElement;
		y.parentNode?.insertBefore(t, y);
	})(window, document, "clarity", "script", clarityProjectId);
}

createRoot(document.getElementById("root")!).render(<App />);
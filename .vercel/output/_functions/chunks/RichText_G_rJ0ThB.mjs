import "react";
import { jsx } from "react/jsx-runtime";
import { DocumentRenderer } from "@keystatic/core/renderer";
//#region src/components/RichText.tsx
function RichText({ document, className }) {
	if (!document || !Array.isArray(document)) return null;
	return /* @__PURE__ */ jsx(DocumentRenderer, {
		document,
		renderers: { block: { paragraph: ({ children }) => {
			return className ? /* @__PURE__ */ jsx("p", {
				className,
				children
			}) : /* @__PURE__ */ jsx("p", { children });
		} } }
	});
}
//#endregion
export { RichText as t };

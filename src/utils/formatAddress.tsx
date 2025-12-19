import React from "react";

export function formatWithLineBreaks(text?: string, delimiter: string | RegExp = " &$ ") {
  if (!text) return null;

  return text.split(delimiter).map((part, i, arr) => (
    <React.Fragment key={i}>
      {part.trim()}
      {i < arr.length - 1 && <br />}
    </React.Fragment>
  ));
}

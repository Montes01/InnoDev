import type { MutableRef } from "preact/hooks";
import "./KeyFrames.css";

export const ShowAndDisappear = (
  ref: MutableRef<HTMLElement>,
  duration: number,
  hide?: boolean
) => {
  ref.current.style.animationName = "showAndDissappear";
  hide ? (ref.current.style.display = "block") : null;
  ref.current.style.animationDuration = `${duration}s`;
  ref.current.style.animationIterationCount = "1";
  ref.current.style.animationTimingFunction = "linear";

  setTimeout(() => {
    ref.current.style.animationName = null;
    ref.current.style.animationDuration = null;
    ref.current.style.animationIterationCount = null;
    ref.current.style.animationTimingFunction = null;
    hide ? (ref.current.style.display = "none") : null;
  }, duration * 1000);
};

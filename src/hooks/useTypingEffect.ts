import { useState, useEffect } from "react";

export function useTypingEffect(words: string[], period = 2000): string {
  const [displayed, setDisplayed] = useState<string>("");
  const [isDeleting, setIsDeleting] = useState<boolean>(false);
  const [wordIndex, setWordIndex] = useState<number>(0);
  const [delta, setDelta] = useState<number>(200);

  useEffect(() => {
    const full = words[wordIndex % words.length];

    const timer = setTimeout(() => {
      if (isDeleting) {
        setDisplayed(full.substring(0, displayed.length - 1));
        setDelta(100);
      } else {
        setDisplayed(full.substring(0, displayed.length + 1));
        setDelta(200 - Math.random() * 100);
      }

      if (!isDeleting && displayed === full) {
        setDelta(period);
        setIsDeleting(true);
      } else if (isDeleting && displayed === "") {
        setIsDeleting(false);
        setWordIndex((i) => i + 1);
        setDelta(500);
      }
    }, delta);

    return () => clearTimeout(timer);
  }, [displayed, isDeleting, wordIndex, delta, words, period]);

  return displayed;
}

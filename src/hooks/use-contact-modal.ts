import { useState, useEffect } from "react";

const EVENT_NAME = "toggle-contact-modal";

export function useContactModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleToggle = (e: Event) => {
      const customEvent = e as CustomEvent<{ isOpen: boolean }>;
      setIsOpen(customEvent.detail.isOpen);
    };

    window.addEventListener(EVENT_NAME, handleToggle);
    return () => window.removeEventListener(EVENT_NAME, handleToggle);
  }, []);

  const open = () => {
    window.dispatchEvent(new CustomEvent(EVENT_NAME, { detail: { isOpen: true } }));
  };

  const close = () => {
    window.dispatchEvent(new CustomEvent(EVENT_NAME, { detail: { isOpen: false } }));
  };

  return { isOpen, open, close };
}

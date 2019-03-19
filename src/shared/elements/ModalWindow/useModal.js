import { useState } from "react";

export const useModal = () => {
  const [open, setOpen] = useState(false);

  const handleAction = (callback) => {
    setOpen(!open)
    typeof callback === 'function' && callback();
  }

  return [open, handleAction];
}
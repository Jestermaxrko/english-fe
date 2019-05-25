import { useState } from 'react';

export const usePopover = () => {
  const [anchorEl, setAnchorEl] = useState();
  const onOpen = ({ currentTarget }) => setAnchorEl(currentTarget);
  const onClose = () => setAnchorEl(null);
  return [anchorEl, onOpen, onClose];
};

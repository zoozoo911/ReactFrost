import React from "react";

type Events = {
  // MouseEvents
  onClick?: (event?: React.MouseEvent) => void;
  onMouseDown?: (event?: React.MouseEvent) => void;
  onMouseUp?: (event?: React.MouseEvent) => void;
  onMouseMove?: (event?: React.MouseEvent) => void;
  onMouseEnter?: (event?: React.MouseEvent) => void;
  onMouseLeave?: (event?: React.MouseEvent) => void;
  // KeyboardEvents
  onKeyDown?: (event?: React.KeyboardEvent) => void;
  onKeyUp?: (event?: React.KeyboardEvent) => void;
  // FormEvents
  onChange?: (event?: React.ChangeEvent) => void;
  onSubmit?: (event?: React.FormEvent) => void;
  // FocusEvents
  onFocus?: (event?: React.FocusEvent) => void;
  onBlur?: (event?: React.FocusEvent) => void;
  // TouchEvents
  onTouchStart?: (event?: React.TouchEvent) => void;
  onTouchMove?: (event?: React.TouchEvent) => void;
  onTouchEnd?: (event?: React.TouchEvent) => void;
  // ScrollEvents
  onScroll?: (event?: React.UIEvent) => void;
  // AnimationEvents
  onAnimationStart?: (event?: React.AnimationEvent) => void;
  onAnimationEnd?: (event?: React.AnimationEvent) => void;
  onAnimationIteration?: (event?: React.AnimationEvent) => void;
  // ClipboardEvents
  onCopy?: (event?: React.ClipboardEvent) => void;
  onCut?: (event?: React.ClipboardEvent) => void;
  onPaste?: (event?: React.ClipboardEvent) => void;
};

export default Events;

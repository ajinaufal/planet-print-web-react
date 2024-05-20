import { useRef } from 'react';

export function CreateProductState({ usecase }) {
  const inputImageRef = useRef(null);

  return { inputImageRef };
}

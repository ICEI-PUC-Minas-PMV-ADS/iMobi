import { useEffect, useState } from "react";

export default function useImagePreview(file: FileList | null) {
  const [imgSrc, setImgSrc] = useState<string | null>(null);

  useEffect(() => {
    if (file && file[0]) {
      const newUrl = URL.createObjectURL(file[0]);
      setImgSrc(newUrl);

      return () => {
        URL.revokeObjectURL(newUrl);
      };
    }
  }, [file]);

  return [imgSrc, setImgSrc] as const;
}

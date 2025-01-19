interface ImagePropsType {
  src: string;
  alt?: string;
  width?: number;
  height?: number;
  className?: string;
  loading: 'eager' | 'lazy';
}

export default function Image({
  src,
  alt,
  width,
  height,
  className,
  loading,
  ...props
}: ImagePropsType) {
  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={`pointer-events-none rounded-xl ${className}`}
      loading={loading}
      {...props}
    />
  );
}

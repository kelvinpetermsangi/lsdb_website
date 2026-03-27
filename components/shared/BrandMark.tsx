import Image from "next/image";

type BrandMarkProps = {
  variant?: "full" | "icon";
  className?: string;
  priority?: boolean;
};

export default function BrandMark({
  variant = "full",
  className = "",
  priority = false,
}: BrandMarkProps) {
  const src =
    variant === "icon"
      ? "/images/brand/lsdb-icon.png"
      : "/images/brand/lsdb-logo.png";

  const dimensions =
    variant === "icon"
      ? { width: 150, height: 130, alt: "LSDB icon" }
      : { width: 520, height: 268, alt: "Learning and Skills Development Bureau logo" };

  return (
    <Image
      src={src}
      alt={dimensions.alt}
      width={dimensions.width}
      height={dimensions.height}
      priority={priority}
      className={`brand-reveal ${className}`.trim()}
    />
  );
}

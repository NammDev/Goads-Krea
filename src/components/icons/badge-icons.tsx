import { cn } from "@/lib/utils";

interface IconProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

const sizeMap = {
  sm: 16,
  md: 20,
  lg: 24,
};

/** Krea brand icon - layered squares design */
export function KreaIcon({ className, size = "sm" }: IconProps) {
  const px = sizeMap[size];
  return (
    <svg
      className={className}
      width={px}
      height={px}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="currentColor" />
      <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" />
      <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

/** Veo (Google) badge icon - green circle with white center */
export function VeoIcon({ className, size = "sm" }: IconProps) {
  const px = sizeMap[size];
  return (
    <svg
      className={className}
      width={px}
      height={px}
      viewBox="0 0 24 24"
      fill="none"
    >
      <circle cx="12" cy="12" r="10" fill="#22c55e" />
      <circle cx="12" cy="12" r="4" fill="white" />
    </svg>
  );
}

/** Topaz badge icon - purple gem shape */
export function TopazIcon({ className, size = "sm" }: IconProps) {
  const px = sizeMap[size];
  return (
    <svg
      className={className}
      width={px}
      height={px}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path d="M12 2L4 6V12L12 22L20 12V6L12 2Z" fill="#8b5cf6" />
      <path d="M12 8L8 10V14L12 18L16 14V10L12 8Z" fill="white" />
    </svg>
  );
}

/** Hailuo badge icon - circle with dot center */
export function HailuoIcon({ className, size = "sm" }: IconProps) {
  const px = sizeMap[size];
  return (
    <svg
      className={className}
      width={px}
      height={px}
      viewBox="0 0 24 24"
      fill="none"
    >
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
      <circle cx="12" cy="12" r="3" fill="currentColor" />
    </svg>
  );
}

/** Badge icon type for type-safe badge selection */
export type BadgeIconType = "krea" | "veo" | "topaz" | "hailuo";

/** Map of badge type to icon component */
export const BadgeIcons: Record<
  BadgeIconType,
  React.FC<IconProps>
> = {
  krea: KreaIcon,
  veo: VeoIcon,
  topaz: TopazIcon,
  hailuo: HailuoIcon,
};

/** Render badge icon by type with default styling */
export function getBadgeIcon(type: BadgeIconType, className?: string) {
  const Icon = BadgeIcons[type];
  const defaultClass =
    type === "krea" || type === "hailuo" ? "text-white" : "";
  return <Icon className={cn(defaultClass, className)} />;
}

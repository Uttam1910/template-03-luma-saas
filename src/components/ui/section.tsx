import { cn } from "@/lib/cn";
import { Container } from "@/components/ui/container";

export function Section({
  id,
  className,
  containerClassName,
  children,
  as: Tag = "section",
}: {
  id?: string;
  className?: string;
  containerClassName?: string;
  children: React.ReactNode;
  as?: "section" | "div";
}) {
  return (
    <Tag id={id} className={cn("py-20 sm:py-24 lg:py-28", className)}>
      <Container className={containerClassName}>{children}</Container>
    </Tag>
  );
}

export function Eyebrow({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-accent",
        className,
      )}
    >
      <span aria-hidden className="h-1 w-1 rounded-full bg-accent" />
      {children}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  headingId,
  level = 2,
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  headingId?: string;
  level?: 2 | 3;
  className?: string;
}) {
  const Heading = level === 2 ? "h2" : "h3";
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "center" && "items-center text-center",
        className,
      )}
    >
      {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
      <Heading
        id={headingId}
        className="max-w-2xl text-3xl font-semibold sm:text-4xl lg:text-[2.6rem] lg:leading-[1.1]"
      >
        {title}
      </Heading>
      {description ? (
        <p className="max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}

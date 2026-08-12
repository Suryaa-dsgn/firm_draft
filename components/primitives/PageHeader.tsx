import { MonoLabel } from "./MonoLabel";
import { Reveal } from "./Reveal";

interface PageHeaderProps {
  tag: string;
  title: React.ReactNode;
  subtext: React.ReactNode;
  titleMaxWidth?: string;
}

export function PageHeader({
  tag,
  title,
  subtext,
  titleMaxWidth = "max-w-3xl",
}: PageHeaderProps) {
  return (
    <section
      className="relative flex flex-col"
      style={{
        background:
          "linear-gradient(160deg, var(--accent) 0%, #1530A8 50%, #080D3E 100%)",
      }}
    >
      <div className="mx-auto w-full max-w-content px-[clamp(20px,5vw,64px)] pt-20 md:pt-28 pb-16">
        <Reveal>
          <MonoLabel
            variant="tag"
            className="text-[rgba(255,255,255,0.55)]"
          >
            {tag}
          </MonoLabel>
        </Reveal>
        <Reveal delay={0.08}>
          <h1
            className={`mt-6 ${titleMaxWidth} text-display-l font-semibold text-white text-balance`}
          >
            {title}
          </h1>
        </Reveal>
        <Reveal delay={0.16}>
          <p className="mt-6 max-w-xl text-body-lg text-[rgba(255,255,255,0.72)]">
            {subtext}
          </p>
        </Reveal>
      </div>
    </section>
  );
}

interface PageIntroProps {
  title: string;
  paragraphs: string[];
  eyebrow?: string;
  highlights?: string[];
  asideTitle?: string;
}

const PageIntro = ({ title, paragraphs, eyebrow, highlights, asideTitle }: PageIntroProps) => (
  <section className="section-padding pt-4 md:pt-6">
    <div className="container-tight grid gap-7 lg:grid-cols-[minmax(0,0.98fr)_340px] lg:items-start lg:gap-8">
      <div className="max-w-[42rem]">
        {eyebrow && <p className="section-kicker mb-4">{eyebrow}</p>}
        <h2 className="mb-6 text-3xl font-serif text-primary md:text-4xl lg:text-5xl">{title}</h2>
        {paragraphs.map((p, i) => (
          <p key={i} className="mb-3 text-base leading-8 text-muted-foreground md:text-lg last:mb-0">{p}</p>
        ))}
      </div>

      {highlights && highlights.length > 0 && (
        <aside className="panel-surface self-start p-5 md:p-6">
          <p className="section-kicker mb-4">At A Glance</p>
          <h3 className="mb-4 text-2xl font-serif text-primary md:text-[2rem]">
            {asideTitle || "Common work we handle"}
          </h3>
          <div className="space-y-3">
            {highlights.slice(0, 6).map((item) => (
              <div key={item} className="flex items-start gap-3 rounded-2xl bg-muted/45 px-4 py-3">
                <span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-gold" />
                <p className="text-sm leading-relaxed text-foreground">{item}</p>
              </div>
            ))}
          </div>
        </aside>
      )}
    </div>
  </section>
);

export default PageIntro;

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
  className?: string;
}

const FAQAccordion = ({ items, className }: FAQAccordionProps) => (
  <Accordion type="single" collapsible className={["space-y-4", className].filter(Boolean).join(" ")}>
    {items.map((item, index) => (
      <AccordionItem key={index} value={`faq-${index}`} className="rounded-3xl border border-border bg-background px-5 md:px-6">
        <AccordionTrigger className="text-left text-base md:text-lg font-medium text-primary hover:text-gold hover:no-underline py-5">
          {item.question}
        </AccordionTrigger>
        <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
          {item.answer}
        </AccordionContent>
      </AccordionItem>
    ))}
  </Accordion>
);

export default FAQAccordion;

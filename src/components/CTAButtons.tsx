import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Phone } from "lucide-react";
import { Link } from "react-router-dom";

interface CTAButtonsProps {
  variant?: "default" | "hero" | "dark-section";
  className?: string;
  requestHref?: string;
}

const CTAButtons = ({ variant = "default", className, requestHref = "/contact" }: CTAButtonsProps) => {
  const buttonClassName =
    "h-12 rounded-full px-6 text-[0.78rem] uppercase tracking-[0.16em] shadow-[0_20px_46px_-28px_rgba(13,24,46,0.38)]";
  const useAnchor = requestHref.startsWith("#");
  const requestButton = useAnchor ? (
    <a href={requestHref}>Request Service</a>
  ) : (
    <Link to={requestHref}>Request Service</Link>
  );

  if (variant === "dark-section") {
    return (
      <div className={cn("flex flex-col gap-3 sm:flex-row", className)}>
        <Button variant="gold" size="lg" className={buttonClassName} asChild>
          {requestButton}
        </Button>
        <Button
          variant="white-outline"
          size="lg"
          className={cn(
            buttonClassName,
            "border-primary-foreground/18 bg-primary-foreground/5 hover:bg-primary-foreground/12 hover:text-primary-foreground",
          )}
          asChild
        >
          <a href="tel:4086467828">
            <Phone className="w-4 h-4 mr-2" />
            (408) 646-7828
          </a>
        </Button>
      </div>
    );
  }

  return (
    <div className={cn("flex flex-col gap-3 sm:flex-row", className)}>
      <Button variant="gold" size="lg" className={buttonClassName} asChild>
        {requestButton}
      </Button>
      <Button
        variant="outline"
        size="lg"
        className={cn(buttonClassName, "border-border/90 bg-background/70 hover:bg-background")}
        asChild
      >
        <a href="tel:4086467828">
          <Phone className="w-4 h-4 mr-2" />
          (408) 646-7828
        </a>
      </Button>
    </div>
  );
};

export default CTAButtons;

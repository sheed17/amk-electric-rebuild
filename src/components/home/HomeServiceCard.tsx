import { motion } from "framer-motion";
import { ArrowRight, type LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";

interface HomeServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  to: string;
}

const HomeServiceCard = ({ icon: Icon, title, description, to }: HomeServiceCardProps) => (
  <motion.div
    whileHover={{ y: -6 }}
    transition={{ duration: 0.18, ease: "easeOut" }}
    className="h-full"
  >
    <Link
      to={to}
      className="panel-surface group flex h-full flex-col p-6 md:p-7 transition-all duration-300 hover:border-gold/45 hover:shadow-[0_26px_70px_-38px_rgba(13,24,46,0.38)]"
    >
      <div className="mb-5 flex items-center justify-between gap-4">
        <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gold/12 text-gold">
          <Icon className="h-5 w-5" />
        </span>
        <span className="section-kicker text-primary/50">Service</span>
      </div>

      <h3 className="text-3xl font-serif text-primary transition-colors duration-300 group-hover:text-gold">
        {title}
      </h3>
      <p className="mt-3 flex-1 text-sm leading-7 text-muted-foreground md:text-[15px]">
        {description}
      </p>

      <span className="mt-6 inline-flex items-center gap-2 text-[0.76rem] uppercase tracking-[0.18em] text-gold">
        Learn More
        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
      </span>
    </Link>
  </motion.div>
);

export default HomeServiceCard;

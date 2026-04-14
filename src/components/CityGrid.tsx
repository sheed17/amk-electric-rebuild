import { MapPin } from "lucide-react";
import { cities } from "@/data/cities";

const CityGrid = () => (
  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
    {cities.map(city => (
      <div key={city.name} className="flex items-start gap-3 bg-card border border-border rounded-lg p-4">
        <MapPin className="w-4 h-4 text-gold mt-1 shrink-0" />
        <div>
          <h3 className="font-semibold text-primary text-sm">{city.name}</h3>
          <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{city.description}</p>
        </div>
      </div>
    ))}
  </div>
);

export default CityGrid;

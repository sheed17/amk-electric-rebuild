import { useState } from "react";
import { businessContact } from "@/components/site/site-data";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const serviceOptions = [
  "Electrical Repairs",
  "Panel Upgrade",
  "EV Charger Installation",
  "Lighting Installation",
  "Wiring & Rewiring",
  "Outlet & Switch Work",
  "Ceiling Fan Installation",
  "Commercial Electrical",
  "Other",
];

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [serviceNeeded, setServiceNeeded] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = String(formData.get("name") || "").trim();
    const phone = String(formData.get("phone") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const city = String(formData.get("city") || "").trim();
    const message = String(formData.get("message") || "").trim();
    const subject = encodeURIComponent(
      `Website Quote Request${serviceNeeded ? ` - ${serviceNeeded}` : ""}`,
    );
    const body = encodeURIComponent(
      [
        "New quote request from the contact page.",
        "",
        `Name: ${name || "Not provided"}`,
        `Phone: ${phone || "Not provided"}`,
        `Email: ${email || "Not provided"}`,
        `Service needed: ${serviceNeeded || "Not provided"}`,
        `City: ${city || "Not provided"}`,
        "",
        "Project details:",
        message || "Not provided",
      ].join("\n"),
    );

    setSubmitted(true);
    window.location.href = `${businessContact.email.url}?subject=${subject}&body=${body}`;
  };

  if (submitted) {
    return (
      <div className="bg-card border border-border rounded-lg p-8 text-center">
        <h3 className="text-xl font-serif text-primary mb-2">Thank you for reaching out</h3>
        <p className="text-muted-foreground">We&apos;ll get back to you as soon as possible. For immediate needs, call us at <a href={businessContact.phone.url} className="text-gold font-medium">{businessContact.phone.text}</a>.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-card border border-border rounded-lg p-6 md:p-8 space-y-5">
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-primary mb-1.5">Name</label>
          <Input required name="name" placeholder="Full name" className="bg-background" />
        </div>
        <div>
          <label className="block text-sm font-medium text-primary mb-1.5">Phone</label>
          <Input required name="phone" type="tel" placeholder="Best phone number" className="bg-background" />
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-primary mb-1.5">Email</label>
        <Input required name="email" type="email" placeholder="Best email address" className="bg-background" />
      </div>
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-primary mb-1.5">Service Needed</label>
          <Select value={serviceNeeded} onValueChange={setServiceNeeded}>
            <SelectTrigger className="bg-background">
              <SelectValue placeholder="Select a service" />
            </SelectTrigger>
            <SelectContent>
              {serviceOptions.map(opt => (
                <SelectItem key={opt} value={opt.toLowerCase().replace(/ /g, "-")}>{opt}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div>
          <label className="block text-sm font-medium text-primary mb-1.5">City</label>
          <Input name="city" placeholder="City or neighborhood" className="bg-background" />
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-primary mb-1.5">Message</label>
        <Textarea name="message" placeholder="Tell us about the work you need, what is happening, or what you want to install..." rows={4} className="bg-background" />
      </div>
      <Button variant="gold" size="lg" type="submit" className="w-full sm:w-auto">
        Send Request
      </Button>
    </form>
  );
};

export default ContactForm;

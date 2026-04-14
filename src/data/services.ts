export interface ServiceData {
  slug: string;
  title: string;
  shortTitle: string;
  metaTitle: string;
  metaDescription: string;
  heroHeadline: string;
  heroSubcopy: string;
  introTitle: string;
  introText: string[];
  signsTitle: string;
  signs: { title: string; description: string }[];
  includedTitle: string;
  included: string[];
  whyChooseTitle: string;
  whyChoose: { title: string; description: string }[];
  faqs: { question: string; answer: string }[];
  relatedSlugs: string[];
}

export const services: ServiceData[] = [
  {
    slug: "residential-electrical",
    title: "Residential Electrical Services",
    shortTitle: "Residential",
    metaTitle: "Residential Electrician San Jose | AMK Electric",
    metaDescription: "Licensed residential electrical services in San Jose and the Bay Area. Repairs, panel upgrades, lighting, EV chargers, and remodel wiring. Call (408) 646-7828.",
    heroHeadline: "Residential Electrical Services in San Jose",
    heroSubcopy: "From routine repairs to full remodel wiring, AMK Electric provides reliable electrical work for homeowners across San Jose and the Bay Area.",
    introTitle: "Electrical Work for Your Home",
    introText: [
      "Your home's electrical system touches every part of daily life — from the lights you turn on each morning to the outlets powering your appliances. When something isn't working right, or when you're planning an upgrade, you need an electrician who understands residential systems inside and out.",
      "AMK Electric works with homeowners throughout San Jose, Santa Clara, Sunnyvale, Cupertino, and surrounding Bay Area communities. Whether it's a single outlet replacement or a whole-home rewire, we focus on doing the job right the first time."
    ],
    signsTitle: "When to Call a Residential Electrician",
    signs: [
      { title: "Flickering or dimming lights", description: "Inconsistent lighting can signal loose connections, overloaded circuits, or aging wiring that needs attention." },
      { title: "Outlets that feel warm or don't work", description: "Hot outlets, dead outlets, or outlets that spark are signs of wiring issues that shouldn't be ignored." },
      { title: "Frequent breaker trips", description: "If your breaker panel trips regularly, your circuits may be overloaded or there could be a fault in the wiring." },
      { title: "Planning a kitchen or bathroom remodel", description: "Remodels almost always require electrical updates — new circuits, upgraded panels, and properly placed outlets." },
      { title: "Adding an EV charger or major appliance", description: "High-draw equipment needs dedicated circuits and possibly a panel upgrade to handle the additional load." },
      { title: "Buying or selling a home", description: "Electrical inspections and updates are common during real estate transactions, especially in older Bay Area homes." },
    ],
    includedTitle: "What We Handle for Homeowners",
    included: [
      "Electrical troubleshooting and diagnostics",
      "Outlet and switch repair or installation",
      "Lighting installation — recessed, fixtures, exterior",
      "Ceiling fan installation",
      "Panel upgrades and breaker replacement",
      "Dedicated circuits for appliances and EV chargers",
      "Whole-home rewiring for older homes",
      "Smoke and carbon monoxide detector installation",
      "Surge protection",
      "Remodel and addition wiring",
    ],
    whyChooseTitle: "Why Homeowners Choose AMK Electric",
    whyChoose: [
      { title: "Local and responsive", description: "We're based in San Jose and prioritize clear communication and timely scheduling." },
      { title: "Clean, careful work", description: "We treat your home with respect — clean workspaces, proper installations, and attention to detail." },
      { title: "Straightforward pricing", description: "You'll know what to expect before work begins. No surprise charges." },
      { title: "Wide range of expertise", description: "From minor repairs to complex rewiring, we handle it all under one roof." },
    ],
    faqs: [
      { question: "Do you work on older homes in San Jose?", answer: "Yes. Many Bay Area homes have older wiring systems that need updating. We regularly work on homes with outdated panels, knob-and-tube wiring, and undersized electrical systems." },
      { question: "Can you add outlets to a room?", answer: "Absolutely. We can add outlets, move existing ones, or install dedicated circuits wherever you need them." },
      { question: "How do I know if I need a panel upgrade?", answer: "If your panel is more than 20–30 years old, uses fuses instead of breakers, or can't keep up with your electrical needs, it's worth having us take a look." },
      { question: "Do you handle permit work?", answer: "Yes. When a project requires permits, we handle the process and make sure the work meets all applicable codes." },
    ],
    relatedSlugs: ["electrical-repairs", "panel-upgrades", "lighting-installation", "wiring-rewiring"],
  },
  {
    slug: "commercial-electrical",
    title: "Commercial Electrical Services",
    shortTitle: "Commercial",
    metaTitle: "Commercial Electrician San Jose | AMK Electric",
    metaDescription: "Commercial electrical services for offices, retail, and light commercial spaces in San Jose and the Bay Area. Call AMK Electric at (408) 646-7828.",
    heroHeadline: "Commercial Electrical Services in San Jose",
    heroSubcopy: "AMK Electric provides dependable electrical work for offices, retail spaces, and light commercial properties across the Bay Area.",
    introTitle: "Electrical Support for Your Business",
    introText: [
      "A functioning electrical system is the backbone of any commercial space. Whether you're opening a new office, upgrading a retail location, or dealing with an unexpected outage, downtime costs money and disrupts operations.",
      "AMK Electric works with property managers, business owners, and tenants throughout San Jose and the surrounding Bay Area. We understand that commercial jobs require coordination, reliability, and minimal disruption to your operations."
    ],
    signsTitle: "Common Commercial Electrical Needs",
    signs: [
      { title: "Tenant improvement buildouts", description: "New tenants typically need electrical modifications — additional circuits, updated lighting, and reconfigured power layouts." },
      { title: "Lighting upgrades or retrofits", description: "Outdated fluorescent systems waste energy. LED retrofits reduce costs and improve the working environment." },
      { title: "Power distribution issues", description: "If your space has circuits tripping, inconsistent power, or insufficient outlets, the electrical system may need attention." },
      { title: "Code compliance updates", description: "Older commercial buildings may need electrical updates to meet current code requirements during renovations." },
      { title: "Adding equipment or machinery", description: "New commercial equipment often requires dedicated circuits and proper power infrastructure." },
      { title: "Emergency troubleshooting", description: "When something goes wrong, you need a responsive electrician who can diagnose and resolve the issue quickly." },
    ],
    includedTitle: "Commercial Services We Provide",
    included: [
      "Office and retail electrical buildouts",
      "Commercial lighting installation and retrofits",
      "Power distribution and panel work",
      "Circuit additions and dedicated circuits",
      "Electrical troubleshooting and repair",
      "Code compliance updates",
      "Tenant improvement electrical work",
      "Emergency electrical service",
      "Exterior and parking lot lighting",
      "Sign and display lighting",
    ],
    whyChooseTitle: "Why Businesses Work with AMK Electric",
    whyChoose: [
      { title: "Minimal disruption", description: "We coordinate around your business hours and work efficiently to keep downtime short." },
      { title: "Clear communication", description: "You'll know the scope, timeline, and cost before we start. We keep you updated throughout the project." },
      { title: "Reliable and on time", description: "Commercial work runs on schedules. We show up when we say we will and finish what we commit to." },
      { title: "Local Bay Area contractor", description: "We know the local codes, permitting processes, and building requirements in San Jose and surrounding cities." },
    ],
    faqs: [
      { question: "Do you work on tenant improvements?", answer: "Yes. We regularly handle electrical work for tenant improvement projects in San Jose and the Bay Area, including new circuits, lighting layouts, and power distribution." },
      { question: "Can you work after business hours?", answer: "We can coordinate scheduling to minimize disruption to your operations, including after-hours or weekend work when needed." },
      { question: "Do you handle permits for commercial work?", answer: "Yes. We manage the permitting process and ensure all work meets local and state electrical codes." },
      { question: "What size commercial projects do you take on?", answer: "We focus on light commercial work — offices, retail spaces, small warehouses, and similar properties. For large industrial or high-voltage projects, we're happy to refer you to a specialist." },
    ],
    relatedSlugs: ["lighting-installation", "electrical-repairs", "panel-upgrades", "wiring-rewiring"],
  },
  {
    slug: "electrical-repairs",
    title: "Electrical Repair Services",
    shortTitle: "Electrical Repairs",
    metaTitle: "Electrical Repairs San Jose | AMK Electric",
    metaDescription: "Fast, reliable electrical repair services in San Jose. Troubleshooting, outlet repair, breaker issues, and more. Call AMK Electric at (408) 646-7828.",
    heroHeadline: "Electrical Repairs in San Jose & the Bay Area",
    heroSubcopy: "When something electrical isn't working right, AMK Electric provides prompt troubleshooting and repair for homes and businesses in San Jose.",
    introTitle: "Get Electrical Problems Resolved",
    introText: [
      "Electrical issues range from minor annoyances to genuine safety concerns. A flickering light might just need a new switch, but it could also indicate a loose connection behind the wall. Either way, it's worth getting it checked by a qualified electrician.",
      "AMK Electric handles electrical repairs across San Jose and nearby Bay Area cities. We take the time to properly diagnose the issue before recommending a fix — so you're not paying for guesswork."
    ],
    signsTitle: "Signs You Need Electrical Repair",
    signs: [
      { title: "Outlets or switches not working", description: "Dead outlets or switches that don't respond often indicate wiring faults, tripped breakers, or connection issues." },
      { title: "Flickering or buzzing lights", description: "Lights that flicker, buzz, or dim may have loose wiring, faulty fixtures, or circuit overload." },
      { title: "Breakers tripping repeatedly", description: "Frequent trips can mean overloaded circuits, short circuits, or ground faults — all worth investigating." },
      { title: "Burning smell near outlets or panels", description: "Any smell of burning near electrical components is a safety concern and should be addressed immediately." },
      { title: "Intermittent power loss in part of the home", description: "Losing power to a room or section of your home usually indicates a circuit or wiring issue." },
      { title: "Sparking outlets or switches", description: "Visible sparking when plugging in or flipping switches is a clear sign of a wiring problem." },
    ],
    includedTitle: "Repair Services We Provide",
    included: [
      "Electrical troubleshooting and diagnostics",
      "Outlet and switch repair or replacement",
      "Breaker and fuse panel troubleshooting",
      "Light fixture repair",
      "GFCI and AFCI outlet issues",
      "Wiring fault detection",
      "Circuit repair and restoration",
      "Smoke detector troubleshooting",
      "Ceiling fan and fixture repair",
      "Emergency electrical repair",
    ],
    whyChooseTitle: "Why Call AMK Electric for Repairs",
    whyChoose: [
      { title: "Proper diagnosis first", description: "We identify the root cause, not just the symptom. That means fewer callbacks and lasting fixes." },
      { title: "Responsive scheduling", description: "Electrical problems don't wait. We work to get you on the schedule quickly." },
      { title: "Transparent pricing", description: "We explain the issue and the cost before starting any work." },
      { title: "Experienced troubleshooting", description: "Years of hands-on work means we know where to look and how to fix it efficiently." },
    ],
    faqs: [
      { question: "How quickly can you come out for a repair?", answer: "We do our best to schedule repair visits promptly. For urgent safety concerns, let us know when you call and we'll prioritize accordingly." },
      { question: "Can you fix a problem another electrician couldn't solve?", answer: "It happens more often than you'd think. We take a thorough, systematic approach to troubleshooting and are usually able to identify issues that were missed." },
      { question: "Is it worth repairing or should I replace?", answer: "It depends on the situation. We'll give you an honest recommendation based on the age, condition, and cost of the repair versus replacement." },
      { question: "Do you repair commercial electrical systems too?", answer: "Yes. We handle electrical repairs for both residential and light commercial properties." },
    ],
    relatedSlugs: ["residential-electrical", "panel-upgrades", "wiring-rewiring", "lighting-installation"],
  },
  {
    slug: "panel-upgrades",
    title: "Electrical Panel Upgrades",
    shortTitle: "Panel Upgrades",
    metaTitle: "Panel Upgrade San Jose | AMK Electric",
    metaDescription: "Electrical panel upgrades in San Jose. Outdated panels, capacity issues, and code compliance. Call AMK Electric at (408) 646-7828 for a consultation.",
    heroHeadline: "Electrical Panel Upgrades in San Jose",
    heroSubcopy: "Upgrade your home or business electrical panel to meet modern demands. AMK Electric handles panel replacements and upgrades throughout the Bay Area.",
    introTitle: "Is Your Electrical Panel Keeping Up?",
    introText: [
      "Your electrical panel is the central hub of your property's electrical system. It distributes power to every circuit in the building — and if it's outdated, undersized, or failing, it can cause problems ranging from nuisance breaker trips to genuine fire hazards.",
      "Many homes and businesses in San Jose were built decades ago with panels that weren't designed for today's electrical demands. Adding an EV charger, upgrading appliances, or remodeling a space often reveals that the existing panel can't handle the load."
    ],
    signsTitle: "Signs You May Need a Panel Upgrade",
    signs: [
      { title: "Your panel is 25+ years old", description: "Older panels — especially Federal Pacific, Zinsco, or fuse-based panels — may not meet current safety standards." },
      { title: "Breakers trip frequently", description: "Regular trips indicate your panel may be overloaded or that individual breakers are failing." },
      { title: "You're adding an EV charger", description: "Level 2 EV chargers require a 40–60 amp dedicated circuit, which may exceed your current panel's capacity." },
      { title: "Planning a remodel or addition", description: "Adding square footage or upgrading a kitchen/bathroom almost always increases electrical load requirements." },
      { title: "Your panel uses fuses instead of breakers", description: "Fuse panels are outdated and often lack the capacity and safety features of modern breaker panels." },
      { title: "You're adding major appliances", description: "Hot tubs, electric ranges, tankless water heaters, and similar appliances draw significant power." },
    ],
    includedTitle: "What a Panel Upgrade Involves",
    included: [
      "Evaluation of current panel and electrical load",
      "Panel replacement with modern breaker panel",
      "200-amp service upgrades",
      "Breaker replacement and circuit reorganization",
      "Grounding and bonding updates",
      "Permit coordination and final inspection",
      "Code compliance updates",
      "Load calculations for new equipment",
      "Labeling and documentation",
      "Coordination with utility company as needed",
    ],
    whyChooseTitle: "Why Choose AMK Electric for Panel Work",
    whyChoose: [
      { title: "End-to-end handling", description: "We manage the entire process — evaluation, permitting, installation, and inspection." },
      { title: "Proper load calculations", description: "We size your panel based on your actual and anticipated electrical needs, not just a rough estimate." },
      { title: "Code-compliant installation", description: "All work meets current NEC and local code requirements." },
      { title: "Clean, organized panels", description: "We take pride in neat, well-labeled panel work that future electricians will appreciate." },
    ],
    faqs: [
      { question: "How much does a panel upgrade cost?", answer: "Panel upgrade costs vary based on the scope of work — whether it's a simple breaker panel swap or a full 200-amp service upgrade. We provide clear pricing after evaluating your situation." },
      { question: "How long does a panel upgrade take?", answer: "Most residential panel upgrades are completed in one day. More complex jobs involving service upgrades may take longer and require utility coordination." },
      { question: "Will I lose power during the upgrade?", answer: "Yes, there will be a period during the installation where power needs to be shut off. We work to minimize this and will let you know what to expect." },
      { question: "Do I need a permit for a panel upgrade?", answer: "In most cases, yes. Panel upgrades typically require a permit and inspection. We handle the permit process for you." },
    ],
    relatedSlugs: ["ev-charger-installation", "residential-electrical", "wiring-rewiring", "electrical-repairs"],
  },
  {
    slug: "ev-charger-installation",
    title: "EV Charger Installation",
    shortTitle: "EV Chargers",
    metaTitle: "EV Charger Installation San Jose | AMK Electric",
    metaDescription: "Home EV charger installation in San Jose. Dedicated circuits, panel evaluation, and Level 2 charger setup. Call AMK Electric at (408) 646-7828.",
    heroHeadline: "EV Charger Installation in San Jose",
    heroSubcopy: "Charge your electric vehicle at home with a professionally installed Level 2 charger. AMK Electric handles the full installation process for Bay Area homeowners.",
    introTitle: "Home Charging Made Simple",
    introText: [
      "Owning an electric vehicle in the Bay Area makes sense — but waiting for a public charger doesn't. A Level 2 home charger gives you a full charge overnight, every night, without the hassle of finding an available station.",
      "AMK Electric installs EV chargers for homeowners across San Jose, Santa Clara, Cupertino, Sunnyvale, and surrounding communities. We handle everything from the initial panel evaluation to the final charger hookup."
    ],
    signsTitle: "What to Consider Before Installing an EV Charger",
    signs: [
      { title: "Your panel's available capacity", description: "Level 2 chargers typically need a 40–60 amp dedicated circuit. If your panel is near capacity, you may need an upgrade first." },
      { title: "Location of the charger", description: "Where you park determines how the circuit will be routed. Garage installations are typically the simplest." },
      { title: "Your vehicle's charging requirements", description: "Different EVs have different onboard charger capacities. We'll make sure your setup matches your vehicle's needs." },
      { title: "Permit and inspection requirements", description: "EV charger installations in San Jose and Santa Clara County typically require a permit. We handle that process." },
      { title: "Future needs", description: "If you're planning to add a second EV, it's worth sizing your electrical system for that now to avoid double the work later." },
      { title: "Available rebates or incentives", description: "Some local utilities and programs offer incentives for home EV charger installations. It's worth checking before you start." },
    ],
    includedTitle: "Our EV Charger Installation Process",
    included: [
      "Electrical panel evaluation and load calculation",
      "Dedicated circuit installation (40–60 amp)",
      "Panel upgrade if needed",
      "Charger mounting and wiring",
      "NEMA 14-50 outlet or hardwired connection",
      "Conduit routing and clean installation",
      "Permit coordination and final inspection",
      "Testing and commissioning",
    ],
    whyChooseTitle: "Why Choose AMK Electric for EV Charger Installation",
    whyChoose: [
      { title: "Complete service", description: "We handle the full scope — panel check, circuit run, charger mount, permitting, and inspection." },
      { title: "Proper panel evaluation", description: "We don't just add a circuit and hope for the best. We evaluate your panel's capacity and plan accordingly." },
      { title: "Clean installation", description: "Neat conduit runs, proper mounting, and professional-quality work you'll be happy to look at every day." },
      { title: "Bay Area experience", description: "We know the local permitting requirements and utility coordination process in San Jose and surrounding cities." },
    ],
    faqs: [
      { question: "Can my panel handle an EV charger?", answer: "It depends on your panel's current capacity and load. Many homes with 100-amp panels need an upgrade to support a Level 2 charger. We'll evaluate your panel and let you know." },
      { question: "What's the difference between Level 1 and Level 2 charging?", answer: "Level 1 uses a standard 120V outlet and charges slowly (3–5 miles of range per hour). Level 2 uses a 240V dedicated circuit and charges much faster (20–30+ miles per hour). Most homeowners prefer Level 2." },
      { question: "Do you install the charger itself, or just the outlet?", answer: "We can do either. We can install a NEMA 14-50 outlet for a plug-in charger, or hardwire a wall-mounted unit — depending on your charger and preference." },
      { question: "How long does an EV charger installation take?", answer: "A straightforward installation usually takes half a day to a full day, depending on the panel situation and circuit routing." },
    ],
    relatedSlugs: ["panel-upgrades", "residential-electrical", "dedicated-circuits", "wiring-rewiring"],
  },
  {
    slug: "lighting-installation",
    title: "Lighting Installation",
    shortTitle: "Lighting",
    metaTitle: "Lighting Installation San Jose | AMK Electric",
    metaDescription: "Professional lighting installation in San Jose. Recessed lights, fixtures, exterior lighting, and LED upgrades. Call AMK Electric at (408) 646-7828.",
    heroHeadline: "Lighting Installation in San Jose",
    heroSubcopy: "Upgrade your home or business lighting with professional installation from AMK Electric. Serving San Jose and the Bay Area.",
    introTitle: "Better Lighting, Better Spaces",
    introText: [
      "Lighting has a huge impact on how a space looks and feels. The right fixtures, placed well, make a room more functional and more inviting. Poor lighting does the opposite — and outdated fixtures waste energy.",
      "AMK Electric handles lighting installations for homes and businesses throughout San Jose and the surrounding Bay Area. Whether you're adding recessed lighting to a kitchen, updating fixtures throughout your home, or improving exterior security lighting, we do the job right."
    ],
    signsTitle: "Common Lighting Projects We Handle",
    signs: [
      { title: "Recessed lighting installation", description: "Can lights are popular for kitchens, living rooms, and bathrooms. We handle layout planning, cutting, wiring, and installation." },
      { title: "Interior fixture replacement", description: "Swapping outdated light fixtures for modern ones is one of the fastest ways to refresh a space." },
      { title: "Exterior and security lighting", description: "Well-placed exterior lights improve safety, curb appeal, and security around your property." },
      { title: "Under-cabinet and accent lighting", description: "Task lighting in kitchens and display lighting in living spaces add function and character." },
      { title: "LED conversions", description: "Upgrading from halogen or fluorescent to LED saves energy and reduces maintenance." },
      { title: "Commercial lighting upgrades", description: "Office and retail lighting affects comfort and productivity. We install and retrofit commercial lighting systems." },
    ],
    includedTitle: "What Our Lighting Service Includes",
    included: [
      "Fixture installation — ceiling, wall, pendant, recessed",
      "Recessed lighting layout and installation",
      "Dimmer switch installation",
      "Exterior lighting — porch, pathway, landscape",
      "Security and motion-sensor lighting",
      "Under-cabinet lighting",
      "LED retrofit and conversion",
      "New circuit runs for additional lighting",
      "Switch and control upgrades",
      "Commercial lighting installation and retrofits",
    ],
    whyChooseTitle: "Why Choose AMK Electric for Lighting",
    whyChoose: [
      { title: "Layout-aware installation", description: "We help you plan placement that looks right and lights the space properly — not just technically correct, but visually balanced." },
      { title: "Clean ceiling and wall work", description: "Recessed lighting requires precise cutting and wiring. We leave your ceilings looking great." },
      { title: "Full electrical capability", description: "We handle everything — new circuits, switch upgrades, dimmer wiring — not just the fixture swap." },
      { title: "Residential and commercial", description: "From a single pendant light to a full office retrofit, we have the experience for both." },
    ],
    faqs: [
      { question: "Can you add recessed lights to an existing ceiling?", answer: "Yes. In most cases, we can install recessed lighting in existing ceilings without major drywall work. We'll assess the space and let you know if there are any access limitations." },
      { question: "Do I need a new circuit for additional lights?", answer: "It depends on the existing circuit load. If the current circuit can handle the additional fixtures, no new circuit is needed. We'll check and advise." },
      { question: "Can you install lights I purchased myself?", answer: "Yes. We're happy to install customer-supplied fixtures. Just make sure they're rated for the intended location (e.g., damp-rated for bathrooms)." },
      { question: "How many recessed lights do I need in a room?", answer: "It depends on the room size, ceiling height, and how you use the space. As a general guideline, lights are spaced 4–6 feet apart, but we'll help you plan the right layout." },
    ],
    relatedSlugs: ["residential-electrical", "commercial-electrical", "electrical-repairs", "ceiling-fan-installation"],
  },
  {
    slug: "wiring-rewiring",
    title: "Wiring & Rewiring Services",
    shortTitle: "Wiring & Rewiring",
    metaTitle: "Wiring & Rewiring San Jose | AMK Electric",
    metaDescription: "Professional wiring and rewiring services in San Jose. Remodel wiring, older home upgrades, and new circuits. Call AMK Electric at (408) 646-7828.",
    heroHeadline: "Wiring & Rewiring in San Jose",
    heroSubcopy: "AMK Electric provides safe, code-compliant wiring and rewiring for homes and businesses across San Jose and the Bay Area.",
    introTitle: "Safe, Modern Wiring for Your Property",
    introText: [
      "The wiring in your walls is easy to forget about — until something goes wrong. Outdated wiring, undersized circuits, or improperly done work can cause everything from nuisance issues to serious safety hazards.",
      "Whether you're remodeling a kitchen, updating an older home, adding a workshop, or building out a commercial space, AMK Electric handles wiring work across San Jose and the surrounding Bay Area. We make sure your wiring is safe, properly sized, and up to code."
    ],
    signsTitle: "When Do You Need Wiring or Rewiring?",
    signs: [
      { title: "You're remodeling or adding on", description: "Kitchen remodels, bathroom updates, ADUs, and room additions all require new wiring and often new circuits." },
      { title: "Your home has old wiring", description: "Knob-and-tube, cloth-insulated, or aluminum wiring in older Bay Area homes may need to be replaced for safety and insurance reasons." },
      { title: "You need more circuits", description: "If you're constantly tripping breakers or relying on extension cords and power strips, you likely need additional circuits." },
      { title: "You're converting a garage or building a workspace", description: "Garage conversions and home offices often need dedicated circuits, proper outlets, and sometimes sub-panels." },
      { title: "An inspection flagged wiring issues", description: "Home inspections during real estate transactions frequently identify outdated or non-compliant wiring." },
      { title: "You're doing a commercial buildout", description: "New tenant improvements and commercial spaces need wiring designed for the intended use." },
    ],
    includedTitle: "Wiring Services We Provide",
    included: [
      "New construction and remodel wiring",
      "Whole-home rewiring",
      "Circuit additions",
      "Dedicated circuits for appliances and equipment",
      "Knob-and-tube and aluminum wiring replacement",
      "Sub-panel installation",
      "Garage and workshop wiring",
      "ADU and addition wiring",
      "Commercial buildout wiring",
      "Code correction and compliance wiring",
    ],
    whyChooseTitle: "Why Choose AMK Electric for Wiring",
    whyChoose: [
      { title: "Proper planning", description: "We plan wiring layouts based on how the space will actually be used — not just minimum code requirements." },
      { title: "Clean, organized runs", description: "Our wiring work is neat, labeled, and easy for future electricians to follow." },
      { title: "Full permit support", description: "Rewiring and new circuits typically require permits. We handle that process start to finish." },
      { title: "Coordination with other trades", description: "During remodels, we work smoothly alongside contractors, plumbers, and HVAC teams." },
    ],
    faqs: [
      { question: "How do I know if my home needs rewiring?", answer: "Common indicators include cloth-insulated or knob-and-tube wiring, two-prong outlets throughout the home, frequent breaker trips, and a panel that hasn't been updated in decades. We can inspect and advise." },
      { question: "How disruptive is a rewiring project?", answer: "It depends on the scope. Some rewiring can be done with minimal wall access using existing pathways. Larger projects may require opening walls, which we coordinate with your contractor for repair." },
      { question: "Can you wire a detached garage or ADU?", answer: "Yes. We regularly wire detached garages, workshops, and ADUs. This typically involves running a feeder from the main panel or installing a sub-panel." },
      { question: "How long does a rewiring project take?", answer: "A full home rewire usually takes several days to a week, depending on the size of the home and the extent of work. We'll provide a timeline during the planning phase." },
    ],
    relatedSlugs: ["panel-upgrades", "residential-electrical", "electrical-repairs", "dedicated-circuits"],
  },
  // Supporting service pages
  {
    slug: "circuit-breaker-repair",
    title: "Circuit Breaker Repair",
    shortTitle: "Breaker Repair",
    metaTitle: "Circuit Breaker Repair San Jose | AMK Electric",
    metaDescription: "Circuit breaker repair and replacement in San Jose. Tripping breakers, faulty breakers, and panel issues. Call (408) 646-7828.",
    heroHeadline: "Circuit Breaker Repair in San Jose",
    heroSubcopy: "Tripping breakers and panel issues resolved quickly by AMK Electric. Serving San Jose and the Bay Area.",
    introTitle: "Stop the Trips, Fix the Problem",
    introText: [
      "A breaker that trips once in a while is doing its job — protecting your circuits from overload. But when it happens frequently, or a breaker won't reset, there's usually a deeper issue that needs professional attention.",
      "AMK Electric diagnoses and repairs circuit breaker problems for homes and businesses across San Jose. We figure out why it's tripping and fix the underlying cause."
    ],
    signsTitle: "Signs of Breaker Problems",
    signs: [
      { title: "Breaker trips repeatedly", description: "Frequent trips on the same circuit usually mean overload, a short circuit, or a failing breaker." },
      { title: "Breaker won't stay reset", description: "If a breaker trips immediately after resetting, there's likely a fault on the circuit." },
      { title: "Burning smell at the panel", description: "Overheated breakers or wiring at the panel is a safety concern that needs immediate attention." },
      { title: "Breaker feels hot", description: "Excessive heat on a breaker indicates it may be failing or the circuit is overloaded." },
    ],
    includedTitle: "Breaker Services We Handle",
    included: [
      "Breaker troubleshooting and diagnosis",
      "Individual breaker replacement",
      "AFCI and GFCI breaker installation",
      "Load balancing across circuits",
      "Panel inspection and evaluation",
      "Circuit tracing and identification",
    ],
    whyChooseTitle: "Reliable Breaker Repairs",
    whyChoose: [
      { title: "Root cause focus", description: "We don't just swap breakers — we find out why they're tripping." },
      { title: "Quick response", description: "Breaker problems disrupt your day. We get to you promptly." },
      { title: "Panel expertise", description: "We work on all types of residential and commercial panels." },
    ],
    faqs: [
      { question: "Can a breaker go bad?", answer: "Yes. Breakers are mechanical devices that wear out over time. If a breaker is failing to trip properly or trips too easily, it likely needs replacement." },
      { question: "Is a tripping breaker dangerous?", answer: "The tripping itself is a safety feature. But the underlying cause — overload, short circuit, or ground fault — should be investigated and resolved." },
    ],
    relatedSlugs: ["panel-upgrades", "electrical-repairs", "residential-electrical"],
  },
  {
    slug: "outlet-switch-installation",
    title: "Outlet & Switch Installation",
    shortTitle: "Outlets & Switches",
    metaTitle: "Outlet & Switch Installation San Jose | AMK Electric",
    metaDescription: "Outlet and switch installation and repair in San Jose. GFCI outlets, USB outlets, dimmer switches. Call (408) 646-7828.",
    heroHeadline: "Outlet & Switch Installation in San Jose",
    heroSubcopy: "Professional outlet and switch installation for homes and businesses. AMK Electric serves San Jose and the Bay Area.",
    introTitle: "Outlets and Switches That Work Right",
    introText: [
      "Outlets and switches are the parts of your electrical system you interact with every day. When they're not working properly, not in the right location, or not the right type for the application, it's worth having them updated.",
      "AMK Electric installs and replaces outlets and switches throughout San Jose and the surrounding Bay Area — from simple swaps to adding new outlets where you need them."
    ],
    signsTitle: "Common Outlet & Switch Projects",
    signs: [
      { title: "Adding outlets to a room", description: "Many older homes don't have enough outlets where you need them. We can add outlets on new or existing circuits." },
      { title: "GFCI outlet installation", description: "GFCI outlets are required in kitchens, bathrooms, garages, and outdoor areas to prevent shock." },
      { title: "USB outlet upgrades", description: "Combination USB/outlet receptacles are convenient for charging devices without adapters." },
      { title: "Dimmer switch installation", description: "Dimmers give you control over lighting levels and can save energy." },
    ],
    includedTitle: "Outlet & Switch Services",
    included: [
      "Outlet replacement and repair",
      "New outlet installation",
      "GFCI and AFCI outlet installation",
      "USB outlet upgrades",
      "Switch replacement and upgrades",
      "Dimmer switch installation",
      "Three-way and four-way switch wiring",
      "Outdoor and weatherproof outlet installation",
    ],
    whyChooseTitle: "Quality Outlet & Switch Work",
    whyChoose: [
      { title: "Proper wiring", description: "Every outlet and switch is wired correctly and securely — no shortcuts." },
      { title: "Code compliant", description: "GFCI protection where required, tamper-resistant receptacles, and proper grounding." },
      { title: "Clean installation", description: "Tight to the wall, level, and properly finished." },
    ],
    faqs: [
      { question: "Can you add an outlet where there isn't one?", answer: "Yes. We can run a new circuit or extend an existing one to add outlets wherever you need them." },
      { question: "Do I need GFCI outlets?", answer: "Current code requires GFCI protection in kitchens, bathrooms, garages, outdoor areas, and near water sources. If your home doesn't have them, it's a worthwhile safety upgrade." },
    ],
    relatedSlugs: ["electrical-repairs", "residential-electrical", "wiring-rewiring"],
  },
  {
    slug: "ceiling-fan-installation",
    title: "Ceiling Fan Installation",
    shortTitle: "Ceiling Fans",
    metaTitle: "Ceiling Fan Installation San Jose | AMK Electric",
    metaDescription: "Ceiling fan installation and replacement in San Jose. New fans, fan-rated boxes, and wiring. Call AMK Electric at (408) 646-7828.",
    heroHeadline: "Ceiling Fan Installation in San Jose",
    heroSubcopy: "Professional ceiling fan installation for homes in San Jose and the Bay Area. AMK Electric handles it safely and correctly.",
    introTitle: "Ceiling Fans Installed Right",
    introText: [
      "Ceiling fans improve comfort and help with energy efficiency — but they need to be installed correctly. A fan that's not properly supported or wired is a safety issue.",
      "AMK Electric installs ceiling fans for homeowners throughout San Jose. Whether you're replacing an existing fan, adding a fan where there's currently a light fixture, or installing a fan in a new location, we make sure the job is done right."
    ],
    signsTitle: "Ceiling Fan Installation Scenarios",
    signs: [
      { title: "Replacing an old ceiling fan", description: "If your current fan is noisy, wobbly, or outdated, a replacement is straightforward when the box and wiring are already in place." },
      { title: "Converting a light fixture to a fan", description: "Light fixture boxes are not rated for fans. We install a fan-rated box and handle the wiring conversion." },
      { title: "New fan installation", description: "Adding a fan in a new location requires running wiring, installing a fan-rated box, and proper mounting." },
      { title: "Adding a wall switch or remote control", description: "We can add wall switches or help set up remote controls for fan and light operation." },
    ],
    includedTitle: "What's Included",
    included: [
      "Ceiling fan mounting and wiring",
      "Fan-rated electrical box installation",
      "Light-to-fan conversion",
      "Wall switch installation for fan control",
      "Existing fan replacement",
      "Downrod sizing for high ceilings",
    ],
    whyChooseTitle: "Safe, Solid Fan Installation",
    whyChoose: [
      { title: "Fan-rated box — always", description: "We never mount a fan on a standard light fixture box. Safety first." },
      { title: "Secure mounting", description: "Properly braced and fastened so your fan runs smooth and quiet." },
      { title: "Clean wiring", description: "All connections are done neatly and to code." },
    ],
    faqs: [
      { question: "Can I put a fan where I have a light fixture?", answer: "Usually, yes — but the electrical box needs to be replaced with a fan-rated one. We handle that as part of the installation." },
      { question: "Can you install a fan on a vaulted ceiling?", answer: "Yes. Vaulted and sloped ceilings require angled mounting hardware, which we can accommodate." },
    ],
    relatedSlugs: ["lighting-installation", "residential-electrical", "outlet-switch-installation"],
  },
  {
    slug: "dedicated-circuits",
    title: "Dedicated Circuits",
    shortTitle: "Dedicated Circuits",
    metaTitle: "Dedicated Circuit Installation San Jose | AMK Electric",
    metaDescription: "Dedicated circuit installation for appliances, EV chargers, and equipment in San Jose. Call AMK Electric at (408) 646-7828.",
    heroHeadline: "Dedicated Circuit Installation in San Jose",
    heroSubcopy: "AMK Electric installs dedicated circuits for appliances, EV chargers, and equipment in homes and businesses across the Bay Area.",
    introTitle: "The Right Circuit for the Job",
    introText: [
      "A dedicated circuit serves a single appliance or piece of equipment — nothing else shares it. This ensures reliable power delivery and prevents overload on other circuits.",
      "Many modern appliances and systems require dedicated circuits by code. AMK Electric installs dedicated circuits for homeowners and businesses throughout San Jose and the surrounding Bay Area."
    ],
    signsTitle: "When You Need a Dedicated Circuit",
    signs: [
      { title: "Installing an EV charger", description: "Level 2 EV chargers require a dedicated 40–60 amp, 240V circuit." },
      { title: "Adding a large appliance", description: "Electric ranges, dryers, hot tubs, and tankless water heaters all require dedicated circuits." },
      { title: "Setting up a home office", description: "Computers and sensitive equipment perform better on a circuit that isn't shared with household loads." },
      { title: "Garage or workshop equipment", description: "Power tools, compressors, and welders typically need their own circuits." },
    ],
    includedTitle: "Dedicated Circuit Services",
    included: [
      "Load calculation and panel evaluation",
      "New circuit installation from panel to point-of-use",
      "240V circuit installation",
      "Sub-panel installation when needed",
      "Proper wire sizing for the application",
      "Permit coordination if required",
    ],
    whyChooseTitle: "Properly Sized, Properly Installed",
    whyChoose: [
      { title: "Right-sized wiring", description: "We calculate the correct wire gauge and breaker size for each application." },
      { title: "Clean routing", description: "Neat conduit or cable runs from panel to destination." },
      { title: "Future-proofed", description: "We consider your future needs when recommending panel capacity." },
    ],
    faqs: [
      { question: "How do I know if I need a dedicated circuit?", answer: "If an appliance draws significant power (typically 1,500+ watts) or if the manufacturer or code requires it, you need a dedicated circuit. We can advise on your specific situation." },
      { question: "Can my panel handle another circuit?", answer: "It depends on your panel's available capacity and open breaker slots. We'll check and let you know — and if a panel upgrade is needed, we handle that too." },
    ],
    relatedSlugs: ["panel-upgrades", "ev-charger-installation", "wiring-rewiring"],
  },
  {
    slug: "smoke-detector-installation",
    title: "Smoke Detector Installation",
    shortTitle: "Smoke Detectors",
    metaTitle: "Smoke Detector Installation San Jose | AMK Electric",
    metaDescription: "Hardwired smoke and carbon monoxide detector installation in San Jose. Code-compliant placement. Call (408) 646-7828.",
    heroHeadline: "Smoke Detector Installation in San Jose",
    heroSubcopy: "Protect your family with properly installed, hardwired smoke and CO detectors. AMK Electric serves San Jose and the Bay Area.",
    introTitle: "Safety That Works When It Matters",
    introText: [
      "Smoke and carbon monoxide detectors are your first line of defense in an emergency. Hardwired, interconnected detectors provide the most reliable protection — when one goes off, they all go off.",
      "AMK Electric installs hardwired smoke and CO detectors for homeowners in San Jose and throughout the Bay Area. We ensure proper placement, wiring, and code compliance."
    ],
    signsTitle: "When to Update Your Detectors",
    signs: [
      { title: "Detectors are more than 10 years old", description: "Smoke detectors have a limited lifespan and should be replaced every 10 years." },
      { title: "Battery-only detectors", description: "Hardwired, interconnected detectors with battery backup provide more reliable coverage." },
      { title: "Remodeling or selling your home", description: "California code requires updated smoke and CO detectors during remodels and real estate transactions." },
      { title: "Missing detector locations", description: "Current code requires detectors in every bedroom, outside sleeping areas, and on each level of the home." },
    ],
    includedTitle: "Detector Services",
    included: [
      "Hardwired smoke detector installation",
      "Carbon monoxide detector installation",
      "Interconnected detector systems",
      "Detector replacement and upgrades",
      "Code-compliant placement planning",
      "Combination smoke/CO detector installation",
    ],
    whyChooseTitle: "Detectors Done Right",
    whyChoose: [
      { title: "Code-compliant placement", description: "We install detectors in all required locations per California code." },
      { title: "Hardwired and interconnected", description: "Maximum protection — when one detects smoke, they all alert." },
      { title: "Clean installation", description: "Properly mounted, neatly wired, and tested before we leave." },
    ],
    faqs: [
      { question: "Do I need hardwired detectors?", answer: "California requires hardwired smoke detectors with battery backup in new construction and during remodels. Even if not required in your situation, hardwired interconnected detectors provide the best protection." },
      { question: "Where should smoke detectors be placed?", answer: "Current code requires detectors in each bedroom, outside each sleeping area, and on every level of the home, including the basement." },
    ],
    relatedSlugs: ["residential-electrical", "electrical-repairs", "wiring-rewiring"],
  },
  {
    slug: "surge-protection",
    title: "Surge Protection",
    shortTitle: "Surge Protection",
    metaTitle: "Whole-Home Surge Protection San Jose | AMK Electric",
    metaDescription: "Whole-home surge protection installation in San Jose. Protect electronics and appliances from power surges. Call (408) 646-7828.",
    heroHeadline: "Surge Protection in San Jose",
    heroSubcopy: "Protect your home's electronics and appliances with whole-home surge protection. AMK Electric serves San Jose and the Bay Area.",
    introTitle: "Protect What You've Invested In",
    introText: [
      "Power surges can come from lightning, utility grid issues, or even your own appliances cycling on and off. A single surge can damage sensitive electronics, appliances, and HVAC equipment.",
      "A whole-home surge protector installed at your electrical panel provides a layer of protection for everything in your home. AMK Electric installs surge protection for homeowners across San Jose and the Bay Area."
    ],
    signsTitle: "Why Consider Surge Protection",
    signs: [
      { title: "Expensive electronics", description: "Computers, home theater systems, and smart home equipment are vulnerable to surge damage." },
      { title: "Appliance protection", description: "Modern appliances with circuit boards — washers, dryers, refrigerators — are more susceptible to surges than older models." },
      { title: "Home office setup", description: "If you work from home, a surge could mean lost equipment and lost work." },
      { title: "EV charger or solar system", description: "These systems represent significant investments worth protecting." },
    ],
    includedTitle: "Surge Protection Services",
    included: [
      "Whole-home surge protector installation at the panel",
      "Point-of-use surge protection recommendations",
      "Panel evaluation and installation",
      "Testing and verification",
    ],
    whyChooseTitle: "Panel-Level Protection",
    whyChoose: [
      { title: "Whole-home coverage", description: "Protection at the panel covers every circuit in your home." },
      { title: "Quality components", description: "We install reliable surge protection devices rated for residential use." },
      { title: "Simple installation", description: "A whole-home surge protector mounts right in your panel — no disruption to your home." },
    ],
    faqs: [
      { question: "Do I still need power strips with surge protection?", answer: "A whole-home surge protector handles large surges from outside your home. Point-of-use surge protectors add a second layer for sensitive equipment. Using both provides the best protection." },
      { question: "How long does a surge protector last?", answer: "Whole-home surge protectors have a limited number of surges they can absorb. Many units include indicator lights that show when they need replacement. Typical lifespan is several years under normal conditions." },
    ],
    relatedSlugs: ["panel-upgrades", "residential-electrical", "dedicated-circuits"],
  },
];

export function getServiceBySlug(slug: string): ServiceData | undefined {
  return services.find(s => s.slug === slug);
}

export function getRelatedServices(slugs: string[]): ServiceData[] {
  return slugs.map(slug => services.find(s => s.slug === slug)).filter(Boolean) as ServiceData[];
}

export const coreServices = services.slice(0, 7);
export const supportingServices = services.slice(7);

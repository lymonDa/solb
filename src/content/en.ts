import { SiteContent } from "./types";

export const enContent: SiteContent = {
  lang: "en",
  dir: "ltr",

  nav: {
    home: "Home",
    services: "Services",
    allServices: {
      cutting: "Reinforced Concrete Cutting",
      drilling: "Core Drilling",
      openings: "Door & Window Openings",
      demolition: "Demolition & Repair",
    },
    contact: "Contact Us",
    callNow: "Call Now",
    whatsapp: "WhatsApp",
    langSwitchLabel: "العربية",
    langSwitchHref: "/",
    menuOpen: "Open menu",
    menuClose: "Close menu",
  },

  common: {
    callNow: "Call Now",
    whatsapp: "Message on WhatsApp",
    requestQuote: "Request a Quote",
    serviceAreaBadge: "Service Area: Riyadh, KSA",
    serviceAreaText: "Serving all districts across Riyadh city",
    directContact: "Direct contact with field specialists",
    modernEquipment: "Modern cutting & coring equipment",
    phoneLabel: "Phone Number",
    locationLabel: "Service Location",
    hoursLabel: "Operating Hours",
    readMore: "Service Details",
    viewService: "View Details",
    allRightsReserved: "All rights reserved",
    skipToContent: "Skip to main content",
    breadcrumbHome: "Home",
    whatToSendHeading: "What to send for a quick quotation",
  },

  mobileBar: {
    call: "Phone Call",
    whatsapp: "WhatsApp",
    callAria: "Call SOLB directly at +966 55 612 3725",
    whatsappAria: "Message SOLB on WhatsApp at +966 55 612 3725",
  },

  home: {
    metaTitle: "Concrete Cutting & Core Drilling in Riyadh | SOLB",
    metaDescription: "Reinforced concrete wall and slab cutting, core drilling for MEP and HVAC, and door/window openings in Riyadh. Direct contact and modern machinery.",
    hero: {
      badge: "Specialized Concrete Services in Riyadh",
      h1: "Concrete Cutting & Core Drilling in Riyadh",
      intro: "Wall and slab cutting in reinforced concrete, openings for doors, windows, and HVAC ducting, and precision core drilling for plumbing and electrical installations.",
      tagline: "Precision Cutting. Professional Coring. Built on Confidence.",
      hudStatusTitle: "Field Status",
      hudStatusValue: "Active deployment across Riyadh",
      hudAreaTitle: "Coverage Area",
      hudAreaValue: "Riyadh City & Surrounding Areas",
      hudContactTitle: "Communication",
      hudContactValue: "Direct with field supervisors",
      imageKey: "wallSawTrack09",
      imageCaption: "Track-mounted hydraulic wall saw with diamond blade (SOLB equipment)",
    },
    servicesSection: {
      tag: "Field Services",
      h2: "Four Core Services — Select What Matches Your Job",
      subtitle: "Precision concrete cutting and coring engineering solutions tailored for contractors and property owners.",
      cards: [
        {
          key: "cutting",
          title: "Reinforced Concrete Cutting",
          shortDesc: "Cutting reinforced concrete walls, ceilings, and slabs using dedicated concrete saws for clean structural modifications.",
          href: "/en/services/concrete-cutting/",
          imageKey: "wallSawTrack09",
          bullets: [
            "Cutting load-bearing and reinforced concrete walls",
            "Ceiling slab and floor slab cutting",
            "Openings for staircases, elevators, and shafts",
          ],
        },
        {
          key: "drilling",
          title: "Core Drilling",
          shortDesc: "Cylindrical core penetrations across multiple diameters for plumbing, electrical runs, drainage, and HVAC lines.",
          href: "/en/services/core-drilling/",
          imageKey: "coreDrillRed01",
          bullets: [
            "Plumbing and drainage pipe penetrations",
            "Electrical conduit and cable tray runs",
            "A/C copper piping and ventilation ducts",
          ],
        },
        {
          key: "openings",
          title: "Concrete Openings",
          shortDesc: "Forming new doors, windows, entryways, and ventilation ducts in concrete walls and slabs to exact dimensions.",
          href: "/en/services/concrete-openings/",
          imageKey: "coreDrillOpening05",
          bullets: [
            "New doorway and access openings in walls",
            "Window openings and architectural expansions",
            "Ductwork and central ventilation passages",
          ],
        },
        {
          key: "demolition",
          title: "Demolition & Repair",
          shortDesc: "Controlled breaking and removal of concrete sections, structural restoration after cutting, and job site debris clearing.",
          href: "/en/services/demolition-repair/",
          imageKey: "wallSawStaircase06",
          bullets: [
            "Targeted breaking and removal of concrete elements",
            "Doorway and entrance preparation",
            "Surface restoration and construction debris removal",
          ],
        },
      ],
    },
    whyUs: {
      tag: "Why Choose SOLB?",
      h2: "Engineered Precision & Modern Equipment",
      subtitle: "We prioritize clean edge geometry, structural stability, and straightforward communication.",
      points: [
        {
          title: "Strict Focus on Precision Cutting",
          desc: "We adhere strictly to required architectural dimensions, preserving edge cleanliness and surrounding structural integrity.",
        },
        {
          title: "Modern Field Equipment",
          desc: "We deploy heavy-duty track-mounted diamond saws and hydraulic core rigs engineered for dense reinforced concrete.",
        },
        {
          title: "Direct & Transparent Contact",
          desc: "Deal directly with our experienced field technicians and supervisors for immediate job evaluations and honest estimates.",
        },
        {
          title: "Riyadh Project Knowledge",
          desc: "Extensive field experience with villas, commercial buildings, and major construction projects throughout Riyadh.",
        },
      ],
    },
    workflow: {
      tag: "Working Process",
      h2: "How We Get Your Project Done",
      subtitle: "A straightforward, transparent three-step workflow from initial enquiry to site completion.",
      steps: [
        {
          number: "01",
          title: "Direct Contact & Site Details",
          desc: "Call or send site photos via WhatsApp along with the job type, approximate dimensions, and your location in Riyadh.",
        },
        {
          number: "02",
          title: "Technical Review & Estimate",
          desc: "Our supervisor reviews the structural requirements, confirms feasibility, and provides a clear technical estimate.",
        },
        {
          number: "03",
          title: "Site Execution & Handover",
          desc: "Our specialized crew arrives on site with dedicated machinery to complete the cut or coring cleanly to exact specifications.",
        },
      ],
    },
    gallery: {
      tag: "Equipment & Field Gallery",
      h2: "SOLB Machinery Deployed on Site",
      subtitle: "High-performance equipment ensuring clean cuts, accurate core diameters, and operational safety.",
      disclaimer: "Note: Gallery showcases real SOLB field equipment and authentic cutting and drilling operations.",
      items: [
        {
          title: "Track-Mounted Wall Saw with Diamond Blade",
          caption: "Heavy-duty wall cutting machine for reinforced concrete (SOLB equipment)",
          imageKey: "wallSawTrack09",
        },
        {
          title: "Core Drilling Rig with Diamond Core Bits",
          caption: "Hydraulic core rig for clean circular penetrations and MEP installations",
          imageKey: "coreDrillRed01",
        },
        {
          title: "Diamond Core Rig for Structural Works",
          caption: "Specialized core drill setup with accessories and cooling pump",
          imageKey: "coreDrillOrange02",
        },
        {
          title: "Concrete Staircase Cutting",
          caption: "Precision cut in a reinforced concrete staircase to create new passage",
          imageKey: "wallSawStaircase06",
        },
        {
          title: "Reinforced Concrete Slab Coring",
          caption: "Adjacent circular core holes in a solid floor slab for structural opening",
          imageKey: "coreDrillSlab07",
        },
        {
          title: "Concrete Wall Opening Preparation",
          caption: "Forming a controlled rectangular wall opening in reinforced concrete",
          imageKey: "coreDrillOpening05",
        },
      ],
    },
    serviceArea: {
      tag: "Coverage Area",
      h2: "Serving All Districts Across Riyadh",
      desc: "Our teams operate throughout the Riyadh metropolitan area, ready to mobilize to residential villas, commercial facilities, and construction sites.",
      bulletPoints: [
        "North Riyadh: Al Malqa, Al Yasmin, Al Narjis, Al Arid, Al Sahafa, Hittin",
        "East Riyadh: Al Yarmouk, Al Mounisiya, Al Rimal, Al Qadisiyyah, Al Hamra",
        "Central & West Riyadh: Olaya, Sulaimaniyah, Diriyah, Laban, Al Suwaidi",
        "Commercial and industrial developments across the Riyadh province",
      ],
    },
    faq: {
      tag: "Frequently Asked Questions",
      h2: "Common Enquiries About Our Services",
      subtitle: "Clear, direct answers regarding cutting, drilling, pricing, and project mobilization.",
      items: [
        {
          q: "Do you cut reinforced concrete with heavy rebar?",
          a: "Yes. We specialize in cutting reinforced concrete walls, ceilings, and slabs using advanced diamond-segmented blades designed to cleanly slice through both dense concrete and embedded steel rebar.",
        },
        {
          q: "What is the difference between concrete cutting and core drilling?",
          a: "Concrete cutting uses track-mounted or wire saws to create large straight-edged openings (such as doors, windows, and floor removals). Core drilling uses rotary diamond cylinders to make precise round holes for plumbing, electrical, and HVAC conduits.",
        },
        {
          q: "Are standard prices listed on the website?",
          a: "No fixed prices are listed because every job varies based on concrete thickness, rebar density, number and dimensions of cuts or holes, and site accessibility. Contact us directly or via WhatsApp for a tailored quote.",
        },
        {
          q: "Do you serve projects outside Riyadh?",
          a: "Our core operations are dedicated to the city of Riyadh and its immediate surroundings to ensure rapid deployment and focused supervision.",
        },
      ],
    },
    ctaBand: {
      h2: "Ready to Discuss Your Project? Request a Quote Today",
      desc: "Send your requirements via WhatsApp or call us directly. We will review your site specifics and provide a prompt technical estimate.",
      checklist: [
        "Job type (wall cut, slab cut, core hole, doorway opening, partial removal)",
        "Approximate dimensions (length × width × thickness or core diameter)",
        "Property or project location within Riyadh",
        "Clear photo of the concrete wall, floor, or ceiling if available",
      ],
    },
  },

  pages: {
    cutting: {
      metaTitle: "Concrete Wall, Ceiling & Slab Cutting in Riyadh | SOLB",
      metaDescription: "Professional reinforced concrete cutting in walls, ceilings, and floor slabs across Riyadh with diamond track saws. Accurate dimensions, zero random cracking.",
      h1: "Concrete Wall, Ceiling and Slab Cutting in Riyadh",
      intro: "We cut reinforced concrete walls, ceilings, and slabs using equipment specifically engineered for concrete, creating clean openings and structural modifications at exact locations without random vibration cracks.",
      scopeTitle: "What We Cut at SOLB",
      scopeSubtitle: "Advanced diamond sawing solutions for reinforced structural elements",
      scopeItems: [
        {
          title: "Reinforced Concrete Walls",
          desc: "Cutting load-bearing concrete walls and shear partitions to create new passages or modify layouts.",
        },
        {
          title: "Concrete Ceilings & Roof Slabs",
          desc: "Cutting through hollow-core, ribbed, and solid reinforced concrete slabs for skylights, vents, and shafts.",
        },
        {
          title: "Floor Slabs & Foundations",
          desc: "Precision sectioning and removal of concrete floor segments for utility trenches and machinery bases.",
        },
      ],
      applicationsTitle: "Common Cutting Jobs We Execute",
      applications: [
        {
          title: "Door & Window Openings",
          desc: "Precision cuts to introduce new doors, windows, or expand existing architectural openings.",
        },
        {
          title: "HVAC & Ventilation Ducts",
          desc: "Regular rectangular penetrations for central air ducting and industrial ventilation systems.",
        },
        {
          title: "Staircase & Elevator Shafts",
          desc: "Slab segment removals to accommodate internal staircases or hydraulic elevator installations.",
        },
      ],
      howToStartTitle: "How to Get Started with SOLB",
      howToStartSteps: [
        "Take a clear photo of the wall or slab to be cut",
        "Determine the approximate cut dimensions (length × width × thickness)",
        "Send the details along with your Riyadh location via WhatsApp or call us directly",
      ],
      whatToSendTitle: "Information Needed for a Quote",
      whatToSendItems: [
        "Concrete thickness of the target wall or slab",
        "Whether the concrete is plain or heavily reinforced with rebar",
        "Approximate dimensions of the required opening",
        "Site location in Riyadh and access conditions for equipment",
      ],
      faqsTitle: "Frequently Asked Questions About Concrete Cutting",
      faqs: [
        {
          q: "Do you cut heavily reinforced concrete?",
          a: "Yes. Cutting reinforced concrete walls and ceilings is a primary core service. Send us site photos and details so our technical team can assess the setup.",
        },
        {
          q: "What is the difference between cutting and core drilling?",
          a: "Cutting produces straight cuts for larger geometric openings like doors and windows. Core drilling makes cylindrical holes for pipes, conduits, and mechanical lines.",
        },
        {
          q: "Do you list prices on the website?",
          a: "No, as pricing depends on concrete depth, rebar density, and accessibility in Riyadh. Contact us directly for a fast, honest estimate.",
        },
      ],
      relatedServicesTitle: "Related Concrete Services",
      primaryImageKey: "wallSawTrack09",
      secondaryImageKey: "wallSawStaircase06",
    },

    drilling: {
      metaTitle: "Concrete Core Drilling in Riyadh | SOLB",
      metaDescription: "Precision core drilling in reinforced concrete for plumbing, electrical, drainage, and HVAC penetrations in Riyadh. Clean diamond cylindrical cuts.",
      h1: "Concrete Core Drilling in Riyadh",
      intro: "We make round cylindrical holes in concrete floors, walls, and slabs for plumbing and drainage pipes, electrical conduit runs, and air conditioning installations using diamond core rigs.",
      scopeTitle: "Diamond Core Drilling Services",
      scopeSubtitle: "Clean circular penetrations across residential and commercial structures",
      scopeItems: [
        {
          title: "Plumbing & Drainage Conduits",
          desc: "Vertical and horizontal penetrations for water supply lines and sewer pipes without damaging surrounding tiles or slabs.",
        },
        {
          title: "Electrical & Data Cabling",
          desc: "Clean penetrations for high/low voltage cable runs, communications lines, and data infrastructure.",
        },
        {
          title: "HVAC & Ventilation Lines",
          desc: "Cylindrical openings for refrigeration copper lines, exhaust fans, vent pipes, and hood ducts.",
        },
      ],
      applicationsTitle: "Drilling Locations & Orientations",
      applications: [
        {
          title: "Floor Slab & Roof Drilling",
          desc: "Vertical core drilling through floor slabs and overhead beams for multi-story MEP risers.",
        },
        {
          title: "Wall & Tie-Beam Drilling",
          desc: "Horizontal core penetrations through shear walls, basement retaining walls, and foundation grade beams.",
        },
        {
          title: "Stitched Coring for Rectangular Openings",
          desc: "Overlapping core holes to produce regular access cavities where conventional saws cannot fit.",
        },
      ],
      howToStartTitle: "How to Request Core Drilling",
      howToStartSteps: [
        "Determine the required hole diameters and total count",
        "Identify the target surface (floor, ceiling, wall)",
        "Call us or message us on WhatsApp with your location in Riyadh",
      ],
      whatToSendTitle: "Key Details for an Accurate Quote",
      whatToSendItems: [
        "Required hole diameter (in inches or cm)",
        "Depth or concrete thickness at the drilling point",
        "Total number of holes required on site",
        "Availability of power and water on site for cooling",
      ],
      faqsTitle: "Frequently Asked Questions About Core Drilling",
      faqs: [
        {
          q: "What core hole diameters are available?",
          a: "We accommodate a wide range of standard diameters for MEP installations. Send us your required specifications and we will confirm equipment availability.",
        },
        {
          q: "Can you drill through floors, ceilings, and walls?",
          a: "Yes. Our diamond rigs can be anchored vertically, horizontally, or at angles into standard reinforced concrete structures.",
        },
        {
          q: "When should I choose core drilling over cutting?",
          a: "Core drilling is ideal whenever a round penetration is needed for pipes or conduits. For large rectangular openings like doorways, wall sawing is the proper method.",
        },
      ],
      relatedServicesTitle: "Other Services You May Need",
      primaryImageKey: "coreDrillRed01",
      secondaryImageKey: "coreDrillOrange02",
    },

    openings: {
      metaTitle: "Door & Window Openings in Concrete Walls in Riyadh | SOLB",
      metaDescription: "Accurate opening creation for doors, windows, elevators, and A/C ducts in concrete walls and slabs in Riyadh. Clean cuts, structural safety, fast turnaround.",
      h1: "Door, Window and Other Openings in Concrete Walls in Riyadh",
      intro: "We form clean openings in concrete walls and slabs for doors, windows, HVAC ductwork, elevators, and stairs using track-mounted diamond cutting equipment.",
      scopeTitle: "Types of Openings We Form",
      scopeSubtitle: "Accurately measured, straight-edge cuts ready for immediate frame installation",
      scopeItems: [
        {
          title: "Doorway & Passage Openings",
          desc: "Opening new doorways in concrete walls or expanding existing entries to improve flow and accessibility.",
        },
        {
          title: "Window & Light Well Openings",
          desc: "Introducing new window openings with crisp, plumb edges matching aluminum and glass frame tolerances.",
        },
        {
          title: "HVAC & Duct Penetrations",
          desc: "Cutting clean rectangular passages through beams and walls for central air conditioning duct systems.",
        },
        {
          title: "Elevator & Stair Openings",
          desc: "Sectioning and removing slab segments to prepare for internal elevator shafts and staircase installations.",
        },
      ],
      applicationsTitle: "Engineering Benefits of Diamond Sawing",
      applications: [
        {
          title: "Straight & Smooth Edges",
          desc: "Diamond blade cutting produces straight geometrical borders without micro-fracturing or ragged concrete margins.",
        },
        {
          title: "Preserving Structural Stability",
          desc: "Controlled sawing significantly reduces destructive percussion shocks compared to traditional jackhammers.",
        },
        {
          title: "Minimal Plastering & Prep",
          desc: "Clean-cut openings can immediately receive door frames, sub-frames, or duct sleeves with minimal corrective masonry.",
        },
      ],
      howToStartTitle: "Before You Call Us",
      howToStartSteps: [
        "Mark the intended opening location and rough dimensions (height × width)",
        "Photograph the wall from both sides to ensure no embedded utilities conflict",
        "Verify with your project engineer that the modification is structurally sound",
      ],
      whatToSendTitle: "Information for an Estimate",
      whatToSendItems: [
        "Wall type: solid poured concrete, masonry block, or retaining wall",
        "Target opening dimensions and wall thickness",
        "Clear site photos showing the wall and room clearance",
        "Project location in Riyadh",
      ],
      faqsTitle: "Frequently Asked Questions About Concrete Openings",
      faqs: [
        {
          q: "Can you open a doorway in an existing concrete wall?",
          a: "Yes. Cutting doorways with diamond saws is one of our primary field services. If the wall is a primary load-bearing element, consulting a structural engineer beforehand is strongly advised.",
        },
        {
          q: "What should I send to get an estimate for a doorway or window opening?",
          a: "Send us a clear photo of the wall via WhatsApp, the approximate opening size, wall thickness, and your location in Riyadh for an immediate response.",
        },
        {
          q: "Does your service include removing the cut concrete block?",
          a: "Yes. We control the safe drop of the cut concrete block. Safe handling, breakdown, and site debris removal can be included based on your agreed scope.",
        },
      ],
      relatedServicesTitle: "Related Services",
      primaryImageKey: "coreDrillOpening05",
      secondaryImageKey: "wallSawTrack09",
    },

    demolition: {
      metaTitle: "Concrete Demolition, Removal & Building Repair in Riyadh | SOLB",
      metaDescription: "Controlled concrete breaking, section removal, doorway openings, restoration, and debris removal in Riyadh. Direct field service. Request a quote.",
      h1: "Concrete Demolition, Removal and Building Repair in Riyadh",
      intro: "We break and remove specific sections of concrete floors, walls, and ceilings, form doorways using diamond saws, and carry out building repair and debris removal across Riyadh.",
      scopeTitle: "Demolition & Restoration Scope",
      scopeSubtitle: "Controlled breaking and removal without damaging sound structural members",
      scopeItems: [
        {
          title: "Targeted Concrete Breaking & Removal",
          desc: "Demolishing redundant concrete plinths, damaged floor sections, excess footings, and retaining elements.",
        },
        {
          title: "Entrance Openings & Space Expansion",
          desc: "Removing concrete partitions to merge spaces, expand living areas, and reconfigure interiors.",
        },
        {
          title: "Concrete Restoration & Edge Repair",
          desc: "Treating and repairing concrete margins after cutting and demolition to prepare surfaces for finishing.",
        },
        {
          title: "Construction Debris Removal",
          desc: "Clearing concrete rubble and waste material from the site and transporting it to designated disposal facilities.",
        },
      ],
      applicationsTitle: "Common Demolition & Removal Jobs",
      applications: [
        {
          title: "Parapet & Boundary Wall Modifications",
          desc: "Cutting down and removing raised concrete parapets or boundary wall sections for remodeling.",
        },
        {
          title: "Swimming Pool & Reservoir Adjustments",
          desc: "Altering pool configurations and underground water tanks by trimming and breaking specific sections.",
        },
        {
          title: "Staircase Demolition & Repositioning",
          desc: "Breaking and removing old concrete stairs to replace them with modern structural designs.",
        },
      ],
      howToStartTitle: "How to Start Your Project",
      howToStartSteps: [
        "Describe the exact concrete section to be demolished or repaired",
        "Take photos showing the element, its surroundings, and site access",
        "Send the photos and your Riyadh location via WhatsApp or call our supervisor directly",
      ],
      whatToSendTitle: "Details for an Accurate Estimate",
      whatToSendItems: [
        "Approximate volume of concrete to remove (length × width × height)",
        "Site location: interior apartment/villa vs exterior courtyard/roof",
        "Whether debris clearing and haulage is required",
        "Neighborhood and location in Riyadh",
      ],
      faqsTitle: "Frequently Asked Questions About Demolition & Repair",
      faqs: [
        {
          q: "Do you remove and transport the demolished concrete debris?",
          a: "Yes. Site cleanup, loading, and disposal of rubble resulting from our work can be fully handled as part of our agreed service scope.",
        },
        {
          q: "Do you demolish entire multi-story buildings?",
          a: "Our focus is specialized controlled demolition, breaking, and removal of specific concrete sections, slabs, and walls. For large structural demolitions, call us to discuss the requirements.",
        },
        {
          q: "What does your concrete repair work cover?",
          a: "Repair work covers edge patching, cosmetic restoration, and surface preparation following cuts or selective demolition. Contact us with your project details for an evaluation.",
        },
      ],
      relatedServicesTitle: "Complementary Services",
      primaryImageKey: "wallSawStaircase06",
      secondaryImageKey: "coreDrillSlab07",
    },

    contact: {
      metaTitle: "Contact SOLB | Concrete Cutting & Core Drilling in Riyadh",
      metaDescription: "Contact SOLB directly for concrete cutting and core drilling in Riyadh by phone or WhatsApp at +966 55 612 3725. Direct field communication and fast quotes.",
      h1: "Contact SOLB for Concrete Cutting & Core Drilling in Riyadh",
      intro: "Call us directly or message us on WhatsApp. Describe the required job, send your site photos, and we will get back to you with a direct estimate and mobilization schedule.",
      hudStatusTitle: "Field Status",
      hudStatusValue: "Active enquiry reception in Riyadh",
      callCard: {
        title: "Direct Voice Call",
        desc: "Speak directly with our field supervisor to discuss technical specifications and schedule an immediate site assessment.",
        btnText: "Call Now by Phone",
      },
      whatsappCard: {
        title: "Instant WhatsApp Chat",
        desc: "Send site photos, target dimensions, and your Riyadh location to receive a quick preliminary estimate.",
        btnText: "Open WhatsApp Chat",
      },
      whatToSend: {
        h2: "What to Send for a Fast Quotation",
        subtitle: "To ensure an accurate and rapid technical estimate, please prepare:",
        items: [
          "Job type (concrete wall cut, core hole, door opening, partial demolition)",
          "Approximate dimensions (length × width or diameter) and concrete thickness",
          "Project or property location within Riyadh",
          "Clear photo or short video of the wall, floor, or ceiling",
        ],
      },
      serviceArea: {
        h2: "Service Area: Riyadh City Exclusively",
        desc: "We concentrate our teams within Riyadh and immediate surrounding areas to ensure rapid mobilization and close quality control.",
      },
      faqs: {
        h2: "Common Questions Before Contacting Us",
        items: [
          {
            q: "Do you serve projects outside Riyadh?",
            a: "Our field crews operate exclusively within Riyadh city and immediate surrounding districts.",
          },
          {
            q: "Are prices fixed or calculated per job?",
            a: "Costs are estimated per project depending on concrete depth, rebar density, number of cuts or holes, and access difficulty in Riyadh.",
          },
        ],
      },
    },
  },

  footer: {
    brandDesc: "SOLB — Specialized engineering services in reinforced concrete cutting, diamond core drilling, structural openings, and controlled demolition across Riyadh, Saudi Arabia.",
    quickLinksTitle: "Quick Links",
    servicesTitle: "Services",
    contactTitle: "Direct Contact",
    serviceAreaNotice: "Field Service Area: Riyadh, Kingdom of Saudi Arabia.",
    disclaimer: "SOLB website provides direct access to professional concrete cutting and drilling field services in Riyadh.",
  },
};

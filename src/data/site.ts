export const site = {
  name: "Sam Pets & RP's Kennel",
  tagline: "Expert Dog Training, grooming and breeding hostel",
  phone: "(+91) 85529 49196 / 78881 82831",
  phones: [
    { display: "(+91) 85529 49196", href: "tel:+918552949196" },
    { display: "78881 82831", href: "tel:+917888182831" },
  ],
  email: "rpskennel@gmail.com",
  hours: "Opening Hours: MON – SAT 10am – 9pm",
  address: "Austin, TX",
  city: "Chhatrapati Sambhajinagar",
  behanceReference:
    "https://www.behance.net/gallery/199142029/Dog-Trainer-Website-Design-Website-Branding",
  logoTagline: "TRAIN • CARE • BUILD BONDS",
  whatsappUrl:
    "https://wa.me/917888182831?text=Hi%2C%20I%20want%20to%20book%20a%20consultation.%20My%20name%20is%20",
  hero: {
    eyebrow: "Professional Dog Training",
    titleLead: "Build a Better",
    titleAccent: "Bond With Your Dog.",
    description:
      "Expert obedience training, behavior modification and personalized programs for a well-behaved, confident and happy dog.",
    cta: "Book Consultation via WhatsApp",
  },
};

export const heroFeatures = [
  { label: "Obedience Training", icon: "shield" },
  { label: "Semi Adult Training", icon: "paw" },
  { label: "Behavior Modification", icon: "target" },
  { label: "Training Hostel", icon: "house" },
] as const;

export const aboutPage = {
  hero: {
    title: "About Us",
    subtitle: "More than just training — we build lasting bonds.",
    portraitImage:
      "https://images.unsplash.com/photo-1568572933382-74d440642117?auto=format&fit=crop&w=900&q=80",
    backgroundImage:
      "https://images.unsplash.com/photo-1448375240586-882707db889b?auto=format&fit=crop&w=1920&q=80",
  },
  story: {
    title: "Our Story",
    paragraphs: [
      "At Sam Pets & RP's Kennel, we believe every dog deserves to be loved, understood, and guided with patience. What started as a passion for helping families connect with their pets has grown into a trusted training and care destination in Chhatrapati Sambhajinagar.",
      "We use modern, positive training techniques tailored to each dog's personality and your goals — from puppy foundations to behavior modification — so your companion becomes confident, calm, and happy at home and in the community.",
    ],
    cta: "Learn More",
    ctaHref: "#puppy-training",
    trainerImage: "/images/hero/man-with-dog.png",
  },
  values: [
    {
      title: "Positive Reinforcement",
      description: "Builds confidence & trust.",
      icon: "paw-gear" as const,
    },
    {
      title: "Expert Trainers",
      description: "Certified & experienced.",
      icon: "trainer" as const,
    },
    {
      title: "Healthy & Safe",
      description: "Clean, spacious facility.",
      icon: "shield" as const,
    },
    {
      title: "Lifetime Support",
      description: "Ongoing guidance for lifetime success.",
      icon: "support" as const,
    },
  ],
  stats: [
    { value: "12+", label: "Years of Experience" },
    { value: "5000+", label: "Happy Dogs" },
    { value: "1000+", label: "Advanced Trained" },
    { value: "4500+", label: "Satisfied Customers" },
  ],
} as const;

export const puppyTrainingPage = {
  hero: {
    title: "Semi Adult Dog Training",
    subtitle: "The right start for a lifetime of good behavior.",
    image:
      "https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&w=1920&q=80",
  },
  cover: {
    title: "What We Cover",
    items: [
      { label: "Basic commands (sit, stay, come)", icon: "commands" as const },
      { label: "House training", icon: "house" as const },
      { label: "Socialization", icon: "social" as const },
      { label: "Leash training", icon: "leash" as const },
      { label: "Positive reinforcement", icon: "shield" as const },
    ],
  },
  early: {
    title: "Why Start Early?",
    benefits: [
      "Builds good habits",
      "Prevents behavioral issues",
      "Boosts confidence",
      "Makes adult training easier",
    ],
    cta: "Book Puppy Class",
    ctaHref: "#consultation",
  },
  tagline: {
    text: "Small Steps. Big Results.",
    image:
      "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&w=1920&q=80",
  },
} as const;

export const groupPrivateTrainingPage = {
  hero: {
    title: "Group & Private Obedience Training",
    subtitle: "Well-behaved dogs. Happier homes.",
    image:
      "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?auto=format&fit=crop&w=1920&q=80",
  },
  group: {
    title: "Group Obedience Training",
    tagline: "Socialize. Learn. Grow. Together.",
    items: [
      "Basic commands (sit, stay, come, heel)",
      "Improved social behavior",
      "Builds confidence & focus",
      "Suitable for all breeds & ages",
    ],
    cta: "View Group Classes",
    ctaHref: "#consultation",
  },
  private: {
    title: "Private Obedience Training",
    tagline: "Personalized. Focused. Faster results.",
    items: [
      "Customized training plans",
      "One-on-one with expert trainers",
      "Addresses specific behavior issues",
      "Flexible scheduling",
    ],
    cta: "Book Private Training",
    ctaHref: "#consultation",
  },
  quote: {
    text: "Disciplined today, freedom tomorrow.",
    portrait: "/images/quote/dummy-dog.jpg",
  },
} as const;

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Training", href: "#puppy-training" },
  { label: "Group & Private", href: "#group-private-training" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
] as const;

export const dogAgeOptions = [1, 2, 3, 4, 5] as const;

export const dogBreeds = [
  "Labrador Retriever",
  "German Shepherd",
  "Golden Retriever",
  "Indian Pariah Dog",
  "Beagle",
  "Pug",
  "Shih Tzu",
  "Rottweiler",
  "Doberman",
  "Siberian Husky",
  "Boxer",
  "Dachshund",
  "Cocker Spaniel",
  "Pomeranian",
  "Bulldog",
  "Great Dane",
  "Maltese",
  "Chihuahua",
  "Other",
] as const;

export const interestOptions = [
  "Dog Grooming",
  "Puppy Training",
  "Group Obedience Training",
  "Private Lessons",
  "Board & Train",
  "Behavior Modification",
  "Customized Consultation",
] as const;

export const services = [
  {
    title: "Puppy Training",
    image:
      "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Group Obedience Training",
    image:
      "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Private Lessons",
    image:
      "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Board & Train",
    image:
      "https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&w=800&q=80",
  },
] as const;

export const whyChoosePoints = [
  "Positive, Force Free, Reward Based Training",
  "Multiple Training Methods & Training Guarantee",
  "Specializes in Aggressive Behaviors",
  "Certified from National Canine Learning Center",
  "No Discrimination For Any Dog Behavior or Breed",
  "5 Star Reviews from Happy Dog Owners",
] as const;

export const benefitStrip = [
  { label: "We'll Help You Discover", icon: "discover" },
  { label: "Relaxed & Attentive Dogs", icon: "dog" },
  { label: "Strong Relationships", icon: "relationship" },
  { label: "Clear Communication", icon: "walk" },
] as const;

export const scheduleColumns = [
  "Puppy Start Right Preschool",
  "Middle School",
  "Finishing School",
  "Upcoming Classes",
] as const;

export const afterTrainingGoals = [
  { label: "Greeting People Politely", side: "left" as const },
  { label: "Going for Relaxed Walks", side: "left" as const },
  { label: "Accepting Grooming & Veterinary Care", side: "left" as const },
  { label: "Playing at the Park", side: "right" as const },
  { label: "Going to Restaurants", side: "right" as const },
  { label: "Getting the Right Attention", side: "right" as const },
] as const;

export const certifications = [
  "IAABC Certified",
  "ABCDT",
  "Pro Dog Trainer",
  "AVSAB",
  "CCPDT-KSA",
] as const;

export const testimonials = [
  {
    quote:
      "Sam Pets & RP's Kennel helped us achieve off-leash reliability at Bull Creek. We are so grateful for the team's patience and clear instruction.",
    author: "B Jane and Josie",
    image:
      "https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=200&q=80",
  },
  {
    quote:
      "Weekly instruction and handouts made it easy to reinforce good habits at home. Radar is a different dog now.",
    author: "Anne C. and Radar",
    image:
      "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=200&q=80",
  },
  {
    quote:
      "The kind, positive, and gentle methods at Sam Pets & RP's Kennel work with multiple dogs. Tessa and Mariah both love training days.",
    author: "Rick P. with Tessa and Mariah",
    image:
      "https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?auto=format&fit=crop&w=200&q=80",
  },
] as const;

export const blogPage = {
  hero: {
    title: "Our Blog",
    subtitle:
      "Training tips, dog care advice and stories from our community — for a happier, healthier pack.",
    portraitImage:
      "https://images.unsplash.com/photo-1568572933382-74d440642117?auto=format&fit=crop&w=900&q=80",
    backgroundImage:
      "https://images.unsplash.com/photo-1448375240586-882707db889b?auto=format&fit=crop&w=1920&q=80",
  },
} as const;

export const blogCategories = [
  "All",
  "Training Tips",
  "Behavior",
  "Health & Care",
  "Success Stories",
  "News",
] as const;

export const blogPosts = [
  {
    title: "Essential Commands Every Dog Should Know",
    category: "Training Tips" as const,
    date: "Apr 15, 2025",
    image:
      "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Understanding Aggression in Dogs",
    category: "Behavior" as const,
    date: "Mar 28, 2025",
    image:
      "https://images.unsplash.com/photo-1558788353-f76d92427f16?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Puppy Socialization: The First 16 Weeks",
    category: "Training Tips" as const,
    date: "Mar 10, 2025",
    image:
      "https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Choosing the Right Collar and Leash",
    category: "Health & Care" as const,
    date: "Feb 22, 2025",
    image:
      "https://images.unsplash.com/photo-1608093278320-b12f74d78706?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "From Reactive to Relaxed: Max's Story",
    category: "Success Stories" as const,
    date: "Feb 5, 2025",
    image:
      "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "New Group Classes Starting This Spring",
    category: "News" as const,
    date: "Jan 18, 2025",
    image:
      "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&w=800&q=80",
  },
] as const;

export const contactPage = {
  hero: {
    title: "Get in Touch",
    subtitle: "Have questions? We're here to help! Reach out and let's talk.",
    image:
      "https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&w=1920&q=80",
  },
  form: {
    title: "Send Us a Message",
    cta: "Send Message",
  },
  maps: [
    {
      title: "Store",
      query: "Chhatrapati Sambhajinagar Maharashtra dog training",
      visit: {
        title: "Visit Our Store",
        description:
          "Tour our training floors, meet trainers, and see classes in action.",
        image:
          "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?auto=format&fit=crop&w=600&q=80",
      },
    },
  ],
} as const;

export const socialLinks = [
  { label: "Facebook", href: "#" },
  { label: "Instagram", href: "#" },
  { label: "LinkedIn", href: "#" },
  { label: "Pinterest", href: "#" },
  { label: "Twitter", href: "#" },
] as const;

export const site = {
  name: "Sam's Pets",
  tagline: "Expert Dog Training",
  phone: "+91 85529 49196",
  phoneHref: "tel:+918552949196",
  email: "info@samspet.com",
  hours: "Opening Hours: MON – SAT 10am – 9pm",
  address: "Austin, TX",
  city: "Chhatrapati Sambhajinagar",
  behanceReference:
    "https://www.behance.net/gallery/199142029/Dog-Trainer-Website-Design-Website-Branding",
};

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Group & Private Obedience", href: "#services" },
  { label: "Puppy Training", href: "#services" },
  { label: "Behavior Modification", href: "#about" },
  { label: "About Us", href: "#about" },
  { label: "Blog", href: "#blog" },
] as const;

export const interestOptions = [
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
  {
    title: "Puppy Start Right Preschool",
    items: ["Sundays at 4pm"],
    link: "#consultation",
  },
  {
    title: "Middle School",
    items: [
      "Now Enrolling: Thursdays at 6:30pm",
      "Starting May 4: Saturdays at 8am",
      "Starting May 8: Wednesdays at 9am",
    ],
    link: "#consultation",
  },
  {
    title: "Finishing School",
    items: ["Saturdays at 9:30am"],
    link: "#consultation",
  },
  {
    title: "Upcoming Classes",
    items: [
      "Leashwalking Makeover",
      "Off-Leash Reliability",
      `Email ${site.email} to get on the waiting list`,
    ],
    link: `mailto:${site.email}`,
  },
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
      "Sam's Pets helped us achieve off-leash reliability at Bull Creek. We are so grateful for the team's patience and clear instruction.",
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
      "Sam's Pets' kind, positive, and gentle methods work with multiple dogs. Tessa and Mariah both love training days.",
    author: "Rick P. with Tessa and Mariah",
    image:
      "https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?auto=format&fit=crop&w=200&q=80",
  },
] as const;

export const blogPosts = [
  {
    title: "Choosing a Collar for Your Dog",
    image:
      "https://images.unsplash.com/photo-1608093278320-b12f74d78706?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Causes of Aggression",
    image:
      "https://images.unsplash.com/photo-1558788353-f76d92427f16?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Building a Relationship Before Training",
    image:
      "https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Dog Parks",
    image:
      "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=600&q=80",
  },
] as const;

export const socialLinks = [
  { label: "Facebook", href: "#" },
  { label: "Instagram", href: "#" },
  { label: "LinkedIn", href: "#" },
  { label: "Pinterest", href: "#" },
  { label: "Twitter", href: "#" },
] as const;

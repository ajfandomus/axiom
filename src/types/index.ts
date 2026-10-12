export type PageId = 'home' | 'about' | 'projects' | 'project-detail' | 'hospitality' | 'media' | 'faq' | 'contact';

export interface Project {
  id: string;
  name: string;
  tagline: string;
  location: string;
  country: 'UAE' | 'Netherlands';
  status: 'Under Construction' | 'Completed' | 'Upcoming';
  handoverYear: string;
  unitTypes: string;
  totalUnits?: string;
  floors?: string;
  heroImage: string;
  galleryImages: string[];
  summary: string;
  description: string[];
  architecturalHighlights: string[];
  amenities: string[];
  locationDetails: {
    district: string;
    city: string;
    nearby: { place: string; time: string }[];
  };
  brochureAvailable: boolean;
  specs: { label: string; value: string }[];
}

export interface HospitalityAsset {
  id: string;
  name: string;
  location: string;
  country: string;
  stars: string;
  type: string;
  heritage: string;
  image: string;
  description: string;
  amenities: string[];
  dining: string;
  websiteUrl: string;
}

export interface Article {
  id: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  summary: string;
  content: string[];
  image: string;
  author: string;
}

export interface FAQItem {
  id: string;
  category: 'Investment' | 'Off-Plan' | 'Golden Visa' | 'Developer';
  question: string;
  answer: string;
}

export interface InquiryFormData {
  fullName: string;
  email: string;
  phone: string;
  interestedProject: string;
  inquiryType: 'Purchase' | 'Investment Consultation' | 'Brochure Request' | 'General Inquiry';
  message: string;
}

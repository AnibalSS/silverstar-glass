/**
 * Generic types for the application
 */

export interface ServiceCardProps {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface ProjectProps {
  id: number;
  title: string;
  location: string;
  category: string;
  imageUrl?: string;
}

export interface ProcessStepProps {
  number: number;
  title: string;
  description: string;
  icon: string;
}

export interface TestimonialProps {
  id: number;
  name: string;
  city: string;
  quote: string;
  rating: number;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}


export interface TrainingItem {
  id: string;
  name: string;
  category: 'technical' | 'paramedical' | 'management' | 'it';
  description?: string;
  image: string;
}

export interface TrainingCategory {
  id: string;
  title: string;
  path: string;
  description: string;
  color: string;
  image: string;
}

export interface ContactFormData {
  fullName: string;
  phone: string;
  email: string;
  training: string;
  message: string;
}

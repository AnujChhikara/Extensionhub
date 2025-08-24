export interface Extension {
  id: string;
  name: string;
  description: string;
  shortDescription: string;
  logo: string;
  rating: number;
  reviewCount: number;
  downloadCount: number;
  category: string;
  tags: string[];
  author: string;
  version: string;
  lastUpdated: string;
  trending: boolean;
  underrated: boolean;
  discoveryScore: number;
  price: 'free' | 'paid';
  permissions: string[];
  website?: string;
  github?: string;
}

export interface ExtensionFilters {
  category?: string;
  rating?: number;
  tags?: string[];
  trending?: boolean;
  underrated?: boolean;
  price?: 'free' | 'paid';
  search?: string;
}

export interface ExtensionSort {
  field: 'newest' | 'rating' | 'popular' | 'discovery' | 'name';
  direction: 'asc' | 'desc';
}

export interface ExtensionListResponse {
  extensions: Extension[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

export interface Category {
  id: string;
  name: string;
  count: number;
  icon: string;
}

export interface Tag {
  id: string;
  name: string;
  count: number;
}

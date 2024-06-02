type Product = {
  id: string;
  name: string;
  shortDescription: string;
  description: string;
  price: number;
  images: string[];
  features?: ProductFeature[];
  tags: string[];
  createdAt: number;
};

type ProductFeature = {
  color: string;
  icon: React.ReactNode;
  label: string;
};

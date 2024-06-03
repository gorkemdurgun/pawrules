type Product = {
  id: string;
  name: string;
  shortDescription: string;
  description: string;
  price: number;
  images: string[];
  features?: ProductFeature[];
  sizes: ProductSizeStock[];
  tags: string[];
  reviews: ProductReview[];
  createdAt: number;
};

type ProductReview = {
  id: string;
  username: string;
  content: string;
  rating: number;
  createdAt: number;
};

type ProductSizeStock = {
  size: string;
  stock: number;
  price: number;
};

type ProductFeature = {
  color: string;
  icon: React.ReactNode;
  label: string;
};

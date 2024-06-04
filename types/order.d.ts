type OrderStatus = "preparing" | "shipped" | "delivered";
type ShippingInfo = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
};

type OrderItem = {
  productId: string;
  quantity: number;
  selectedSize: string;
};

type ShoppingBasket = {
  userId?: string;
  items: OrderItem[];
};

type Order = {
  id: string;
  userId?: string;
  items: OrderItem[];
  status: OrderStatus;
  shippingInfo: ShippingInfo;
  paymentResponse: {
    paymentId: string;
    paymentStatus: string;
    totalPaid: number;
  };
};

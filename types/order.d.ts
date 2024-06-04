type Order = {
  product: Product;
  requestedQuantity: number;
  requestedSize: string;
  status: OrderStatus;
  createdAt: number;
};

type OrderStatus = "pending" | "processing" | "completed" | "cancelled";

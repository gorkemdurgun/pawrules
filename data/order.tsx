const fakeOrders: Order[] = [
  {
    id: "1",
    userId: "1",
    items: [
      {
        productId: "1",
        quantity: 2,
        selectedSize: "M",
      },
    ],
    status: "preparing",
    shippingInfo: {
      firstName: "John",
      lastName: "Doe",
      email: "jododd1@gmail.com",
      phone: "123456789",
      address: "123 Main St Apt 1 Floor 2 Door 3",
      city: "New York",
    },
    paymentResponse: {
      paymentId: "1",
      paymentStatus: "paid",
      totalPaid: 100,
    },
  },
  {
    id: "2",
    userId: "2",
    items: [
      {
        productId: "2",
        quantity: 1,
        selectedSize: "L",
      },
    ],
    status: "shipped",
    shippingInfo: {
      firstName: "Tom",
      lastName: "Smith",
      email: "tosimia12@gmail.com",
      phone: "987654321",
      address: "456 Main St Apt 2 Floor 1 Door 2",
      city: "Los Angeles",
    },
    paymentResponse: {
      paymentId: "2",
      paymentStatus: "paid",
      totalPaid: 50,
    },
  },
  {
    id: "3",
    userId: "3",
    items: [
      {
        productId: "3",
        quantity: 3,
        selectedSize: "S",
      },
      {
        productId: "4",
        quantity: 1,
        selectedSize: "XL",
      },
    ],
    status: "delivered",
    shippingInfo: {
      firstName: "Alice",
      lastName: "Johnson",
      email: "alison12102@gmail.com",
      phone: "123456789",
      address: "789 Main St Apt 3 Floor 3 Door 1",
      city: "San Francisco",
    },
    paymentResponse: {
      paymentId: "3",
      paymentStatus: "paid",
      totalPaid: 150,
    },
  },
];

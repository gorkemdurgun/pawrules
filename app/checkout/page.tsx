import { Breadcrumbs, BreadcrumbItem } from "@nextui-org/react";

const CheckoutPage = () => {
  return (
    <div className="container mx-auto max-w-7xl min-h-[100vh] pb-24 flex flex-col items-start gap-4">
      <Breadcrumbs className="mb-4" separator=">">
        <BreadcrumbItem href="/checkout">Checkout</BreadcrumbItem>
      </Breadcrumbs>
      <div className="w-full flex flex-row items-center justify-between gap-4"></div>
    </div>
  );
};

export default CheckoutPage;

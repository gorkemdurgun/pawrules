"use client";

import {
  Breadcrumbs,
  BreadcrumbItem,
  Chip,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  getKeyValue,
  Image,
  Card,
  Button,
  Input,
  Textarea,
} from "@nextui-org/react";
import React from "react";

import { PiTrashDuotone as DeleteIcon } from "react-icons/pi";

import { fakeBasket } from "@/data/basket";
import { fakeProducts } from "@/data/product";

const CheckoutPage = () => {
  const [basket, setBasket] = React.useState<ShoppingBasket>(fakeBasket);

  const columns = [
    { key: "productImage", label: "Seçili Ürün" },
    { key: "productName", label: "Ürün Adı" },
    { key: "selectedSize", label: "Beden" },
    { key: "quantity", label: "Adet" },
    { key: "price", label: "Fiyat" },
    { key: "actions", label: "" },
  ];
  const rows = fakeBasket.items.map((item, index) => ({
    key: index,
    productId: item.productId,
    selectedSize: item.selectedSize,
    quantity: item.quantity,
  }));

  const renderCell = React.useCallback((item: any, columnKey: any) => {
    const product = fakeProducts.find((p) => p.id === item.productId);

    function handleChangeQuantity(e: React.ChangeEvent<HTMLInputElement>) {
      const newBasket = { ...basket };
      const itemIndex = newBasket.items.findIndex((i) => i.productId === item.productId);
      newBasket.items[itemIndex].quantity = Number(e.target.value);
      setBasket(newBasket);
    }

    function handleDeleteItem() {
      const newBasket = { ...basket };
      const itemIndex = newBasket.items.findIndex((i) => i.productId === item.productId);
      newBasket.items.splice(itemIndex, 1);
      setBasket(newBasket);
    }

    if (!product) return null;
    switch (columnKey) {
      case "productImage":
        return <Image alt={product?.name} className="w-16 h-16 object-cover" src={product?.images[0]} />;
      case "productName":
        return <span className="text-xs sm:text-sm">{product?.name}</span>;
      case "selectedSize":
        return <span className="text-xs sm:text-sm">{item.selectedSize}</span>;
      case "quantity":
        return (
          <Input
            className="w-16 sm:w-36"
            type="number"
            max={product.sizes.find((s) => s.size === item.selectedSize)?.stock || 0}
            value={String(basket.items.find((i) => i.productId === item.productId)?.quantity) || "0"}
            onChange={handleChangeQuantity}
            errorMessage={`Stokta ${product.sizes.find((s) => s.size === item.selectedSize)?.stock || 0} adet ürün var`}
          />
        );
      case "price":
        return <span className="font-semibold text-md">{product?.price * item.quantity} ₺</span>;
      case "actions":
        return (
          <Button variant="light" onClick={handleDeleteItem}>
            <DeleteIcon className="w-4 h-4" />
          </Button>
        );
      default:
        return getKeyValue(item, columnKey);
    }
  }, []);

  return (
    <div className="container mx-auto max-w-7xl min-h-[100vh] pb-24 flex flex-col items-start gap-4">
      <Breadcrumbs className="mb-4" separator=">">
        <BreadcrumbItem href="/">Home</BreadcrumbItem>
        <BreadcrumbItem href="/checkout">Checkout</BreadcrumbItem>
      </Breadcrumbs>
      <div className="grid grid-cols-1 md:grid-cols-[2fr,1fr] gap-4 w-full">
        <div className="flex flex-col gap-4">
          <Table aria-label="Basket Table">
            <TableHeader columns={columns}>{(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}</TableHeader>
            <TableBody items={rows}>
              {(item) => <TableRow key={item.key}>{(columnKey) => <TableCell>{renderCell(item, columnKey)}</TableCell>}</TableRow>}
            </TableBody>
          </Table>
          <Card className="flex flex-col gap-1 p-4">
            <h2 className="text-lg font-semibold">Sepet Özeti</h2>
            <div className="flex justify-between items-center">
              <span>Kargo Ücreti:</span>
              <span className="text-lg">
                {"+ "}
                40 ₺
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span>Sepet Tutarı:</span>
              <span className="text-lg">
                {"+ "}
                {rows.reduce((acc, item) => {
                  const product = fakeProducts.find((p) => p.id === item.productId);
                  return acc + (product?.price || 0) * item.quantity;
                }, 0)}{" "}
                ₺
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span>Toplam Tutar:</span>
              <span className="font-bold text-2xl text-orange-600">
                {rows.reduce((acc, item) => {
                  const product = fakeProducts.find((p) => p.id === item.productId);
                  return acc + (product?.price || 0) * item.quantity;
                }, 0) + 40}{" "}
                ₺
              </span>
            </div>
          </Card>
        </div>
        <div className="flex flex-col gap-4">
          <Card className="flex flex-col gap-4 p-4">
            <h2 className="text-lg font-semibold">Gönderim Bilgileri</h2>
            <div className="flex flex-col gap-3">
              <div className="flex gap-2">
                <Input label="Ad" />
                <Input label="Soyad" />
              </div>
              <Input label="Email" />
              <Input label="Telefon" />
              <Textarea minRows={2} label="Adres" />
              <div className="flex gap-2">
                <Input label="Şehir" />
                <Input label="İlçe" />
              </div>
            </div>
          </Card>
          <Button color="warning" variant="shadow" className="w-full p-8 font-poppins text-lg">
            Ödemeye Geç
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;

interface IProduct {
  id: string;
  data: IProductDetail;
}

interface IProductDetail {
  description: string;
  category: string;
  title: string;
  employee: string;
  price: number;
  reviews: string[];
}

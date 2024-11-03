import axios from 'axios';

const apiBase = 'https://us-central1-test-b7665.cloudfunctions.net';

export const fetchStores = async () => {
  const { data } = await axios.get<IStore[]>(`${apiBase}/api/stores`);
  return data;
};

export const fetchStoreProducts = async (storeId: string) => {
  const { data } = await axios.get<IProduct[]>(
    `${apiBase}/api/stores/${storeId}/products`
  );
  return data;
};

export const insertProduct = async (
  storeId: string,
  product: IProductDetail
) => {
  const { data } = await axios.post<string>(
    `${apiBase}/api/stores/${storeId}/products`,
    product
  );
  return data;
};

export const updateProduct = async (
  storeId: string,
  product: IProductDetail
) => {
  const { data } = await axios.put<string>(
    `${apiBase}/api/stores/${storeId}/products`,
    product
  );
  return data;
};

export const fetchStoreProductDetails = async (
  storeId: string,
  productId: string
) => {
  const { data } = await axios.get<IProduct>(
    `${apiBase}/api/stores/${storeId}/products/${productId}`
  );
  return data;
};

export const fetchStats = async (storeId: string) => {
  const { data } = await axios.get<IProduct>(
    `${apiBase}/api/stores/${storeId}/stats/categories`
  );
  return data;
};

export const deleteProduct = async (storeId: string, productId: string) => {
  const data = await axios.delete(
    `${apiBase}/api/stores/${storeId}/products/${productId}`
  );

  return data;
};

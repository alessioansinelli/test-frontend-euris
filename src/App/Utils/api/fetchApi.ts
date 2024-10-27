import axios from 'axios';

const apiBase = 'http://us-central1-test-b7665.cloudfunctions.net';

export const fetchStores = async () => {
  const { data } = await axios.get<IStore[]>(`${apiBase}/api/stores`);
  return data;
};

export const fetchStoreProducts = async (storeId: string) => {
  const { data } = await axios.get<IProduct[]>(
    `/api/stores/${storeId}/products`
  );
  return data;
};

export const fetchStoreProductDetails = async (
  storeId: string,
  productId: string
) => {
  const { data } = await axios.get<IProduct>(
    `/api/stores/${storeId}/products/${productId}`
  );
  return data;
};

export const fetchStats = async (storeId: string) => {
  const { data } = await axios.get<IProduct>(
    `/api/stores/${storeId}/stats/categories`
  );
  return data;
};

export const saveYearAndDate = async (yearAndDate: any) => {
  const response = await axios.put(
    `/api/configurations/year-and-date`,
    yearAndDate
  );

  if (response.status === 200) {
    console.log('Configurazione salvata correttamente');
  }

  return response;
};

import { createContext } from 'react';
import { UiLabels } from '../Utils/UiLabels/uiLabels';

interface IShop {
  name: string;
}

interface IContext {
  shopName: string;
  products: Array<IShop>;
}

export const InitialContext: IContext = {
  shopName: UiLabels.topbar.title,
  products: [{ name: 'Il nido delle fate' }, { name: 'Il nido dei maghi' }],
};

export const ShopContext = createContext(InitialContext);

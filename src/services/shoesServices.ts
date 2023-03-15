import { IShoe } from '../interface/interface';
import shoes from '../shoes/shoes';

export const getAllShoes = (sort: string | null) => {
  const byEndPrice = [...shoes].sort((a: IShoe, b: IShoe) => {
    return sort === 'price'
      ? parseFloat(b.endprice) - parseFloat(a.endprice)
      : parseFloat(a.endprice) - parseFloat(b.endprice);
  });
  return sort ? byEndPrice : shoes;
};

export const getAllShoesByGenre = (genre: string) => {
  return shoes.filter((shoe: IShoe) => shoe.genre === genre);
};

export const getShoeByName = (shoeName: string) => {
  return shoes.filter((shoe: IShoe) => shoe.name === shoeName);
};

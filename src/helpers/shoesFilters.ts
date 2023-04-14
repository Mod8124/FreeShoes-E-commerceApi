import { IShoe } from '../interface/interface';
import shoes from '../shoes/shoes';
import randomNumber from './randomNumber';

// get random shoes max of 4 the index of the number are aleatory also doesn't return the same shoes detail
const getRecommendedShoes = (shoes: IShoe[], originalShoe: IShoe) => {
  const numShoes = shoes.length;
  const recommendedShoes: IShoe[] = [];
  const usedIndexes: Set<number> = new Set();
  while (recommendedShoes.length < 4) {
    const randomIndex = randomNumber(numShoes);
    if (!usedIndexes.has(randomIndex)) {
      if (originalShoe !== shoes[randomIndex]) {
        recommendedShoes.push(shoes[randomIndex]);
        usedIndexes.add(randomIndex);
      }
    }
  }
  return recommendedShoes;
};

export const getAllShoes = (sort: string | null) => {
  const byEndPrice = [...shoes].sort((a: IShoe, b: IShoe) => {
    return sort === 'price'
      ? parseFloat(b.endprice) - parseFloat(a.endprice)
      : parseFloat(a.endprice) - parseFloat(b.endprice);
  });
  return sort ? byEndPrice : shoes;
};

export const getAllShoesByGenre = (gender: string) => {
  return shoes.filter((shoe: IShoe) => shoe.gender === gender);
};

export const getShoeById = (shoeId: string, recommendations: boolean) => {
  const shoe = [...shoes].filter((shoe: IShoe) => shoe.id === Number(shoeId));
  const recommendationsShoes = getRecommendedShoes(shoes, shoe[0]);
  if (recommendations) {
    return [shoe[0], recommendationsShoes];
  }
  return [shoe[0]];
};

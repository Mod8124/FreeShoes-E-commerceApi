import randomNumber from '../helpers/randomNumber';
import ShoeFactory from '../class/shoeFactory';
import featured from '../helpers/featured';
const { prices, genres } = featured();
import { IShoe } from '../interface/interface';

const shoes: IShoe[] = [
  {
    id: 0,
    name: 'Fall Limited Edition Sneakers',
    price: prices[0].toFixed(2),
    image:
      'https://images.unsplash.com/photo-1603808033192-082d6919d3e1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=715&q=80',
    description:
      "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.",
    porcent: prices[1],
    endprice: prices[2].toFixed(2),
    company: 'SNEAKER COMPANY',
    genre: genres[randomNumber(2)],
    type: 'Lifestyle',
  },
];

const shoeFactory = new ShoeFactory();

shoes.push(
  shoeFactory.create(
    26,
    'https://images.unsplash.com/photo-1605034313761-73ea4a0cfbf3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80'
  )
);
shoes.push(
  shoeFactory.create(
    27,
    'https://images.unsplash.com/photo-1575537302964-96cd47c06b1b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80'
  )
);
shoes.push(
  shoeFactory.create(
    28,
    'https://images.unsplash.com/photo-1587563871167-1ee9c731aefb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80'
  )
);
shoes.push(
  shoeFactory.create(
    29,
    'https://images.unsplash.com/photo-1547586877-0351a7143cbe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
  )
);
shoes.push(
  shoeFactory.create(
    30,
    'https://images.unsplash.com/flagged/photo-1556637640-2c80d3201be8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
  )
);
shoes.push(
  shoeFactory.create(
    31,
    'https://images.unsplash.com/photo-1590673846749-e2fb8f655df8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
  )
);
shoes.push(
  shoeFactory.create(
    32,
    'https://images.unsplash.com/photo-1491553895911-0055eca6402d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80'
  )
);
shoes.push(
  shoeFactory.create(
    33,
    'https://images.unsplash.com/photo-1612902377756-414b2139d5e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80'
  )
);
shoes.push(
  shoeFactory.create(
    34,
    'https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80'
  )
);
shoes.push(
  shoeFactory.create(
    35,
    'https://images.unsplash.com/photo-1524532787116-e70228437bbe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80'
  )
);
shoes.push(
  shoeFactory.create(
    36,
    'https://images.unsplash.com/photo-1603787081207-362bcef7c144?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80'
  )
);
shoes.push(
  shoeFactory.create(
    37,
    'https://images.unsplash.com/photo-1603787081151-cbebeef20092?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80'
  )
);
shoes.push(
  shoeFactory.create(
    38,
    'https://images.unsplash.com/photo-1588484628369-dd7a85bfdc38?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80'
  )
);
shoes.push(
  shoeFactory.create(
    39,
    'https://images.unsplash.com/photo-1560769629-975ec94e6a86?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80'
  )
);
shoes.push(
  shoeFactory.create(
    40,
    'https://images.unsplash.com/photo-1580611519219-dba2753b90ef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
  )
);
shoes.push(
  shoeFactory.create(
    41,
    'https://images.unsplash.com/photo-1621665421558-831f91fd0500?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
  )
);
shoes.push(
  shoeFactory.create(
    42,
    'https://images.unsplash.com/photo-1606890542166-00bad9f493ee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80'
  )
);
shoes.push(
  shoeFactory.create(
    43,
    'https://images.unsplash.com/photo-1603787081368-05588c2d65ec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80'
  )
);
shoes.push(
  shoeFactory.create(
    44,
    'https://images.unsplash.com/photo-1601144537844-c2a0494aeb41?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80'
  )
);
shoes.push(
  shoeFactory.create(
    45,
    'https://images.unsplash.com/photo-1579446565308-427218a2c60e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80'
  )
);
shoes.push(
  shoeFactory.create(
    46,
    'https://images.unsplash.com/photo-1608363789638-70e879a9d988?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
  )
);
shoes.push(
  shoeFactory.create(
    47,
    'https://images.unsplash.com/photo-1515555230216-82228b88ea98?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1026&q=80'
  )
);
shoes.push(
  shoeFactory.create(
    48,
    'https://images.unsplash.com/photo-1595309849731-f7ce86eda9fc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1966&q=80'
  )
);
shoes.push(
  shoeFactory.create(
    49,
    'https://images.unsplash.com/photo-1594100065556-1c920cd92f19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80'
  )
);
shoes.push(
  shoeFactory.create(
    50,
    'https://images.unsplash.com/photo-1626947346165-4c2288dadc2a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
  )
);
shoes.push(
  shoeFactory.create(
    51,
    'https://images.unsplash.com/photo-1508609349937-5ec4ae374ebf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1059&q=80'
  )
);
shoes.push(
  shoeFactory.create(
    52,
    'https://images.unsplash.com/photo-1617963846230-bfabaaf48f0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1925&q=80'
  )
);
shoes.push(
  shoeFactory.create(
    53,
    'https://images.unsplash.com/photo-1545289414-1c3cb1c06238?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
  )
);
shoes.push(
  shoeFactory.create(
    54,
    'https://images.unsplash.com/photo-1595461135849-bf08893fdc2c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1468&q=80'
  )
);

export default shoes;

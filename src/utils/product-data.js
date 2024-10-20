import { Product } from '../models/Product';
import { Categories } from './enums/Categories';
import { Colors } from './enums/Color';
import { ItemTypes } from './enums/ItemTypes';
import { Sizes } from './enums/Size';
import { Tags } from './enums/Tags';
//import { Categories, Colors, ItemTypes, Sizes, Tags } from './enums/index';
export const products = [
  new Product(
    1001, 
    'Men’s Black Shirt', 
    29.99, 
    100, 
    Categories.MEN, 
    ItemTypes.TOPS, 
    Colors.BLACK, 
    Sizes.MEDIUM, 
    'A stylish black shirt for men.', 
    ['https://image1.jpg', 'https://image2.jpg'], 
    [Tags.NEW, Tags.SALE]
  ),
  new Product(
    1002, 
    'Women’s Red Dress', 
    49.99, 
    50, 
    Categories.WOMEN, 
    ItemTypes.TOPS, 
    Colors.RED, 
    Sizes.SMALL, 
    'A beautiful red dress.', 
    ['https://image3.jpg', 'https://image4.jpg'], 
    [Tags.SALE]
  ),
  new Product(
    1003, 
    'Children’s Blue Pants', 
    19.99, 
    200, 
    Categories.BOYS, 
    ItemTypes.BOTTOMS, 
    Colors.BLUE, 
    Sizes.LARGE, 
    'Comfortable blue pants for kids.', 
    ['https://image5.jpg'], 
    [Tags.NEW]
  ),
  new Product(
    1004, 
    'Women’s White Sneakers', 
    59.99, 
    80, 
    Categories.WOMEN, 
    ItemTypes.SHOES, 
    Colors.WHITE, 
    Sizes.MEDIUM, 
    'Casual white sneakers for women.', 
    ['https://image6.jpg'], 
    [Tags.NEW, Tags.SALE]
  ),
  new Product(
    1005, 
    'Men’s Green Hoodie', 
    39.99, 
    150, 
    Categories.MEN, 
    ItemTypes.TOPS, 
    Colors.GREEN, 
    Sizes.LARGE, 
    'Comfortable green hoodie for men.', 
    ['https://image7.jpg'], 
    [Tags.SALE]
  ),
  new Product(
    1006, 
    'Kids’ Pink Skirt', 
    19.99, 
    120, 
    Categories.GIRLS, 
    ItemTypes.BOTTOMS, 
    Colors.PINK, 
    Sizes.SMALL, 
    'Cute pink skirt for girls.', 
    ['https://image8.jpg'], 
    [Tags.NEW]
  ),
  new Product(
    1007, 
    'Men’s Black Shirt', 
    29.99, 
    100, 
    Categories.MEN, 
    ItemTypes.TOPS, 
    Colors.BLACK, 
    Sizes.MEDIUM, 
    'A stylish black shirt for men.', 
    ['https://image1.jpg', 'https://image2.jpg'], 
    [Tags.NEW, Tags.SALE]
  ),
  new Product(
    1008, 
    'Women’s Red Dress', 
    49.99, 
    50, 
    Categories.WOMEN, 
    ItemTypes.TOPS, 
    Colors.RED, 
    Sizes.SMALL, 
    'A beautiful red dress.', 
    ['https://image3.jpg', 'https://image4.jpg'], 
    [Tags.SALE]
  ),
  new Product(
    1009, 
    'Children’s Blue Pants', 
    19.99, 
    200, 
    Categories.BOYS, 
    ItemTypes.BOTTOMS, 
    Colors.BLUE, 
    Sizes.LARGE, 
    'Comfortable blue pants for kids.', 
    ['https://image5.jpg'], 
    [Tags.NEW]
  ),
  new Product(
    1010, 
    'Women’s White Sneakers', 
    59.99, 
    80, 
    Categories.WOMEN, 
    ItemTypes.SHOES, 
    Colors.WHITE, 
    Sizes.MEDIUM, 
    'Casual white sneakers for women.', 
    ['https://image6.jpg'], 
    [Tags.NEW, Tags.SALE]
  ),
 
];

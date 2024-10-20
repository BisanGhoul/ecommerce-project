import { Product } from '../models/Product';
import { Categories } from './enums/Categories';
import { Colors } from './enums/Color';
import { ItemTypes } from './enums/ItemTypes';
import { Sizes } from './enums/Size';
import { Tags } from './enums/Tags';
import BoysBluePantsLarge from '../assets/images/BoysBluePantsLarge.jpg';
import GirlsPinkSkirtSmall from '../assets/images/GirlsPinkSkirtSmall.jpg';
import MensBlackMediumShirt from '../assets/images/MensBlackMediumShirt.jpg';
import MensGreenHoodieLarge from '../assets/images/MensGreenHoodieLarge.webp';
import WomensRedSmallShirt from '../assets/images/WomensRedSmallShirt.jpg';
import WomensWhiteSneakersMedium from '../assets/images/WomensWhiteSneakersMedium.webp';

export const products = [
  new Product(
    1001, 
    'Men’s Black Shirt', 
    29.99, 
    100, 
    Categories.MEN, 
    ItemTypes.TOPS, 
    [Colors.BLACK], 
    [Sizes.MEDIUM], 
    'A stylish black shirt for men.', 
    [MensBlackMediumShirt], 
    [Tags.NEW, Tags.SALE]
  ),
  new Product(
    1002, 
    'Women’s Red Shirt', 
    49.99, 
    50, 
    Categories.WOMEN, 
    ItemTypes.TOPS, 
    [Colors.RED], 
    [Sizes.SMALL], 
    'A beautiful red dress.', 
    [WomensRedSmallShirt], 
    [Tags.SALE]
  ),
  new Product(
    1003, 
    'Boys’s Blue Pants', 
    19.99, 
    200, 
    Categories.BOYS, 
    ItemTypes.BOTTOMS, 
    [Colors.BLUE], 
    [Sizes.LARGE], 
    'Comfortable blue pants for kids.', 
    [BoysBluePantsLarge], 
    [Tags.NEW]
  ),
  new Product(
    1004, 
    'Women’s White Sneakers', 
    59.99, 
    80, 
    Categories.WOMEN, 
    ItemTypes.SHOES, 
    [Colors.WHITE], 
    [Sizes.MEDIUM], 
    'Casual white sneakers for women.', 
    [WomensWhiteSneakersMedium], 
    [Tags.NEW, Tags.SALE]
  ),
  new Product(
    1005, 
    'Men’s Green Hoodie', 
    39.99, 
    150, 
    Categories.MEN, 
    ItemTypes.TOPS, 
    [Colors.GREEN], 
    [Sizes.LARGE], 
    'Comfortable green hoodie for men.', 
    [MensGreenHoodieLarge], 
    [Tags.SALE]
  ),
  new Product(
    1006, 
    'Girls’ Pink Skirt', 
    19.99, 
    120, 
    Categories.GIRLS, 
    ItemTypes.BOTTOMS, 
    [Colors.PINK], 
    [Sizes.SMALL], 
    'Cute pink skirt for girls.', 
    [GirlsPinkSkirtSmall], 
    [Tags.NEW]
  ),
  new Product(
    1007, 
    'Men’s Black Shirt', 
    29.99, 
    100, 
    Categories.MEN, 
    ItemTypes.TOPS, 
    [Colors.BLACK], 
    [Sizes.MEDIUM], 
    'A stylish black shirt for men.', 
    [MensBlackMediumShirt], 
    [Tags.NEW, Tags.SALE]
  ),
  new Product(
    1008, 
    'Women’s Red Dress', 
    49.99, 
    50, 
    Categories.WOMEN, 
    ItemTypes.TOPS, 
    [Colors.RED], 
    [Sizes.SMALL], 
    'A beautiful red dress.', 
    [WomensRedSmallShirt], 
    [Tags.SALE]
  ),
  new Product(
    1009, 
    'Children’s Blue Pants', 
    19.99, 
    200, 
    Categories.BOYS, 
    ItemTypes.BOTTOMS, 
    [Colors.BLUE], 
    [Sizes.LARGE], 
    'Comfortable blue pants for kids.', 
    [BoysBluePantsLarge], 
    [Tags.NEW]
  ),
  new Product(
    1010, 
    'Women’s White Sneakers', 
    59.99, 
    80, 
    Categories.WOMEN, 
    ItemTypes.SHOES, 
    [Colors.WHITE], 
    [Sizes.MEDIUM], 
    'Casual white sneakers for women.', 
    [WomensWhiteSneakersMedium], 
    [Tags.NEW, Tags.SALE]
  )
];

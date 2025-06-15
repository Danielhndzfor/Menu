
import { Product } from "../data/menuData";

export type MenuCategoryGridProps = {
  sections: {
    key: string;
    title: string;
    products: Product[];
  }[];
  onSelect: (key: string) => void;
};

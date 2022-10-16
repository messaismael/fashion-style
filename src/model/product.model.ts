export class Product {
  id: string;
  category: string;
  cover: string;
  name: string;
  price: number;
  description: string;

  constructor() {
    this.id = "";
    this.category = "";
    this.name = "";
    this.price = 0;
    this.cover = "https://via.placeholder.com/200";
    this.description = "";
  }
}

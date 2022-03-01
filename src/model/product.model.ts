export class Product {
  public id: string;
  public category?: string;
  public cover: string;
  public name?: string;
  public price?: number;
  description?: string;

  constructor () {
    this.id = '';
    this.cover ="https://via.placeholder.com/200";
  }
}
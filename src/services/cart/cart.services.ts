import { Product } from "../../model/product.model";
import { LocalStorageService } from "../localStorage.service"

export class CartService {

  private static cartName: string = "RESOURCE_CART";
  public static cartSize: number = CartService.getItems().length || 0;

  public static getItems(): Product[] {
    return JSON.parse(LocalStorageService.get(this.cartName) || '[]');
  }

  public static isInCart(product: Product): boolean {
    const items = this.getItems();
    const index = items.findIndex(r => r.id === product.id);
    
    return index ===-1? false:true;
  }

  static addItem(product: Product): { success: boolean } {
    const items = this.getItems();
    const index = items.findIndex(r => r.id === product.id);

    if (index === -1) {
      items.push(product);

      LocalStorageService.set(this.cartName, JSON.stringify(items));
      this.cartSize++;

      return { success: true }
    } else {
      return { success: false }
    }
  }

  static removeItem(product: Product): void {
    const items = this.getItems();
    const index = items.findIndex(r => r.id === product.id);

    items.splice(index, 1);

    LocalStorageService.set(this.cartName, JSON.stringify(items));
    this.cartSize--;
  }

  static clear(): void {
    LocalStorageService.remove(this.cartName);
    this.cartSize = 0;
  }
}
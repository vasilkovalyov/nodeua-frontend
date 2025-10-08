import { CartNodeLocalStorageInfoType } from "@/app/store/slices/cart/cart.type";

class LocalStorageCartService {
  static cartItems = "cartItems";

  static addToCart(node: CartNodeLocalStorageInfoType): void {
    if (LocalStorageCartService.isEmptyCart()) {
      localStorage.setItem(LocalStorageCartService.cartItems, JSON.stringify([node]));
      return;
    }

    const stored = localStorage.getItem(LocalStorageCartService.cartItems);
    const nodes = stored ? JSON.parse(stored) : [];
    nodes.push(node);
    localStorage.setItem(LocalStorageCartService.cartItems, JSON.stringify(nodes));
  }

  static isEmptyCart(): boolean {
    const items = localStorage.getItem(LocalStorageCartService.cartItems);
    if (items === null) return true;
    return false;
  }

  static existInCart(id: string): boolean {
    const nodes = localStorage.getItem(LocalStorageCartService.cartItems);
    if (nodes === null) return false;
    return JSON.parse(nodes).some((obj: CartNodeLocalStorageInfoType) => obj._id === id);
  }

  static clearCart(): void {
    localStorage.removeItem(LocalStorageCartService.cartItems);
  }

  static deleteNode(id: string): void {
    const stored = localStorage.getItem(LocalStorageCartService.cartItems);
    if (stored) {
      const nodes = JSON.parse(stored);
      const updated = nodes.filter((node: CartNodeLocalStorageInfoType) => node._id !== id);
      localStorage.setItem(LocalStorageCartService.cartItems, JSON.stringify(updated));
    }
  }

  static getAllNodes(): CartNodeLocalStorageInfoType[] {
    const nodes = localStorage.getItem(LocalStorageCartService.cartItems);
    if (nodes === null) return [];
    return JSON.parse(nodes);
  }

  static getAllNodesIds(): CartNodeLocalStorageInfoType[] {
    const nodes = localStorage.getItem(LocalStorageCartService.cartItems);
    if (nodes === null) return [];
    return JSON.parse(nodes).map((node: CartNodeLocalStorageInfoType) => node._id);
  }

  static updateQuantityNode(id: string, quantity: number): void {
    const nodes: CartNodeLocalStorageInfoType[] = LocalStorageCartService.getAllNodes().map((node) => {
      if (node._id === id) {
        return {
          ...node,
          quantity: quantity
        };
      }
      return node;
    });
    localStorage.setItem(LocalStorageCartService.cartItems, JSON.stringify(nodes));
  }

  static updateDurationNode(id: string, duration: number): void {
    const nodes: CartNodeLocalStorageInfoType[] = LocalStorageCartService.getAllNodes().map((node) => {
      if (node._id === id) {
        return {
          ...node,
          duration: duration
        };
      }
      return node;
    });
    localStorage.setItem(LocalStorageCartService.cartItems, JSON.stringify(nodes));
  }

  static getNodeById(id: string): CartNodeLocalStorageInfoType | null {
    const findNode = LocalStorageCartService.getAllNodes().filter((node) => node._id === id)[0];

    if (findNode === null) return null;

    return findNode;
  }

  static getQuantityByIdNode(id: string): number {
    const findNode = LocalStorageCartService.getNodeById(id);
    if (findNode) {
      return findNode.quantity;
    }
    return 1;
  }

  static getDurationByIdNode(id: string): number {
    const findNode = LocalStorageCartService.getNodeById(id);
    if (findNode) {
      return findNode.duration;
    }
    return 1;
  }
}

export default LocalStorageCartService;

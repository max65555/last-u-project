import BaseRepository from "../base/baseRepository";

class CartRepository extends BaseRepository {
  constructor() {
    super('cart');
  }

  addToCart(productId,quantity){
    return this.client.get(`/${productId}/${quantity}`);
  }
  
  getProductByAccount(){
    return this.client.get("/");
  }

  updateMountProduct(cartId,increaseStep){
    return this.client.put(`/${cartId}/${increaseStep}`);
  }
}

export default new CartRepository();
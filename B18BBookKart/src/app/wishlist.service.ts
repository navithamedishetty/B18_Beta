import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
//import{Wishlisturl} from 'src/app/config/api';
@Injectable({
  providedIn: 'root'
})
export class WishlistService {
  constructor(private http:HttpClient) { }

  getWishlist(){

  }
addToWishlist(productId:any){
//return this.http.post(Wishlisturl,{id: productId})
}
removeFromWishlist(productId:any){
//return this.http.delete(Wishlisturl + '/' + productId);
}
}

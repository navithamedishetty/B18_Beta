import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { WishlistService } from '../wishlist.service';
import { MessengerService } from '../messenger.service';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
 public productList : any;


  constructor(private api:ApiService,
    private msg:MessengerService,
              private wishlistService:WishlistService) { }

  ngOnInit():any {
    this.api.getProduct()
    .subscribe(res=>{//subscribing response
      this.productList = res;// storing
    })
  }
  handleAddToWishlist():any{//this for heart icon
//this.wishlistService.addToWishlist(this.productList.id).subscribe(()=>
//[
  //this.msg.sendMsg(this.productList)
//]
//)
 
  }
  handleRemoveFromWishlist(){// this is for heart icon

  }

}

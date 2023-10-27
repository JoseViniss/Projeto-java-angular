import { Component, OnInit } from '@angular/core';
import { CamisaService } from '../camisa.service';
import { Camisa } from '../camisa';
      
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
      
  camisas: Camisa[] = [];
    
  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(public camisaService: CamisaService) { }
    
  /**
   * Write code on Method
   *
   * @return response()
   */
  ngOnInit(): void {
    this.camisaService.getAll().subscribe((data: Camisa[])=>{
      this.camisas = data;
      console.log(this.camisas);
    })  
  }
    
  /**
   * Write code on Method
   *
   * @return response()
   */
  deletePost(id:number){
    this.camisaService.delete(id).subscribe(res => {
         this.camisas = this.camisas.filter(item => item.id !== id);
         console.log('Post deleted successfully!');
    })
  }
    
}
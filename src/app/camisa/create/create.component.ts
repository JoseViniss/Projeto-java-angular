import { Component, OnInit } from '@angular/core';
import { CamisaService } from '../camisa.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
     
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
    
  form!:FormGroup;
  submited=false;
  constructor(private fb:FormBuilder,
    public camisaService: CamisaService,
    private router: Router,
    ){};

  ngOnInit() {
      this.form = this.fb.group({
        tamanho:[null, [Validators.required, Validators.minLength(3), Validators.maxLength(250)]],
        preco_uni:[null,[Validators.required, Validators.minLength(3), Validators.maxLength(250)]],
      })
  }

  /**
   * Write code on Method
   *
   * @return response()
   */
  get f(){
    return this.form.controls;
  }

  /**
   * Write code on Method
   *
   * @return response()
   */
  hasError(field:string){
    return this.form.get(field)?.errors;
  }
  submit(){
    this.submited=true;
    console.log(this.form.value);
    if(this.form.valid){
    console.log("submit");
    }
    this.camisaService.create(this.form.value).subscribe((res:any) => {
         console.log('Post created successfully!');
         this.router.navigateByUrl('camisa/index');
    })
  }
  cancel(){
    this.submited=false;
    this.form.reset();

  }
  
}
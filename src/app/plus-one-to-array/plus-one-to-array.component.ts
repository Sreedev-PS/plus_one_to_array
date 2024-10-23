import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-plus-one-to-array',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './plus-one-to-array.component.html',
  styleUrl: './plus-one-to-array.component.scss'
})
export class PlusOneToArrayComponent {
constructor(){
}
getValue(){
  let digits = [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]
  for(let i = digits.length-1; i>=0; i--){
    if(digits[i]<9){
        digits[i]++
        return digits
    }
    digits[i] = 0
  }
  return [1,...digits]
}
}

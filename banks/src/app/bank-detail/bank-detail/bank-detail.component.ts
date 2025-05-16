import { Component, OnInit, Input } from '@angular/core';
import { Bank } from '../../bank';
import {NgIf, UpperCasePipe} from '@angular/common'

@Component({
  selector: 'app-bank-detail',
  standalone: true,
  imports: [UpperCasePipe, NgIf],
  templateUrl: './bank-detail.component.html',
  styleUrl: './bank-detail.component.css'
})
export class BankDetailComponent implements OnInit {
  @Input() bank!: Bank;
  constructor() { }
  ngOnInit(): void { }
}

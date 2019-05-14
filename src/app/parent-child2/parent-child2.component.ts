import { Component, OnInit } from '@angular/core';
import { ParentChildComponent } from '../parent-child/parent-child.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-parent-child2',
  templateUrl: './parent-child2.component.html',
  styleUrls: ['./parent-child2.component.css']
})
export class ParentChild2Component implements OnInit {

  id: number;




  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    console.log(this.id);
  }

  concluirCadastro() {
    console.log("teste novamente - " + this.id);
  }
}

import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-servivelayer',
  templateUrl: './servivelayer.component.html',
  styleUrls: ['./servivelayer.component.css']
})
export class ServivelayerComponent implements OnInit  {

  posts:any;

  constructor(private ps:PostService)
  {

  }
  ngOnInit() {
    this.ps.getAPI()
      .subscribe(response => {
        this.posts = response;
      });
}

}

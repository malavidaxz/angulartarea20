import { Component } from '@angular/core';
import { PostServiceService } from '../../services/postservice.service';

@Component({
  selector: 'app-vista',
  templateUrl: './vista.component.html',
  styleUrls: ['./vista.component.css'],
})
export class VistaComponent {
  //aqui creamos una instancia de userserviceservice
  constructor(private postService: PostServiceService) {}

  //array que va a obtener toda la info del metodo getusersall
  vistaListado = new Array();

  ngOnInit(): void {
    this.postService.getPostAllInterceptor().subscribe({
      next: (response: any) => {
        this.vistaListado = response.body;
        console.log(response.body);
      },
      error: (error) => console.error(error),
      complete: () => console.info('completed!'),
    });
  }
}

import { SharedService } from './shared.service';
import { Injectable } from '@angular/core';

@Injectable()
export class SidebarService {

  menu: any = [
    {
    titulo: 'Principal',
    icono: 'mdi mdi-gauge',
    submenu: [
        {titulo: 'Dashboard' , url: '/dashboard'},
        {titulo: 'Progress' , url: '/progress'},
        {titulo: 'Gráficas' , url: '/graficas1'},
    ]
  }];


  constructor() { }

}


import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-navgation',
  templateUrl: './navgation.component.html',
  styleUrls: ['./navgation.component.scss']
})
export class NavgationComponent implements OnInit {
  
  
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
  .pipe(
    map( result => result.matches)
  );

  constructor(private breakpointObserver: BreakpointObserver) { }

  ngOnInit() {
  }


  navLinks: Array<any> =[
    {icon: 'home', path:'/menu/dashboard', label: 'Dashboard'},
    {icon: 'table', path:'/menu/tabel', label: 'Table'},
    {icon: 'dashboard_customize', path:'/menu/drag', label: 'Drag Drop'},
    {icon: 'inventory', path:'/menu/address', label: 'Address'}
   
  ]
}

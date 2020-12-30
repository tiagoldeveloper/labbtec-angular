import {CoreService} from '../core.service';
import {Component, OnInit} from '@angular/core';
import {MenuItem} from 'primeng/api';
import {SecurityUtil} from '../../security/security-util/security.util';
import {Router} from '@angular/router';
import {ExceptionService} from '../../util/labtec-erro.service';

@Component({selector: 'app-navbar', templateUrl: './navbar.component.html'})
export class NavbarComponent implements OnInit {

  items: MenuItem[];
  isLoading = false;

  constructor(private service: CoreService, private router: Router, private exception: ExceptionService) {}

  ngOnInit(): void {
    this.isLoading = true;
    this.service.consultaMenuItem().subscribe((menuItem: MenuItem[]) => {
        this.items = menuItem;
        this.isLoading = false;
      },
      (response: any) => {
        this.exception.error(response);
        this.isLoading = false;
      }
    );
  }

  public logout(){
      SecurityUtil.removeToken();
      this.router.navigate(['/login']);
  }
}

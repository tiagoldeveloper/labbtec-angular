import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {SecurityService} from '../security.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ExceptionService} from '../../util/labte-erro.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  isLoading = false;

  constructor(
    private service: SecurityService,
    private exception: ExceptionService,
    private router: Router,
    private fb: FormBuilder
  ) {this.formulario();  }

  ngOnInit(): void {}

  private formulario() {
    this.form = this.fb.group({
      username: ['', Validators.compose([
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(100)
      ])],
      password: ['', Validators.compose([
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(100)
      ])]
    });
  }

  public logar() {
    this.isLoading = true;
    this.service.autentica(this.form.value)
      .then(() => {
        this.router.navigate(['/']);
        this.isLoading = false;
      })
      .catch(erro => {
        this.exception.error(erro);
        this.isLoading = false;
      });
  }
}

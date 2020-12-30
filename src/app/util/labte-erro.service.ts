import {Injectable} from '@angular/core';
import {MessageService} from 'primeng/api';
import {HttpErrorResponse} from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class ExceptionService {

  constructor(private messageService: MessageService) {}

  public error(responseException: any) {
    let errorMsg: string;
    if (typeof responseException === 'string') {
      errorMsg = responseException;
    } else if (responseException instanceof HttpErrorResponse &&
      responseException.status >= 400 && responseException.status <= 499) {
      errorMsg = 'Ocorreu erro ao processar a sua solicitação';
      if (responseException.status === 403) {
        errorMsg = 'Você não tem permissão para executar esta ação.';
      }
      console.log('Ocorreu erro:', responseException);
    } else {
      if (responseException.statusText === 'Unknown Error') {
        errorMsg = 'Servidor offline';
      } else {
        errorMsg = 'Erro ao processar o serviço, tente novamente.';
        console.log('Ocorreu erro:', responseException);
      }
    }
    this.messageService.add({severity: 'error', detail: errorMsg});
  }
}

import { Injectable } from '@angular/core';
import { BackendService } from '../../backend/backend.service';
import { ResultDto, RunResultDto } from '@intern/data';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResultService {
  constructor(
    private backendService: BackendService,
  ) {}
  
  public postResult$(resultDto: Pick<ResultDto, 'code' | 'taskId'>): Observable<ResultDto> {
    return this.backendService.post$<ResultDto>('/result', resultDto);
  }

  public updateResult$(id: string, resultDto: Pick<ResultDto, 'code' | 'taskId'>): Observable<ResultDto> {
    return this.backendService.post$<ResultDto>(`/result/${id}`, resultDto);
  }

  public runResult$(id: string): Observable<RunResultDto> {
    return this.backendService.post$<RunResultDto>(`/runner/${id}/run}`);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Exam } from '../common/exam';


@Injectable({
  providedIn: 'root'
})
export class ExamService {

  private GET_EXAMS = 'http://localhost:8080/quiz-app/exams';

  constructor(private httpClient: HttpClient) { }

  getExams(){
    return this.httpClient.get<Exam[]>(this.GET_EXAMS);
  }
}

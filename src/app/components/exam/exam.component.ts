import { Component, OnInit } from '@angular/core';
import { Exam } from 'src/app/common/exam';
import { ExamService } from 'src/app/services/exam.service';

@Component({
  selector: 'app-exam',
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.css']
})
export class ExamComponent implements OnInit{

  exams?: Exam[] = [];

  constructor(private examService: ExamService){}


  ngOnInit(): void {
    this.getExams();
  }

  getExams(){
    this.examService.getExams().subscribe(data => {
      this.exams = data;
    })
  }
}

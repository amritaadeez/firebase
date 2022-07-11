import { Component, OnInit } from '@angular/core';
import {ThemePalette} from '@angular/material/core';
import {ProgressBarMode} from '@angular/material/progress-bar';
@Component({
  selector: 'app-intro-question',
  templateUrl: './intro-question.component.html',
  styleUrls: ['./intro-question.component.scss']
})
export class IntroQuestionComponent implements OnInit {
  color = '#0D87D1';
  mode: ProgressBarMode = 'determinate';
  value = 34;
  value1 = 12;
  value2 = 52;
  bufferValue = 75;
  constructor() { }

  ngOnInit(): void {
  }

}

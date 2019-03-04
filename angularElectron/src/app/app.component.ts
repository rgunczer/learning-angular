import { Component, OnInit } from '@angular/core';
import { FileService } from './file.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angularElectron';
  files = [];

  constructor(private fileService: FileService) {
  }

  ngOnInit() {
    this.fileService.getFiles()
      .then((files: any[]) => {
        this.files = files;
      });
  }
}

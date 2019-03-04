import { Injectable } from '@angular/core';
import { IpcRenderer } from 'electron';

@Injectable({
  providedIn: 'root'
})
export class FileService {

  private ipc: IpcRenderer;

  constructor() {
    if ((<any>window).require) { // tslint:disable-line
      try {
        this.ipc = (<any>window).require('electron').ipcRenderer; // tslint:disable-line
      } catch (error) {
        throw error;
      }
    } else {
      console.warn('Could not load electron ipc');
    }
  }

  async getFiles() {
    return new Promise<string[]>((resolve, reject) => {
      this.ipc.once('getFilesResponse', (event, arg) => {
        resolve(arg);
      });
      this.ipc.send('getFiles');
    });
  }

}

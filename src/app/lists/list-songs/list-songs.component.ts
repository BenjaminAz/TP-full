import { Component, OnInit } from '@angular/core';
import { SongsService } from 'src/app/services/songs.service';
import { ConfirmationDialogService } from 'src/app/confirmation-dialog/confirmation-dialog.service';
import { Song } from 'src/app/model/song';

@Component({
  selector: 'app-list-songs',
  templateUrl: './list-songs.component.html',
  styleUrls: ['./list-songs.component.css']
})
export class ListSongsComponent implements OnInit {

  songs: Song[];

  constructor(private songService: SongsService, private confirmationDialogService: ConfirmationDialogService) { }

  ngOnInit() {
    this.getSongs()
  }

  //== Songs

  getSongs() {
    this.songService
      .getSongs()
      .subscribe((data: Song[]) => {
        this.songs = data;
      });
  }

  deleteSongs(id) {
    this.confirmationDialogService.confirm('sad', '¿Desea eliminar el producto?')
      .then((confirmed) => {
        if (confirmed) {
          this.songService.deleteSong(id).subscribe(res => {
            this.songs.splice(id, 1);
            this.getSongs();
          });
        }
      })
      .catch(() => console.log('User dismissed the dialog (e.g., by using ESC, clicking the cross icon, or clicking outside the dialog)'));
  }
}

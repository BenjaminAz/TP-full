import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SongsService } from 'src/app/services/songs.service';
import { Song } from 'src/app/model/song';

@Component({
  selector: 'app-view-song',
  templateUrl: './view-song.component.html',
  styleUrls: ['./view-song.component.css']
})
export class ViewSongComponent implements OnInit {

  song: Song = {
    _id: 0,
    songName: '',
    author: '',
    duration: 0
  }

  constructor(private route : ActivatedRoute , private songService: SongsService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      let _bookId:number = params['id'];
      this.loadAlumnoInfo(_bookId);
    });
  }


  loadAlumnoInfo(bookId:number){
    this.songService.getSong(bookId).subscribe((data: Song ) => {
      this.song = data;
    });
  }

}

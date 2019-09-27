import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SongsService } from '../../services/songs.service';

@Component({
  selector: 'app-new-song',
  templateUrl: './new-song.component.html',
  styleUrls: ['./new-song.component.css']
})
export class NewSongComponent implements OnInit {

  newSong : FormGroup

  constructor(private route: ActivatedRoute, private router: Router, private fb: FormBuilder, private songService: SongsService) { }


  createForm() {
    this.newSong= this.fb.group({
      songName: ['', Validators.required],
      author: ['', Validators.required],
      duration: ['', Validators.required]
    });
  }

  addBook(songName, author, duration) {

    this.route.params.subscribe(params => {
      this.songService.addSong( songName, author,duration);
      this.router.navigate(['']);
    });
  }

  ngOnInit() {
  }

}

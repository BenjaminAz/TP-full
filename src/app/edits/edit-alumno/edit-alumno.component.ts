import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SongsService } from 'src/app/services/songs.service';
import { FormBuilder, Form, FormGroup, Validators } from '@angular/forms';
import { Song } from 'src/app/model/song';

@Component({
  selector: 'app-edit-alumno',
  templateUrl: './edit-alumno.component.html',
  styleUrls: ['./edit-alumno.component.css']
})
export class EditAlumnoComponent implements OnInit {


  editSong : FormGroup;
  songToEdit : any = {_id:0, songName:'', author:'', duration:''}
  constructor(private route : ActivatedRoute, private router: Router , private songService : SongsService,private fb: FormBuilder)
   {this.createForm() }


  createForm() {
    this.editSong = this.fb.group({
      songName : ['', Validators.required],
      author : ['', Validators.required],
      duration : ['', Validators.required]
    });
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.songService.getSong(params['id']).subscribe(res => {
        this.songToEdit = res;
        console.log(this.songToEdit);
      });
    });
  }

  updateSong(songName , author , duration) {
    this.route.params.subscribe(params => {
      const _songToUpdate:Song ={
        _id: this.songToEdit._id,
        songName : songName,
        author : author ,
        duration : duration 
      }
      this.songService.updateSong(_songToUpdate);
      this.router.navigate(['/']);
    });
  }
}

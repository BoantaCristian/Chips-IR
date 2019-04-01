import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bag',
  templateUrl: './bag.component.html',
  styleUrls: ['./bag.component.css']
})
export class BagComponent implements OnInit {

  constructor() { }

  song = new Audio()
  playing: boolean = false
  playValue = 'Play'

  ngOnInit() {
  }

  playSong(){
    this.song.src = "../../../assets/S9.mp3"
    if(this.playing === false){
      this.song.play()
      this.playing = true
      this.playValue = 'Stop'
    }
    else if(this.playing === true){
      this.song.pause()
      this.playing = false
    }
  }

}

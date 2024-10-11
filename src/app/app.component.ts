import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'], 
})
export class AppComponent {
  coverPhotoUrl: string = '/Bg 1.jpg';
  profilePicUrl: string = '/Profile.jpg';
  note: string = '';
  name: string = 'Francis Mateo';
  designation: string = 'Franzz Design | BSIT3-I';
  footerText: string = 'Franzz Design | Profile Projects';

  personalInfo = [
    { label: 'Male', icon: 'male-outline' },
    { label: 'Macabucod, Aliaga, N.E', icon: 'location-outline' },
    { label: 'francismateo611@gmail.com', icon: 'mail-outline' },
    { label: '+63 912 345 6789', icon: 'call-outline' },
    { label: '22 Years Old', icon: 'calendar-outline' },
  ];

  stats = [
    { label: 'Following', value: '450k' },
    { label: 'Followers', value: '430' },
    { label: 'Collection', value: '490' },
  ];

  stories = [
    { image: '/Live photo1.gif' },
    { image: '/Live photo2.gif' },
    { image: '/Live photo 3.gif' },
    { image: '/Live photo 4.gif' },
    { image: '/Live photo 5.gif' },
  ];

  hobbies = [
    { label: 'Playing Online Games', icon: 'game-controller-outline' },
    { label: 'Watching Anime | Read', icon: 'tv-outline' },
    { label: 'Draw Digital Art', icon: 'brush-outline' },
    { label: 'Listening to Music', icon: 'musical-notes-outline' },
  ];

  skills = [
    { label: 'Software Developer', icon: 'code-outline' },
    { label: 'Digital Artist', icon: 'color-palette-outline' },
    { label: 'IT Troubleshooting', icon: 'laptop-outline' },
  ];

  togglePage() {
    document.body.classList.toggle('dark-mode'); // simple theme toggling logic
  }
}

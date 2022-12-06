import { Component } from '@angular/core';
import { DataApp } from 'src/models/data-app.models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Curriculo';

    public data: DataApp = {
    basicInfo : {
      name: "Jane Doe",
      profileImg: "endereco aqui",
      office: "Designer",
      city: "London, UK",
      email: "ex@mail.com",
      phoneNumber: "12244355534",
    },
    skilss: [{
      name: 'Adobe Photoshop',
      level: '90%'
      },
      {
        name: 'Photography',
        level: '80%'
      },
      {
        name: 'Illustrator',
        level: '75%'
      },
      {
        name: 'Media',
        level: '50%'
      }
    ],
    languages: [
      {
      name: 'English',
      level: '100%'
      },
      {
        name: 'Spanish',
        level: '75%'
      },
      {
        name: 'German',
        level: '20%'
      },
    ],
    experience: [
      {
        titleSection: 'Work Experience',
        experiences : [{
          title: 'Front End Developer / w3schools.com',
          timeStart: 'Jan 2015',
          timeEnd: 'Current',
          description: 'Lorem ipsum dolor sit amet. Praesentium magnam consectetur vel in deserunt aspernatur est reprehenderit sunt hic. Nulla tempora soluta ea et odio, unde doloremque repellendus iure, iste.'
          },
          {
          title: 'Web Developer / something.com',
          timeStart: 'Mar 2012',
          timeEnd: 'Dec 2014',
          description: 'Consectetur adipisicing elit. Praesentium magnam consectetur vel in deserunt aspernatur est reprehenderit sunt hic. Nulla tempora soluta ea et odio, unde doloremque repellendus iure, iste.'
          },
          {
          title: 'Graphic Designer / designsomething.com',
          timeStart: 'Jun 2010',
          timeEnd: 'Mar 2012',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
          }]
      },
      {
        titleSection: 'Education',
        experiences : [{
          title: 'W3Schools.com',
          timeStart: 'Forever',
          timeEnd: 'Forever',
          description: 'Web Development! All I need to know in one place'
          },
          {
          title: 'London Business School',
          timeStart: '2013',
          timeEnd: '2015',
          description: 'Master Degree'
          },
          {
          title: 'School of Coding',
          timeStart: '2010',
          timeEnd: '2013',
          description: 'Bachelor Degree'
          }]
      }
    ]
    ,
    footer : {
      info: 'Find me on social media.',
      //to fix: define format icons and source
      socialMedia: [{
        icon: 'facebook bla bla',
        link: 'face bla bla'
      },
      {
        icon: 'insta bla bla',
        link: 'insta bla bla'
      },
      {
        icon: 'facebook bla bla',
        link: 'face bla bla'
      },
      {
        icon: 'facebook bla bla',
        link: 'face bla bla'
      },
      {
        icon: 'facebook bla bla',
        link: 'face bla bla'
      },
      {
        icon: 'facebook bla bla',
        link: 'face bla bla'
      },

      ],
      developed: {text: 'Powered by w3.css', link: 'https://www.w3schools.com/w3css/default.asp'}
    }
  }
}

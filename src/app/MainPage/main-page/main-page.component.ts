import { Component, OnInit } from '@angular/core';
import { CourseService } from 'src/services/course.service';
import { ICourse } from './../../../Models/course';
import { TrackService } from './../../../services/track.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  courses:any;
  tracks:any;
  constructor(
    private courseService:CourseService,
    private trackService:TrackService
    ) { }

  ngOnInit(): void {
    this.courseService.getAllCourses().subscribe(data=>{
      this.courses = data;
    });
    this.trackService.getAllTracks().subscribe(data=>{
      this.tracks = data;
    });
  }

  onClickSubmit(formData:any)
  {
    let course:ICourse = 
    {
      Name:formData.name,
      Duration:formData.duration,
      TrackId:formData.trackId
    }
    //console.log(formData.trackId);
    this.courseService.addCourse(course).subscribe();
    location.reload();
  }

  // delete operation
  deleteCourse(id:number)
  {
    this.courseService.deleteCourse(id).subscribe();
    location.reload();
  }
}

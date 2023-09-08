import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-highlights',
  templateUrl: './highlights.component.html',
  styleUrls: ['./highlights.component.css']
})
export class HighlightsComponent {
 
  @Input()  title:string=""
  @Input()  content:string=""
  @Input()  content2:string=""
  @Input() icon:string=""
      
}

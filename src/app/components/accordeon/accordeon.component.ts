import { AfterViewInit, Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-accordeon',
  templateUrl: './accordeon.component.html',
  styleUrls: ['./accordeon.component.scss'],
})
export class AccordeonComponent implements AfterViewInit {
  @ViewChild("cc",{ read:ElementRef }) cardContent:ElementRef;

  constructor(
    public renderer:Renderer2
  ) {



   }

  accordioExpanded = false;

  ngAfterViewInit() {
    console.log("cardContent: ", this.cardContent.nativeElement );

    this.renderer.setStyle( this.cardContent.nativeElement, "webkitTransition", "max-height 500ms" )
    
  }



  toggleAccordion(){
 this.accordioExpanded = !this.accordioExpanded
    if(this.accordioExpanded){
     
      this.renderer.setStyle( this.cardContent.nativeElement , "max-height" , "0px" )
    }else{
      this.renderer.setStyle( this.cardContent.nativeElement , "max-height" , "500px" )
    }



  }

}

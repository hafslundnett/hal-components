import { Component, OnInit, Input, ViewEncapsulation, ViewChild, OnChanges, SimpleChanges } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';
import { SvgService } from '../../services/svg/svg.service';

@Component({
  selector: 'hal-svg-element',
  templateUrl: './svg-element.component.html',
  styleUrls: ['./svg-element.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SvgElementComponent implements OnInit, OnChanges {

  @Input() svgFilePath: string;
  @Input() width = 'auto';
  @Input() height = 'auto';
  @Input() color = '';
  @ViewChild('svgContainer', { static: true }) svgContainer;
  svgContent;

  constructor(private http: HttpClient, private sanitizer: DomSanitizer, private svgService: SvgService) { }

  ngOnInit() {
    if (!this.svgFilePath) {
      return;
    }
    this.svgService.getSvgContent(this.svgFilePath).subscribe((response) => {
      this.svgContent = this.sanitizer.bypassSecurityTrustHtml(response);
    });

    this.svgContainer.nativeElement.style.cssText = this.getCssText();

  }

  ngOnChanges(changes: SimpleChanges) {
    this.svgContainer.nativeElement.style.cssText = this.getCssText();
  }

  private getCssText() {
    return '--svg-width: ' + this.width + '; --svg-height: ' + this.height + '; --svg-color: ' + this.color;
  }

}

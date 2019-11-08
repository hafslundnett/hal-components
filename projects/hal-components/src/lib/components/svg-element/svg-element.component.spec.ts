/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SvgElementComponent } from './svg-element.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

const svgFilePath = 'assets/logo.svg';
const width = '50';
const height = '45';
const colorStroke = 'red';
const colorFill = 'blue';

describe('SvgElementComponent', () => {
  let component: SvgElementComponent;
  let fixture: ComponentFixture<SvgElementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [SvgElementComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SvgElementComponent);
    component = fixture.componentInstance;
    component.svgFilePath = svgFilePath;
    component.width = width;
    component.height = height;
    component.colorStroke = colorStroke;
    component.colorFill = colorFill;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should pass on information from inputs', () => {
    const output = '--svg-width: ' + width + '; --svg-height: ' + height + '; --svg-color-stroke: '
      + colorStroke + '; --svg-color-fill: ' + colorFill;
    expect((component as any).getCssText()).toBe(output);
  });
});

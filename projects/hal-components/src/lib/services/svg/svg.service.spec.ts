import { TestBed, async, inject } from '@angular/core/testing';
import { SvgService } from './svg.service';
import { HttpClientTestingModule, HttpTestingController, TestRequest } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';

describe('Service: Svg', () => {
  let httpMock: HttpTestingController;
  let svgService: SvgService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SvgService, HttpClient],
      imports: [HttpClientTestingModule]
    });

    httpMock = TestBed.inject(HttpTestingController);
    svgService = TestBed.inject(SvgService);
  });

  it('should start', () => {
    expect(svgService).toBeTruthy();
  });
  describe('requesting svg icon', () => {
    const filepath = 'somefile/file.svg';
    const fileContent = '<svg>some content</svg>';
    let request: TestRequest;
    let reqResponse;
    beforeEach(() => {
      svgService.getSvgContent(filepath).subscribe((response) => {
        reqResponse = response;
      });
      request = httpMock.expectOne(filepath);
    });
    it('request present', () => {
      expect(request).toBeTruthy();
    });
    describe('server responds', () => {
      beforeEach(() => {
        request.flush(fileContent);
      });
      it('correct content is returned', () => {
        expect(reqResponse).toBe(fileContent);
      });

      describe('requesting same svg icon again', () => {
        reqResponse = undefined;
        beforeEach(() => {
          svgService.getSvgContent(filepath).subscribe((response) => {
            reqResponse = response;
          });
          httpMock.verify();
        });
        it('returtnes catched icon imidiatly', () => {
          expect(reqResponse).toBe(fileContent);
        });
      });
    });
  });
});

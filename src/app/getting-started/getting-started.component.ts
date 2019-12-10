import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hal-getting-started',
  templateUrl: './getting-started.component.html',
  styleUrls: ['./getting-started.component.scss']
})
export class GettingStartedComponent implements OnInit {

  shellcode = `ng add @hafslundnett/hal-components`;
  scssCode = `@import "~@hafslundnett/hdd-style/main";
@import "~@hafslundnett/hdd-style/variables/main";
@import "~@angular/material/theming";

html,
body {
  height: 100 %;
}
body {
  overflow - y: scroll;
}
@include mat - core();
$primary - color: mat - palette($hdd - material_primary);
$accent - color: mat - palette($hdd - material_accent);
$warn - color: mat - palette($hdd - material_warn);
$theme: mat - light - theme($primary - color, $accent - color, $warn - color);
$typography: mat - typography - config(
  $font - family: (
  $font - family // Font-family from HDD-style
)
);
@include angular - material - theme($theme);
@include angular - material - typography($typography);

`;

  constructor() { }

  ngOnInit() {
  }

}

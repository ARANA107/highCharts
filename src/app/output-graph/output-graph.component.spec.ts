import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutputGraphComponent } from './output-graph.component';

import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

describe('OutputGraphComponent', () => {
  let component: OutputGraphComponent;
  let fixture: ComponentFixture<OutputGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutputGraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutputGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { DebugElement } from '@angular/core';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let appComponent: AppComponent;
  let debugElement: DebugElement;
  let htmlElement: HTMLElement;
  let target: AppComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ]
    });

    fixture = TestBed.createComponent(AppComponent);
    appComponent = fixture.componentInstance;
    debugElement = fixture.debugElement;
    htmlElement = debugElement.nativeElement;
    target = new AppComponent();
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(appComponent).toBeTruthy();
  });

  it(`一開始應顯示 'The phone is locked'`, () => {
    expect(appComponent.message).toBe('The phone is locked');
  });

  it(`當第 1 次按下 Home 應顯示 'The phone is unlocked'`, () => {
    appComponent.onHomeClick();
    expect(appComponent.message).toBe('The phone is unlocked');
  });

  it(`當第 2 次按下 Home 應顯示 'The phone is at home'`, () => {
    appComponent.onHomeClick();
    appComponent.onHomeClick();
    expect(appComponent.message).toBe('The phone is at home');
  });

  it(`當第 3 次按下 Home 應顯示 'The phone is at home'`, () => {
    appComponent.onHomeClick();
    appComponent.onHomeClick();
    appComponent.onHomeClick();
    expect(appComponent.message).toBe('The phone is at home');
  });

  it(`當第 2 次按下 Home 與第一次按下 Open App 應顯示 'The phone is at home'`, () => {
    appComponent.onHomeClick();
    appComponent.onHomeClick();
    appComponent.onOpenAppClick();
    expect(appComponent.message).toBe('The phone is opening app');
  });

  it(`當按下 Open App 再按下 Home 應顯示 'The phone is at home'`, () => {
    appComponent.onHomeClick();
    appComponent.onHomeClick();
    appComponent.onOpenAppClick();
    appComponent.onHomeClick();
    expect(appComponent.message).toBe('The phone is at home');
  });

  it(`當第 2 次按下 Home 與第一次按下 Switch Desktop 應顯示 'The phone is switching desktop'`, () => {
    appComponent.onHomeClick();
    appComponent.onHomeClick();
    appComponent.onSwitchDesktopClick();
    expect(appComponent.message).toBe('The phone is switching desktop');
  });

  it(`當按下 Switch Desktop 再按下 Home 應顯示 'The phone is switching desktop'`, () => {
    appComponent.onHomeClick();
    appComponent.onHomeClick();
    appComponent.onSwitchDesktopClick();
    appComponent.onHomeClick();
    expect(appComponent.message).toBe('The phone is at home');
  });

  it(`當第 1 次按下 Home 再按下 Open App 應顯示 'The operation is not allowed'`, () => {
    appComponent.onHomeClick();
    appComponent.onOpenAppClick();
    expect(appComponent.message).toBe('The operation is not allowed');
  });

  it(`當第 1 次按下 Home 再按下 Switch Desktop 應顯示 'The operation is not allowed'`, () => {
    appComponent.onHomeClick();
    appComponent.onSwitchDesktopClick();
    expect(appComponent.message).toBe('The operation is not allowed');
  });
});

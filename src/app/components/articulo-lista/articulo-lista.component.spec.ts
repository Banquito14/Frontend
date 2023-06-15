import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticuloListaComponent } from './articulo-lista.component';

describe('ArticuloListaComponent', () => {
  let component: ArticuloListaComponent;
  let fixture: ComponentFixture<ArticuloListaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArticuloListaComponent]
    });
    fixture = TestBed.createComponent(ArticuloListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

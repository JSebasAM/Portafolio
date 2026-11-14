import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PROJECTS } from '../../data/projects.data';
import { ProjectCatalog } from './project-catalog';

describe('ProjectCatalog', () => {
  let fixture: ComponentFixture<ProjectCatalog>;
  let el: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [ProjectCatalog] }).compileComponents();
    fixture = TestBed.createComponent(ProjectCatalog);
    fixture.detectChanges();
    el = fixture.nativeElement as HTMLElement;
  });

  it('muestra una tarjeta por cada proyecto', () => {
    expect(el.querySelectorAll('app-project-card').length).toBe(PROJECTS.length);
  });

  it('incluye los 5 proyectos, incluido el portafolio', () => {
    expect(PROJECTS.length).toBe(5);
    expect(PROJECTS.some((p) => p.nombre === 'Portafolio')).toBeTrue();
  });

  it('cada proyecto tiene datos completos y URLs https', () => {
    for (const p of PROJECTS) {
      expect(p.nombre).toBeTruthy();
      expect(p.descripcion).toBeTruthy();
      expect(p.tecnologias.length).toBeGreaterThan(0);
      expect(p.caracteristicas.length).toBeGreaterThan(0);
      expect(p.repoUrl.startsWith('https://github.com/JSebasAM/')).toBeTrue();
      expect(p.demoUrl.startsWith('https://JSebasAM.github.io/')).toBeTrue();
    }
  });

  it('cada tarjeta muestra los dos enlaces', () => {
    expect(el.querySelectorAll('.card__actions a').length).toBe(PROJECTS.length * 2);
  });
});

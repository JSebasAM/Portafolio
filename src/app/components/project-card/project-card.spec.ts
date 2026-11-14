import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Project } from '../../models/project.model';
import { ProjectCard } from './project-card';

const PROJECT: Project = {
  nombre: 'Demo',
  descripcion: 'Descripción de prueba',
  tecnologias: ['Angular', 'TypeScript'],
  caracteristicas: ['Característica uno', 'Característica dos'],
  repoUrl: 'https://github.com/JSebasAM/demo',
  demoUrl: 'https://JSebasAM.github.io/demo/',
};

describe('ProjectCard', () => {
  let fixture: ComponentFixture<ProjectCard>;
  let el: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [ProjectCard] }).compileComponents();
    fixture = TestBed.createComponent(ProjectCard);
    fixture.componentRef.setInput('project', PROJECT);
    fixture.detectChanges();
    el = fixture.nativeElement as HTMLElement;
  });

  it('muestra nombre y descripción', () => {
    expect(el.querySelector('h3')?.textContent).toContain('Demo');
    expect(el.textContent).toContain('Descripción de prueba');
  });

  it('lista tecnologías y características', () => {
    expect(el.querySelectorAll('.tags__item').length).toBe(2);
    expect(el.querySelectorAll('.card__features li').length).toBe(2);
  });

  it('tiene dos enlaces con las URL correctas', () => {
    const links = el.querySelectorAll<HTMLAnchorElement>('.card__actions a');
    expect(links.length).toBe(2);
    expect(links[0].textContent).toContain('Repositorio');
    expect(links[0].getAttribute('href')).toBe(PROJECT.repoUrl);
    expect(links[1].textContent).toContain('Ver aplicación');
    expect(links[1].getAttribute('href')).toBe(PROJECT.demoUrl);
  });

  it('abre los enlaces en pestaña nueva con rel seguro', () => {
    el.querySelectorAll<HTMLAnchorElement>('.card__actions a').forEach((a) => {
      expect(a.target).toBe('_blank');
      expect(a.rel).toContain('noopener');
      expect(a.rel).toContain('noreferrer');
    });
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostListComponent } from './post-list.component';
import { provideHttpClient } from '@angular/common/http';
import { TodosService } from '../../services/todos.service';

describe('PostListComponent', () => {
  let component: PostListComponent;
  let fixture: ComponentFixture<PostListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [
        provideHttpClient(),
        {
          provide: 'SERVICE_TOKEN',
          useClass: TodosService
        }

      ],
      declarations: [PostListComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(PostListComponent);

    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('posts are displayed', (done: DoneFn) => {
    component.showPosts()
    fixture.detectChanges()

    fixture
      .whenStable()
      .then(
        () => {
          expect(component.isFetchComplete).toBe(true)
          //expect(component.todos?.length).toBe(5)
          // const html = fixture.debugElement.nativeElement as HTMLElement
          // const ul = html.querySelector('ul')
          // expect(ul?.children.length).toBe(5)
          done()
        }
      )


    // const html = fixture.debugElement.nativeElement as HTMLElement
    // const ul = html.querySelector('ul') as HTMLUListElement
    // expect(ul.children.length).toEqual(5)
  })
});

import { ComponentFixture, TestBed, tick } from '@angular/core/testing';
import { HttpClientTestingModule,HttpTestingController } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClient } from '@angular/common/http';

import { ProductListComponent } from './product-list.component';
import { Product} from '../product';
import { ProductService} from '../product.service';

describe('ProductListComponent', () => {
  let component: ProductListComponent;
  let fixture: ComponentFixture<ProductListComponent>;

  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let prodService: ProductService;
  let expectedProds: Product[];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule,RouterTestingModule],
      declarations: [ ProductListComponent],
      providers: [ProductService],
    })
    .compileComponents();
  }); 
    
  beforeEach(() =>{
    fixture = TestBed.createComponent(ProductListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    //Instantaites HttpClient, HttpTestingController and ProductService
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
    prodService = TestBed.inject(ProductService);

  });

  afterEach(() => {
    httpTestingController.verify(); //Verifies that no requests are outstanding.
  });

  beforeEach(() => {
    //Dummy data to be returned by request.
    expectedProds = [
      { id: 101, name: 'Tipo',brand: 'Sony',madein: 'Japan',price: 10000 },
      { id: 102, name: 'Poco',brand: 'Xaomi',madein: 'India',price: 25000  },
    ] as Product[];
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return expected Products by calling once', () => {
    prodService.getProductsList().subscribe(
      prods => expect(prods).toEqual(expectedProds, 'should return expected products'),
      fail
    );
    /*
    const req = httpTestingController.expectOne(prodService.baseUrl);
      expect(req.request.method).toEqual('GET');
      req.flush(expectedProds); //Return expectedEmps
      tick(); 
      */
    });
  
});

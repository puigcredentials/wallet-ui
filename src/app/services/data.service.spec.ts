import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { BehaviorSubject, throwError } from 'rxjs';
import { DataService } from './data.service';
import { environment } from 'src/environments/environment';

describe('DataService', () => {
  let service: DataService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [DataService],
    });
    service = TestBed.inject(DataService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('listenDid should return BehaviorSubject', () => {
    const did = service.listenDid();
    expect(did instanceof BehaviorSubject).toBe(true);
    expect(did.getValue()).toBe('');
  });

  it('getDid should make GET request and update didSubject', () => {
    const mockDid = 'sampleDid';

    service.getDid().subscribe();

    const req = httpTestingController.expectOne(
      `${environment.server_url}${environment.server_uri.ebsi_did_uri}`
    );
    expect(req.request.method).toEqual('GET');
    req.flush(mockDid);

    expect(service.listenDid().getValue()).toEqual(mockDid);
  });

  it('getDid should handle error', () => {
    const errorSpy = spyOn(service['http'], 'get').and.returnValue(
      throwError('Err')
    );

    service.getDid().subscribe({
      error: (error) => {
        expect(error).toBeTruthy();
        expect(error.message).toBe('Err');
      },
    });

    expect(errorSpy).toHaveBeenCalled();
  });
});

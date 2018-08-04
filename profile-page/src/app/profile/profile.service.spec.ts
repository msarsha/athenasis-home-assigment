import {TestBed} from '@angular/core/testing';
import {ProfileService} from './profile.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {Profile} from './models/profile';
import {ProfileMaterialModule} from './profile-material.module';


describe('ProfileService', () => {
  let service: ProfileService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, ProfileMaterialModule],
      providers: [ProfileService]
    });

    service = TestBed.get(ProfileService);
  });

  it('should create', () => {
    expect(service).toBeTruthy();
  });

  it('should get user profile', function () {
    const dummyProfile: Profile = {
      name: 'John Snow',
      image: 'https://api.adorable.io/avatars/210/johnsnow@adorassble.io.png',
      birth: new Date(),
      contact: {
        email: 'john.snow@gmail.com',
        phone: '0544432221'
      },
      education: ['college', 'university', 'life'],
      work: ['sela', 'elal'],
      latest_posts: [
        {title: 'best post EVVA !!', text: 'slept for 5 hours !', likes: 15}
      ],
      top_connections: [
        {
          name: 'Aria Stark',
          image: 'https://api.adorable.io/avatars/220/contact1%40adorable.io',
          facebook: 'ariastark'
        }
      ]
    };

    service.getProfile().subscribe(p => {
      expect(p).toBeTruthy();
      expect(p).toEqual(dummyProfile);
    })
  });
});

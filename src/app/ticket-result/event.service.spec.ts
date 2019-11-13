import { TestBed } from '@angular/core/testing';

import { EventEffect } from './event.effect';

describe('MusicService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EventEffect = TestBed.get(EventEffect);
    expect(service).toBeTruthy();
  });
});

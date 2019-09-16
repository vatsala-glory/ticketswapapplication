import { TestBed } from '@angular/core/testing';

import { DataEffect } from './data.effect';

describe('MusicService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DataEffect = TestBed.get(DataEffect);
    expect(service).toBeTruthy();
  });
});

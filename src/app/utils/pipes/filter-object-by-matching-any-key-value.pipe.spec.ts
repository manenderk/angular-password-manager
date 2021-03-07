import { FilterObjectByMatchingAnyKeyValuePipe } from './filter-object-by-matching-any-key-value.pipe';

describe('FilterObjectByMatchingAnyKeyValuePipe', () => {
  it('create an instance', () => {
    const pipe = new FilterObjectByMatchingAnyKeyValuePipe();
    expect(pipe).toBeTruthy();
  });
});

import { BookChefPipe } from './book-chef.pipe';

describe('BookChefPipe', () => {
  it('create an instance', () => {
    const pipe = new BookChefPipe();
    expect(pipe).toBeTruthy();
  });
});

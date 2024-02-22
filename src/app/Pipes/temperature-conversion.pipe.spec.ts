import { TemperatureConversionPipe } from './temperature-conversion.pipe';

describe('TemperatureConversionPipe', () => {
  it('create an instance', () => {
    const pipe = new TemperatureConversionPipe();
    expect(pipe).toBeTruthy();
  });
});

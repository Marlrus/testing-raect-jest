import getData from '../../../src/utils/getData';

describe('Fetch API', () => {
  beforeEach(() => {
    fetchMock.resetMocks();
  });

  test('Llamar una API y retornar datos', () => {
    fetchMock.mockResponseOnce(JSON.stringify({ data: '12345' }));

    getData('https://google.com').then(res => {
      return expect(res.data).toEqual('12345');
    });

    expect(fetchMock.mock.calls[0][0]).toEqual('https://google.com');
  });
});

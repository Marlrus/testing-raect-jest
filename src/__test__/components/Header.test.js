import React from 'react';
import { mount, shallow } from 'enzyme';
import ProviderMock from '../../__mocks__/providerMock';
import Header from '../../components/Header';

describe('<Header />', () => {
  const headerShallow = shallow(
    <ProviderMock>
      <Header />
    </ProviderMock>
  );

  const headerMount = mount(
    <ProviderMock>
      <Header />
    </ProviderMock>
  );

  test('Render del componente', () => {
    expect(headerShallow.length).toEqual(1);
  });

  test('Render del Titulo', () => {
    expect(headerMount.find('.Header-title').text()).toEqual('Platzi Store');
  });
});

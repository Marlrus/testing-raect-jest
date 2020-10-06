import React from 'react';
import { mount, shallow } from 'enzyme';
import ProviderMock from '../../__mocks__/providerMock';
import ProductMock from '../../__mocks__/ProductMock';
import Product from '../../components/Product';

describe('<Product />', () => {
  const productShallow = shallow(
    <ProviderMock>
      <Product />
    </ProviderMock>
  );

  const handleAddToCart = jest.fn();

  const productMount = mount(
    <ProviderMock>
      <Product product={ProductMock} handleAddToCart={handleAddToCart} />
    </ProviderMock>
  );

  test('Render del componente Product', () => {
    expect(productShallow.length).toEqual(1);
  });

  test('Comprobar el boton de comprar', () => {
    productMount.find('button').simulate('click');
    expect(handleAddToCart).toHaveBeenCalledTimes(1);
  });
});

import { render, screen, fireEvent } from '@testing-library/angular';

import { CounterComponent } from './counter.component';

describe('CounterComponent', () => {

  test('should render counter', async () => {
    await render(CounterComponent, {
      componentProperties: { counter: 1 },
    });

    expect(screen.getByText('Current Count: 1'));
  });

  test('should increment the counter on click', async () => {
    await render(CounterComponent, {
      componentProperties: { counter: 5 },
    });

    fireEvent.click(screen.getByText('+'));

    expect(screen.getByText('Current Count: 6'));
  });

  test('should decrement the counter on click', async () => {
    await render(CounterComponent, {
      componentProperties: { counter: 5 },
    });

    fireEvent.click(screen.getByText('-'));

    expect(screen.getByText('Current Count: 4'));
  });

});

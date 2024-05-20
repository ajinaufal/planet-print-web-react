import { CreateProductEvent } from './create_product_event';
import { CreateProductState } from './create_product_state';

export function CreateProductPresenter({ usecase }) {
  const data = CreateProductState({ usecase });
  const event = CreateProductEvent(data);

  return { ...data, ...event };
}

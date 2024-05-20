import { memo } from 'react';
import { ButtonContainedPrimary } from '../../../../core/components/buttons/contained/button_primary';
import { ButtonContainedSecondary } from '../../../../core/components/buttons/contained/button_secondary';
import { DescriptionComponent } from '../components/descriptions_component';
import { ImageComponent } from '../components/image_component';
import { InventoryComponent } from '../components/inventory_component';
import { OptionsComponent } from '../components/options_component';
import { PriceComponent } from '../components/price_component';
import { SizeComponent } from '../components/size_component';
import { CreateProductPresenter } from '../presenter/create_product_presenter';
import { VideoComponent } from '../components/video_component';

function CreateProductView({ usecase }) {
  const presenter = CreateProductPresenter({ usecase });
  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-row gap-2">
        <div className="flex flex-col gap-3 basis-7/12">
          <DescriptionComponent />
        </div>
        <div className="flex flex-col gap-3 basis-5/12">
          <ImageComponent />
          <VideoComponent />
          <InventoryComponent />
          <OptionsComponent />
          <PriceComponent />
          <SizeComponent />
          <div className="flex flex-row gap-2 justify-end">
            <ButtonContainedSecondary className="w-fit">Schedule</ButtonContainedSecondary>
            <ButtonContainedPrimary className="w-fit">Add Product</ButtonContainedPrimary>
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(CreateProductView);

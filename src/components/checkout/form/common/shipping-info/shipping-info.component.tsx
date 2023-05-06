/* eslint-disable react/jsx-props-no-spreading */
import { FieldErrors, UseFormRegister } from 'react-hook-form';
import { IFormData } from '@/types';
import InputComponent from '../input/input.component';

type Props = {
  errors: FieldErrors<IFormData>;
  register: UseFormRegister<IFormData>;
};

export default function ShippingInfo({ errors, register }: Props) {
  return (
    <div>
      <h2 className="sub-title mb-4 text-orange-700">Shipping Info</h2>
      <div className="grid gap-y-6 md:grid-cols-2 md:gap-x-4">
        <div className="md:col-span-2">
          <InputComponent
            error={errors.address}
            id="address"
            name="Your Address"
            placeholder="1137 Williams Avenue"
            register={register}
          />
        </div>
        <InputComponent
          error={errors.zipCode}
          id="zipCode"
          name="ZIP Code"
          placeholder="10001"
          register={register}
        />
        <InputComponent
          error={errors.city}
          id="city"
          name="City"
          placeholder="New York"
          register={register}
        />
        <InputComponent
          error={errors.country}
          id="country"
          name="Country"
          placeholder="United States"
          register={register}
        />
      </div>
    </div>
  );
}

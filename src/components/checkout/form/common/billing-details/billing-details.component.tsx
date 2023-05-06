import { FieldErrors, UseFormRegister } from 'react-hook-form';
import { IFormData } from '@/types';
import InputComponent from '../input/input.component';

type Props = {
  errors: FieldErrors<IFormData>;
  register: UseFormRegister<IFormData>;
};

export default function BillingDetails({ errors, register }: Props) {
  return (
    <div>
      <h2 className="sub-title mb-4 text-orange-700">Billing Details</h2>
      <div className="grid gap-y-6 md:grid-cols-2 md:gap-x-4">
        <InputComponent
          error={errors.name}
          id="name"
          name="Name"
          placeholder="Alexei Ward"
          register={register}
        />
        <InputComponent
          error={errors.email}
          id="email"
          name="Email Address"
          placeholder="alexei@gmail.com"
          register={register}
        />
        <InputComponent
          error={errors.phone}
          id="phone"
          name="Phone Number"
          placeholder="+1 202-555-0136"
          register={register}
        />
      </div>
    </div>
  );
}

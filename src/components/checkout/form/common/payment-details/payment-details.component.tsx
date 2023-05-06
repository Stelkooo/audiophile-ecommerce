import Image from 'next/image';
import { FieldErrors, UseFormRegister } from 'react-hook-form';

import { IFormData } from '@/types';

import CashOnDeliveryIcon from 'public/assets/checkout/icon-cash-on-delivery.svg';

import InputComponent from '../input/input.component';

import { PaymentMethods } from '../../constants';
import RadioComponent from '../radio/radio.component';

type Props = {
  errors: FieldErrors<IFormData>;
  register: UseFormRegister<IFormData>;
  watchPaymentMethod: string;
};

export default function PayMentDetails({
  errors,
  register,
  watchPaymentMethod,
}: Props) {
  return (
    <div>
      <h2 className="sub-title mb-4 text-orange-700">Payment Details</h2>
      <div className="grid gap-y-6">
        <div>
          <div className="grid gap-y-4 md:grid-cols-2">
            <p className="text-[12px]/[1rem] font-bold">Payment Method</p>
            <div className="grid gap-y-4">
              {PaymentMethods.map((method) => (
                <RadioComponent
                  id={method.id}
                  name={method.name}
                  register={register}
                  key={method.id}
                />
              ))}
            </div>
          </div>
        </div>
        {watchPaymentMethod === 'eMoney' && (
          <div className="grid gap-y-6 md:grid-cols-2 md:gap-x-4">
            <InputComponent
              error={errors.emoneynumber}
              id="emoneynumber"
              name="e-Money Number"
              placeholder="238521993"
              register={register}
            />
            <InputComponent
              error={errors.emoneypin}
              id="emoneypin"
              name="e-Money PIN"
              placeholder="6891"
              register={register}
            />
          </div>
        )}
        {watchPaymentMethod === 'cashOnDelivery' && (
          <div className="flex flex-col items-center gap-4 md:flex-row md:gap-8">
            <Image src={CashOnDeliveryIcon} alt="" />
            <p className="text-center opacity-50 md:text-left">
              The &apos;Cash on Delivery&apos; option enables you to pay in cash
              when our delivery courier arrives at your residence. Just make
              sure your address is correct so that your order will not be
              cancelled.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

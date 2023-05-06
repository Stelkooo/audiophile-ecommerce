'use client';

import { useToggle } from 'usehooks-ts';
import { z, ZodType } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { IFormData } from '@/types';

import CheckoutModal from '@/components/common/modal/common/checkout-modal/checkout-modal.component';
import Summary from '../summary/summary.component';
import BillingDetails from './common/billing-details/billing-details.component';
import ShippingInfo from './common/shipping-info/shipping-info.component';
import PayMentDetails from './common/payment-details/payment-details.component';

import { PaymentMethods } from './constants';

export default function Form() {
  const [isModalOpen, toggleModalOpen] = useToggle(false);

  const schema: ZodType<IFormData> = z
    .object({
      name: z.string().min(1, { message: 'Must be at least 1 character' }),
      email: z.string().email({ message: 'Wrong format' }),
      phone: z.string().min(1, { message: 'Must be at least 1 character' }),
      address: z.string().min(1, { message: 'Must be at least 1 character' }),
      zipCode: z.string().length(5, { message: 'Must be 5 numbers long' }),
      city: z.string().min(1, { message: 'Must be at least 1 character' }),
      country: z.string().min(1, { message: 'Must be at least 1 character' }),
      emoneynumber: z.string().optional(),
      emoneypin: z.string().optional(),
      paymentMethod: z
        .string()
        .refine((val) =>
          PaymentMethods.map((method) => method.id).includes(val)
        ),
    })
    .refine(
      (formSchema) =>
        formSchema.paymentMethod === 'eMoney'
          ? !!formSchema.emoneynumber && formSchema.emoneynumber.length === 9
          : true,
      {
        message: 'Must be 9 numbers long',
        path: ['emoneynumber'],
      }
    )
    .refine(
      (formSchema) =>
        formSchema.paymentMethod === 'eMoney'
          ? !!formSchema.emoneypin && formSchema.emoneypin.length === 4
          : true,
      {
        message: 'Must be 4 numbers long',
        path: ['emoneypin'],
      }
    );

  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      paymentMethod: 'eMoney',
    },
  });

  const watchPaymentMethod = watch('paymentMethod');

  const submitDataHandler = () => {
    toggleModalOpen();
  };
  return (
    <form
      className="grid gap-y-8 xl:grid-cols-[1fr_350px] xl:gap-x-8"
      onSubmit={handleSubmit(submitDataHandler)}
    >
      <div className="grid gap-y-8 rounded-lg bg-white p-6">
        <h1 className="heading-small">Checkout</h1>
        <BillingDetails errors={errors} register={register} />
        <ShippingInfo errors={errors} register={register} />
        <PayMentDetails
          errors={errors}
          register={register}
          watchPaymentMethod={watchPaymentMethod}
        />
      </div>
      <Summary />
      {isModalOpen && <CheckoutModal toggleModalOpen={toggleModalOpen} />}
    </form>
  );
}

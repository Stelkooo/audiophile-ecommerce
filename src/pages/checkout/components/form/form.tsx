'use client';

import Image from 'next/image';

/* eslint-disable react/jsx-props-no-spreading */
import { z, ZodType } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import CashOnDeliveryIcon from 'public/assets/checkout/icon-cash-on-delivery.svg';

import Summary from '../summary/summary.component';

const PaymentMethods = [
  {
    id: 'eMoney',
    name: 'e-Money',
  },
  {
    id: 'cashOnDelivery',
    name: 'Cash on Deliver',
  },
];

interface IFormData {
  name: string;
  email: string;
  address: string;
  zipCode: string;
  city: string;
  country: string;
  emoneynumber?: string;
  emoneypin?: string;
  paymentMethod: string;
}

export default function Form() {
  const schema: ZodType<IFormData> = z
    .object({
      name: z.string().min(1),
      email: z.string().email(),
      address: z.string().min(1),
      zipCode: z.string().min(5).max(5),
      city: z.string().min(1),
      country: z.string().min(1),
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
          ? !!formSchema.emoneynumber
          : true,
      {
        message: 'Must be 9 numbers long',
        path: ['emoneynumber'],
      }
    )
    .refine(
      (formSchema) =>
        formSchema.paymentMethod === 'eMoney' ? !!formSchema.emoneypin : true,
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

  const submitDataHandler = (data: IFormData) => {
    console.log('Data submitted', data);
  };
  return (
    <form className="grid gap-y-8" onSubmit={handleSubmit(submitDataHandler)}>
      <div className="grid gap-y-8 rounded-lg bg-white p-6">
        <h1 className="heading-small">Checkout</h1>
        <div>
          <h2 className="sub-title mb-4 text-orange-700">Billing Details</h2>
          <div className="grid gap-y-6">
            <div>
              <label htmlFor="name" className="grid gap-y-2">
                <div className="flex items-center justify-between">
                  <span
                    className={`text-[12px]/[1rem] font-bold ${
                      errors.name ? 'text-danger' : 'text-black'
                    }`}
                  >
                    Name
                  </span>
                  {errors.name && (
                    <span
                      className={`text-[12px]/[1rem] ${
                        errors.name ? 'text-danger' : 'text-black'
                      }`}
                    >
                      Must be at least 1 character
                    </span>
                  )}
                </div>
                <input
                  type="text"
                  placeholder="Alexei Ward"
                  className={`${
                    errors.name
                      ? 'border-2 border-danger focus-within:border-danger'
                      : 'border border-neutral-300'
                  } rounded-lg  px-6 py-[1.125rem] text-[14px]/[19px] font-bold`}
                  {...register('name')}
                />
              </label>
            </div>
            <div>
              <label htmlFor="email" className="grid gap-y-2">
                <div className="flex items-center justify-between">
                  <span
                    className={`text-[12px]/[1rem] font-bold ${
                      errors.email ? 'text-danger' : 'text-black'
                    }`}
                  >
                    Email Address
                  </span>
                  {errors.email && (
                    <span
                      className={`text-[12px]/[1rem] ${
                        errors.email ? 'text-danger' : 'text-black'
                      }`}
                    >
                      Wrong format
                    </span>
                  )}
                </div>
                <input
                  type="text"
                  placeholder="alexei@mail.com"
                  className={`${
                    errors.email
                      ? 'border-2 border-danger focus-within:border-danger'
                      : 'border border-neutral-300'
                  } rounded-lg  px-6 py-[1.125rem] text-[14px]/[19px] font-bold`}
                  {...register('email')}
                />
              </label>
            </div>
            {/* <Input
              type="text"
              label="Phone Number"
              placeholder="+1 202-555-0136"
              name="phone"
            /> */}
          </div>
        </div>
        <div>
          <h2 className="sub-title mb-4 text-orange-700">Shipping Info</h2>
          <div className="grid gap-y-6">
            <div>
              <div>
                <label htmlFor="address" className="grid gap-y-2">
                  <div className="flex items-center justify-between">
                    <span
                      className={`text-[12px]/[1rem] font-bold ${
                        errors.address ? 'text-danger' : 'text-black'
                      }`}
                    >
                      Your Address
                    </span>
                    {errors.address && (
                      <span
                        className={`text-[12px]/[1rem] ${
                          errors.address ? 'text-danger' : 'text-black'
                        }`}
                      >
                        Must be at least 1 character
                      </span>
                    )}
                  </div>
                  <input
                    type="text"
                    placeholder="1137 Williams Avenue"
                    className={`${
                      errors.address
                        ? 'border-2 border-danger focus-within:border-danger'
                        : 'border border-neutral-300'
                    } rounded-lg  px-6 py-[1.125rem] text-[14px]/[19px] font-bold`}
                    {...register('address')}
                  />
                </label>
              </div>
            </div>
            <div>
              <label htmlFor="zipCode" className="grid gap-y-2">
                <div className="flex items-center justify-between">
                  <span
                    className={`text-[12px]/[1rem] font-bold ${
                      errors.zipCode ? 'text-danger' : 'text-black'
                    }`}
                  >
                    ZIP Code
                  </span>
                  {errors.zipCode && (
                    <span
                      className={`text-[12px]/[1rem] ${
                        errors.zipCode ? 'text-danger' : 'text-black'
                      }`}
                    >
                      Must be 5 characters
                    </span>
                  )}
                </div>
                <input
                  type="text"
                  placeholder="10001"
                  className={`${
                    errors.zipCode
                      ? 'border-2 border-danger focus-within:border-danger'
                      : 'border border-neutral-300'
                  } rounded-lg  px-6 py-[1.125rem] text-[14px]/[19px] font-bold`}
                  {...register('zipCode')}
                />
              </label>
            </div>
            <div>
              <label htmlFor="city" className="grid gap-y-2">
                <div className="flex items-center justify-between">
                  <span
                    className={`text-[12px]/[1rem] font-bold ${
                      errors.city ? 'text-danger' : 'text-black'
                    }`}
                  >
                    City
                  </span>
                  {errors.city && (
                    <span
                      className={`text-[12px]/[1rem] ${
                        errors.city ? 'text-danger' : 'text-black'
                      }`}
                    >
                      Must be at least 1 character
                    </span>
                  )}
                </div>
                <input
                  type="text"
                  placeholder="New York"
                  className={`${
                    errors.city
                      ? 'border-2 border-danger focus-within:border-danger'
                      : 'border border-neutral-300'
                  } rounded-lg  px-6 py-[1.125rem] text-[14px]/[19px] font-bold`}
                  {...register('city')}
                />
              </label>
            </div>
            <div>
              <label htmlFor="country" className="grid gap-y-2">
                <div className="flex items-center justify-between">
                  <span
                    className={`text-[12px]/[1rem] font-bold ${
                      errors.country ? 'text-danger' : 'text-black'
                    }`}
                  >
                    Country
                  </span>
                  {errors.country && (
                    <span
                      className={`text-[12px]/[1rem] ${
                        errors.country ? 'text-danger' : 'text-black'
                      }`}
                    >
                      Must be at least 1 character
                    </span>
                  )}
                </div>
                <input
                  type="text"
                  placeholder="United States"
                  className={`${
                    errors.country
                      ? 'border-2 border-danger focus-within:border-danger'
                      : 'border border-neutral-300'
                  } rounded-lg  px-6 py-[1.125rem] text-[14px]/[19px] font-bold`}
                  {...register('country')}
                />
              </label>
            </div>
          </div>
        </div>
        <div>
          <h2 className="sub-title mb-4 text-orange-700">Payment Details</h2>
          <div className="grid gap-y-6">
            <div>
              <div className="grid gap-y-4">
                <p className="text-[12px]/[1rem] font-bold">Payment Method</p>
                <div className="grid gap-y-4">
                  {PaymentMethods.map((method) => (
                    <label
                      key={method.id}
                      htmlFor={method.id}
                      className="inline-flex items-center gap-4 rounded-lg border border-neutral-300 px-6 py-[1.125rem] text-[14px]/[19px] font-bold"
                    >
                      <input
                        type="radio"
                        id={method.id}
                        className="text-orange-700"
                        value={method.id}
                        {...register('paymentMethod')}
                      />
                      <span>{method.name}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
            {watchPaymentMethod === 'eMoney' && (
              <>
                <div>
                  <label htmlFor="emoneynumber" className="grid gap-y-2">
                    <div className="flex items-center justify-between">
                      <span
                        className={`text-[12px]/[1rem] font-bold ${
                          errors.emoneynumber ? 'text-danger' : 'text-black'
                        }`}
                      >
                        e-Money Number
                      </span>
                      {errors.emoneynumber && (
                        <span
                          className={`text-[12px]/[1rem] ${
                            errors.emoneynumber ? 'text-danger' : 'text-black'
                          }`}
                        >
                          {errors.emoneynumber.message}
                        </span>
                      )}
                    </div>
                    <input
                      type="text"
                      placeholder="238521993"
                      className={`${
                        errors.emoneynumber
                          ? 'border-2 border-danger focus-within:border-danger'
                          : 'border border-neutral-300'
                      } rounded-lg  px-6 py-[1.125rem] text-[14px]/[19px] font-bold`}
                      {...register('emoneynumber')}
                    />
                  </label>
                </div>
                <div>
                  <label htmlFor="emoneypin" className="grid gap-y-2">
                    <div className="flex items-center justify-between">
                      <span
                        className={`text-[12px]/[1rem] font-bold ${
                          errors.emoneypin ? 'text-danger' : 'text-black'
                        }`}
                      >
                        e-Money PIN
                      </span>
                      {errors.emoneypin && (
                        <span
                          className={`text-[12px]/[1rem] ${
                            errors.emoneypin ? 'text-danger' : 'text-black'
                          }`}
                        >
                          {errors.emoneypin.message}
                        </span>
                      )}
                    </div>
                    <input
                      type="text"
                      placeholder="6891"
                      className={`${
                        errors.emoneypin
                          ? 'border-2 border-danger focus-within:border-danger'
                          : 'border border-neutral-300'
                      } rounded-lg  px-6 py-[1.125rem] text-[14px]/[19px] font-bold`}
                      {...register('emoneypin')}
                    />
                  </label>
                </div>
              </>
            )}
            {watchPaymentMethod === 'cashOnDelivery' && (
              <div className="flex flex-col items-center gap-4">
                <Image src={CashOnDeliveryIcon} alt="" />
                <p className="text-center opacity-50">
                  The &apos;Cash on Delivery&apos; option enables you to pay in
                  cash when our delivery courier arrives at your residence. Just
                  make sure your address is correct so that your order will not
                  be cancelled.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
      <Summary />
    </form>
  );
}

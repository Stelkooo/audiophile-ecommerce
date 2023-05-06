/* eslint-disable react/jsx-props-no-spreading */
import { forwardRef } from 'react';
import { UseFormRegister } from 'react-hook-form';
import { IFormData } from '@/types';

type Props = {
  register: UseFormRegister<IFormData>;
  name: string;
  id: string;
};

export default forwardRef(function Input({ register, id, name }: Props) {
  return (
    <label
      htmlFor={id}
      className="inline-flex items-center gap-4 rounded-lg border border-neutral-300 px-6 py-[1.125rem] text-[14px]/[19px] font-bold"
    >
      <input
        type="radio"
        id={id}
        className="text-orange-700"
        value={id}
        {...register('paymentMethod')}
      />
      <span>{name}</span>
    </label>
  );
});

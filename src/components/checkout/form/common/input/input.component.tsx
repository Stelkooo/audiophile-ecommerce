/* eslint-disable react/jsx-props-no-spreading */
import { forwardRef } from 'react';
import { FieldError, UseFormRegister } from 'react-hook-form';
import { IFormData } from '@/types';

type Props = {
  error: FieldError | undefined;
  register: UseFormRegister<IFormData>;
  name: string;
  placeholder: string;
  id: keyof IFormData;
};

export default forwardRef(function Input({
  error,
  register,
  id,
  name,
  placeholder,
}: Props) {
  return (
    <label htmlFor={id} className="grid gap-y-2">
      <div className="flex items-center justify-between">
        <span
          className={`text-[12px]/[1rem] font-bold ${
            error ? 'text-danger' : 'text-black'
          }`}
        >
          {name}
        </span>
        {error && (
          <span
            className={`text-[12px]/[1rem] ${
              error ? 'text-danger' : 'text-black'
            }`}
          >
            {error.message}
          </span>
        )}
      </div>
      <input
        type="text"
        id={id}
        placeholder={placeholder}
        className={`${
          error
            ? 'border-2 border-danger focus-within:border-danger'
            : 'border border-neutral-300'
        } rounded-lg  px-6 py-[1.125rem] text-[14px]/[19px] font-bold`}
        {...register(id)}
      />
    </label>
  );
});

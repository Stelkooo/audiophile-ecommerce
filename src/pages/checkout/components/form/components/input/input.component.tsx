import React from 'react';

type Props = {
  type: 'text' | 'email';
  label: string;
  placeholder: string;
  name: string;
};

export default function Input({ type, label, placeholder, name }: Props) {
  return (
    <div>
      <label htmlFor={name} className="grid gap-y-2">
        <span className="text-[12px]/[1rem] font-bold">{label}</span>
        <input
          type={type}
          placeholder={placeholder}
          name={name}
          className="rounded-lg border border-neutral-300 px-6 py-[1.125rem] text-[14px]/[19px] font-bold"
        />
      </label>
    </div>
  );
}

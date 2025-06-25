import { InputProps } from "@/utils/types";

export default function Input({ label, type, value, onChange, placeholder, name }: InputProps) {
  return (
    <div className="p-2 my-4">
      <label htmlFor={label} className="text-main-purple mb-3">
        {label}
      </label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        name={name}
        className="w-full border-b-2 border-b-main-purple rounded-2xl bg-white text-black p-3 focus:outline-none"
      />
    </div>
  );
}

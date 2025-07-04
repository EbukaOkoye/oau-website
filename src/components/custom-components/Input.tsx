import { InputProps } from "@/utils/types";

export default function Input({
  label,
  type,
  value,
  onChange,
  placeholder,
  name,
  accept,
  className,
  divClassName,
}: InputProps) {
  return (
    <div className={`p-2 my-4 ${divClassName}`}>
      <label htmlFor={label} className="text-main-purple mb-3">
        {label}
      </label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        name={name}
        accept={accept}
        className={`w-full border-b-2 border-b-main-purple rounded-2xl bg-white text-black p-3 focus:outline-none ${className}`}
      />
    </div>
  );
}

import { sharedFormElementClass } from '../../lib/sharedFormElementClass';

interface OptionType {
  key: string;
  value: string;
}

const Select = ({
  options,
  defaultOption,
  label,
  className = '',
  onChange,
  ...props
}: {
  value: string;
  label?: string;
  required?: boolean;
  className?: string;
  options: OptionType[];
  defaultOption?: string;
  onChange: (value: string) => void;
}) => {
  return (
    <div className="flex flex-col items-start">
      <label className="text-sm font-medium text-shaded inline capitalize mb-1">
        {label}
        {props.required ? <span className="text-red-500 ml-1 capitalize">*</span> : null}
      </label>
      <select
        className={`${sharedFormElementClass} ${className}`}
        onChange={(e) => onChange(e.target.value)}
        {...props}
      >
        {!!defaultOption && <option selected>{defaultOption}</option>}
        {options.map((option) => (
          <option key={option.key}>{option.value}</option>
        ))}
      </select>
    </div>
  );
};

export default Select;

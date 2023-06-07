import { sharedFormElementClass } from '../../lib/sharedFormElementClass';

const Input = ({
  onChange,
  label,
  className = '',
  ...props
}: {
  value: string;
  placeholder?: string;
  onChange: (v: string) => void;
  label: string;
  name: string;
  'data-testid': string;
  className?: string;
  required?: boolean;
}) => {
  return (
    <div className="flex flex-col items-start">
      <label className="text-sm font-medium text-shaded inline capitalize mb-1">
        {label}
        {props.required ? <span className="text-red-500 ml-1">*</span> : null}
      </label>
      <input
        type="text"
        {...props}
        onChange={(e) => onChange(e.target.value)}
        className={`${sharedFormElementClass} ${className}'}`}
      />
    </div>
  );
};

export default Input;

interface TextFieldProps {
  id: string;
  label: string;
  error?: string;
  inputProps?: unknown;
  type?: "text" | "email" | "password";
}

const InputField = (props: TextFieldProps) => {
  return (
    <div className="">
      <label htmlFor="props.id" className="label">
        <span className="label-text">{props.label}</span>
      </label>
      <input
        className="input input-bordered w-full max-w-xs"
        type={props.type ?? "text"}
        color={"ghost"}
        id={props.id}
        {...(props.inputProps ?? {})}
      />

      {props.error && (
        <span className="label-text text-error">{props.error}</span>
      )}
    </div>
  );
};

export default InputField;

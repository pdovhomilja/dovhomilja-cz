interface TextFieldProps {
  id: string;
  label: string;
  error?: string;
  inputProps?: unknown;
  type?: "text" | "email" | "password";
}

const TextArea = (props: TextFieldProps) => {
  return (
    <div className="w-full">
      <label className="label" htmlFor="props.id">
        <span className="label-text">{props.label}</span>
      </label>
      <textarea
        className="textarea textarea-bordered h-24 w-full"
        color={"ghost"}
        id={props.id}
        {...(props.inputProps ?? {})}
        placeholder="Enter your message here..."
      ></textarea>
      {props.error && (
        <span className="label-text text-error">{props.error}</span>
      )}
    </div>
  );
};

export default TextArea;

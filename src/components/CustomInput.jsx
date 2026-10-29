export default function CustomInput({ label, placeholder, inputType, name, onChange } ) {
  return (
    <label>
      {label}
      <input placeholder={placeholder} type={inputType} name={name}
        onChange={onChange}
      ></input>
    </label>
  )
};
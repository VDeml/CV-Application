export default function CustomInput({ label, placeholder, inputType, name, onChange, id, property } ) {
  return (
    <label>
      {label}
      <input placeholder={placeholder} type={inputType} name={name}
        onChange={id ? e => onChange(e, id, property) : e => onChange(e, property)}
      ></input>
    </label>
  )
};
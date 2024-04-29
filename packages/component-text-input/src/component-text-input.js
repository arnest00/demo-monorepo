const TextInput = ({ labelText, inputType = "text" }) => {
  return (
    <div>
      <label>
        {labelText}
      </label>
      <input type={inputType}/>
    </div>
  );
}

export default TextInput;

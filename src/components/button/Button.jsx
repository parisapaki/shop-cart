export default function Button(props) {
  return (
    <button
      {...props}
      className={` py-2 rounded-lg shadow-md ${props.className || ""}`}
    >
      {props.children}
    </button>
  );
}

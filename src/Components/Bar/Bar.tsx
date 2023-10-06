import "./Bar.css"

export const Bar = (props: { children: React.ReactNode }) => {
  return (
    <div className="bar">
      {props.children}
    </div>
  );
}
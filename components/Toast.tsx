export interface Props {
  text: string;
  isShowing: boolean;
}

const Toast = ({ text, isShowing }: Props) => {
  return (
    <div className={`toast ${isShowing ? "shown" : "hidden"}`}>
      <div className='toast-text'>{text}</div>
      <div className='toast-cross'>x</div>
    </div>
  );
};

export default Toast;

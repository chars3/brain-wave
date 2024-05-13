// Button.js
// import ButtonStyle from "./ButtonStyle";
// ButtonStyle.js
const ButtonStyle = () => {
  const baseStyle =
    "button bg-white text-black inline-flex items-center justify-center h-11 rounded px-7 hover:text-color-2";
  return `${baseStyle} `;
};

const Button2 = ({ className, href, children }) => {
  const classes = ButtonStyle({ className });
  console.log(classes)

  const renderButton = () => <button className={classes}>{children}</button>;

  const renderLink = () => (
    <a href={href} className={classes}>
      {children}
    </a>
  );

  return href ? renderLink() : renderButton();
};

export default Button2;

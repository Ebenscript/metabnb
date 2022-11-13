import { Util } from "../../shared/util";
import "./button.css";

export function Button(props) {
  const { className, isIconButton, isLight, ...buttonProps } = props;
  const classNames = Util.classNames(
    "button",
    { "button--icon-only": isIconButton, "button--light": isLight },
    className
  );

  return <button className={classNames} {...buttonProps} />;
}

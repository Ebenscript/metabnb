import { Util } from "../../shared/util";
import "./button.css";

export function Button(props) {
  const { className, isIconButton, ...buttonProps } = props;
  const classNames = Util.classNames(
    "button",
    { "button--icon-only": isIconButton },
    className
  );

  return <button className={classNames} {...buttonProps} />;
}

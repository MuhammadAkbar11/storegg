import React from "react";

type Props = {
  isActive: boolean;
  defaultClass: string;
  inactiveClass?: string[];
  activeClass?: string[];
};

const useActiveClass = ({
  isActive,
  defaultClass,
  activeClass = [],
  inactiveClass = [],
}: Props) => {
  const [className, setClassName] = React.useState<string>(defaultClass);

  React.useEffect(() => {
    const classArr = className.split(" ");

    if (isActive) {
      let newClass = classArr.filter(c => !inactiveClass?.includes(c));
      newClass = [...newClass, ...activeClass];
      setClassName(newClass.join(" "));
    } else {
      setClassName(defaultClass);
    }
  }, [isActive]);

  return className;
};

export default useActiveClass;

import clsx from "clsx";
import { ComponentPropsWithRef, ReactNode, forwardRef } from "react";

interface Props extends ComponentPropsWithRef<"div"> {
  children: ReactNode;
}

const OuterContainer = forwardRef<HTMLDivElement, Props>(function OuterContainer(props, ref) {
  return (
    <div ref={ref} className={clsx("sm:px-8", props.className)} {...props}>
      <div className="mx-auto max-w-7xl lg:px-8">{props.children}</div>
    </div>
  );
});

const InnerContainer = forwardRef<HTMLDivElement, Props>(function InnerContainer(
  { className, children, ...props },
  ref
) {
  return (
    <div ref={ref} className={clsx("relative px-4 sm:px-8 lg:px-12", className)} {...props}>
      <div className="mx-auto max-w-2xl lg:max-w-5xl">{children}</div>
    </div>
  );
});

interface ContainerProps extends Props {
  children: ReactNode;
}

interface ContainerWithOuterInnerProps extends ContainerProps {
  Outer: typeof OuterContainer;
  Inner: typeof InnerContainer;
}
export const Container = forwardRef<HTMLDivElement, ContainerWithOuterInnerProps>(function Container(
  { children, ...props },
  ref
) {
  return (
    <OuterContainer ref={ref} {...props}>
      <InnerContainer>{children}</InnerContainer>
    </OuterContainer>
  );
});

// @ts-expect-error
Container.Outer = OuterContainer;
// @ts-expect-error
Container.Inner = InnerContainer;

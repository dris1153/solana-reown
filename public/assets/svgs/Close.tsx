import * as React from 'react';
import { SVGProps } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgClose = ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    width="20px"
    height="20px"
    viewBox="0 0 8 8"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role={'icon-default'}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      d="M7.48.445c.241.219.395.416.461.593a.602.602 0 0 1 0 .514c-.077.167-.23.364-.461.593L2.238 7.508c-.209.208-.401.348-.577.42a.706.706 0 0 1-.544.032c-.176-.062-.38-.198-.61-.405-.23-.219-.384-.411-.461-.577a.644.644 0 0 1 .016-.515 2.3 2.3 0 0 1 .445-.577L5.75.508c.34-.322.626-.489.857-.5.242-.02.533.126.874.437Zm-6.973 0c.23-.207.434-.343.61-.405a.706.706 0 0 1 .544.031c.176.073.368.219.577.437L7.48 5.886c.22.219.368.411.445.577a.603.603 0 0 1 .033.515c-.066.166-.226.358-.478.577-.231.207-.434.343-.61.405a.668.668 0 0 1-.528-.031c-.165-.073-.362-.213-.593-.421L.507 2.145c-.22-.218-.368-.41-.445-.577a.683.683 0 0 1-.016-.53C.123.86.276.664.507.445Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgClose;

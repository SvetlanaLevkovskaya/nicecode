import * as React from "react";

/*
export const Loupe = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={34}
    height={34}
    fill="none"
    {...props}
  >
    <circle cx={17} cy={17} r={17} fill="#F1F2F3" />
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={16}
      height={16}
      fill="none"
      {...props}
    >
      <g clipPath="url(#a)">
        <path
          fill="#616F82"
          fillRule="evenodd"
          d="m13.264 12.238 2.523 2.523a.725.725 0 1 1-1.026 1.026l-2.523-2.523 1.026-1.026Zm-.953-1.082a6.86 6.86 0 0 0 1.48-4.26A6.904 6.904 0 0 0 6.895 0 6.904 6.904 0 0 0 0 6.896a6.904 6.904 0 0 0 6.895 6.895 6.854 6.854 0 0 0 4.064-1.33l-.001-.001s.53-.435.824-.728c.27-.27.496-.537.529-.576Zm-10.86-4.26a5.45 5.45 0 0 0 5.444 5.443 5.45 5.45 0 0 0 5.444-5.443 5.45 5.45 0 0 0-5.444-5.444 5.45 5.45 0 0 0-5.443 5.444Z"
          clipRule="evenodd"
        />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M0 0h16v16H0z" />
        </clipPath>
      </defs>
    </svg>
  </svg>
);
*/

export const Loupe = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="none"
    {...props}
  >
    <g clipPath="url(#a)">
      <path
        fill="#616F82"
        fillRule="evenodd"
        d="m13.264 12.238 2.523 2.523a.725.725 0 1 1-1.026 1.026l-2.523-2.523 1.026-1.026Zm-.953-1.082a6.86 6.86 0 0 0 1.48-4.26A6.904 6.904 0 0 0 6.895 0 6.904 6.904 0 0 0 0 6.896a6.904 6.904 0 0 0 6.895 6.895 6.854 6.854 0 0 0 4.064-1.33l-.001-.001s.53-.435.824-.728c.27-.27.496-.537.529-.576Zm-10.86-4.26a5.45 5.45 0 0 0 5.444 5.443 5.45 5.45 0 0 0 5.444-5.443 5.45 5.45 0 0 0-5.444-5.444 5.45 5.45 0 0 0-5.443 5.444Z"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
);


export const Filter = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={18}
    height={17}
    fill="none"
    {...props}
  >
    <g fill="#616F82">
      <path
        fillRule="evenodd"
        d="M7.665 2.5a.75.75 0 0 0 0 1.5h8.5a.75.75 0 0 0 0-1.5h-8.5Zm2 5.453a.75.75 0 0 0 0 1.5h6.5a.75.75 0 0 0 0-1.5h-6.5Zm1.25 6.297a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1-.75-.75Zm-5.02-1.514c.14.127.14.33 0 .453l-2.147 1.845a.372.372 0 0 1-.496 0l-2.147-1.845a.297.297 0 0 1 0-.453.388.388 0 0 1 .502 0l1.54 1.3-.003-10.91c0-.177.16-.318.356-.318.196 0 .351.14.352.318l.002 10.91 1.544-1.3a.381.381 0 0 1 .497 0Z"
        clipRule="evenodd"
      />
      <path d="m5.895 13.19.163.189.001-.002-.164-.188Zm0-.454.167-.186-.167.186Zm-2.147 2.297-.163-.19-.008.008.171.182Zm-.496 0 .17-.182-.008-.007-.162.19ZM1.105 13.19l-.164.189h.001l.163-.189Zm0-.453.168.185-.168-.185Zm.502 0-.165.188.004.003.161-.191Zm1.54 1.3-.162.19.411.348v-.539h-.25Zm-.003-10.91h-.25.25Zm.708 0h.25-.25Zm.002 10.91h-.25v.537l.411-.346-.16-.191Zm1.544-1.3.161.191.007-.006-.168-.185ZM7.165 3.25a.5.5 0 0 1 .5-.5v-.5a1 1 0 0 0-1 1h.5Zm.5.5a.5.5 0 0 1-.5-.5h-.5a1 1 0 0 0 1 1v-.5Zm8.5 0h-8.5v.5h8.5v-.5Zm.5-.5a.5.5 0 0 1-.5.5v.5a1 1 0 0 0 1-1h-.5Zm-.5-.5a.5.5 0 0 1 .5.5h.5a1 1 0 0 0-1-1v.5Zm-8.5 0h8.5v-.5h-8.5v.5Zm1.5 5.953a.5.5 0 0 1 .5-.5v-.5a1 1 0 0 0-1 1h.5Zm.5.5a.5.5 0 0 1-.5-.5h-.5a1 1 0 0 0 1 1v-.5Zm6.5 0h-6.5v.5h6.5v-.5Zm.5-.5a.5.5 0 0 1-.5.5v.5a1 1 0 0 0 1-1h-.5Zm-.5-.5a.5.5 0 0 1 .5.5h.5a1 1 0 0 0-1-1v.5Zm-6.5 0h6.5v-.5h-6.5v.5Zm2 5.047a1 1 0 0 0-1 1h.5a.5.5 0 0 1 .5-.5v-.5Zm4.5 0h-4.5v.5h4.5v-.5Zm1 1a1 1 0 0 0-1-1v.5a.5.5 0 0 1 .5.5h.5Zm-1 1a1 1 0 0 0 1-1h-.5a.5.5 0 0 1-.5.5v.5Zm-4.5 0h4.5v-.5h-4.5v.5Zm-1-1a1 1 0 0 0 1 1v-.5a.5.5 0 0 1-.5-.5h-.5Zm-4.606-.873a.547.547 0 0 0 .003-.827l-.335.371c.02.018.023.034.023.043 0 .01-.003.022-.02.037l.33.377Zm-2.148 1.846 2.147-1.844-.326-.38-2.147 1.845.326.38Zm-.83-.007a.621.621 0 0 0 .838 0l-.342-.365a.122.122 0 0 1-.155 0l-.341.365ZM.942 13.38l2.147 1.844.325-.38L1.268 13l-.326.379Zm-.004-.829a.547.547 0 0 0 .003.828L1.27 13c-.017-.014-.02-.028-.02-.037 0-.01.004-.026.023-.043l-.335-.37Zm.833-.003a.638.638 0 0 0-.834.003l.336.37c.038-.034.122-.038.17.004l.328-.377Zm1.537 1.297-1.54-1.3-.322.383 1.539 1.3.323-.383ZM2.894 3.127l.002 10.91h.5l-.002-10.91h-.5Zm.606-.568c-.305 0-.606.225-.606.568h.5c0-.01.003-.023.02-.038a.13.13 0 0 1 .086-.03v-.5Zm.602.567c-.001-.337-.292-.567-.602-.567v.5a.12.12 0 0 1 .081.028c.016.014.02.028.02.04h.5Zm.002 10.91-.002-10.91h-.5l.002 10.91h.5Zm1.133-1.49-1.544 1.3.322.382 1.544-1.3-.322-.383Zm.825.005a.631.631 0 0 0-.832 0l.336.37c.04-.035.12-.036.161.001l.335-.37Z" />
    </g>
  </svg>
);

export const Plus = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={14}
    height={14}
    fill="none"
    {...props}
  >
    <path
      fill="#616F82"
      fillRule="evenodd"
      d="M7.998 6.04h5.028a.974.974 0 0 1 0 1.948H7.998v5a1.012 1.012 0 1 1-2.025 0v-5h-5a.974.974 0 1 1 0-1.948h5V1.012a1.012 1.012 0 0 1 2.025 0V6.04Z"
      clipRule="evenodd"
    />
  </svg>
);

export const Oval = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={34}
    height={34}
    fill="none"
    {...props}
  >
    <circle cx={17} cy={17} r={17} fill="#F1F2F3" />
  </svg>
)

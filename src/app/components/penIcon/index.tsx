import React from "react";

type Props = {
    color: string;
};

const PenIcon = ({color}: Props) => {
  return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="38"
        height="39"
        viewBox="0 0 38 39"
        fill="none"
      >
        <path
          d="M19.0012 22.6119C20.3128 22.6119 21.3762 21.5487 21.3762 20.2369C21.3762 18.9252 20.3128 17.8619 19.0012 17.8619C17.6895 17.8619 16.6262 18.9252 16.6262 20.2369C16.6262 21.5487 17.6895 22.6119 19.0012 22.6119Z"
          fill={color}
        />
        <path
          d="M32.4431 19.0326L28.5007 11.0533V5.39319C28.5007 4.7633 28.2505 4.15921 27.8051 3.7138C27.3598 3.26841 26.7557 3.01819 26.1257 3.01819H11.8757C11.2459 3.01819 10.6418 3.26841 10.1964 3.7138C9.75097 4.15921 9.50075 4.7633 9.50075 5.39319V11.0533L5.55838 19.0327C5.36453 19.4229 5.28218 19.8591 5.3204 20.2932C5.35863 20.7273 5.51595 21.1423 5.77503 21.4927L16.7414 36.3896C16.8155 36.4903 16.9195 36.565 17.0387 36.6031C17.1578 36.6412 17.286 36.6407 17.4047 36.6017C17.5236 36.5626 17.627 36.4871 17.7004 36.3858C17.7738 36.2845 17.8132 36.1626 17.8132 36.0375V24.8366C16.6939 24.5476 15.7182 23.8602 15.0694 22.9034C14.4205 21.9465 14.1429 20.7858 14.2886 19.6389C14.4343 18.492 14.9933 17.4377 15.8607 16.6734C16.7282 15.9091 17.8447 15.4874 19.0007 15.4874C20.1569 15.4874 21.2734 15.9091 22.1408 16.6734C23.0083 17.4377 23.5672 18.492 23.7128 19.6389C23.8585 20.7858 23.5809 21.9465 22.9321 22.9034C22.2832 23.8602 21.3077 24.5476 20.1882 24.8366V36.0375C20.1882 36.1626 20.2278 36.2845 20.3011 36.3858C20.3744 36.4871 20.478 36.5626 20.5967 36.6017C20.7156 36.6406 20.8437 36.6412 20.9628 36.6031C21.0819 36.565 21.1861 36.4903 21.2602 36.3894L32.2264 21.4926C32.4855 21.1422 32.6428 20.7271 32.6811 20.2931C32.7192 19.8591 32.6369 19.4228 32.4431 19.0326ZM26.1257 10.1432H11.8757V5.39319H26.1257V10.1432Z"
          fill={color}
        />
      </svg>
  );
};

export default PenIcon;
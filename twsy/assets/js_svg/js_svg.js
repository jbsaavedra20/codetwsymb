import * as React from "react";
import Svg, { Path, G, Defs, Filter, FeFlood, FeColorMatrix, FeOffset, FeComposite, FeBlend, Ellipse, Rect } from 'react-native-svg';

export const SVG1 = () => (
  <Svg
    width="58"
    height="64"
    viewBox="0 0 58 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <Path d="M0 45.7143C0 20.467 20.467 0 45.7143 0H58V34C58 50.5685 44.5685 64 28 64H18.2857C8.18679 64 0 55.8132 0 45.7143V45.7143Z" fill="black" />
    <Path d="M9.86364 27.8182V22.7273H30.0909V27.8182H23.0909V46H16.8636V27.8182H9.86364Z" fill="white" />
    <Path d="M29.6818 48L25.3182 30.5455H31.5909L33.5909 41.1818H33.7273L35.9545 30.5455H42.0455L44.3636 41.0909H44.5L46.4091 30.5455H52.6818L48.3182 48H41.5455L39.0909 38.6364H38.9091L36.4545 48H29.6818Z" fill="white" />

  </Svg>
);

export const SVG2 = () => (
  <Svg
    width={62}
    height={62}
    viewBox="0 0 62 62"
    fill="none">
    <G filter="url(#filter0_d_467_53)">
      <Path d="M31.0001 5.16663C16.7556 5.16663 5.16675 16.7555 5.16675 31C5.16675 45.2445 16.7556 56.8333 31.0001 56.8333C45.2446 56.8333 56.8334 45.2445 56.8334 31C56.8334 16.7555 45.2446 5.16663 31.0001 5.16663ZM27.6598 45.743L24.007 42.0902L35.0973 31L24.007 19.9097L27.6598 16.2569L42.4029 31L27.6598 45.743Z" fill="#44BE89" />
    </G>
    <Defs>
      <Filter id="filter0_d_467_53" x="0" y="0" width="62" height="66" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <FeFlood flood-opacity="0" result="BackgroundImageFix" />
        <FeColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
        <FeOffset dy="4" />
        <FeComposite in2="hardAlpha" operator="out" />
        <FeColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
        <FeBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_467_53" />
        <FeBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_467_53" result="shape" />
      </Filter>
    </Defs>
  </Svg>
);

export const SVG3 = (props) => (
  <Svg
    width={414}
    height={470}
    viewBox="0 0 414 470"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Ellipse
      cx={120.32}
      cy={115.446}
      rx={120.32}
      ry={115.446}
      transform="matrix(-1 0 0 1 177.641 -63.2515)"
      fill="#00CC99"
    />
    <Ellipse
      cx={120.32}
      cy={115.446}
      rx={120.32}
      ry={115.446}
      transform="matrix(-1 0 0 1 199.604 -66)"
      fill="#00CC99"
      fillOpacity={0.46}
    />
    <Ellipse
      cx={120.32}
      cy={115.446}
      rx={120.32}
      ry={115.446}
      transform="matrix(-1 0 0 1 509 239.108)"
      fill="#00CC99"
    />
    <Ellipse
      cx={120.32}
      cy={115.446}
      rx={120.32}
      ry={115.446}
      transform="matrix(-1 0 0 1 506.136 209.788)"
      fill="#00CC99"
      fillOpacity={0.46}
    />
  </Svg>
);

export const _SVG3 = (props) => (
  <Svg
    width={414}
    height={470}
    viewBox="0 0 414 470"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G transform="scale(-1, -2) translate(-414, 0)">
      <Ellipse
        cx={120.32}
        cy={115.446}
        rx={120.32}
        ry={115.446}
        transform="matrix(-1 0 0 1 177.641 -63.2515)"
        fill="#00CC99"
      />
      <Ellipse
        cx={120.32}
        cy={115.446}
        rx={120.32}
        ry={115.446}
        transform="matrix(-1 0 0 1 199.604 -66)"
        fill="#00CC99"
        fillOpacity={0.46}
      />
      <Ellipse
        cx={120.32}
        cy={115.446}
        rx={120.32}
        ry={115.446}
        transform="matrix(-1 0 0 1 509 239.108)"
        fill="#00CC99"
      />
      <Ellipse
        cx={120.32}
        cy={115.446}
        rx={120.32}
        ry={115.446}
        transform="matrix(-1 0 0 1 506.136 209.788)"
        fill="#00CC99"
        fillOpacity={0.46}
      />
    </G>
  </Svg>
);

export const SVG_Google = () => (
  <Svg
    enableBackground="new 0 0 128 128"
    id="Social_Icons"
    viewBox="0 0 128 128"
    xmlSpace="preserve"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <G id="_x31__stroke">
      <G id="Google">
        <Rect
          clipRule="evenodd"
          fill="none"
          fillRule="evenodd"
          height={128}
          width={128}
        />
        <Path
          clipRule="evenodd"
          d="M27.585,64c0-4.157,0.69-8.143,1.923-11.881L7.938,35.648    C3.734,44.183,1.366,53.801,1.366,64c0,10.191,2.366,19.802,6.563,28.332l21.558-16.503C28.266,72.108,27.585,68.137,27.585,64"
          fill="#FBBC05"
          fillRule="evenodd"
        />
        <Path
          clipRule="evenodd"
          d="M65.457,26.182c9.031,0,17.188,3.2,23.597,8.436L107.698,16    C96.337,6.109,81.771,0,65.457,0C40.129,0,18.361,14.484,7.938,35.648l21.569,16.471C34.477,37.033,48.644,26.182,65.457,26.182"
          fill="#EA4335"
          fillRule="evenodd"
        />
        <Path
          clipRule="evenodd"
          d="M65.457,101.818c-16.812,0-30.979-10.851-35.949-25.937    L7.938,92.349C18.361,113.516,40.129,128,65.457,128c15.632,0,30.557-5.551,41.758-15.951L86.741,96.221    C80.964,99.86,73.689,101.818,65.457,101.818"
          fill="#34A853"
          fillRule="evenodd"
        />
        <Path
          clipRule="evenodd"
          d="M126.634,64c0-3.782-0.583-7.855-1.457-11.636H65.457v24.727    h34.376c-1.719,8.431-6.397,14.912-13.092,19.13l20.474,15.828C118.981,101.129,126.634,84.861,126.634,64"
          fill="#4285F4"
          fillRule="evenodd"
        />
      </G>
    </G>
  </Svg>
);

export const SVG_left = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={35}
    height={35}
    viewBox="0 0 24 24"
    {...props}
  >
    <Path d="M13.293 6.293 7.586 12l5.707 5.707 1.414-1.414L10.414 12l4.293-4.293z" />
  </Svg>
);
export const SVG_left_Circle = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={40}
    height={40}
    viewBox="0 0 24 24"
    {...props}
  >
    <Path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm2.707 14.293-1.414 1.414L7.586 12l5.707-5.707 1.414 1.414L10.414 12l4.293 4.293z" />
  </Svg>
);
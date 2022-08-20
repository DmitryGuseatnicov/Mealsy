import React, { FC } from 'react';

const svgVariants = {
  eye: (color: string) => (
    <svg viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M22.0711 17C22.0711 19.805 19.8044 22.0717 16.9994 22.0717C14.1944 22.0717 11.9277 19.805 11.9277 17C11.9277 14.195 14.1944 11.9283 16.9994 11.9283C19.8044 11.9283 22.0711 14.195 22.0711 17Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.0008 28.7159C22.0016 28.7159 26.6624 25.7692 29.9066 20.6692C31.1816 18.6717 31.1816 15.3142 29.9066 13.3167C26.6624 8.21669 22.0016 5.27002 17.0008 5.27002C11.9999 5.27002 7.33909 8.21669 4.09492 13.3167C2.81992 15.3142 2.81992 18.6717 4.09492 20.6692C7.33909 25.7692 11.9999 28.7159 17.0008 28.7159Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  search: (color: string) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M11.5 21.75C5.85 21.75 1.25 17.15 1.25 11.5C1.25 5.85 5.85 1.25 11.5 1.25C17.15 1.25 21.75 5.85 21.75 11.5C21.75 17.15 17.15 21.75 11.5 21.75ZM11.5 2.75C6.67 2.75 2.75 6.68 2.75 11.5C2.75 16.32 6.67 20.25 11.5 20.25C16.33 20.25 20.25 16.32 20.25 11.5C20.25 6.68 16.33 2.75 11.5 2.75Z"
        fill={color}
      />
      <path
        d="M21.9995 22.75C21.8095 22.75 21.6195 22.68 21.4695 22.53L19.4695 20.53C19.1795 20.24 19.1795 19.76 19.4695 19.47C19.7595 19.18 20.2395 19.18 20.5295 19.47L22.5295 21.47C22.8195 21.76 22.8195 22.24 22.5295 22.53C22.3795 22.68 22.1895 22.75 21.9995 22.75Z"
        fill={color}
      />
    </svg>
  ),
  add: (color: string) => (
    <svg viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="34" height="34" rx="2" fill={color} />
      <path
        d="M8.5 17H25.5"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17 25.5V8.5"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  remove: (color: string) => (
    <svg viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="34" height="34" rx="2" fill={color} />
      <rect width="34" height="34" rx="2" fill={color} />
      <path
        d="M11 17H23"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  pepper: (color: string) => (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M21.4276 23.992C16.5651 19.363 16.0341 15.576 16.0341 11.3875C16.0341 8.08751 14.0161 5.74551 11.8826 5.34251C11.7126 5.31051 11.4841 5.28001 11.2261 5.25501C9.13007 4.06301 5.04007 5.10701 5.04007 5.10701C3.72457 2.96351 5.01057 1.76301 5.01057 1.76301C5.22557 1.19751 3.94207 0.660507 3.28007 1.27001C1.51307 2.89301 2.91557 6.65651 2.91557 6.65651C1.32507 8.46351 1.35157 11.3105 1.44257 12.497C0.223071 16.211 1.68507 18.8155 3.86207 21.2005C7.25807 24.9215 14.2276 31 22.1486 31C24.4501 31 26.8301 30.4875 29.2276 29.255C34.7131 26.437 26.1451 28.4825 21.4276 23.992ZM22.1486 29.75C14.2141 29.75 7.36307 23.182 4.78557 20.358C2.64607 18.014 1.49007 15.763 2.80207 12.394C3.48257 10.647 3.96307 10.4885 4.28057 10.3835C4.70457 10.2435 5.69357 9.91701 5.71357 8.41801C5.99607 8.16351 7.16207 7.98801 7.61007 7.92001C8.62557 7.76701 9.58507 7.62251 9.87557 6.66701C9.89307 6.61101 9.91157 6.53501 9.92307 6.44501L10.0131 6.44451C10.6491 6.44451 11.3186 6.50801 11.6511 6.57101C13.1701 6.85751 14.7841 8.64351 14.7841 11.3875C14.7841 15.6065 15.2261 19.8145 20.5656 24.8975C22.9316 27.15 26.1116 27.9155 28.2471 28.3455C26.2951 29.278 24.2461 29.75 22.1486 29.75Z"
        fill={color}
      />
    </svg>
  ),
  bookmark: (color: string) => (
    <svg viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M4.25 4.25C4.25 3.12283 4.69777 2.04183 5.4948 1.2448C6.29183 0.447767 7.37283 0 8.5 0L25.5 0C26.6272 0 27.7082 0.447767 28.5052 1.2448C29.3022 2.04183 29.75 3.12283 29.75 4.25V32.9375C29.7499 33.1297 29.6977 33.3183 29.5989 33.4831C29.5001 33.648 29.3584 33.7829 29.189 33.8736C29.0196 33.9644 28.8287 34.0074 28.6367 33.9982C28.4448 33.9891 28.2589 33.928 28.0989 33.8215L17 27.8396L5.90112 33.8215C5.74112 33.928 5.55524 33.9891 5.36327 33.9982C5.1713 34.0074 4.98043 33.9644 4.811 33.8736C4.64156 33.7829 4.49991 33.648 4.40112 33.4831C4.30233 33.3183 4.2501 33.1297 4.25 32.9375V4.25ZM8.5 2.125C7.93641 2.125 7.39591 2.34888 6.9974 2.7474C6.59888 3.14591 6.375 3.68641 6.375 4.25V30.9527L16.4114 25.6785C16.5858 25.5625 16.7905 25.5005 17 25.5005C17.2095 25.5005 17.4142 25.5625 17.5886 25.6785L27.625 30.9527V4.25C27.625 3.68641 27.4011 3.14591 27.0026 2.7474C26.6041 2.34888 26.0636 2.125 25.5 2.125H8.5Z"
        fill={color}
      />
    </svg>
  ),
  star: (color: string) => (
    <svg viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M29.998 10.916L20.7049 9.50166L16.5505 0.682262C16.4371 0.440792 16.2504 0.245317 16.0198 0.126498C15.4415 -0.172464 14.7388 0.0766713 14.4496 0.682262L10.2953 9.50166L1.0021 10.916C0.745888 10.9543 0.511636 11.0808 0.332287 11.2724C0.115464 11.5058 -0.00401488 11.8198 0.000103019 12.1453C0.00422092 12.4709 0.131599 12.7814 0.354248 13.0087L7.078 19.8734L5.48948 29.5667C5.45223 29.7921 5.47606 30.024 5.55826 30.2361C5.64047 30.4481 5.77776 30.6318 5.95458 30.7662C6.13139 30.9007 6.34065 30.9806 6.55862 30.9969C6.77659 31.0132 6.99456 30.9652 7.18781 30.8583L15.5001 26.2819L23.8123 30.8583C24.0393 30.9848 24.3028 31.027 24.5554 30.981C25.1922 30.866 25.6205 30.2336 25.5107 29.5667L23.9221 19.8734L30.6459 13.0087C30.8289 12.8209 30.9497 12.5756 30.9863 12.3073C31.0851 11.6366 30.6386 11.0156 29.998 10.916Z"
        fill={color}
      />
    </svg>
  ),
  ok: (color: string) => (
    <svg viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M17.0329 10.0601C18.2043 10.0601 19.16 11.0157 19.16 12.1871C19.16 13.3586 18.2043 14.3141 17.0329 14.3141C15.8616 14.3141 14.9059 13.3586 14.9059 12.1871C14.875 11.0157 15.8307 10.0601 17.0329 10.0601Z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.3125 0C2.37849 0 0 2.37849 0 5.3125V28.6875C0 31.6215 2.37849 34 5.3125 34H28.6875C31.6215 34 34 31.6215 34 28.6875V5.3125C34 2.37849 31.6215 0 28.6875 0H5.3125ZM17.0329 17.3352C19.869 17.3352 22.181 15.0232 22.181 12.1871C22.181 9.35108 19.869 7.03906 17.0329 7.03906C14.166 7.03906 11.854 9.35108 11.854 12.1871C11.854 15.0232 14.166 17.3352 17.0329 17.3352ZM19.0984 21.5585C20.1464 21.3119 21.1637 20.9111 22.0885 20.3255C22.7976 19.8938 23.0133 18.9383 22.5509 18.2292C22.1194 17.5202 21.1637 17.3044 20.4547 17.7668C18.3584 19.0924 15.6149 19.0924 13.5187 17.7668C12.8097 17.3353 11.8849 17.5202 11.4225 18.2292C11.0217 18.9383 11.2375 19.8631 11.9465 20.2946C12.8713 20.8804 13.8886 21.281 14.9368 21.5277L12.0698 24.3946C11.4841 24.9804 11.4841 25.9359 12.0698 26.5217C12.3781 26.83 12.748 26.9532 13.1488 26.9532C13.5495 26.9532 13.9195 26.7991 14.2277 26.5217L17.0638 23.6855L19.8999 26.5217C20.4856 27.1074 21.4413 27.1074 22.0269 26.5217C22.6126 25.9359 22.6126 24.9804 22.0269 24.3946L19.0984 21.5585Z"
        fill={color}
      />
    </svg>
  ),
  vk: (color: string) => (
    <svg viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 5.3125C0 2.37849 2.37849 0 5.3125 0H28.6875C31.6215 0 34 2.37849 34 5.3125V28.6875C34 31.6215 31.6215 34 28.6875 34H5.3125C2.37849 34 0 31.6215 0 28.6875V5.3125ZM9.69 9.69C8.5 10.8913 8.5 12.8123 8.5 16.66V17.34C8.5 21.182 8.5 23.103 9.69 24.31C10.8913 25.5 12.8123 25.5 16.66 25.5H17.34C21.182 25.5 23.103 25.5 24.31 24.31C25.5 23.1087 25.5 21.1877 25.5 17.34V16.66C25.5 12.818 25.5 10.897 24.31 9.69C23.1087 8.5 21.1877 8.5 17.34 8.5H16.66C12.818 8.5 10.897 8.5 9.69 9.69Z"
        fill={color}
      />
      <path
        d="M17.544 20.7456C13.668 20.7456 11.458 18.0936 11.3673 13.6736H13.3167C13.379 16.915 14.807 18.2863 15.9403 18.5696V13.6736H17.7707V16.4673C18.887 16.3483 20.0657 15.0733 20.4623 13.668H22.287C22.1382 14.3954 21.841 15.0844 21.414 15.6918C20.9869 16.2993 20.4392 16.8121 19.805 17.1983C20.5127 17.5506 21.1377 18.0489 21.6388 18.6603C22.1399 19.2718 22.5057 19.9825 22.712 20.7456H20.7003C20.2697 19.4026 19.193 18.36 17.7707 18.2183V20.7456H17.544Z"
        fill={color}
      />
    </svg>
  ),
  telegram: (color: string) => (
    <svg viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.3125 0H28.6875C31.6215 0 34 2.37849 34 5.3125V28.6875C34 31.6215 31.6215 34 28.6875 34H5.3125C2.37849 34 0 31.6215 0 28.6875V5.3125C0 2.37849 2.37849 0 5.3125 0ZM17.7351 12.7578C16.2125 13.3911 13.1696 14.7019 8.60616 16.6901C7.86514 16.9847 7.47696 17.273 7.44162 17.5549C7.3819 18.0313 7.97847 18.2189 8.79085 18.4743C8.90135 18.5091 9.01585 18.5451 9.13323 18.5832C9.93248 18.843 11.0076 19.147 11.5665 19.1591C12.0735 19.17 12.6394 18.961 13.2641 18.532C17.5279 15.6539 19.7288 14.1991 19.867 14.1678C19.9645 14.1456 20.0996 14.1178 20.1911 14.1992C20.2826 14.2805 20.2736 14.4346 20.2639 14.4759C20.2048 14.7279 17.8631 16.905 16.6512 18.0317C16.2734 18.3829 16.0054 18.632 15.9506 18.6889C15.8279 18.8164 15.7028 18.937 15.5826 19.0529C14.8401 19.7687 14.2833 20.3054 15.6135 21.182C16.2527 21.6032 16.7642 21.9516 17.2745 22.2991C17.8318 22.6786 18.3877 23.0572 19.1069 23.5286C19.2901 23.6487 19.4651 23.7735 19.6355 23.895C20.2841 24.3574 20.8668 24.7728 21.5867 24.7065C22.0049 24.668 22.437 24.2747 22.6564 23.1016C23.175 20.3293 24.1944 14.3226 24.4299 11.8474C24.4506 11.6305 24.4246 11.353 24.4038 11.2311C24.3829 11.1093 24.3393 10.9357 24.181 10.8072C23.9934 10.655 23.7039 10.6229 23.5744 10.6251C22.9856 10.6356 22.0823 10.9497 17.7351 12.7578Z"
        fill={color}
      />
    </svg>
  ),
  whatsapp: (color: string) => (
    <svg viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.3875 23.0562C14.45 23.6938 15.725 24.0125 17 24.0125C20.9312 24.0125 24.0125 20.825 24.0125 17.1062C24.0125 15.1938 23.375 13.4937 21.9938 12.1125C20.6125 10.8375 18.9125 10.0938 17 10.0938C13.175 10.0938 9.98749 13.2812 9.98749 17.1062C9.98749 18.3813 10.3062 19.6562 11.05 20.825L11.2625 21.1438L10.5187 23.6938L13.175 22.95L13.3875 23.0562ZM19.3375 18.0625C19.55 18.0625 20.6125 18.5938 20.825 18.7C20.8581 18.7165 20.8912 18.7305 20.9239 18.7443C21.1011 18.8191 21.2666 18.889 21.3563 19.3375C21.4625 19.3375 21.4625 19.7625 21.25 20.2937C21.1438 20.7188 20.2938 21.25 19.8688 21.25C19.7968 21.25 19.7278 21.2561 19.6542 21.2626C19.2931 21.2946 18.819 21.3365 17.3187 20.7188C15.4567 19.9739 14.1658 18.1687 13.8033 17.6617C13.7521 17.5901 13.7194 17.5444 13.7062 17.5312C13.6882 17.4951 13.6516 17.4373 13.6033 17.3612C13.3683 16.99 12.8563 16.1816 12.8563 15.3C12.8563 14.2375 13.3875 13.7063 13.6 13.4937C13.8125 13.2812 14.025 13.2812 14.1312 13.2812H14.5563C14.6625 13.2812 14.875 13.2812 14.9813 13.6C15.1938 14.025 15.6188 15.0875 15.6188 15.1938C15.6188 15.2292 15.6306 15.2646 15.6424 15.3C15.666 15.3708 15.6896 15.4417 15.6188 15.5125C15.5656 15.5656 15.5391 15.6187 15.5125 15.6719C15.4859 15.725 15.4594 15.7781 15.4062 15.8313L15.0875 16.15C14.9813 16.2563 14.875 16.3625 14.9813 16.575C15.0875 16.7875 15.5125 17.5312 16.15 18.0625C16.8673 18.6901 17.4333 18.9394 17.7202 19.0658C17.7733 19.0892 17.8168 19.1084 17.85 19.125C18.0625 19.125 18.1688 19.125 18.275 19.0188C18.3281 18.9125 18.4609 18.7531 18.5938 18.5938C18.7266 18.4344 18.8594 18.275 18.9125 18.1687C19.0187 17.9563 19.125 17.9563 19.3375 18.0625Z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 5.3125C0 2.37849 2.37849 0 5.3125 0H28.6875C31.6215 0 34 2.37849 34 5.3125V28.6875C34 31.6215 31.6215 34 28.6875 34H5.3125C2.37849 34 0 31.6215 0 28.6875V5.3125ZM17 8.5C19.2312 8.5 21.3563 9.35 22.95 10.9438C24.5438 12.5375 25.5 14.6625 25.5 16.8938C25.5 21.5688 21.675 25.3938 17 25.3938C15.6187 25.3938 14.2375 24.9688 12.9625 24.3313L8.5 25.5L9.66876 21.25C8.92501 19.975 8.5 18.4875 8.5 17C8.5 12.325 12.325 8.5 17 8.5Z"
        fill={color}
      />
    </svg>
  ),
  ellipse: (color: string) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="11.5" stroke={color} />
    </svg>
  ),
  heart: (color: string) => (
    <svg viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M17.879 29.4808C17.3973 29.6508 16.604 29.6508 16.1223 29.4808C12.014 28.0783 2.83398 22.2275 2.83398 12.3108C2.83398 7.93333 6.36148 4.39166 10.7107 4.39166C13.289 4.39166 15.5698 5.63833 17.0007 7.565C18.4315 5.63833 20.7265 4.39166 23.2907 4.39166C27.6398 4.39166 31.1673 7.93333 31.1673 12.3108C31.1673 22.2275 21.9873 28.0783 17.879 29.4808Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  'ellipse-checked': (color: string) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="12" fill={color} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.27747 10.6153L6 12.1377L11.3303 16.6103L18.9977 7.47269L13.6674 3.00005L13.667 3.00056L17.4737 6.19479L11.0842 13.8095L7.27747 10.6153Z"
        fill="white"
      />
    </svg>
  ),
  'eye-slash': (color: string) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M9.46992 15.28C9.27992 15.28 9.08992 15.21 8.93992 15.06C8.11992 14.24 7.66992 13.15 7.66992 12C7.66992 9.61004 9.60992 7.67004 11.9999 7.67004C13.1499 7.67004 14.2399 8.12004 15.0599 8.94004C15.1999 9.08004 15.2799 9.27004 15.2799 9.47004C15.2799 9.67004 15.1999 9.86004 15.0599 10L9.99992 15.06C9.84992 15.21 9.65992 15.28 9.46992 15.28ZM11.9999 9.17004C10.4399 9.17004 9.16992 10.44 9.16992 12C9.16992 12.5 9.29992 12.98 9.53992 13.4L13.3999 9.54004C12.9799 9.30004 12.4999 9.17004 11.9999 9.17004Z"
        fill={color}
      />
      <path
        d="M5.59984 18.51C5.42984 18.51 5.24984 18.45 5.10984 18.33C4.03984 17.42 3.07984 16.3 2.25984 15C1.19984 13.35 1.19984 10.66 2.25984 8.99998C4.69984 5.17998 8.24984 2.97998 11.9998 2.97998C14.1998 2.97998 16.3698 3.73998 18.2698 5.16998C18.5998 5.41998 18.6698 5.88998 18.4198 6.21998C18.1698 6.54998 17.6998 6.61998 17.3698 6.36998C15.7298 5.12998 13.8698 4.47998 11.9998 4.47998C8.76984 4.47998 5.67984 6.41998 3.51984 9.80998C2.76984 10.98 2.76984 13.02 3.51984 14.19C4.26984 15.36 5.12984 16.37 6.07984 17.19C6.38984 17.46 6.42984 17.93 6.15984 18.25C6.01984 18.42 5.80984 18.51 5.59984 18.51Z"
        fill={color}
      />
      <path
        d="M11.9996 21.02C10.6696 21.02 9.36957 20.75 8.11957 20.22C7.73957 20.06 7.55957 19.62 7.71957 19.24C7.87957 18.86 8.31957 18.68 8.69957 18.84C9.75957 19.29 10.8696 19.52 11.9896 19.52C15.2196 19.52 18.3096 17.58 20.4696 14.19C21.2196 13.02 21.2196 10.98 20.4696 9.81C20.1596 9.32 19.8196 8.85 19.4596 8.41C19.1996 8.09 19.2496 7.62 19.5696 7.35C19.8896 7.09 20.3596 7.13 20.6296 7.46C21.0196 7.94 21.3996 8.46 21.7396 9C22.7996 10.65 22.7996 13.34 21.7396 15C19.2996 18.82 15.7496 21.02 11.9996 21.02Z"
        fill={color}
      />
      <path
        d="M12.6896 16.27C12.3396 16.27 12.0196 16.02 11.9496 15.66C11.8696 15.25 12.1396 14.86 12.5496 14.79C13.6496 14.59 14.5696 13.67 14.7696 12.57C14.8496 12.16 15.2396 11.9 15.6496 11.97C16.0596 12.05 16.3296 12.44 16.2496 12.85C15.9296 14.58 14.5496 15.95 12.8296 16.27C12.7796 16.26 12.7396 16.27 12.6896 16.27Z"
        fill={color}
      />
      <path
        d="M2.00043 22.75C1.81043 22.75 1.62043 22.68 1.47043 22.53C1.18043 22.24 1.18043 21.76 1.47043 21.47L8.94043 14C9.23043 13.71 9.71043 13.71 10.0004 14C10.2904 14.29 10.2904 14.77 10.0004 15.06L2.53043 22.53C2.38043 22.68 2.19043 22.75 2.00043 22.75Z"
        fill={color}
      />
      <path
        d="M14.5297 10.2199C14.3397 10.2199 14.1497 10.1499 13.9997 9.99994C13.7097 9.70994 13.7097 9.22994 13.9997 8.93994L21.4697 1.46994C21.7597 1.17994 22.2397 1.17994 22.5297 1.46994C22.8197 1.75994 22.8197 2.23994 22.5297 2.52994L15.0597 9.99994C14.9097 10.1499 14.7197 10.2199 14.5297 10.2199Z"
        fill={color}
      />
    </svg>
  ),
  'bookmark-fill': (color: string) => (
    <svg viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_127_88)">
        <path
          d="M4.25 4.25V32.9375C4.24987 33.122 4.29778 33.3034 4.38903 33.4637C4.48027 33.6241 4.61171 33.7579 4.7704 33.8521C4.92908 33.9462 5.10954 33.9974 5.29402 34.0006C5.4785 34.0038 5.66064 33.9589 5.8225 33.8704L17 27.7716L28.1775 33.8704C28.3394 33.9589 28.5215 34.0038 28.706 34.0006C28.8905 33.9974 29.0709 33.9462 29.2296 33.8521C29.3883 33.7579 29.5197 33.6241 29.611 33.4637C29.7022 33.3034 29.7501 33.122 29.75 32.9375V4.25C29.75 3.12283 29.3022 2.04183 28.5052 1.2448C27.7082 0.447767 26.6272 0 25.5 0L8.5 0C7.37283 0 6.29183 0.447767 5.4948 1.2448C4.69777 2.04183 4.25 3.12283 4.25 4.25Z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="clip0_127_88">
          <rect width="34" height="34" fill="white" />
        </clipPath>
      </defs>
    </svg>
  ),
  'remove-box': (color: string) => (
    <svg viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="0.5" y="0.5" width="33" height="33" rx="1.5" stroke="#67BB5A" />
      <path
        d="M11 17H23"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  'add-box': (color: string) => (
    <svg viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="0.5" y="0.5" width="33" height="33" rx="1.5" stroke={color} />
      <path
        d="M8.5 17H25.5"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17 25.5V8.5"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  'task-square': (color: string) => (
    <svg viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M20.9358 0.833313H9.06415C3.90748 0.833313 0.833313 3.90748 0.833313 9.06415V20.9358C0.833313 26.0925 3.90748 29.1666 9.06415 29.1666H20.9358C26.0925 29.1666 29.1666 26.0925 29.1666 20.9358V9.06415C29.1666 3.90748 26.0925 0.833313 20.9358 0.833313ZM12.1241 19.1083L8.93665 22.2958C8.72415 22.5083 8.45498 22.6075 8.18581 22.6075C7.91665 22.6075 7.63331 22.5083 7.43498 22.2958L6.37248 21.2333C5.94748 20.8225 5.94748 20.1425 6.37248 19.7316C6.78331 19.3208 7.44915 19.3208 7.87415 19.7316L8.18581 20.0433L10.6225 17.6066C11.0333 17.1958 11.6991 17.1958 12.1241 17.6066C12.535 18.0175 12.535 18.6975 12.1241 19.1083ZM12.1241 9.19165L8.93665 12.3791C8.72415 12.5916 8.45498 12.6908 8.18581 12.6908C7.91665 12.6908 7.63331 12.5916 7.43498 12.3791L6.37248 11.3166C5.94748 10.9058 5.94748 10.2258 6.37248 9.81498C6.78331 9.40415 7.44915 9.40415 7.87415 9.81498L8.18581 10.1266L10.6225 7.68998C11.0333 7.27915 11.6991 7.27915 12.1241 7.68998C12.535 8.10081 12.535 8.78081 12.1241 9.19165ZM22.8766 21.545H15.4391C14.8583 21.545 14.3766 21.0633 14.3766 20.4825C14.3766 19.9016 14.8583 19.42 15.4391 19.42H22.8766C23.4716 19.42 23.9391 19.9016 23.9391 20.4825C23.9391 21.0633 23.4716 21.545 22.8766 21.545ZM22.8766 11.6283H15.4391C14.8583 11.6283 14.3766 11.1466 14.3766 10.5658C14.3766 9.98498 14.8583 9.50331 15.4391 9.50331H22.8766C23.4716 9.50331 23.9391 9.98498 23.9391 10.5658C23.9391 11.1466 23.4716 11.6283 22.8766 11.6283Z"
        fill={color}
      />
    </svg>
  ),
  edit: (color: string) => (
    <svg viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M19.3375 5.25003L7.36463 17.9229C6.91255 18.4042 6.47505 19.3521 6.38755 20.0084L5.84796 24.7334C5.65838 26.4396 6.88338 27.6063 8.57505 27.3146L13.2709 26.5125C13.9271 26.3959 14.8459 25.9146 15.298 25.4188L27.2709 12.7459C29.3417 10.5584 30.275 8.06461 27.0521 5.0167C23.8438 1.99795 21.4084 3.06253 19.3375 5.25003Z"
        stroke={color}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.3398 7.36475C17.9669 11.3897 21.2336 14.4668 25.2878 14.8752"
        stroke={color}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  settings: (color: string) => (
    <svg viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M17 21.25C19.3472 21.25 21.25 19.3472 21.25 17C21.25 14.6528 19.3472 12.75 17 12.75C14.6528 12.75 12.75 14.6528 12.75 17C12.75 19.3472 14.6528 21.25 17 21.25Z"
        stroke={color}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.8335 18.2466V15.7533C2.8335 14.28 4.03766 13.0616 5.52516 13.0616C8.08933 13.0616 9.13766 11.2483 7.8485 9.02412C7.11183 7.74912 7.551 6.09162 8.84016 5.35495L11.291 3.95245C12.4102 3.28662 13.8552 3.68328 14.521 4.80245L14.6768 5.07162C15.9518 7.29578 18.0485 7.29578 19.3377 5.07162L19.4935 4.80245C20.1593 3.68328 21.6043 3.28662 22.7235 3.95245L25.1743 5.35495C26.4635 6.09162 26.9027 7.74912 26.166 9.02412C24.8768 11.2483 25.9252 13.0616 28.4893 13.0616C29.9627 13.0616 31.181 14.2658 31.181 15.7533V18.2466C31.181 19.72 29.9768 20.9383 28.4893 20.9383C25.9252 20.9383 24.8768 22.7516 26.166 24.9758C26.9027 26.265 26.4635 27.9083 25.1743 28.645L22.7235 30.0475C21.6043 30.7133 20.1593 30.3166 19.4935 29.1975L19.3377 28.9283C18.0627 26.7041 15.966 26.7041 14.6768 28.9283L14.521 29.1975C13.8552 30.3166 12.4102 30.7133 11.291 30.0475L8.84016 28.645C7.551 27.9083 7.11183 26.2508 7.8485 24.9758C9.13766 22.7516 8.08933 20.9383 5.52516 20.9383C4.03766 20.9383 2.8335 19.72 2.8335 18.2466Z"
        stroke={color}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  'arrow-down': (color: string) => (
    <svg viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M8.49993 12.75C8.83094 12.7494 9.15172 12.8646 9.4066 13.0758L16.9999 19.4225L24.6074 13.3025C24.7523 13.1848 24.9191 13.0969 25.0981 13.0439C25.277 12.9909 25.4647 12.9738 25.6504 12.9935C25.836 13.0133 26.0159 13.0695 26.1797 13.159C26.3435 13.2485 26.488 13.3695 26.6049 13.515C26.7226 13.6599 26.8105 13.8266 26.8635 14.0056C26.9165 14.1846 26.9337 14.3723 26.9139 14.5579C26.8942 14.7436 26.8379 14.9234 26.7484 15.0873C26.6589 15.2511 26.538 15.3956 26.3924 15.5125L17.8924 22.355C17.6389 22.5634 17.321 22.6773 16.9928 22.6773C16.6647 22.6773 16.3468 22.5634 16.0933 22.355L7.59326 15.2717C7.44981 15.1527 7.33124 15.0067 7.24432 14.8419C7.1574 14.677 7.10386 14.4967 7.08675 14.3111C7.06964 14.1256 7.08931 13.9385 7.14463 13.7605C7.19994 13.5826 7.28981 13.4173 7.4091 13.2742C7.54092 13.1117 7.70711 12.9804 7.89572 12.8897C8.08433 12.7991 8.29068 12.7514 8.49993 12.75Z"
        fill={color}
      />
    </svg>
  ),
  'arrow-forward': (color: string) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M14.5942 11L11.2971 7.70291L12.7113 6.2887L18.4226 12L12.7113 17.7113L11.2971 16.2971L14.5942 13H6V11H14.5942Z"
        fill={color}
      />
    </svg>
  ),
  calendar: (color: string) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M8 5.75C7.59 5.75 7.25 5.41 7.25 5V2C7.25 1.59 7.59 1.25 8 1.25C8.41 1.25 8.75 1.59 8.75 2V5C8.75 5.41 8.41 5.75 8 5.75Z"
        fill={color}
      />
      <path
        d="M16 5.75C15.59 5.75 15.25 5.41 15.25 5V2C15.25 1.59 15.59 1.25 16 1.25C16.41 1.25 16.75 1.59 16.75 2V5C16.75 5.41 16.41 5.75 16 5.75Z"
        fill={color}
      />
      <path
        d="M8.5 14.5001C8.37 14.5001 8.24 14.4701 8.12 14.4201C7.99 14.3701 7.89 14.3001 7.79 14.2101C7.61 14.0201 7.5 13.7701 7.5 13.5001C7.5 13.3701 7.53 13.2401 7.58 13.1201C7.63 13.0001 7.7 12.8901 7.79 12.7901C7.89 12.7001 7.99 12.6301 8.12 12.5801C8.48 12.4301 8.93 12.5101 9.21 12.7901C9.39 12.9801 9.5 13.2401 9.5 13.5001C9.5 13.5601 9.49 13.6301 9.48 13.7001C9.47 13.7601 9.45 13.8201 9.42 13.8801C9.4 13.9401 9.37 14.0001 9.33 14.0601C9.3 14.1101 9.25 14.1601 9.21 14.2101C9.02 14.3901 8.76 14.5001 8.5 14.5001Z"
        fill={color}
      />
      <path
        d="M12 14.5C11.87 14.5 11.74 14.47 11.62 14.42C11.49 14.37 11.39 14.3 11.29 14.21C11.11 14.02 11 13.77 11 13.5C11 13.37 11.03 13.24 11.08 13.12C11.13 13 11.2 12.89 11.29 12.79C11.39 12.7 11.49 12.63 11.62 12.58C11.98 12.42 12.43 12.51 12.71 12.79C12.89 12.98 13 13.24 13 13.5C13 13.56 12.99 13.63 12.98 13.7C12.97 13.76 12.95 13.82 12.92 13.88C12.9 13.94 12.87 14 12.83 14.06C12.8 14.11 12.75 14.16 12.71 14.21C12.52 14.39 12.26 14.5 12 14.5Z"
        fill={color}
      />
      <path
        d="M15.5 14.5C15.37 14.5 15.24 14.47 15.12 14.42C14.99 14.37 14.89 14.3 14.79 14.21C14.75 14.16 14.71 14.11 14.67 14.06C14.63 14 14.6 13.94 14.58 13.88C14.55 13.82 14.53 13.76 14.52 13.7C14.51 13.63 14.5 13.56 14.5 13.5C14.5 13.24 14.61 12.98 14.79 12.79C14.89 12.7 14.99 12.63 15.12 12.58C15.49 12.42 15.93 12.51 16.21 12.79C16.39 12.98 16.5 13.24 16.5 13.5C16.5 13.56 16.49 13.63 16.48 13.7C16.47 13.76 16.45 13.82 16.42 13.88C16.4 13.94 16.37 14 16.33 14.06C16.3 14.11 16.25 14.16 16.21 14.21C16.02 14.39 15.76 14.5 15.5 14.5Z"
        fill={color}
      />
      <path
        d="M8.5 17.9999C8.37 17.9999 8.24 17.97 8.12 17.92C8 17.87 7.89 17.7999 7.79 17.7099C7.61 17.5199 7.5 17.2599 7.5 16.9999C7.5 16.8699 7.53 16.7399 7.58 16.6199C7.63 16.4899 7.7 16.38 7.79 16.29C8.16 15.92 8.84 15.92 9.21 16.29C9.39 16.48 9.5 16.7399 9.5 16.9999C9.5 17.2599 9.39 17.5199 9.21 17.7099C9.02 17.8899 8.76 17.9999 8.5 17.9999Z"
        fill={color}
      />
      <path
        d="M12 17.9999C11.74 17.9999 11.48 17.8899 11.29 17.7099C11.11 17.5199 11 17.2599 11 16.9999C11 16.8699 11.03 16.7399 11.08 16.6199C11.13 16.4899 11.2 16.38 11.29 16.29C11.66 15.92 12.34 15.92 12.71 16.29C12.8 16.38 12.87 16.4899 12.92 16.6199C12.97 16.7399 13 16.8699 13 16.9999C13 17.2599 12.89 17.5199 12.71 17.7099C12.52 17.8899 12.26 17.9999 12 17.9999Z"
        fill={color}
      />
      <path
        d="M15.5 18C15.24 18 14.98 17.89 14.79 17.71C14.7 17.62 14.63 17.51 14.58 17.38C14.53 17.26 14.5 17.13 14.5 17C14.5 16.87 14.53 16.74 14.58 16.62C14.63 16.49 14.7 16.38 14.79 16.29C15.02 16.06 15.37 15.95 15.69 16.02C15.76 16.03 15.82 16.05 15.88 16.08C15.94 16.1 16 16.13 16.06 16.17C16.11 16.2 16.16 16.25 16.21 16.29C16.39 16.48 16.5 16.74 16.5 17C16.5 17.26 16.39 17.52 16.21 17.71C16.02 17.89 15.76 18 15.5 18Z"
        fill={color}
      />
      <path
        d="M20.5 9.83997H3.5C3.09 9.83997 2.75 9.49997 2.75 9.08997C2.75 8.67997 3.09 8.33997 3.5 8.33997H20.5C20.91 8.33997 21.25 8.67997 21.25 9.08997C21.25 9.49997 20.91 9.83997 20.5 9.83997Z"
        fill={color}
      />
      <path
        d="M16 22.75H8C4.35 22.75 2.25 20.65 2.25 17V8.5C2.25 4.85 4.35 2.75 8 2.75H16C19.65 2.75 21.75 4.85 21.75 8.5V17C21.75 20.65 19.65 22.75 16 22.75ZM8 4.25C5.14 4.25 3.75 5.64 3.75 8.5V17C3.75 19.86 5.14 21.25 8 21.25H16C18.86 21.25 20.25 19.86 20.25 17V8.5C20.25 5.64 18.86 4.25 16 4.25H8Z"
        fill={color}
      />
    </svg>
  ),
  close: (color: string) => (
    <svg viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.86292 7L0 12.8629L1.13708 14L7 8.13708L12.8629 14L14 12.8629L8.13708 7L14 1.13708L12.8629 0L7 5.86292L1.13708 0L0 1.13708L5.86292 7Z"
        fill={color}
      />
    </svg>
  )
};

type SvgVariants = typeof svgVariants;

interface ISvg {
  name: keyof SvgVariants;
  color: string;
}

const Svg: FC<ISvg> = (props) => {
  const { name, color } = props;
  return svgVariants[name](color);
};

export type { SvgVariants };
export default Svg;

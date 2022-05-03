import * as React from "react"
import {FC} from "react"
import {IndexProps} from "./index.props";

const CakeSvg: FC<IndexProps> = ({color, className}) => (
    <svg className={className} width="17" height="18" viewBox="0 0 17 18" fill={color} xmlns="http://www.w3.org/2000/svg">
        <path d="M13.6 6.85714H9.35V4.28571H7.65V6.85714H3.4C2.49826 6.85714 1.63346 7.21837 0.995837 7.86135C0.358213 8.50433 0 9.3764 0 10.2857V18H17V10.2857C17 9.3764 16.6418 8.50433 16.0042 7.86135C15.3665 7.21837 14.5017 6.85714 13.6 6.85714ZM15.3 16.2857H1.7V13.7143C2.13911 13.6973 2.57009 13.5896 2.9663 13.3979C3.36251 13.2063 3.71552 12.9347 4.0035 12.6C4.12244 12.4161 4.285 12.2649 4.47646 12.1603C4.66793 12.0557 4.88224 12.001 5.1 12.001C5.31776 12.001 5.53207 12.0557 5.72354 12.1603C5.915 12.2649 6.07756 12.4161 6.1965 12.6C6.47463 12.9456 6.82575 13.2243 7.22425 13.4157C7.62276 13.6072 8.0586 13.7065 8.5 13.7065C8.9414 13.7065 9.37724 13.6072 9.77575 13.4157C10.1742 13.2243 10.5254 12.9456 10.8035 12.6C10.9224 12.4161 11.085 12.2649 11.2765 12.1603C11.4679 12.0557 11.6822 12.001 11.9 12.001C12.1178 12.001 12.3321 12.0557 12.5235 12.1603C12.715 12.2649 12.8776 12.4161 12.9965 12.6C13.2845 12.9347 13.6375 13.2063 14.0337 13.3979C14.4299 13.5896 14.8609 13.6973 15.3 13.7143V16.2857ZM15.3 12C14.8723 11.9474 14.4804 11.7329 14.2035 11.4C13.9254 11.0544 13.5742 10.7757 13.1757 10.5843C12.7772 10.3928 12.3414 10.2935 11.9 10.2935C11.4586 10.2935 11.0228 10.3928 10.6243 10.5843C10.2258 10.7757 9.87463 11.0544 9.5965 11.4C9.47756 11.5839 9.315 11.7351 9.12354 11.8397C8.93207 11.9443 8.71776 11.999 8.5 11.999C8.28224 11.999 8.06793 11.9443 7.87646 11.8397C7.685 11.7351 7.52244 11.5839 7.4035 11.4C7.12537 11.0544 6.77425 10.7757 6.37575 10.5843C5.97724 10.3928 5.5414 10.2935 5.1 10.2935C4.6586 10.2935 4.22275 10.3928 3.82425 10.5843C3.42575 10.7757 3.07463 11.0544 2.7965 11.4C2.51961 11.7329 2.1277 11.9474 1.7 12V10.2857C1.7 9.83106 1.87911 9.39502 2.19792 9.07353C2.51673 8.75204 2.94913 8.57143 3.4 8.57143H13.6C14.0509 8.57143 14.4833 8.75204 14.8021 9.07353C15.1209 9.39502 15.3 9.83106 15.3 10.2857V12ZM8.5 3.59143C8.84942 3.59143 9.18454 3.45145 9.43161 3.2023C9.67869 2.95314 9.8175 2.61522 9.8175 2.26286C9.8175 1.2 8.5 0 8.5 0C8.5 0 7.1825 1.2 7.1825 2.26286C7.1825 2.61522 7.32131 2.95314 7.56839 3.2023C7.81547 3.45145 8.15058 3.59143 8.5 3.59143Z" />
    </svg>
)

const EmailSvg: FC<IndexProps> = ({color, className}) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="14" height="10" fill={color} viewBox="0 0 14 10">
        <path id="Контур_63758" d="M77.5,160h-13a.478.478,0,0,0-.5.455v9.091a.478.478,0,0,0,.5.455h13a.478.478,0,0,0,.5-.455v-9.091A.478.478,0,0,0,77.5,160Zm-.625,1.574v7.4H65.125v-7.4l-.431-.305.614-.717.669.473H76.025l.669-.473.614.717Zm-.85-.551L71,164.574l-5.025-3.551-.669-.473-.614.717.431.305,5.337,3.773a.945.945,0,0,0,1.073,0l5.341-3.771.431-.305-.614-.717Z" transform="translate(-64 -160)"/>
    </svg>
)

const EyeSvg: FC<IndexProps> = ({color, className}) => (
    <svg className={className} width="18" height="14" viewBox="0 0 18 14" fill={color} xmlns="http://www.w3.org/2000/svg">
        <path d="M17.4023 6.49609C15.5508 2.5957 12.7519 0.632812 8.99999 0.632812C5.24609 0.632812 2.44921 2.5957 0.597647 6.49805C0.52338 6.65531 0.484863 6.82706 0.484863 7.00098C0.484863 7.17489 0.52338 7.34665 0.597647 7.50391C2.44921 11.4043 5.24804 13.3672 8.99999 13.3672C12.7539 13.3672 15.5508 11.4043 17.4023 7.50195C17.5527 7.18555 17.5527 6.81836 17.4023 6.49609ZM8.99999 11.9609C5.8496 11.9609 3.54296 10.3633 1.91601 7C3.54296 3.63672 5.8496 2.03906 8.99999 2.03906C12.1504 2.03906 14.457 3.63672 16.084 7C14.459 10.3633 12.1523 11.9609 8.99999 11.9609ZM8.92187 3.5625C7.02343 3.5625 5.48437 5.10156 5.48437 7C5.48437 8.89844 7.02343 10.4375 8.92187 10.4375C10.8203 10.4375 12.3594 8.89844 12.3594 7C12.3594 5.10156 10.8203 3.5625 8.92187 3.5625ZM8.92187 9.1875C7.71288 9.1875 6.73437 8.20898 6.73437 7C6.73437 5.79102 7.71288 4.8125 8.92187 4.8125C10.1309 4.8125 11.1094 5.79102 11.1094 7C11.1094 8.20898 10.1309 9.1875 8.92187 9.1875Z" />
    </svg>
)

const GeoSvg: FC<IndexProps> = ({color, className}) => (
    <svg className={className} width="15" height="18" viewBox="0 0 15 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7.50049 9.8C8.84668 9.8 9.93799 8.72548 9.93799 7.4C9.93799 6.07452 8.84668 5 7.50049 5C6.15429 5 5.06299 6.07452 5.06299 7.4C5.06299 8.72548 6.15429 9.8 7.50049 9.8Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M7.5 1C5.77609 1 4.12279 1.67428 2.90381 2.87452C1.68482 4.07475 1 5.70261 1 7.4C1 8.9136 1.32662 9.904 2.21875 11L7.5 17L12.7812 11C13.6734 9.904 14 8.9136 14 7.4C14 5.70261 13.3152 4.07475 12.0962 2.87452C10.8772 1.67428 9.22391 1 7.5 1V1Z" stroke={color} strokeWidth="1.5" strokeLinecap="round"  strokeLinejoin="round"/>
    </svg>
)

const LikesSvg: FC<IndexProps> = ({color, className}) => (
    <svg className={className} width="16" height="15" viewBox="0 0 16 15" fill={color} xmlns="http://www.w3.org/2000/svg">
        <path d="M8 14.9933C7.484 14.5169 6.9008 14.0213 6.284 13.4941H6.276C4.104 11.645 1.64241 9.55276 0.555209 7.0457C0.198409 6.24777 0.00880917 5.37988 9.18206e-06 4.49866C-0.00117618 3.90061 0.112418 3.30835 0.334123 2.75664C0.555827 2.20494 0.881172 1.70491 1.29105 1.28592C1.70094 0.866938 2.18709 0.537439 2.72098 0.316775C3.25486 0.0961107 3.82571 -0.011271 4.4 0.000935259C5.34451 0.00248847 6.26867 0.286692 7.0624 0.819687C7.41118 1.05538 7.72674 1.34047 8 1.66676C8.2752 1.34192 8.5904 1.05707 8.9384 0.819687C9.73179 0.286586 10.6557 0.00236666 11.6 0.000935259C12.1743 -0.011271 12.7451 0.0961107 13.279 0.316775C13.8129 0.537439 14.2991 0.866938 14.7089 1.28592C15.1188 1.70491 15.4442 2.20494 15.6659 2.75664C15.8876 3.30835 16.0012 3.90061 16 4.49866C15.9918 5.38055 15.8025 6.25043 15.4448 7.04986C14.3576 9.55692 11.8968 11.6484 9.7248 13.4941L9.7168 13.5008C9.0992 14.0247 8.5168 14.5202 8.0008 15L8 14.9933ZM4.4 1.66676C3.65481 1.65705 2.93606 1.95398 2.40001 2.49301C2.14437 2.75444 1.94182 3.06671 1.80439 3.41125C1.66696 3.7558 1.59746 4.12559 1.60001 4.49866C1.60881 5.14 1.74881 5.77301 2.00961 6.35438C2.52283 7.43608 3.21531 8.41504 4.0552 9.24625C4.848 10.0792 5.76 10.8854 6.5488 11.5634C6.7672 11.7508 6.9896 11.9399 7.212 12.129L7.352 12.2481C7.5656 12.4296 7.7864 12.6179 8 12.8028L8.0104 12.7928L8.0152 12.7886H8.02L8.0272 12.7828H8.0352L8.0496 12.7703L8.0824 12.7428L8.088 12.7378L8.0968 12.7311H8.1016L8.1088 12.7245L8.64 12.2706L8.7792 12.1514C9.004 11.9607 9.2264 11.7716 9.4448 11.5842C10.2336 10.9062 11.1464 10.1008 11.9392 9.26374C12.7792 8.43298 13.4718 7.45427 13.9848 6.37271C14.2504 5.78634 14.3928 5.14666 14.4008 4.49866C14.4023 4.12666 14.3323 3.75811 14.1947 3.41477C14.0572 3.07144 13.855 2.76028 13.6 2.49967C13.065 1.95821 12.3461 1.65883 11.6 1.66676C11.1499 1.66277 10.704 1.75801 10.2918 1.94621C9.87949 2.13441 9.51015 2.4113 9.208 2.7587L8 4.20797L6.792 2.7587C6.48985 2.4113 6.12051 2.13441 5.70824 1.94621C5.29598 1.75801 4.85014 1.66277 4.4 1.66676Z" />
    </svg>
)

const LockSvg: FC<IndexProps> = ({color, className}) => (
    <svg className={className} width="14" height="14" viewBox="0 0 14 14" fill={color} xmlns="http://www.w3.org/2000/svg">
        <path d="M7 0C4.58763 0 2.625 1.5701 2.625 3.5V5.6H1.75C0.784875 5.6 0 6.2279 0 7V12.6C0 13.3721 0.784875 14 1.75 14H12.25C13.2151 14 14 13.3721 14 12.6V7C14 6.2279 13.2151 5.6 12.25 5.6H11.375V3.5C11.375 1.5701 9.41237 0 7 0ZM12.25 7L12.2518 12.6H1.75V7H12.25ZM4.375 5.6V3.5C4.375 2.3422 5.55275 1.4 7 1.4C8.44725 1.4 9.625 2.3422 9.625 3.5V5.6H4.375Z" />
    </svg>
)

const LogoSvg: FC<IndexProps> = ({color, className}) => (
    <svg className={className} width="177" height="30" viewBox="0 0 177 30" fill={color} xmlns="http://www.w3.org/2000/svg">
        <path d="M9.25293 13.3799L7.62939 15.0034C7.56429 14.9383 7.46663 14.8488 7.33643 14.7349C7.21436 14.6128 6.95394 14.4622 6.55518 14.2832C6.16455 14.096 5.76986 14.0024 5.37109 14.0024C4.83398 14.0024 4.40674 14.1286 4.08936 14.3809C3.78011 14.625 3.62549 14.9139 3.62549 15.2476C3.62549 15.5975 3.77604 15.8905 4.07715 16.1265C4.37826 16.3625 4.75667 16.5415 5.2124 16.6636C5.66813 16.7856 6.15641 16.9403 6.67725 17.1274C7.20622 17.3065 7.69857 17.5099 8.1543 17.7378C8.61816 17.9657 9.00065 18.3156 9.30176 18.7876C9.60286 19.2596 9.75342 19.8293 9.75342 20.4966C9.75342 21.5301 9.33431 22.4131 8.49609 23.1455C7.66602 23.8779 6.58366 24.2441 5.24902 24.2441C4.66309 24.2441 4.10156 24.1709 3.56445 24.0244C3.03548 23.8779 2.6001 23.703 2.2583 23.4995C1.9165 23.2961 1.6154 23.0926 1.35498 22.8892C1.1027 22.6776 0.919596 22.4985 0.805664 22.3521L0.622559 22.1201L2.24609 20.4966C2.32747 20.6105 2.44548 20.7529 2.6001 20.9238C2.76286 21.0947 3.10465 21.3185 3.62549 21.5952C4.15446 21.8638 4.69564 21.998 5.24902 21.998C5.91634 21.998 6.41683 21.8638 6.75049 21.5952C7.08415 21.3185 7.25098 20.9523 7.25098 20.4966C7.25098 20.1466 7.10042 19.8577 6.79932 19.6299C6.49821 19.3939 6.11979 19.2148 5.66406 19.0928C5.20833 18.9626 4.71598 18.8079 4.18701 18.6289C3.66618 18.4417 3.17383 18.2383 2.70996 18.0186C2.25423 17.7907 1.87581 17.4408 1.57471 16.9688C1.2736 16.4886 1.12305 15.9149 1.12305 15.2476C1.12305 14.328 1.52588 13.5142 2.33154 12.8062C3.14535 12.0981 4.15853 11.7441 5.37109 11.7441C5.85124 11.7441 6.3151 11.8011 6.7627 11.915C7.21842 12.0208 7.5887 12.1551 7.87354 12.3179C8.15837 12.4725 8.40658 12.6353 8.61816 12.8062C8.83789 12.9689 8.99658 13.0991 9.09424 13.1968L9.25293 13.3799ZM20.6299 20.8384C21.3704 20.0653 21.7407 19.1213 21.7407 18.0063C21.7407 16.8833 21.3704 15.9352 20.6299 15.1621C19.8893 14.389 19.0104 14.0024 17.9932 14.0024C16.9759 14.0024 16.0929 14.389 15.3442 15.1621C14.6037 15.9352 14.2334 16.8833 14.2334 18.0063C14.2334 19.1213 14.6037 20.0653 15.3442 20.8384C16.0929 21.6115 16.9759 21.998 17.9932 21.998C19.0104 21.998 19.8893 21.6115 20.6299 20.8384ZM13.5986 22.3887C12.3617 21.1436 11.7432 19.6828 11.7432 18.0063C11.7432 16.3218 12.3617 14.8569 13.5986 13.6118C14.8438 12.3667 16.3086 11.7441 17.9932 11.7441C19.6777 11.7441 21.1385 12.3667 22.3755 13.6118C23.6206 14.8569 24.2432 16.3218 24.2432 18.0063C24.2432 19.6828 23.6206 21.1436 22.3755 22.3887C21.1385 23.6257 19.6777 24.2441 17.9932 24.2441C16.3086 24.2441 14.8438 23.6257 13.5986 22.3887ZM28.1006 22.3887C26.8636 21.1436 26.2451 19.6828 26.2451 18.0063C26.2451 16.3218 26.8636 14.8569 28.1006 13.6118C29.3457 12.3667 30.8105 11.7441 32.4951 11.7441C33.431 11.7441 34.3018 11.9476 35.1074 12.3545C35.9131 12.7533 36.4909 13.152 36.8408 13.5508L37.3657 14.1245L35.7422 15.748C35.6608 15.6178 35.5347 15.4591 35.3638 15.272C35.201 15.0767 34.8389 14.8162 34.2773 14.4907C33.724 14.1652 33.1299 14.0024 32.4951 14.0024C31.4779 14.0024 30.5949 14.389 29.8462 15.1621C29.1056 15.9352 28.7354 16.8833 28.7354 18.0063C28.7354 19.1213 29.1056 20.0653 29.8462 20.8384C30.5949 21.6115 31.4779 21.998 32.4951 21.998C33.1299 21.998 33.724 21.8394 34.2773 21.522C34.8389 21.2046 35.2417 20.8953 35.4858 20.5942L35.8643 20.1304L37.4878 21.7539C37.439 21.819 37.3657 21.9126 37.2681 22.0347C37.1704 22.1486 36.9588 22.348 36.6333 22.6328C36.3078 22.9095 35.966 23.1577 35.6079 23.3774C35.2498 23.589 34.786 23.7884 34.2163 23.9756C33.6466 24.1546 33.0729 24.2441 32.4951 24.2441C30.8105 24.2441 29.3457 23.6257 28.1006 22.3887ZM42.6025 12.0005V24H40.1001V12.0005H42.6025ZM42.4316 7.17871C42.7165 7.46354 42.8589 7.82161 42.8589 8.25293C42.8589 8.68424 42.7165 9.04232 42.4316 9.32715C42.1468 9.61198 41.7887 9.75439 41.3574 9.75439C40.9261 9.75439 40.568 9.61198 40.2832 9.32715C39.9984 9.04232 39.856 8.68424 39.856 8.25293C39.856 7.82161 39.9984 7.46354 40.2832 7.17871C40.568 6.89388 40.9261 6.75146 41.3574 6.75146C41.7887 6.75146 42.1468 6.89388 42.4316 7.17871ZM55.8594 24H53.3569V22.7549C53.3244 22.7874 53.2674 22.8403 53.186 22.9136C53.1128 22.9868 52.9582 23.1089 52.7222 23.2798C52.4943 23.4425 52.2461 23.5931 51.9775 23.7314C51.709 23.8617 51.3713 23.9797 50.9644 24.0854C50.5575 24.1912 50.1465 24.2441 49.7314 24.2441C48.5107 24.2441 47.4976 23.8901 46.6919 23.1821C45.8862 22.4741 45.4834 21.6644 45.4834 20.7529C45.4834 19.7682 45.7926 18.9422 46.4111 18.2749C47.0378 17.6076 47.8923 17.1844 48.9746 17.0054L53.3569 16.2485C53.3569 15.6138 53.1209 15.0807 52.6489 14.6494C52.1851 14.2181 51.5869 14.0024 50.8545 14.0024C50.2197 14.0024 49.6419 14.1367 49.1211 14.4053C48.6084 14.6657 48.2544 14.9302 48.0591 15.1987L47.7295 15.626L46.106 14.0024C46.1548 13.9373 46.2199 13.856 46.3013 13.7583C46.3908 13.6525 46.582 13.4735 46.875 13.2212C47.1761 12.9608 47.4935 12.7288 47.8271 12.5254C48.1608 12.3219 48.6003 12.1429 49.1455 11.9883C49.6989 11.8255 50.2686 11.7441 50.8545 11.7441C52.3193 11.7441 53.5197 12.1795 54.4556 13.0503C55.3914 13.9129 55.8594 14.979 55.8594 16.2485V24ZM50.1099 21.998C51.1271 21.998 51.9206 21.6969 52.4902 21.0947C53.068 20.4844 53.3569 19.6177 53.3569 18.4946V18.2505L49.4751 18.873C49.0275 18.9544 48.6654 19.1375 48.3887 19.4224C48.112 19.7072 47.9736 20.0653 47.9736 20.4966C47.9736 20.8953 48.1649 21.2453 48.5474 21.5464C48.938 21.8475 49.4588 21.998 50.1099 21.998ZM62.1094 6.49512V24H59.6191V6.49512H62.1094Z" />
        <circle cx="73.5" cy="20.5" r="3.5" fill="#6962A8"/>
        <path d="M87.126 12.0005V13.2456L87.2847 13.0869C87.3579 13.0137 87.5125 12.8957 87.7485 12.7329C87.9845 12.562 88.2327 12.4115 88.4932 12.2812C88.7617 12.1429 89.0994 12.0208 89.5063 11.915C89.9214 11.8011 90.3364 11.7441 90.7515 11.7441C92.2 11.7441 93.3719 12.2202 94.2671 13.1724C95.1704 14.1245 95.6221 15.4022 95.6221 17.0054V24H93.1196V17.0054C93.1196 16.1427 92.8429 15.4266 92.2896 14.8569C91.7443 14.2873 91.0648 14.0024 90.251 14.0024C89.2988 14.0024 88.5379 14.3117 87.9683 14.9302C87.4067 15.5405 87.126 16.3991 87.126 17.5059V24H84.6235V12.0005H87.126ZM110.246 18.873H100.871C101.001 19.7194 101.416 20.4518 102.116 21.0703C102.824 21.6888 103.662 21.998 104.631 21.998C105.331 21.998 105.982 21.8394 106.584 21.522C107.194 21.2046 107.626 20.8953 107.878 20.5942L108.256 20.1304L109.88 21.7539C109.831 21.819 109.754 21.9126 109.648 22.0347C109.55 22.1486 109.335 22.348 109.001 22.6328C108.667 22.9095 108.313 23.1577 107.939 23.3774C107.565 23.589 107.076 23.7884 106.474 23.9756C105.88 24.1546 105.266 24.2441 104.631 24.2441C102.93 24.2441 101.461 23.6216 100.224 22.3765C98.9953 21.1232 98.3809 19.6217 98.3809 17.8721C98.3809 16.1875 98.979 14.7471 100.175 13.5508C101.38 12.3464 102.82 11.7441 104.497 11.7441C106.181 11.7441 107.581 12.3057 108.696 13.4287C109.819 14.5436 110.38 15.9434 110.38 17.6279L110.246 18.873ZM104.497 13.8804C103.593 13.8804 102.832 14.1489 102.214 14.686C101.604 15.215 101.193 15.9027 100.981 16.749H107.927C107.78 15.9027 107.402 15.215 106.792 14.686C106.181 14.1489 105.416 13.8804 104.497 13.8804ZM114.616 10.499V7.99658H116.862V12.0005H119.365V14.2466H116.862V20.4722C116.862 20.9198 117.005 21.286 117.29 21.5708C117.574 21.8556 117.932 21.998 118.364 21.998C118.551 21.998 118.746 21.9777 118.95 21.937C119.161 21.8963 119.324 21.8516 119.438 21.8027L119.621 21.7539V24C119.125 24.1628 118.539 24.2441 117.863 24.2441C115.528 24.2441 114.364 22.995 114.372 20.4966V14.2466H112.114V12.0005H113.371C114.201 12.0005 114.616 11.5 114.616 10.499ZM129.24 12.0005H131.486L134.233 20.2524L136.992 12.0005H139.616L135.49 24H133.11L130.363 16.0044L127.617 24H125.236L121.11 12.0005H123.735L126.494 20.2524L129.24 12.0005ZM149.748 20.8384C150.489 20.0653 150.859 19.1213 150.859 18.0063C150.859 16.8833 150.489 15.9352 149.748 15.1621C149.007 14.389 148.129 14.0024 147.111 14.0024C146.094 14.0024 145.211 14.389 144.462 15.1621C143.722 15.9352 143.352 16.8833 143.352 18.0063C143.352 19.1213 143.722 20.0653 144.462 20.8384C145.211 21.6115 146.094 21.998 147.111 21.998C148.129 21.998 149.007 21.6115 149.748 20.8384ZM142.717 22.3887C141.48 21.1436 140.861 19.6828 140.861 18.0063C140.861 16.3218 141.48 14.8569 142.717 13.6118C143.962 12.3667 145.427 11.7441 147.111 11.7441C148.796 11.7441 150.257 12.3667 151.494 13.6118C152.739 14.8569 153.361 16.3218 153.361 18.0063C153.361 19.6828 152.739 21.1436 151.494 22.3887C150.257 23.6257 148.796 24.2441 147.111 24.2441C145.427 24.2441 143.962 23.6257 142.717 22.3887ZM162.858 14.1245C162.525 14.0431 162.15 14.0024 161.735 14.0024C160.783 14.0024 160.022 14.3117 159.453 14.9302C158.891 15.5405 158.61 16.3991 158.61 17.5059V24H156.108V12.0005H158.61V13.2456L158.769 13.0869C158.842 13.0137 158.997 12.8957 159.233 12.7329C159.469 12.562 159.717 12.4115 159.978 12.2812C160.246 12.1429 160.584 12.0208 160.991 11.915C161.406 11.8011 161.821 11.7441 162.236 11.7441H162.858V14.1245ZM175.725 12.0005L171.098 17.0054L176.103 24H173.344L169.475 18.6289L167.595 20.6309V24H165.104V6.49512H167.595V17.3716L172.722 12.0005H175.725Z" />
    </svg>
)

const MailSvg: FC<IndexProps> = ({color, className}) => (
    <svg className={className} width="17" height="13" viewBox="0 0 17 13" fill={color} xmlns="http://www.w3.org/2000/svg">
        <path d="M17 1.625C17 0.73125 16.235 0 15.3 0H1.7C0.765 0 0 0.73125 0 1.625V11.375C0 12.2688 0.765 13 1.7 13H15.3C16.235 13 17 12.2688 17 11.375V1.625ZM15.3 1.625L8.5 5.6875L1.7 1.625H15.3ZM15.3 11.375H1.7V3.25L7.98713 7.0061C8.30301 7.19481 8.697 7.19481 9.01287 7.0061L15.3 3.25V11.375Z" />
    </svg>
)

const PhoneSvg: FC<IndexProps> = ({color, className}) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="14" fill={color} height="14" viewBox="0 0 14 14">
        <path id="Контур_63759" d="M125.389,114.217l-1.864-1.862a1.2,1.2,0,0,0-1.708,0l-2.007,2a1.208,1.208,0,0,0,0,1.711l1.568,1.57a7.189,7.189,0,0,1-3.738,3.743l-1.568-1.57a1.2,1.2,0,0,0-1.708,0l-2.009,2a1.208,1.208,0,0,0,0,1.711l1.862,1.862a2.1,2.1,0,0,0,1.474.611,1.964,1.964,0,0,0,.336-.028,12.7,12.7,0,0,0,9.945-9.946A2.086,2.086,0,0,0,125.389,114.217Zm-.658,1.6a11.466,11.466,0,0,1-8.913,8.913.823.823,0,0,1-.714-.231l-1.829-1.829,1.939-1.941,2.1,2.1.016.016.378-.14a8.422,8.422,0,0,0,5-5l.14-.378-2.114-2.112,1.939-1.941L124.5,115.1A.819.819,0,0,1,124.731,115.818Z" transform="translate(-112 -112)"/>
    </svg>
)

const SearchSvg: FC<IndexProps> = ({color, className}) => (
    <svg className={className} width="16" height="16" viewBox="0 0 16 16" fill='transparent' xmlns="http://www.w3.org/2000/svg">
        <path d="M7.22223 13.4444C10.6587 13.4444 13.4445 10.6587 13.4445 7.22222C13.4445 3.78578 10.6587 1 7.22223 1C3.78579 1 1 3.78578 1 7.22222C1 10.6587 3.78579 13.4444 7.22223 13.4444Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M15.0001 15L11.6167 11.6166" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
)

const SettingsSvg: FC<IndexProps> = ({color, className}) => (
    <svg className={className} width="16" height="16" viewBox="0 0 16 16" fill={color} xmlns="http://www.w3.org/2000/svg">
        <path d="M14.1071 8.78C14.14 8.524 14.1647 8.264 14.1647 8C14.1647 7.736 14.14 7.476 14.1071 7.22L15.8461 5.896C16.0024 5.776 16.0476 5.56 15.9448 5.384L14.3003 2.612C14.1976 2.44 13.9838 2.368 13.7988 2.44L11.7514 3.244C11.328 2.928 10.8634 2.66 10.3619 2.456L10.0535 0.336C10.0165 0.148 9.84796 0 9.64241 0H6.35348C6.14792 0 5.97937 0.148 5.94648 0.336L5.63814 2.456C5.13658 2.66 4.67202 2.924 4.24857 3.244L2.20121 2.44C2.01621 2.372 1.80243 2.44 1.69965 2.612L0.0551902 5.384C-0.0475887 5.556 -0.00236592 5.772 0.153858 5.896L1.88877 7.22C1.85588 7.476 1.83121 7.736 1.83121 8C1.83121 8.264 1.85588 8.524 1.88877 8.78L0.153858 10.104C-0.00236592 10.224 -0.0475887 10.44 0.0551902 10.616L1.69965 13.388C1.80243 13.56 2.01621 13.632 2.20121 13.56L4.24857 12.756C4.67202 13.072 5.13658 13.34 5.63814 13.544L5.94648 15.664C5.97937 15.852 6.14792 16 6.35348 16H9.64241C9.84796 16 10.0165 15.852 10.0494 15.664L10.3577 13.544C10.8593 13.34 11.3239 13.076 11.7473 12.756L13.7947 13.56C13.9797 13.628 14.1935 13.56 14.2962 13.388L15.9407 10.616C16.0435 10.444 15.9983 10.228 15.842 10.104L14.1071 8.78ZM7.99794 10.8C6.40693 10.8 5.12013 9.548 5.12013 8C5.12013 6.452 6.40693 5.2 7.99794 5.2C9.58896 5.2 10.8758 6.452 10.8758 8C10.8758 9.548 9.58896 10.8 7.99794 10.8Z" />
    </svg>
)

const ShowPassSvg: FC<IndexProps> = ({color, className}) => (
    <svg className={className} width="15" height="13" viewBox="0 0 15 13" fill={color} xmlns="http://www.w3.org/2000/svg">
        <path d="M12.7627 0.212283C12.83 0.144981 12.9099 0.0915941 12.9979 0.0551706C13.0858 0.018747 13.18 0 13.2752 0C13.3704 0 13.4646 0.018747 13.5526 0.0551706C13.6405 0.0915941 13.7204 0.144981 13.7877 0.212283C13.9236 0.348205 14 0.532556 14 0.724779C14 0.917003 13.9236 1.10135 13.7877 1.23728L9.72384 5.30115C9.98095 5.77945 10.0771 6.32786 9.99807 6.8651C9.91903 7.40233 9.66899 7.89981 9.28501 8.28378C8.90104 8.66776 8.40357 8.91779 7.86633 8.99684C7.32909 9.07588 6.78068 8.97972 6.30239 8.72261L2.23851 12.7865C2.1714 12.8541 2.09157 12.9078 2.00361 12.9445C1.91565 12.9811 1.8213 13 1.72601 13C1.63072 13 1.53637 12.9811 1.44841 12.9445C1.36045 12.9078 1.28062 12.8541 1.21352 12.7865C1.14586 12.7194 1.09216 12.6395 1.05551 12.5516C1.01887 12.4636 1 12.3693 1 12.274C1 12.1787 1.01887 12.0844 1.05551 11.9964C1.09216 11.9084 1.14586 11.8286 1.21352 11.7615L12.7627 0.212283ZM7.50062 7.58212C7.78778 7.58212 8.06317 7.46805 8.26623 7.265C8.46928 7.06194 8.58335 6.78654 8.58335 6.49938C8.58335 6.49938 8.58335 6.46329 8.58335 6.44886L7.45731 7.5749L7.50062 7.58212Z" />
        <path d="M7.34307 10.4291C10.5634 10.5076 12.6754 7.6092 13.3344 6.50168C12.8652 5.71674 12.3014 4.99864 11.6568 4.36518L12.7503 3.25766C13.5956 4.09299 14.3197 5.0536 14.8997 6.10894C14.9654 6.22835 15 6.3638 15 6.50168C15 6.63956 14.9654 6.77501 14.8997 6.89441C14.4278 7.75058 11.904 12 7.49286 12H7.30563C6.47616 11.9742 5.65743 11.7961 4.88662 11.4737L6.06991 10.2327C6.48603 10.3475 6.91305 10.4134 7.34307 10.4291ZM0.116004 6.10894C0.595312 5.23706 3.239 0.861965 7.71004 1.00335C8.53951 1.02916 9.35824 1.20728 10.1291 1.52962L8.94576 2.77067C8.52964 2.65586 8.10262 2.58999 7.6726 2.5743C4.45973 2.4879 2.34778 5.39416 1.68124 6.50168C2.162 7.28895 2.73853 8.00716 3.39627 8.63817L2.2654 9.74569C1.40951 8.91255 0.675185 7.95183 0.0860481 6.89441C0.0248113 6.77227 -0.00466073 6.63536 0.000598262 6.49746C0.00585726 6.35957 0.0456609 6.22556 0.116004 6.10894V6.10894Z"/>
    </svg>
)

const UserSvg: FC<IndexProps> = ({color, className}) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill={color} width="14" height="14"
         viewBox="0 0 14 14">
        <path id="Контур_63756"
              d="M149.448,125.425a6.571,6.571,0,0,0-1.5-2.1,7.029,7.029,0,0,0-2.225-1.418l-.022-.009a4.283,4.283,0,0,0,1.914-3.535,4.624,4.624,0,0,0-9.234,0,4.289,4.289,0,0,0,1.914,3.537l-.022.009a6.969,6.969,0,0,0-2.225,1.418,6.6,6.6,0,0,0-1.5,2.1,6.231,6.231,0,0,0-.549,2.429.137.137,0,0,0,.042.1.153.153,0,0,0,.107.042h1.117a.145.145,0,0,0,.149-.137,5.108,5.108,0,0,1,1.635-3.593,5.82,5.82,0,0,1,7.9,0,5.108,5.108,0,0,1,1.635,3.593.144.144,0,0,0,.149.137h1.117a.153.153,0,0,0,.107-.042.137.137,0,0,0,.042-.1A6.247,6.247,0,0,0,149.448,125.425ZM143,121.387a3.278,3.278,0,0,1-2.264-.886,2.907,2.907,0,0,1,0-4.277,3.334,3.334,0,0,1,4.528,0,2.907,2.907,0,0,1,0,4.277A3.278,3.278,0,0,1,143,121.387Z"
              transform="translate(-135.997 -114)"/>
    </svg>
)

const Plus: FC<IndexProps> = ({color, className}) => (
    <svg className={className} width="16" height="16" viewBox="0 0 16 16" fill={color} xmlns="http://www.w3.org/2000/svg">
        <path d="M14.8571 6.85714H9.14286V1.14286C9.14286 0.512 8.63086 0 8 0C7.36914 0 6.85714 0.512 6.85714 1.14286V6.85714H1.14286C0.512 6.85714 0 7.36914 0 8C0 8.63086 0.512 9.14286 1.14286 9.14286H6.85714V14.8571C6.85714 15.488 7.36914 16 8 16C8.63086 16 9.14286 15.488 9.14286 14.8571V9.14286H14.8571C15.488 9.14286 16 8.63086 16 8C16 7.36914 15.488 6.85714 14.8571 6.85714Z"/>
    </svg>
)

const Save: FC<IndexProps> = ({color, className}) => (
    <svg className={className} width="14" height="17" viewBox="0 0 14 17" fill={color} xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M0 1.65083C0 0.739095 0.696443 0 1.55555 0H12.4445C13.3036 0 14 0.739095 14 1.65082V15.3462C14 16.7065 12.5366 17.483 11.5111 16.6668L7 13.0763L2.48889 16.6668C1.46341 17.483 0 16.7065 0 15.3462V1.65083ZM12.4445 2.14607C12.4445 1.87256 12.2355 1.65082 11.9778 1.65082L2.02222 1.65083C1.76449 1.65083 1.55555 1.87256 1.55555 2.14607V14.8509C1.55555 15.055 1.77507 15.1715 1.92889 15.0491L6.06664 11.7557C6.61977 11.3154 7.38023 11.3154 7.93336 11.7557L12.0711 15.0491C12.2249 15.1715 12.4445 15.055 12.4445 14.8509V2.14607Z" />
    </svg>
)

const Comments: FC<IndexProps> = ({color, className}) => (
    <svg className={className} width="15" height="14" viewBox="0 0 15 14" fill={color} xmlns="http://www.w3.org/2000/svg">
        <path d="M0 9.34062V1.55677C0 0.700547 0.675 0 1.5 0H13.5C13.8978 0 14.2794 0.164016 14.5607 0.455967C14.842 0.747918 15 1.14389 15 1.55677V13.2325C14.9979 13.3849 14.9528 13.5333 14.8703 13.6593C14.7877 13.7853 14.6714 13.8834 14.5356 13.9414C14.3999 13.9994 14.2507 14.0148 14.1066 13.9856C13.9625 13.9565 13.8298 13.8841 13.725 13.7774L10.935 10.8974H1.5C1.10218 10.8974 0.720644 10.7334 0.43934 10.4414C0.158035 10.1495 0 9.7535 0 9.34062ZM13.5 1.55677H1.5V9.34062H11.25C11.4478 9.34355 11.6365 9.42748 11.775 9.57414L13.5 11.3566V1.55677Z" />
    </svg>
)

const Reposts: FC<IndexProps> = ({color, className}) => (
    <svg width="20" height="12" viewBox="0 0 20 12" fill={color} xmlns="http://www.w3.org/2000/svg">
        <path d="M5 0C4.46957 0 3.96086 0.210714 3.58579 0.585786C3.21071 0.960859 3 1.46957 3 2V8H0L4 12L8 8H5V2H12L14 0H5ZM15 4H12L16 0L20 4H17V10C17 10.5304 16.7893 11.0391 16.4142 11.4142C16.0391 11.7893 15.5304 12 15 12H6L8 10H15V4Z" />
    </svg>
)

const Share: FC<IndexProps> = ({color, className}) => (
    <svg className={className} width="14" height="14" viewBox="0 0 14 14" fill={color} xmlns="http://www.w3.org/2000/svg">
        <path d="M11.6028 9.12395C10.919 9.12395 10.3039 9.41652 9.86726 9.88347L4.76476 7.34275C4.78231 7.22338 4.79439 7.10255 4.79439 6.9782C4.79439 6.85708 4.78289 6.73888 4.7662 6.62273L9.86122 4.1098C10.2982 4.58055 10.9161 4.87605 11.6028 4.87605C12.9267 4.87605 14 3.78446 14 2.43803C14 1.0913 12.9267 0 11.6028 0C10.2789 0 9.20561 1.0913 9.20561 2.43803C9.20561 2.55915 9.21711 2.67706 9.2338 2.7935L4.13878 5.30643C3.7018 4.83568 3.08417 4.54018 2.3972 4.54018C1.07303 4.54018 0 5.63177 0 6.9782C0 8.32493 1.07303 9.41623 2.3972 9.41623C3.081 9.41623 3.69605 9.12365 4.13274 8.6567L9.23524 11.1974C9.21769 11.3165 9.20561 11.4376 9.20561 11.562C9.20561 12.9087 10.2789 14 11.6028 14C12.9267 14 14 12.9087 14 11.562C14 10.2153 12.9267 9.12395 11.6028 9.12395Z"/>
    </svg>
)

const Play: FC<IndexProps> = ({color, className}) => (
    <svg className={className} width="11" height="12" fill={color} viewBox="0 0 11 12" xmlns="http://www.w3.org/2000/svg">
        <path d="M0.740196 11.2857C0.619642 11.2857 0.504025 11.2374 0.41878 11.1515C0.333535 11.0655 0.285645 10.9489 0.285645 10.8274V0.743964C0.285658 0.664318 0.306254 0.586051 0.345403 0.516876C0.384552 0.447702 0.440902 0.390007 0.508899 0.34948C0.576896 0.308953 0.654193 0.286991 0.733172 0.28576C0.81215 0.284529 0.890083 0.304072 0.95929 0.342461L10.0503 5.38416C10.1216 5.42373 10.181 5.48186 10.2224 5.55248C10.2638 5.6231 10.2856 5.70363 10.2856 5.78567C10.2856 5.8677 10.2638 5.94823 10.2224 6.01885C10.181 6.08948 10.1216 6.1476 10.0503 6.18717L0.95929 11.2289C0.892176 11.2661 0.816811 11.2857 0.740196 11.2857Z" />
    </svg>
)

const Arrow: FC<IndexProps> = ({color, className}) => (
    <svg className={className} width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 12.5L7 7L1 1.5" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
)

const AddFriend: FC<IndexProps> = ({color, className}) => (
    <svg className={className} width="21" height="14" viewBox="0 0 21 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10.0894 7.18127C10.5659 6.80091 10.948 6.33047 11.2099 5.80188C11.4718 5.27328 11.6073 4.69891 11.6073 4.11774C11.6073 3.02567 11.137 1.97833 10.2997 1.20612C9.46251 0.433914 8.32699 9.15527e-05 7.14297 9.15527e-05C5.95895 9.15527e-05 4.82342 0.433914 3.98619 1.20612C3.14896 1.97833 2.67861 3.02567 2.67861 4.11774C2.67861 4.69891 2.81415 5.27328 3.07605 5.80188C3.33795 6.33047 3.72008 6.80091 4.19649 7.18127C2.9466 7.70329 1.88616 8.54629 1.14196 9.60948C0.39777 10.6727 0.00131418 11.9111 0 13.1766C0 13.395 0.09407 13.6044 0.261516 13.7589C0.428961 13.9133 0.656067 14.0001 0.892871 14.0001C1.12967 14.0001 1.35678 13.9133 1.52423 13.7589C1.69167 13.6044 1.78574 13.395 1.78574 13.1766C1.78574 11.8661 2.35016 10.6093 3.35484 9.68262C4.35951 8.75597 5.72214 8.23539 7.14297 8.23539C8.56379 8.23539 9.92642 8.75597 10.9311 9.68262C11.9358 10.6093 12.5002 11.8661 12.5002 13.1766C12.5002 13.395 12.5943 13.6044 12.7617 13.7589C12.9292 13.9133 13.1563 14.0001 13.3931 14.0001C13.6299 14.0001 13.857 13.9133 14.0244 13.7589C14.1919 13.6044 14.2859 13.395 14.2859 13.1766C14.2846 11.9111 13.8882 10.6727 13.144 9.60948C12.3998 8.54629 11.3393 7.70329 10.0894 7.18127ZM7.14297 6.58833C6.61319 6.58833 6.0953 6.44343 5.65481 6.17196C5.21431 5.90049 4.87099 5.51463 4.66825 5.06319C4.46551 4.61175 4.41247 4.115 4.51582 3.63575C4.61918 3.1565 4.87429 2.71629 5.2489 2.37077C5.62351 2.02525 6.10079 1.78995 6.62039 1.69462C7.13999 1.59929 7.67857 1.64822 8.16803 1.83521C8.65748 2.02221 9.07582 2.33887 9.37015 2.74515C9.66448 3.15144 9.82158 3.6291 9.82158 4.11774C9.82158 4.77298 9.53937 5.40138 9.03703 5.86471C8.53469 6.32803 7.85338 6.58833 7.14297 6.58833Z" fill={color} />
        <path d="M17.6187 2.80002V7.46668" stroke={color} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M15.2383 5.13336H20.0003" stroke={color} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
)

const Gallery: FC<IndexProps> = ({color, className}) => (
    <svg className={className} fill={color} width='40' height='40'
         viewBox="0 0 512 512">
		<path d="M494.933,38.4h-409.6c-9.412,0-17.067,7.654-17.067,17.067v17.067H51.2c-9.412,0-17.067,7.654-17.067,17.067v17.067
			H17.067C7.654,106.667,0,114.321,0,123.733v332.8c0,9.412,7.654,17.067,17.067,17.067h409.6c9.412,0,17.067-7.654,17.067-17.067
			v-17.067H460.8c9.412,0,17.067-7.654,17.067-17.067v-17.067h17.067c9.412,0,17.067-7.654,17.067-17.067v-332.8
			C512,46.054,504.346,38.4,494.933,38.4z M17.067,123.733h409.6l0.009,190.635l-44.783-51.183c-3.251-3.721-9.6-3.721-12.851,0
			l-54.067,61.79L167.799,194.159c-3.234-2.884-8.098-2.884-11.332,0L17.067,318.071V123.733z M426.684,431.01v25.523H17.067V340.89
			l145.067-128.947l147.934,131.49c1.69,1.51,3.942,2.193,6.204,2.142c2.278-0.145,4.395-1.186,5.888-2.901l53.308-60.911
			l51.209,58.53l0.008,90.573c0,0.017-0.017,0.043-0.017,0.068S426.684,430.985,426.684,431.01z M460.8,422.4h-17.067V123.733
			c0-9.412-7.654-17.067-17.067-17.067H51.2V89.6h409.6V422.4z M494.933,388.267h-17.067V89.6c0-9.412-7.654-17.067-17.067-17.067
			H85.333V55.467h409.6V388.267z"/>
        <path d="M307.2,174.933c-18.825,0-34.133,15.309-34.133,34.133S288.375,243.2,307.2,243.2s34.133-15.309,34.133-34.133
			S326.025,174.933,307.2,174.933z M307.2,226.133c-9.412,0-17.067-7.654-17.067-17.067c0-9.412,7.654-17.067,17.067-17.067
			s17.067,7.654,17.067,17.067C324.267,218.479,316.612,226.133,307.2,226.133z"/>
    </svg>
)

export {
    CakeSvg,
    EmailSvg,
    EyeSvg,
    GeoSvg,
    LikesSvg,
    LockSvg,
    LogoSvg,
    MailSvg,
    PhoneSvg,
    SearchSvg,
    SettingsSvg,
    ShowPassSvg,
    UserSvg,
    Plus,
    Save,
    Comments,
    Reposts,
    Share,
    Play,
    Arrow,
    AddFriend,
    Gallery,
}

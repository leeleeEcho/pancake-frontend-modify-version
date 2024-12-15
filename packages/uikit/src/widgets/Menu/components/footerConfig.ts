import { ContextApi } from "@pancakeswap/localization";
import { FooterLinkType } from "../../../components/Footer/types";

// export const footerLinks: (t: ContextApi["t"]) => FooterLinkType[] = (t) => [
//   {
//     label: t("Ecosystem"),
//     items: [
//       {
//         label: t("Trade"),
//         href: "https://pancakeswap.finance/swap",
//       },
//       {
//         label: t("Earn"),
//         href: "https://pancakeswap.finance/liquidity/pools",
//       },
//       {
//         label: t("Play"),
//         href: "https://pancakeswap.finance/prediction",
//       },
//       {
//         label: t("veCAKE"),
//         href: "https://pancakeswap.finance/cake-staking",
//       },
//       {
//         label: t("Merchandise"),
//         href: "https://merch.pancakeswap.finance/",
//       },
//     ],
//   },
//   {
//     label: "Business",
//     items: [
//       {
//         label: t("CAKE Incentives"),
//         href: "https://docs.pancakeswap.finance/ecosystem-and-partnerships/business-partnerships/syrup-pools-and-farms",
//       },
//       {
//         label: t("Staking Pools"),
//         href: "https://pancakeswap.finance/pools",
//       },
//       {
//         label: t("Token Launches"),
//         href: "https://docs.pancakeswap.finance/ecosystem-and-partnerships/business-partnerships/initial-farm-offerings-ifos",
//       },
//       {
//         label: t("Brand Assets"),
//         href: "https://docs.pancakeswap.finance/ecosystem-and-partnerships/brand",
//       },
//     ],
//   },
//   {
//     label: t("Developers"),
//     items: [
//       {
//         label: t("Contributing"),
//         href: "https://docs.pancakeswap.finance/developers/contributing",
//       },
//       {
//         label: t("Github"),
//         href: "https://github.com/pancakeswap",
//       },
//       {
//         label: t("Bug Bounty"),
//         href: "https://docs.pancakeswap.finance/developers/bug-bounty",
//       },
//       {
//         label: t("V4"),
//         href: "https://pancakeswap.finance/v4",
//       },
//     ],
//   },
//   {
//     label: t("Support"),
//     items: [
//       {
//         label: t("Get Help"),
//         href: "https://docs.pancakeswap.finance/contact-us/customer-support",
//       },
//       {
//         label: t("Troubleshooting"),
//         href: "https://docs.pancakeswap.finance/readme/help/troubleshooting",
//       },
//       {
//         label: t("Documentation"),
//         href: "https://docs.pancakeswap.finance/",
//       },
//       {
//         label: t("Audits"),
//         href: "https://docs.pancakeswap.finance/readme/audits",
//       },
//       {
//         label: t("Legacy products"),
//         href: "https://docs.pancakeswap.finance/products/legacy-products",
//       },
//     ],
//   },
//   {
//     label: t("About"),
//     items: [
//       {
//         label: t("Tokenomics"),
//         href: "https://docs.pancakeswap.finance/governance-and-tokenomics/cake-tokenomics",
//       },
//       {
//         label: t("CAKE Emission Projection"),
//         href: "https://analytics.pancakeswap.finance/",
//       },
//       {
//         label: t("Blog"),
//         href: "https://blog.pancakeswap.finance/",
//       },
//       {
//         label: t("Careers"),
//         href: "https://docs.pancakeswap.finance/team/become-a-chef",
//       },
//       {
//         label: t("Terms Of Service"),
//         href: "https://pancakeswap.finance/terms-of-service",
//       },
//     ],
//   },
// ];

export const footerLinks: (t: ContextApi["t"]) => FooterLinkType[] = (t) => [
  {
    label: "代币经济",
    items: [
      {
        label: "Swap",
        href: "#",
      },
      {
        label: "Liquidity",
        href: "#",
      },
      {
        label: "NFT",
        href: "#",
      },
    ],
  },
  {
    label: "开发者",
    items: [
      {
        label: "贡献",
        href: "#",
      },
      {
        label: "Github",
        href: "#",
      },
      {
        label: "漏洞反馈",
        href: "#",
      },
    ],
  },
  {
    label: "系统支持",
    items: [
      {
        label: "Contact",
        href: "#",
      },
      {
        label: "Documentation",
        href: "#",
      },
    ],
  },
  {
    label: "About Us",
    items: [
      {
        label: "Terms Of Service",
        href: "#",
      },
      {
        label: "Blog",
        href: "#",
      },
      {
        label: "Brand Assets",
        href: "#",
      },
      {
        label: "Careers",
        href: "#",
      },
    ],
  },
];

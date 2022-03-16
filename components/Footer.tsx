import { Image, useColorMode } from "@chakra-ui/react";

const Footer = () => {
  const { colorMode } = useColorMode();
  return (
    <a
      href="https://vercel.com/hkerstanley/home-page"
      target="_blank"
      rel="noopener noreferrer"
    >
      Powered by{" "}
      <Image
        src={`vercel-logotype-${colorMode}.svg`}
        alt="Vercel Logo"
        width={72}
        height={16}
      />
    </a>
  );
};

export default Footer;

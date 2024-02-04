import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useMediaQuery } from 'react-responsive';
import { HeaderContainer, LogoContainer, LogoText, NavbarContainer, NavbarItem } from './styles';

export default function Header() {

  //tratando do tempo para logo retrair
  const [hideLogoText, setHideLogoText] = useState(false);
  let timeout: NodeJS.Timer;

  useEffect(()=>{
    timeout = setInterval(()=>setHideLogoText(true), 5000);
    return (()=>{
      clearTimeout(timeout);
    });
  }, []);

  const isLargeSize = useMediaQuery({
    query: '(min-width: 720px)'
  });

  return (
    <HeaderContainer $isLargeSize={isLargeSize}>

      <Link href="/">
        <LogoContainer $hide={hideLogoText}>
          <Image src={"/images/white-pokeball.svg"} alt={"white pokeball"} width={36}  height={36}/>
          <LogoText $hide={hideLogoText} id="logo-text">Centro Pokémon</LogoText>
        </LogoContainer>
      </Link>

      <NavbarContainer>
        <Link href="/about">
          <NavbarItem $active={false}>
            Quem Somos
          </NavbarItem>
        </Link>
        <Link href="/schedule">
          <NavbarItem $active={true}>
            Agendar Consulta
          </NavbarItem>
        </Link>
      </NavbarContainer>

    </HeaderContainer>
  )
}

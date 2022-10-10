import React, { ReactNode, useState } from 'react';
import {
  ActionIcon, 
  Anchor,
  BackgroundImage,
  Box,
  Burger,
  Header,
  MediaQuery,
  Navbar,
  useMantineColorScheme
} from "@mantine/core";
import { useViewportSize } from '@mantine/hooks';
import { MoonStars, Sun } from 'tabler-icons-react';
import Image from 'next/image';
import { useRouter } from 'next/router';

import { useStyles } from './mainLayout.styles';
import logo from '../../assets/logo-2.png';
import { useAuthContext } from '../../features/authentication';

type Props = {
  children: ReactNode;
}

const MainLayout = ({ children }: Props) => {
  const { auth, userMe } = useAuthContext();
  console.log("auth", auth)
  console.log(userMe)
  const { classes } = useStyles();
  const [opened, setOpened] = useState(false);

  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === 'dark';

  const router = useRouter();
  const { width } = useViewportSize();

  return (
    <Box className={classes.bodyBackground}>
      <BackgroundImage
        src={width >= 1096 ? "/blob-scene.svg" : ""}
        radius="sm"
        component="div"
        className={classes.wrapper}
      >
        <Header height={width <= 992 ? 70 : 120} className={`${classes.headerBackground}`} withBorder={width <= 992 ? true : false} >
          <MediaQuery largerThan="md" styles={{ display: "none" }}>
            <div  className={classes.burger}>
              <Anchor href="/" className={classes.navitem}>
                Luddoc Skills For Life
              </Anchor>
                {/* <ActionIcon
                variant="default"
                color={dark ? 'gray' : 'dark'}
                onClick={() => toggleColorScheme()}
                title={dark ? 'Light Mode' : 'Dark Mode'}  
              >
                  {dark ? <Sun size={18} /> : <MoonStars size={18} />}
              </ActionIcon> */}
              <Burger
                opened={opened}
                onClick={() => setOpened((o) => !o)}
                size="sm"
                mr="xl"        
              />
            </div>
          </MediaQuery>
          <div className={classes.header}>
            <div className={classes.logo}>
              <Anchor href="/" className={classes.navitem}>
                <Image 
                  src={logo}
                  width={120}
                  height={120}
                  alt='logo'
                />
               
              </Anchor>
            </div>
            <div className={classes.links}>
              <Anchor className={`${classes.navitem} ${router.pathname === "/" ? classes.active : "" }`} href="/">Home</Anchor>
              <Anchor className={`${classes.navitem} ${router.pathname === "/about" ? classes.active : "" }`} href="/about">About</Anchor>
              <Anchor className={`${classes.navitem} ${router.pathname.includes("/courses") ? classes.active : "" }`} href="/courses">Courses</Anchor>
              <Anchor className={`${classes.navitem} ${router.pathname === "/faq" ? classes.active : "" }`} href="/faq">FAQ</Anchor>
              <Anchor className={`${classes.navitem} ${router.pathname === "/contact" ? classes.active : "" }`} href="/contact">Contact Us</Anchor>
              <Anchor className={`${classes.navitem}`} href="https://mygrannyslove.com/" target="_blank">Granny's Love</Anchor>
              {auth ? <Anchor  className={classes.navitem} href={userMe.role === "student" ? "/students" : "/admin"}>Dashboard</Anchor> :
                <>
                   <Anchor className={`${classes.navitem} ${classes.signin} ${router.pathname === "/auth/sign-in" ? classes.activeSignIn : "" }`} href="/auth/sign-in">Sign In</Anchor>
                   <Anchor className={`${classes.navitem} ${classes.signup} ${router.pathname === "/auth/sign-up" ? classes.activeSignUp : "" }`} href="/auth/sign-up">Sign Up</Anchor>
                </>
              }
              {/* <ActionIcon
                variant="default"
                color={dark ? 'gray' : 'dark'}
                onClick={() => toggleColorScheme()}
                title={dark ? 'Light Mode' : 'Dark Mode'}
                sx = {{margin: "0 15px"}}
              >
                {dark ? <Sun size={18} /> : <MoonStars size={18} />}
              </ActionIcon> */}
            </div>
          </div>
        </Header>

        <Navbar
          className={classes.navbar}
          width={{ base: "100%", sm: 0 }}
          hidden={!opened}
        >
          <Anchor className={`${classes.navitem} ${router.pathname === "/" ? classes.active : "" }`} href="/">Home</Anchor>
          <Anchor className={`${classes.navitem} ${router.pathname === "/about" ? classes.active : "" }`} href="/about">About</Anchor>
          <Anchor className={`${classes.navitem} ${router.pathname.includes("/courses") ? classes.active : "" }`} href="/courses">Courses</Anchor>
          <Anchor className={`${classes.navitem} ${router.pathname === "/faq" ? classes.active : "" }`} href="/faq">FAQ</Anchor>
          <Anchor className={`${classes.navitem} ${router.pathname === "/contact" ? classes.active : "" }`} href="/contact">Contact Us</Anchor>
          <Anchor className={`${classes.navitem}`} href="https://mygrannyslove.com/" target="_blank">Granny's Love</Anchor>
          <Anchor className={`${classes.navitem} ${classes.signin} ${router.pathname === "/auth/sign-in" ? classes.activeSignIn : "" } `} href="/auth/sign-in">Sign In</Anchor>
          <Anchor className={`${classes.navitem} ${classes.signup} ${router.pathname === "/auth/sign-up" ? classes.activeSignUp : "" }`} href="/auth/sign-up">Sign Up</Anchor>
        </Navbar>
      
      
        {children}

    </BackgroundImage>
    </Box>
  );
}

export default MainLayout;


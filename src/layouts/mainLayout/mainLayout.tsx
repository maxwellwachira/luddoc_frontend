import React, { ReactNode, useState } from 'react';
import {
  ActionIcon, 
  Anchor,
  AppShell,
  Burger,
  Header,
  MediaQuery,
  Navbar,
  useMantineColorScheme
} from "@mantine/core";

import { MoonStars, Sun } from 'tabler-icons-react';

import Image from 'next/image';
import { useRouter } from 'next/router';
import { useStyles } from './mainLayout.styles';

type Props = {
  children: ReactNode;
}

const MainLayout = ({ children }: Props) => {
  const { classes } = useStyles();
  const [opened, setOpened] = useState(false);

  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === 'dark';

  const router = useRouter();
 

  return (
    <AppShell
      className={classes.bodyBackground}
      fixed
      navbarOffsetBreakpoint="sm"
      header={
        <Header height={60} className={classes.headerBackground}>
          <MediaQuery largerThan="sm" styles={{ display: "none" }}>
            <div  className={classes.burger}>
              <Anchor href="/">
                <Image 
                  src="/logo.svg"
                  width={100}
                  height={50}
                  alt='logo'
                />
              </Anchor>
                <ActionIcon
                variant="default"
                color={dark ? 'gray' : 'dark'}
                onClick={() => toggleColorScheme()}
                title={dark ? 'Light Mode' : 'Dark Mode'}  
              >
                  {dark ? <Sun size={18} /> : <MoonStars size={18} />}
              </ActionIcon>
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
              <Anchor href="/">
                <Image 
                  src="/logo.svg"
                  width={100}
                  height={60}
                  alt='logo'
                />
              </Anchor>
            </div>
            <div className={classes.links}>
              <Anchor className={`${classes.navitem} ${router.pathname === "/" ? classes.active : "" }`} href="/">Home</Anchor>
              <Anchor className={`${classes.navitem} ${router.pathname === "/courses" ? classes.active : "" }`} href="/courses">Courses</Anchor>
              <Anchor className={`${classes.navitem} ${router.pathname === "/pricing" ? classes.active : "" }`} href="/pricing">Pricing</Anchor>
              <Anchor className={`${classes.navitem} ${router.pathname === "/sign-in" ? classes.active : "" } ${classes.signin}`} href="/sign-in">Sign In</Anchor>
              <Anchor className={`${classes.navitem} ${router.pathname === "/sign-up" ? classes.active : "" } ${classes.signup}`} href="/sign-up">Sign Up</Anchor>
              <ActionIcon
                variant="default"
                color={dark ? 'gray' : 'dark'}
                onClick={() => toggleColorScheme()}
                title={dark ? 'Light Mode' : 'Dark Mode'}
                sx = {{margin: "0 15px"}}
              >
                {dark ? <Sun size={18} /> : <MoonStars size={18} />}
              </ActionIcon>
            </div>
          </div>
        </Header>
      }
      navbar={
        <Navbar
          className={classes.navbar}
          width={{ base: "100%", sm: 0 }}
          hidden={!opened}
        >
          <Anchor className={`${classes.navitem} ${router.pathname === "/" ? classes.active : "" }`} href="/">Home</Anchor>
          <Anchor className={`${classes.navitem} ${router.pathname === "/courses" ? classes.active : "" }`} href="/courses">Courses</Anchor>
          <Anchor className={`${classes.navitem} ${router.pathname === "/pricing" ? classes.active : "" }`} href="/pricing">Pricing</Anchor>
          <Anchor className={`${classes.navitem} ${router.pathname === "/sign-in" ? classes.active : "" }`} href="/sign-in">Sign In</Anchor>
          <Anchor className={`${classes.navitem} ${router.pathname === "/sign-up" ? classes.active : "" } `} href="/sign-up">sign Up</Anchor>
        </Navbar>
      }
    >
        {children}

    </AppShell>
  );
}

export default MainLayout;
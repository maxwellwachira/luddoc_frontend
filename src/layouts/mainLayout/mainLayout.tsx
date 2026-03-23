import React, { ReactNode, useState } from 'react';
import {
  Anchor,
  Box,
  Burger,
  Container,
  Header,
  MediaQuery,
  Navbar,
  useMantineColorScheme
} from "@mantine/core";
import { useViewportSize } from '@mantine/hooks';
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

  const { classes } = useStyles();
  const [opened, setOpened] = useState(false);

  const { colorScheme } = useMantineColorScheme();

  const router = useRouter();
  const { width } = useViewportSize();

  return (
    <Box className={classes.bodyBackground}>
      <Box className={classes.wrapper}>
        <Header height={width <= 992 ? 70 : 80} className={classes.headerBackground} withBorder={false}>
          <Container size="xl">
            <MediaQuery largerThan="md" styles={{ display: "none" }}>
              <div className={classes.burger}>
                <Anchor href="/" className={classes.burgerText}>
                  Luddoc Skills For Life
                </Anchor>
                <Burger
                  opened={opened}
                  onClick={() => setOpened((o) => !o)}
                  size="sm"
                  color="#CEA028"
                />
              </div>
            </MediaQuery>
            <div className={classes.header}>
              <div className={classes.logo}>
                <Anchor href="/">
                  <Image
                    src={logo}
                    width={60}
                    height={55}
                    alt='Luddoc Skills For Life'
                  />
                </Anchor>
              </div>
              <div className={classes.links}>
                <Anchor className={`${classes.navitem} ${router.pathname === "/" ? classes.active : ""}`} href="/">Home</Anchor>
                <Anchor className={`${classes.navitem} ${router.pathname === "/about" ? classes.active : ""}`} href="/about">About</Anchor>
                <Anchor className={`${classes.navitem} ${router.pathname === "/faq" ? classes.active : ""}`} href="/faq">FAQ</Anchor>
                <Anchor className={`${classes.navitem} ${router.pathname === "/contact" ? classes.active : ""}`} href="/contact">Contact Us</Anchor>
                {auth ? (
                  <Anchor className={classes.navitem} href={userMe.role === "student" ? "/students" : "/admin"}>Dashboard</Anchor>
                ) : (
                  <>
                    <Anchor className={`${classes.navitem} ${classes.signin} ${router.pathname === "/auth/sign-in" ? classes.activeSignIn : ""}`} href="/auth/sign-in">Sign In</Anchor>
                    <Anchor className={`${classes.navitem} ${classes.signup} ${router.pathname === "/auth/sign-up" ? classes.activeSignUp : ""}`} href="/auth/sign-up">Sign Up</Anchor>
                  </>
                )}
              </div>
            </div>
          </Container>
        </Header>

        <Navbar
          className={classes.navbar}
          width={{ base: "100%", sm: 0 }}
          hidden={!opened}
        >
          <Anchor className={`${classes.navitem} ${router.pathname === "/" ? classes.active : ""}`} href="/">Home</Anchor>
          <Anchor className={`${classes.navitem} ${router.pathname === "/about" ? classes.active : ""}`} href="/about">About</Anchor>
          <Anchor className={`${classes.navitem} ${router.pathname === "/faq" ? classes.active : ""}`} href="/faq">FAQ</Anchor>
          <Anchor className={`${classes.navitem} ${router.pathname === "/contact" ? classes.active : ""}`} href="/contact">Contact Us</Anchor>
          <Anchor className={`${classes.navitem} ${classes.signin} ${router.pathname === "/auth/sign-in" ? classes.activeSignIn : ""}`} href="/auth/sign-in">Sign In</Anchor>
          <Anchor className={`${classes.navitem} ${classes.signup} ${router.pathname === "/auth/sign-up" ? classes.activeSignUp : ""}`} href="/auth/sign-up">Sign Up</Anchor>
        </Navbar>

        {children}
      </Box>
    </Box>
  );
}

export default MainLayout;

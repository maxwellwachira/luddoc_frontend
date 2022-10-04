import { useState, ReactNode } from 'react';
import { Burger, Header, Navbar, Group, Code, MediaQuery, ScrollArea, Text, AppShell } from '@mantine/core';
import {
  IconGauge,
  IconMessage,
  IconSettings,
  IconCoin,
  IconSchool,
  IconUsers,
  IconCertificate,
} from '@tabler/icons';
import { useRouter } from 'next/router';

import { UserButton } from '../../components/userButton/userButton';
import { LinksGroup } from '../../components/navbarLinkGroups/navbarLinkGroups';
import { useStyles } from './adminLayout.styles';
import { colors } from '../../constants/colors';



type Props = {
  children: ReactNode;
}

export function AdminLayout({children}: Props ) {
  const router = useRouter();
  const [opened, setOpened] = useState(false);
  const { classes } = useStyles();


  const data = [
    { 
      label: 'Dashboard', 
      icon: IconGauge, 
      link: '/admin', 
      active: router.pathname === '/admin' ? true : false
    },
    {
      label: 'Courses',
      icon: IconCertificate,
      index:1,
      active: router.pathname === '/admin/courses' ? true : router.pathname === '/admin/categories' ? true : false,
      initiallyOpened: router.pathname === '/admin/courses' ? true : router.pathname === '/admin/categories' ? true : false,
      links: [
        { label: 'Categories', link: '/admin/categories', active: router.pathname === '/admin/categories' ? true : false, },
        { label: 'All Courses', link: '/admin/courses', active: router.pathname === '/admin/courses' ? true : false, },
      ],
    },
    {
      label: 'Students',
      icon: IconUsers,
      link: '/admin/students',
      active: router.pathname === '/admin/students' ? true : false,
    },
    { 
      label: 'Tutors', 
      icon: IconSchool, 
      link: '/admin/tutors', 
      active: router.pathname === '/admin/tutors' ? true : false,
    },
    { 
      label: 'Payments', 
      icon: IconCoin, 
      link: '/admin/payments', 
      active: router.pathname === '/admin/payments' ? true : false,
    },
    {
      label: 'Messaging',
      icon: IconMessage,
      active: router.pathname === '/admin/send-sms' ? true : router.pathname === '/admin/sent-sms' ? true : false,
      initiallyOpened: router.pathname === '/admin/send-sms' ? true : router.pathname === '/admin/sent-sms' ? true : false,
      links: [
        { label: 'Send SMS', link: '/admin/send-sms', active: router.pathname === '/admin/send-sms' ? true : false, },
        { label: 'Sent SMS', link: '/admin/sent-sms', active: router.pathname === '/admin/sent-sms' ? true : false, },
      ],
    },
    { 
      label: 'Settings', 
      icon: IconSettings, 
      link: '/admin/settings',  
      active: router.pathname === '/admin/settings' ? true : false,
    },
  ];

  const links = data.map((item) => <LinksGroup {...item} key={item.label}/>);

  return (
      <AppShell
        header={
         <Header height={50} p="md" style={{background: 'black'}}>
          <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
            <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
              <Burger
                opened={opened}
                onClick={() => setOpened((o) => !o)}
                size="sm"
                color={`${colors.secondaryColor}`}
                mr="xl"
              />
            </MediaQuery>

            <Group position="apart" className={classes.header}>
                <Text weight={600} size={25}>Luddoc</Text>
                <Code sx={{ fontWeight: 700 }}>S.F.L</Code>
            </Group>
          </div>
        </Header>
        }
        navbar = {
          <Navbar height={`cal(100vh - 50px)`} hiddenBreakpoint="sm" hidden={!opened} width={{ sm: 200, lg: 300 }} p="sm" className={classes.navbar} >
            <Navbar.Section grow className={classes.links} component={ScrollArea}>
                <div className={classes.linksInner}>{links}</div>
            </Navbar.Section>

            <Navbar.Section className={classes.footer}>
                    <UserButton
                    initials='JD'
                    name="John Doe"
                    email="user@gmail.com"
                />
            </Navbar.Section>   
        </Navbar>
        }
      >
        {children}
      </AppShell>
    
  );
}


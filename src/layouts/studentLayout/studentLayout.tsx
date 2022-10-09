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
import { useStyles } from './studentLayout.styles';
import { colors } from '../../constants/colors';

type Props = {
  children: ReactNode;
}

export function StudentLayout({children}: Props ) {
  const router = useRouter();
  const [opened, setOpened] = useState(false);
  const { classes } = useStyles();


  const data = [
    { 
      label: 'Dashboard', 
      icon: IconGauge, 
      link: '/students', 
      active: router.pathname === '/students' ? true : false
    },
    {
      label: 'My Courses',
      icon: IconCertificate,
      index:1,
      link: '/students/courses',
      active: router.pathname === '/students/courses' ? true : false,
     
    },
    {
      label: 'Live Session',
      icon: IconUsers,
      link: '/students/live-session',
      active: router.pathname === '/students/live-session' ? true : false,
    },
    { 
      label: 'Certificates', 
      icon: IconSchool, 
      link: '/students/certificates', 
      active: router.pathname === '/students/certificates' ? true : false,
    },
  
    { 
      label: 'Settings', 
      icon: IconSettings, 
      link: '/students/settings',  
      active: router.pathname === '/students/settings' ? true : false,
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


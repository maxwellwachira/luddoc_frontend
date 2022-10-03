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

import { UserButton } from '../../components/userButton/userButton';
import { LinksGroup } from '../../components/navbarLinkGroups/navbarLinkGroups';
import { useStyles } from './adminLayout.styles';
import { colors } from '../../constants/colors';

const data = [
  { label: 'Dashboard', icon: IconGauge, link: '/', index: 0},
  {
    label: 'Courses',
    icon: IconCertificate,
    index:1,
    links: [
      { label: 'Categories', link: 'categories' },
      { label: 'All Courses', link: 'courses' },
    ],
  },
  {
    label: 'Students',
    icon: IconUsers,
    link: 'admin/students',
    index: 2
  },
  { label: 'Tutors', icon: IconSchool, link: 'tutors', index: 3},
  { label: 'Payments', icon: IconCoin, link: 'payments', index: 4},
  {
    label: 'Messaging',
    icon: IconMessage,
    index: 5,
    links: [
      { label: 'Send SMS', link: 'send-sms' },
      { label: 'Sent SMS', link: 'sent-sms' },
    ],
  },
  { label: 'Settings', icon: IconSettings, link: 'settings',  index: 6 },
];

type Props = {
  children: ReactNode;
}

export function AdminLayout({children}: Props ) {
  const [opened, setOpened] = useState(false);
  const { classes } = useStyles();
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
          <Navbar height={800} hiddenBreakpoint="sm" hidden={!opened} width={{ sm: 200, lg: 300 }} p="sm" className={classes.navbar} >
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


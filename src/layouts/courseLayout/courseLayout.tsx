import { useState, ReactNode } from 'react';
import { Burger, Header, Navbar, Group, Code, MediaQuery, ScrollArea, Text, AppShell, UnstyledButton, Box, Collapse, ChevronIcon } from '@mantine/core';
import { useRouter } from 'next/router';
import { TablerIcon, IconChevronLeft, IconChevronRight } from '@tabler/icons';

import { UserButton } from '../../components/userButton/userButton';
import { useStyles } from './courseLayout.styles';
import { colors } from '../../constants/colors';
import { useAuthContext } from '../../features/authentication';
import PageLoader from '../../components/pageLoader/pageLoader';

interface LinksGroupProps {
  label: string;
  initiallyOpened?: boolean;
  active?: boolean;
  links: { label: string; link: string, disabled: boolean, topicId: string, lessonId: string; courseId: string, content: string; active: boolean, onClick: () => void }[];
}

type Props = {
  children: ReactNode;
  data: LinksGroupProps[] | null;
}

const GetLinks = (data: LinksGroupProps | null) => {
  const router = useRouter();
  const { classes, theme } = useStyles();


  if (!data) {
    return (
      <PageLoader />
    )
  }
  const hasLinks = Array.isArray(data.links);
  const [opened, setOpened] = useState(data.initiallyOpened || false);

  const ChevronIcon = theme.dir === 'ltr' ? IconChevronRight : IconChevronLeft;

  const onClick = () => {
    setOpened((o) => !o);
  }

  const items = (hasLinks ? data.links : []).map((arrlink) => (
    <UnstyledButton
      // component='a'
      className={`${classes.link} ${arrlink.active ? classes.activeGroupLink : ""}`}
      key={arrlink.lessonId}
      // href={`/learn/${arrlink.courseId}${arrlink.link}`}
      onClick={() => arrlink.onClick()}
      disabled={arrlink.disabled}
      style = {{cursor: arrlink.disabled ? "not-allowed" : "pointer"}}
    >
      {arrlink.label}
    </UnstyledButton>
  ));

  return (
    <>
      <UnstyledButton onClick={onClick} className={`${classes.control} ${data.active ? classes.active : ""}`} >
        <Group position="apart" spacing={0}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            {hasLinks ?
              (<Box ml="md">{data.label}</Box>) : ""}

          </Box>
          {hasLinks && (
            <ChevronIcon
              className={classes.chevron}
              size={14}
              stroke={1.5}
              style={{
                transform: opened ? `rotate(${theme.dir === 'rtl' ? -90 : 90}deg)` : 'none',
              }}
            />
          )}
        </Group>
      </UnstyledButton>
      {hasLinks ? <Collapse in={opened}>{items}</Collapse> : null}
    </>
  );
}



export function CourseLayout({ children, data }: Props,) {
  const router = useRouter();
  const [opened, setOpened] = useState(false);
  const { classes, theme } = useStyles();
  const { userMe } = useAuthContext();

  const getInitials = (nameString: string) => {
    const fullName = nameString.split(' ');
    const initials = fullName.shift()!.charAt(0) + fullName.pop()!.charAt(0);
    return initials.toUpperCase();
  }



  const navlinks = data?.map((item: any) => <GetLinks {...item} key={item.topicId} />);

  return (
    <AppShell
      header={
        <Header height={50} p="md" style={{ background: 'black' }}>
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
      navbar={
        <Navbar height={`cal(100vh - 50px)`} hiddenBreakpoint="sm" hidden={!opened} width={{ sm: 300, lg: 410 }} p="sm" className={classes.navbar} >
          <Navbar.Section grow className={classes.links} component={ScrollArea}>
            <div className={classes.linksInner}>{navlinks}</div>
          </Navbar.Section>

          <Navbar.Section className={classes.footer}>
            <UserButton
              initials={getInitials(`${userMe.firstName} ${userMe.lastName}`)}
              name={`${userMe.firstName} ${userMe.lastName}`}
              email={`${userMe.email}`}
            />
          </Navbar.Section>
        </Navbar>
      }
    >
      {children}
    </AppShell>

  );
}


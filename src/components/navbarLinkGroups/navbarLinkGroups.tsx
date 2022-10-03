import { useState } from 'react';
import { Group, Box, Collapse, ThemeIcon, Text, UnstyledButton } from '@mantine/core';
import { TablerIcon, IconCalendarStats, IconChevronLeft, IconChevronRight } from '@tabler/icons';

import { useStyles } from './navbarLinkGroups.styles';
import { colors } from '../../constants/colors';

interface LinksGroupProps {
  icon: TablerIcon;
  label: string;
  initiallyOpened?: boolean;
  link?: string;
  links?: { label: string; link: string }[];
  index: number;
}


export function LinksGroup({ icon: Icon, label, initiallyOpened, link, links, index }: LinksGroupProps) {
  const { classes, theme } = useStyles();
  const hasLinks = Array.isArray(links);
  const [opened, setOpened] = useState(initiallyOpened || false);
  const [active, setActive] = useState(0);
  const ChevronIcon = theme.dir === 'ltr' ? IconChevronRight : IconChevronLeft;
  const items = (hasLinks ? links : []).map((arrlink) => (
    <Text<'a'>
      component="a"
      className={classes.link}
      href={arrlink.link}
      key={arrlink.label}
      onClick={(event) => event.preventDefault()}
    >
      {arrlink.label}
    </Text>
  ));

  const onClick = () => {
    setOpened((o) => !o);
    if(!hasLinks){
      setActive(index)
    }
  }

  return (
    <>
      <UnstyledButton onClick={onClick} className={`${classes.control} ${active === index ? classes.active : ""}`}>
        <Group position="apart" spacing={0}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <ThemeIcon variant="light" size={30} color={`${colors.secondaryColorLight}`}> 
              <Icon size={18} color={`${colors.secondaryColor}`}/>
            </ThemeIcon>
            {hasLinks ? 
              (<Box ml="md">{label}</Box>) :
              (<Text<'a'>
                component="a"
                href={link}
                key={label}
                ml="md"
               >
                {label}
               </Text>
              )
            }
            
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


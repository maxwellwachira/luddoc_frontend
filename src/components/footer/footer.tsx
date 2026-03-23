import { Text, Container, ActionIcon, Group } from '@mantine/core';
import { IconBrandYoutube, IconBrandInstagram, IconBrandFacebook, IconBrandLinkedin } from '@tabler/icons';
import Image from 'next/image';

import { useStyles } from './footer.styles';
import logo from '../../assets/logo.png';


interface FooterLinksProps {
  data: {
    title: string;
    links: { label: string; link: string }[];
  }[];
}

function FooterLinks({ data }: FooterLinksProps) {
  const { classes } = useStyles();

  const groups = data.map((group) => {
    const links = group.links.map((link, index) => (
      <Text<'a'>
        key={index}
        className={classes.link}
        component="a"
        href={link.link}
      >
        {link.label}
      </Text>
    ));

    return (
      <div className={classes.wrapper} key={group.title}>
        <Text className={classes.title}>{group.title}</Text>
        {links}
      </div>
    );
  });

  return (
    <footer className={classes.footer}>
      <Container size="xl" className={classes.inner}>
        <div className={classes.logo}>
          <div className={classes.logoImage}>
            <Image
              src={logo}
              width={80}
              height={90}
              alt='Luddoc Skills For Life'
            />
          </div>
          <Text className={classes.description}>
            Accredited training that transforms lives. Don't wait, enrol today.
          </Text>
        </div>
        <div className={classes.groups}>{groups}</div>
      </Container>
      <Container size="xl" className={classes.afterFooter}>
        <Text className={classes.copyright}>
          © {new Date().getFullYear()} Luddoc Skills For Life. All rights reserved.
        </Text>

        <Group spacing={0} className={classes.social} position="right" noWrap>
          <ActionIcon
            component='a'
            href='https://www.facebook.com/mygrannyslove?mibextid=ZbWKwL'
            size="lg"
          >
            <IconBrandFacebook size={20} stroke={1.5} />
          </ActionIcon>
          <ActionIcon
            component='a'
            href='https://www.youtube.com/@GrannysLoveLtd'
            size="lg"
          >
            <IconBrandYoutube size={20} stroke={1.5} />
          </ActionIcon>
          <ActionIcon
            component='a'
            href='https://www.instagram.com/mygrannyslove/'
            size="lg"
          >
            <IconBrandInstagram size={20} stroke={1.5} />
          </ActionIcon>
          <ActionIcon
            component='a'
            href='https://www.linkedin.com/company/grannyslovelimited/'
            size="lg"
          >
            <IconBrandLinkedin size={20} stroke={1.5} />
          </ActionIcon>
        </Group>
      </Container>
    </footer>
  );
}

export default FooterLinks;

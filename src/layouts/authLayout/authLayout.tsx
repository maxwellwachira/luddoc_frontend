import React from 'react';
import { Text } from '@mantine/core';
import Image from 'next/image';
import { IconCertificate, IconClock, IconShieldCheck } from '@tabler/icons';

import { useStyles } from './authLayout.styles';
import { colors } from '../../constants/colors';
import logo from '../../assets/nobglogo.png';

interface AuthLayoutProps {
  children: React.ReactNode;
}

const features = [
  { icon: IconCertificate, text: 'Accredited courses & certifications' },
  { icon: IconClock, text: 'Self-paced, flexible learning' },
  { icon: IconShieldCheck, text: 'Expert instructors & support' },
];

const AuthLayout = ({ children }: AuthLayoutProps) => {
  const { classes } = useStyles();

  return (
    <div className={classes.root}>
      {/* ── Left Branding Panel ── */}
      <div className={classes.brandPanel}>
        <div className={classes.brandContent}>
          <div className={classes.brandLogo}>
            <Image src={logo} height={70} width={70} alt="Luddoc Logo" />
          </div>
          <Text className={classes.brandTitle}>
            Luddoc <span className={classes.brandGold}>Skills</span><br />
            For Life
          </Text>
          <Text className={classes.brandSubtext}>
            A modern training facility empowering students through accredited, expert-led courses.
          </Text>
          <div className={classes.brandDivider} />
          <div className={classes.brandFeatures}>
            {features.map((f) => (
              <div className={classes.brandFeature} key={f.text}>
                <div className={classes.brandFeatureIcon}>
                  <f.icon size={16} color={colors.secondaryColor} stroke={1.8} />
                </div>
                <span>{f.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Right Form Panel ── */}
      <div className={classes.formPanel}>
        <div className={classes.formWrapper}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;

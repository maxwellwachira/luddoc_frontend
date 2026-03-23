import React from 'react';
import { Anchor, Text } from '@mantine/core';
import Image from 'next/image';
import { IconArrowLeft, IconCertificate, IconClock, IconShieldCheck } from '@tabler/icons';

import { useStyles } from './authLayout.styles';
import { colors } from '../../constants/colors';
import logo from '../../assets/nobglogo.png';

interface AuthLayoutProps {
  children: React.ReactNode;
}

const features = [
  { icon: IconCertificate, text: 'Nationally & internationally accredited' },
  { icon: IconClock, text: 'Learn at your own pace, on your schedule' },
  { icon: IconShieldCheck, text: 'Qualified, experienced instructors' },
];

const AuthLayout = ({ children }: AuthLayoutProps) => {
  const { classes } = useStyles();

  return (
    <div className={classes.root}>
      {/* ── Left Branding Panel (hidden on mobile) ── */}
      <div className={classes.brandPanel}>
        <div className={classes.brandContent}>
          <div className={classes.brandLogoWrapper}>
            <Image src={logo} height={130} width={130} alt="Luddoc Logo" />
          </div>
          <Text className={classes.brandTitle}>
            Luddoc <span className={classes.brandGold}>Skills</span><br />
            For Life
          </Text>
          <Text className={classes.brandTagline}>Technical Institute</Text>
          <Text className={classes.brandSubtext}>
            Empowering students with refined skills and knowledge through modern, accredited training.
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
        <div className={classes.brandFooter}>
          <Text className={classes.brandFooterText}>
            JIJENGE &middot; JIAMINI &middot; JIENJOY
          </Text>
        </div>
      </div>

      {/* ── Right Form Panel ── */}
      <div className={classes.formPanel}>
        <div className={classes.formTopBar}>
          <Anchor href="/" className={classes.backLink}>
            <IconArrowLeft size={16} />
            Back to Home
          </Anchor>
        </div>
        <div className={classes.formWrapper}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;

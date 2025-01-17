import { css } from '@emotion/react';
import { styled } from '@material-ui/core/styles';

export const LandingHeaderWrapper = styled('header')`
  min-height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-size: cover;
  overflow: hidden;

  background-image: linear-gradient(rgba(67, 67, 67, 0.8), rgba(0, 0, 0, 0.8)),
    url('/img/landing-header-background-xl.jpg');
  ${({ theme }) => css`
    ${theme.breakpoints.down('lg')} {
      background-image: linear-gradient(rgba(67, 67, 67, 0.8), rgba(0, 0, 0, 0.8)),
        url('/img/landing-header-background-lg.jpg');
    }
    ${theme.breakpoints.down('md')} {
      background-image: linear-gradient(rgba(67, 67, 67, 0.8), rgba(0, 0, 0, 0.8)),
        url('/img/landing-header-background-md.jpg');
    }

    ${theme.breakpoints.down('sm')} {
      background-image: linear-gradient(rgba(67, 67, 67, 0.8), rgba(0, 0, 0, 0.8)),
        url('/img/landing-header-background-sm.jpg');
    }

    ${theme.breakpoints.down('xs')} {
      background-image: linear-gradient(rgba(67, 67, 67, 0.8), rgba(0, 0, 0, 0.8)),
        url('/img/landing-header-background-xs.jpg');
    }
  `}
`;

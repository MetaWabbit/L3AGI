import { openLinkTab } from 'components/HeaderButtons/HeaderButtons'
import {
  StyledDivider,
  StyledWrapper,
} from 'components/TermsAndPrivacyButtons/TermsAndPrivacyButtons'
import TypographyQuaternary from 'components/Typography/Quaternary'
import Typography from '@l3-lib/ui-core/dist/Typography'

import Discord from '@l3-lib/ui-core/dist/icons/Discord'
import TwitterLogo from 'assets/tools/twitter.png'
import YoutubeLogo from 'assets/tools/youtube.svg'

import styled from 'styled-components'

const MediaButtons = () => {
  return (
    <StyledWrapper>
      <button onClick={() => openLinkTab(import.meta.env.REACT_APP_TWITTER_LINK)}>
        <StyledInnerButtonWrapper>
          <StyledImg src={TwitterLogo} />
          <TypographyQuaternary
            value='Twitter'
            type={Typography.types.label}
            size={Typography.sizes.xss}
            as={'a'}
            style={{
              cursor: 'pointer',
              textAlign: 'center',
            }}
          />
        </StyledInnerButtonWrapper>
      </button>

      <StyledDivider />

      <button onClick={() => openLinkTab(import.meta.env.REACT_APP_DISCORD_LINK)}>
        <StyledInnerButtonWrapper>
          <StyledDiscordIcon />
          <TypographyQuaternary
            value='Discord'
            type={Typography.types.label}
            size={Typography.sizes.xss}
            as={'a'}
            style={{
              cursor: 'pointer',
              textAlign: 'center',
            }}
          />
        </StyledInnerButtonWrapper>
      </button>

      <StyledDivider />

      <button onClick={() => openLinkTab(import.meta.env.REACT_APP_YOUTUBE_LINK)}>
        <StyledInnerButtonWrapper>
          <StyledImg src={YoutubeLogo} />
          <TypographyQuaternary
            value='Youtube'
            type={Typography.types.label}
            size={Typography.sizes.xss}
            as={'a'}
            style={{
              cursor: 'pointer',
              textAlign: 'center',
            }}
          />
        </StyledInnerButtonWrapper>
      </button>
    </StyledWrapper>
  )
}

export default MediaButtons

const StyledInnerButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 2px;
`
const StyledImg = styled.img`
  width: 10px;
`
const StyledDiscordIcon = styled(Discord)`
  path {
    fill: ${({ theme }) => theme.body.iconColor};
  }

  width: 15px;
`

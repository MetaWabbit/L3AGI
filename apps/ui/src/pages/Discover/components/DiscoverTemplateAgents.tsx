import ComponentsWrapper from 'components/ComponentsWrapper/ComponentsWrapper'
import { AuthContext } from 'contexts'
import { useModal } from 'hooks'
import AgentCard from 'pages/Agents/AgentCard'
import { StyledCardsWrapper } from 'pages/Agents/Agents'
import Typography from '@l3-lib/ui-core/dist/Typography'
import Heading from '@l3-lib/ui-core/dist/Heading'
import {
  StyledSectionWrapper,
} from 'pages/Home/homeStyle.css'
import TypographySecondary from 'components/Typography/Secondary'
import React from 'react'
import { useNavigate } from 'react-router-dom'

import styled from 'styled-components'
import HeadingPrimary from 'components/Heading/Primary'
import { useDiscover } from '../useDiscover'

const Discover = () => {
  const { user } = React.useContext(AuthContext)

  const navigate = useNavigate()

  const { openModal } = useModal()

  const { templateAgents } = useDiscover()

  return (
    <>      
      {/* {<DiscoverSystemAgents />} */}

      {templateAgents?.length > 0 && (
        <StyledSectionWrapper>
          <StyledHeadingWrapper>
            <StyledHeadingPrimary type={Heading.types.h1} value={'Discover AI Agents built with L3'} />
            <TypographySecondary
              value={"Chat with the foremost minds shaping AI's future or create your own innovative ideas"}
              type={Typography.types.LABEL}
              size={Typography.sizes.lg}
            />
          </StyledHeadingWrapper>
          <ComponentsWrapper noPadding>
            <StyledCardsWrapper>
              {templateAgents?.map((agentObj: any, index: number) => {
                const { agent } = agentObj

                return (
                  <AgentCard
                    key={index}
                    name={agent.name}
                    description={agent.description}
                    onViewClick={() =>
                      openModal({
                        name: 'agent-view-modal',
                        data: { agent: agentObj },
                      })
                    }
                    onChatClick={() => navigate(`/chat/history?agent=${agent.id}`)}
                    headerTag={agent.role}
                    creator={agent.creator}
                    avatar={agent.avatar}
                  />
                )
              })}
            </StyledCardsWrapper>
          </ComponentsWrapper>
        </StyledSectionWrapper>
      )}
    </>
  )
}

export default Discover




export const StyledRoot = styled.div`
  display: flex;
  flex-direction: column;
  gap: 100px;
`

const StyledHeadingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 16px 10px;
`
const StyledHeadingPrimary = styled(HeadingPrimary)`
  font-size: 40px;
`


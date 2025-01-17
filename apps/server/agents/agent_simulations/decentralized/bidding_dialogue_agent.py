import re
from typing import Callable, Dict, List

import tenacity
from langchain.chat_models import ChatOpenAI
from langchain.output_parsers import RegexParser
from langchain.prompts import PromptTemplate
from langchain.schema import (AIMessage, BaseMessage, HumanMessage,
                              SystemMessage)

from agents.agent_simulations.agent.dialogue_agent_with_tools import \
    DialogueAgentWithTools
from typings.agent import AgentWithConfigsOutput


class BiddingDialogueAgent(DialogueAgentWithTools):
    def __init__(
        self,
        name: str,
        agent_with_configs: AgentWithConfigsOutput,
        system_message: SystemMessage,
        bidding_template: PromptTemplate,
        model: ChatOpenAI,
        tools: List[any],
        session_id: str,
        sender_name: str,
        is_memory: bool = False,
    ) -> None:
        super().__init__(
            name,
            agent_with_configs,
            system_message,
            model,
            tools,
            session_id,
            sender_name,
            is_memory,
        )
        self.bidding_template = bidding_template

    def bid(self) -> str:
        """
        Asks the chat model to output a bid to speak
        """
        prompt = PromptTemplate(
            input_variables=["message_history", "recent_message"],
            template=self.bidding_template,
        ).format(
            message_history="\n".join(self.message_history),
            recent_message=self.message_history[-1],
        )
        bid_string = self.model([SystemMessage(content=prompt)]).content
        return bid_string

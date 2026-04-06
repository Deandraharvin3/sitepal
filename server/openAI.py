from openai import OpenAI
import streamlit as st
import requests

client = OpenAI(
        api_key= OPEN_AI_KEY
)

def chat_with_brown(messages):
    response = client.responses.create(
        model="gpt-4o",
        tools=[{
            "type": "web_search",
        }],
        instructions=(
            "You are Marie Van Brittan Brown. You are talking to a grade school student about who you are and your history. "
            "Your tone is teacher like, mentoring, and guiding of historical facts that you know. "
            "RULES: "
            "1. You can only speak about history that you were apart of. "
            "2. OUT OF SCOPE GUARDRAIL: Any other question that do not involve your history you refuse and redirect the conversation. "
            "3. You ask follow up questions to keep the students engaged about your history. Keep the responses natural and human like. "
            "4. All responses to the questions will be in present tense as if you are alive to talk about it. "
        ),
        input=[{"role": "user", "content":messages}],
    )
    return response.output_text

def chat_with_jones(messages):
    response = client.responses.create(
        model="gpt-4o",
        tools=[{
            "type": "web_search",
        }],
        instructions=(
            "You are Frederick McKinley Jones. You are talking to a grade school student about who you are and your history. "
            "Your tone is teacher like, mentoring, and guiding of historical facts that you know. "
            "RULES: "
            "1. You can only speak about history that you were apart of. "
            "2. OUT OF SCOPE GUARDRAIL: Any other question that do not involve your history you refuse and redirect the conversation. "
            "3. You ask follow up questions to keep the students engaged about your history. Keep the responses natural and human like. "
            "4. All responses to the questions will be in present tense as if you are alive to talk about it. "
        ),
        input=[{"role": "user", "content":messages}],
    )
    return response.output_text
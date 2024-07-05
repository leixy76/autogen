"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3633],{41939:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>s,metadata:()=>i,toc:()=>l});var o=t(85893),r=t(11151);const s={custom_edit_url:"https://github.com/microsoft/autogen/edit/main/website/docs/topics/non-openai-models/cloud-groq.ipynb",source_notebook:"/website/docs/topics/non-openai-models/cloud-groq.ipynb",title:"Groq"},a="Groq",i={id:"topics/non-openai-models/cloud-groq",title:"Groq",description:"Open In Colab",source:"@site/docs/topics/non-openai-models/cloud-groq.mdx",sourceDirName:"topics/non-openai-models",slug:"/topics/non-openai-models/cloud-groq",permalink:"/autogen/docs/topics/non-openai-models/cloud-groq",draft:!1,unlisted:!1,editUrl:"https://github.com/microsoft/autogen/edit/main/website/docs/topics/non-openai-models/cloud-groq.ipynb",tags:[],version:"current",frontMatter:{custom_edit_url:"https://github.com/microsoft/autogen/edit/main/website/docs/topics/non-openai-models/cloud-groq.ipynb",source_notebook:"/website/docs/topics/non-openai-models/cloud-groq.ipynb",title:"Groq"},sidebar:"docsSidebar",previous:{title:"Using Gemini in AutoGen with Other LLMs",permalink:"/autogen/docs/topics/non-openai-models/cloud-gemini"},next:{title:"Mistral AI",permalink:"/autogen/docs/topics/non-openai-models/cloud-mistralai"}},c={},l=[{value:"API parameters",id:"api-parameters",level:2},{value:"Two-Agent Coding Example",id:"two-agent-coding-example",level:2},{value:"Tool Call Example",id:"tool-call-example",level:2}];function u(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"groq",children:"Groq"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"https://colab.research.google.com/github/microsoft/autogen/blob/main/website/docs/topics/non-openai-models/cloud-groq.ipynb",children:(0,o.jsx)(n.img,{src:"https://colab.research.google.com/assets/colab-badge.svg",alt:"Open In Colab"})}),"\n",(0,o.jsx)(n.a,{href:"https://github.com/microsoft/autogen/blob/main/website/docs/topics/non-openai-models/cloud-groq.ipynb",children:(0,o.jsx)(n.img,{src:"https://img.shields.io/badge/Open%20on%20GitHub-grey?logo=github",alt:"Open on GitHub"})})]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"https://groq.com/",children:"Groq"})," is a cloud based platform serving a number of\npopular open weight models at high inference speeds. Models include\nMeta\u2019s Llama 3, Mistral AI\u2019s Mixtral, and Google\u2019s Gemma."]}),"\n",(0,o.jsx)(n.p,{children:"Although Groq\u2019s API is aligned well with OpenAI\u2019s, which is the native\nAPI used by AutoGen, this library provides the ability to set specific\nparameters as well as track API costs."}),"\n",(0,o.jsxs)(n.p,{children:["You will need a Groq account and create an API key. ",(0,o.jsx)(n.a,{href:"https://groq.com/",children:"See their website\nfor further details"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["Groq provides a number of models to use, included below. See the list of\n",(0,o.jsx)(n.a,{href:"https://console.groq.com/docs/models",children:"models here (requires login)"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["See the sample ",(0,o.jsx)(n.code,{children:"OAI_CONFIG_LIST"})," below showing how the Groq client class\nis used by specifying the ",(0,o.jsx)(n.code,{children:"api_type"})," as ",(0,o.jsx)(n.code,{children:"groq"}),"."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:'[\n    {\n        "model": "gpt-35-turbo",\n        "api_key": "your OpenAI Key goes here",\n    },\n    {\n        "model": "gpt-4-vision-preview",\n        "api_key": "your OpenAI Key goes here",\n    },\n    {\n        "model": "dalle",\n        "api_key": "your OpenAI Key goes here",\n    },\n    {\n        "model": "llama3-8b-8192",\n        "api_key": "your Groq API Key goes here",\n        "api_type": "groq"\n    },\n    {\n        "model": "llama3-70b-8192",\n        "api_key": "your Groq API Key goes here",\n        "api_type": "groq"\n    },\n    {\n        "model": "Mixtral 8x7b",\n        "api_key": "your Groq API Key goes here",\n        "api_type": "groq"\n    },\n    {\n        "model": "gemma-7b-it",\n        "api_key": "your Groq API Key goes here",\n        "api_type": "groq"\n    }\n]\n'})}),"\n",(0,o.jsxs)(n.p,{children:["As an alternative to the ",(0,o.jsx)(n.code,{children:"api_key"})," key and value in the config, you can\nset the environment variable ",(0,o.jsx)(n.code,{children:"GROQ_API_KEY"})," to your Groq key."]}),"\n",(0,o.jsx)(n.p,{children:"Linux/Mac:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:'export GROQ_API_KEY="your_groq_api_key_here"\n'})}),"\n",(0,o.jsx)(n.p,{children:"Windows:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"set GROQ_API_KEY=your_groq_api_key_here\n"})}),"\n",(0,o.jsx)(n.h2,{id:"api-parameters",children:"API parameters"}),"\n",(0,o.jsxs)(n.p,{children:["The following parameters can be added to your config for the Groq API.\nSee ",(0,o.jsx)(n.a,{href:"https://console.groq.com/docs/text-chat",children:"this link"})," for further\ninformation on them."]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"frequency_penalty (number 0..1)"}),"\n",(0,o.jsx)(n.li,{children:"max_tokens (integer >= 0)"}),"\n",(0,o.jsx)(n.li,{children:"presence_penalty (number -2..2)"}),"\n",(0,o.jsx)(n.li,{children:"seed (integer)"}),"\n",(0,o.jsx)(n.li,{children:"temperature (number 0..2)"}),"\n",(0,o.jsx)(n.li,{children:"top_p (number)"}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"Example:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:'[\n    {\n        "model": "llama3-8b-8192",\n        "api_key": "your Groq API Key goes here",\n        "api_type": "groq",\n        "frequency_penalty": 0.5,\n        "max_tokens": 2048,\n        "presence_penalty": 0.2,\n        "seed": 42,\n        "temperature": 0.5,\n        "top_p": 0.2\n    }\n]\n'})}),"\n",(0,o.jsx)(n.h2,{id:"two-agent-coding-example",children:"Two-Agent Coding Example"}),"\n",(0,o.jsx)(n.p,{children:"In this example, we run a two-agent chat with an AssistantAgent\n(primarily a coding agent) to generate code to count the number of prime\nnumbers between 1 and 10,000 and then it will be executed."}),"\n",(0,o.jsx)(n.p,{children:"We\u2019ll use Meta\u2019s Llama 3 model which is suitable for coding."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:'import os\n\nconfig_list = [\n    {\n        # Let\'s choose the Llama 3 model\n        "model": "llama3-8b-8192",\n        # Put your Groq API key here or put it into the GROQ_API_KEY environment variable.\n        "api_key": os.environ.get("GROQ_API_KEY"),\n        # We specify the API Type as \'groq\' so it uses the Groq client class\n        "api_type": "groq",\n    }\n]\n'})}),"\n",(0,o.jsx)(n.p,{children:"Importantly, we have tweaked the system message so that the model\ndoesn\u2019t return the termination keyword, which we\u2019ve changed to FINISH,\nwith the code block."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:'from pathlib import Path\n\nfrom autogen import AssistantAgent, UserProxyAgent\nfrom autogen.coding import LocalCommandLineCodeExecutor\n\n# Setting up the code executor\nworkdir = Path("coding")\nworkdir.mkdir(exist_ok=True)\ncode_executor = LocalCommandLineCodeExecutor(work_dir=workdir)\n\n# Setting up the agents\n\n# The UserProxyAgent will execute the code that the AssistantAgent provides\nuser_proxy_agent = UserProxyAgent(\n    name="User",\n    code_execution_config={"executor": code_executor},\n    is_termination_msg=lambda msg: "FINISH" in msg.get("content"),\n)\n\nsystem_message = """You are a helpful AI assistant who writes code and the user executes it.\nSolve tasks using your coding and language skills.\nIn the following cases, suggest python code (in a python coding block) for the user to execute.\nSolve the task step by step if you need to. If a plan is not provided, explain your plan first. Be clear which step uses code, and which step uses your language skill.\nWhen using code, you must indicate the script type in the code block. The user cannot provide any other feedback or perform any other action beyond executing the code you suggest. The user can\'t modify your code. So do not suggest incomplete code which requires users to modify. Don\'t use a code block if it\'s not intended to be executed by the user.\nDon\'t include multiple code blocks in one response. Do not ask users to copy and paste the result. Instead, use \'print\' function for the output when relevant. Check the execution result returned by the user.\nIf the result indicates there is an error, fix the error and output the code again. Suggest the full code instead of partial code or code changes. If the error can\'t be fixed or if the task is not solved even after the code is executed successfully, analyze the problem, revisit your assumption, collect additional info you need, and think of a different approach to try.\nWhen you find an answer, verify the answer carefully. Include verifiable evidence in your response if possible.\nIMPORTANT: Wait for the user to execute your code and then you can reply with the word "FINISH". DO NOT OUTPUT "FINISH" after your code block."""\n\n# The AssistantAgent, using Groq\'s model, will take the coding request and return code\nassistant_agent = AssistantAgent(\n    name="Groq Assistant",\n    system_message=system_message,\n    llm_config={"config_list": config_list},\n)\n'})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-text",children:"/usr/local/lib/python3.11/site-packages/tqdm/auto.py:21: TqdmWarning: IProgress not found. Please update jupyter and ipywidgets. See https://ipywidgets.readthedocs.io/en/stable/user_install.html\n  from .autonotebook import tqdm as notebook_tqdm\n"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:'# Start the chat, with the UserProxyAgent asking the AssistantAgent the message\nchat_result = user_proxy_agent.initiate_chat(\n    assistant_agent,\n    message="Provide code to count the number of prime numbers from 1 to 10000.",\n)\n'})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-text",children:"User (to Groq Assistant):\n\nProvide code to count the number of prime numbers from 1 to 10000.\n\n--------------------------------------------------------------------------------\nGroq Assistant (to User):\n\nHere's the plan to count the number of prime numbers from 1 to 10000:\n\nFirst, we need to write a helper function to check if a number is prime. A prime number is a number that is divisible only by 1 and itself.\n\nThen, we can use a loop to iterate through all numbers from 1 to 10000, check if each number is prime using our helper function, and count the number of prime numbers found.\n\nHere's the Python code to implement this plan:\n```python\ndef is_prime(n):\n    if n <= 1:\n        return False\n    for i in range(2, int(n ** 0.5) + 1):\n        if n % i == 0:\n            return False\n    return True\n\ncount = 0\nfor i in range(2, 10001):\n    if is_prime(i):\n        count += 1\n\nprint(count)\n```\nPlease execute this code, and I'll wait for the result.\n\n--------------------------------------------------------------------------------\n\n>>>>>>>> NO HUMAN INPUT RECEIVED.\n\n>>>>>>>> USING AUTO REPLY...\n\n>>>>>>>> EXECUTING CODE BLOCK (inferred language is python)...\nUser (to Groq Assistant):\n\nexitcode: 0 (execution succeeded)\nCode output: 1229\n\n\n--------------------------------------------------------------------------------\nGroq Assistant (to User):\n\nFINISH\n\n--------------------------------------------------------------------------------\n\n>>>>>>>> NO HUMAN INPUT RECEIVED.\n"})}),"\n",(0,o.jsx)(n.h2,{id:"tool-call-example",children:"Tool Call Example"}),"\n",(0,o.jsx)(n.p,{children:"In this example, instead of writing code, we will show how we can use\nMeta\u2019s Llama 3 model to perform parallel tool calling, where it\nrecommends calling more than one tool at a time, using Groq\u2019s cloud\ninference."}),"\n",(0,o.jsx)(n.p,{children:"We\u2019ll use a simple travel agent assistant program where we have a couple\nof tools for weather and currency conversion."}),"\n",(0,o.jsxs)(n.p,{children:["We start by importing libraries and setting up our configuration to use\nMeta\u2019s Llama 3 model and the ",(0,o.jsx)(n.code,{children:"groq"})," client class."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:'import json\nimport os\nfrom typing import Literal\n\nfrom typing_extensions import Annotated\n\nimport autogen\n\nconfig_list = [\n    {"api_type": "groq", "model": "llama3-8b-8192", "api_key": os.getenv("GROQ_API_KEY"), "cache_seed": None}\n]\n'})}),"\n",(0,o.jsx)(n.p,{children:"Create our two agents."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:'# Create the agent for tool calling\nchatbot = autogen.AssistantAgent(\n    name="chatbot",\n    system_message="""For currency exchange and weather forecasting tasks,\n        only use the functions you have been provided with.\n        Output \'HAVE FUN!\' when an answer has been provided.""",\n    llm_config={"config_list": config_list},\n)\n\n# Note that we have changed the termination string to be "HAVE FUN!"\nuser_proxy = autogen.UserProxyAgent(\n    name="user_proxy",\n    is_termination_msg=lambda x: x.get("content", "") and "HAVE FUN!" in x.get("content", ""),\n    human_input_mode="NEVER",\n    max_consecutive_auto_reply=1,\n)\n'})}),"\n",(0,o.jsx)(n.p,{children:"Create the two functions, annotating them so that those descriptions can\nbe passed through to the LLM."}),"\n",(0,o.jsxs)(n.p,{children:["We associate them with the agents using ",(0,o.jsx)(n.code,{children:"register_for_execution"})," for the\nuser_proxy so it can execute the function and ",(0,o.jsx)(n.code,{children:"register_for_llm"})," for the\nchatbot (powered by the LLM) so it can pass the function definitions to\nthe LLM."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:'# Currency Exchange function\n\nCurrencySymbol = Literal["USD", "EUR"]\n\n# Define our function that we expect to call\n\n\ndef exchange_rate(base_currency: CurrencySymbol, quote_currency: CurrencySymbol) -> float:\n    if base_currency == quote_currency:\n        return 1.0\n    elif base_currency == "USD" and quote_currency == "EUR":\n        return 1 / 1.1\n    elif base_currency == "EUR" and quote_currency == "USD":\n        return 1.1\n    else:\n        raise ValueError(f"Unknown currencies {base_currency}, {quote_currency}")\n\n\n# Register the function with the agent\n\n\n@user_proxy.register_for_execution()\n@chatbot.register_for_llm(description="Currency exchange calculator.")\ndef currency_calculator(\n    base_amount: Annotated[float, "Amount of currency in base_currency"],\n    base_currency: Annotated[CurrencySymbol, "Base currency"] = "USD",\n    quote_currency: Annotated[CurrencySymbol, "Quote currency"] = "EUR",\n) -> str:\n    quote_amount = exchange_rate(base_currency, quote_currency) * base_amount\n    return f"{format(quote_amount, \'.2f\')} {quote_currency}"\n\n\n# Weather function\n\n\n# Example function to make available to model\ndef get_current_weather(location, unit="fahrenheit"):\n    """Get the weather for some location"""\n    if "chicago" in location.lower():\n        return json.dumps({"location": "Chicago", "temperature": "13", "unit": unit})\n    elif "san francisco" in location.lower():\n        return json.dumps({"location": "San Francisco", "temperature": "55", "unit": unit})\n    elif "new york" in location.lower():\n        return json.dumps({"location": "New York", "temperature": "11", "unit": unit})\n    else:\n        return json.dumps({"location": location, "temperature": "unknown"})\n\n\n# Register the function with the agent\n\n\n@user_proxy.register_for_execution()\n@chatbot.register_for_llm(description="Weather forecast for US cities.")\ndef weather_forecast(\n    location: Annotated[str, "City name"],\n) -> str:\n    weather_details = get_current_weather(location=location)\n    weather = json.loads(weather_details)\n    return f"{weather[\'location\']} will be {weather[\'temperature\']} degrees {weather[\'unit\']}"\n'})}),"\n",(0,o.jsx)(n.p,{children:"We pass through our customers message and run the chat."}),"\n",(0,o.jsx)(n.p,{children:"Finally, we ask the LLM to summarise the chat and print that out."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:'# start the conversation\nres = user_proxy.initiate_chat(\n    chatbot,\n    message="What\'s the weather in New York and can you tell me how much is 123.45 EUR in USD so I can spend it on my holiday? Throw a few holiday tips in as well.",\n    summary_method="reflection_with_llm",\n)\n\nprint(f"LLM SUMMARY: {res.summary[\'content\']}")\n'})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-text",children:'user_proxy (to chatbot):\n\nWhat\'s the weather in New York and can you tell me how much is 123.45 EUR in USD so I can spend it on my holiday? Throw a few holiday tips in as well.\n\n--------------------------------------------------------------------------------\nchatbot (to user_proxy):\n\n***** Suggested tool call (call_hg7g): weather_forecast *****\nArguments: \n{"location":"New York"}\n*************************************************************\n***** Suggested tool call (call_hrsf): currency_calculator *****\nArguments: \n{"base_amount":123.45,"base_currency":"EUR","quote_currency":"USD"}\n****************************************************************\n\n--------------------------------------------------------------------------------\n\n>>>>>>>> EXECUTING FUNCTION weather_forecast...\n\n>>>>>>>> EXECUTING FUNCTION currency_calculator...\nuser_proxy (to chatbot):\n\nuser_proxy (to chatbot):\n\n***** Response from calling tool (call_hg7g) *****\nNew York will be 11 degrees fahrenheit\n**************************************************\n\n--------------------------------------------------------------------------------\nuser_proxy (to chatbot):\n\n***** Response from calling tool (call_hrsf) *****\n135.80 USD\n**************************************************\n\n--------------------------------------------------------------------------------\nchatbot (to user_proxy):\n\n***** Suggested tool call (call_ahwk): weather_forecast *****\nArguments: \n{"location":"New York"}\n*************************************************************\n\n--------------------------------------------------------------------------------\nLLM SUMMARY: Based on the conversation, it\'s predicted that New York will be 11 degrees Fahrenheit. You also found out that 123.45 EUR is equal to 135.80 USD. Here are a few holiday tips:\n\n* Pack warm clothing for your visit to New York, as the temperature is expected to be quite chilly.\n* Consider exchanging your money at a local currency exchange or an ATM since the exchange rate might not be as favorable in tourist areas.\n* Make sure to check the estimated expenses for your holiday and adjust your budget accordingly.\n\nI hope you have a great trip!\n'})}),"\n",(0,o.jsx)(n.p,{children:"Using its fast inference, Groq required less than 2 seconds for the\nwhole chat!"}),"\n",(0,o.jsxs)(n.p,{children:["Additionally, Llama 3 was able to call both tools and pass through the\nright parameters. The ",(0,o.jsx)(n.code,{children:"user_proxy"})," then executed them and this was\npassed back for Llama 3 to summarise the whole conversation."]})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(u,{...e})}):u(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>i,a:()=>a});var o=t(67294);const r={},s=o.createContext(r);function a(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);
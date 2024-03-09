"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8959],{37948:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var s=t(85893),i=t(11151);const r={title:"Achieve More, Pay Less - Use GPT-4 Smartly",authors:"sonichi",tags:["LLM","GPT","research"]},a=void 0,o={permalink:"/autogen/blog/2023/05/18/GPT-adaptive-humaneval",source:"@site/blog/2023-05-18-GPT-adaptive-humaneval/index.mdx",title:"Achieve More, Pay Less - Use GPT-4 Smartly",description:"An adaptive way of using GPT-3.5 and GPT-4 outperforms GPT-4 in both coding success rate and inference cost",date:"2023-05-18T00:00:00.000Z",formattedDate:"May 18, 2023",tags:[{label:"LLM",permalink:"/autogen/blog/tags/llm"},{label:"GPT",permalink:"/autogen/blog/tags/gpt"},{label:"research",permalink:"/autogen/blog/tags/research"}],readingTime:7.785,hasTruncateMarker:!1,authors:[{name:"Chi Wang",title:"Principal Researcher at Microsoft Research",url:"https://www.linkedin.com/in/chi-wang-49b15b16/",imageURL:"https://github.com/sonichi.png",key:"sonichi"}],frontMatter:{title:"Achieve More, Pay Less - Use GPT-4 Smartly",authors:"sonichi",tags:["LLM","GPT","research"]},unlisted:!1,prevItem:{title:"MathChat - An Conversational Framework to Solve Math Problems",permalink:"/autogen/blog/2023/06/28/MathChat"},nextItem:{title:"Does Model and Inference Parameter Matter in LLM Applications? - A Case Study for MATH",permalink:"/autogen/blog/2023/04/21/LLM-tuning-math"}},l={authorsImageUrls:[void 0]},c=[{value:"Observations",id:"observations",level:2},{value:"Solution",id:"solution",level:2},{value:"Experiment Results",id:"experiment-results",level:2},{value:"Discussion",id:"discussion",level:2},{value:"For Further Reading",id:"for-further-reading",level:2}];function h(e){const n={a:"a",code:"code",em:"em",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"An adaptive way of using GPT-3.5 and GPT-4 outperforms GPT-4 in both coding success rate and inference cost",src:t(54837).Z+"",width:"604",height:"469"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"TL;DR:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"A case study using the HumanEval benchmark shows that an adaptive way of using multiple GPT models can achieve both much higher accuracy (from 68% to 90%) and lower inference cost (by 18%) than using GPT-4 for coding."})}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["GPT-4 is a big upgrade of foundation model capability, e.g., in code and math, accompanied by a much higher (more than 10x) price per token to use over GPT-3.5-Turbo. On a code completion benchmark, ",(0,s.jsx)(n.a,{href:"https://huggingface.co/datasets/openai_humaneval",children:"HumanEval"}),", developed by OpenAI, GPT-4 can successfully solve 68% tasks while GPT-3.5-Turbo does 46%. It is possible to increase the success rate of GPT-4 further by generating multiple responses or making multiple calls. However, that will further increase the cost, which is already nearly 20 times of using GPT-3.5-Turbo and with more restricted API call rate limit. Can we achieve more with less?"]}),"\n",(0,s.jsx)(n.p,{children:"In this blog post, we will explore a creative, adaptive way of using GPT models which leads to a big leap forward."}),"\n",(0,s.jsx)(n.h2,{id:"observations",children:"Observations"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"GPT-3.5-Turbo can already solve 40%-50% tasks. For these tasks if we never use GPT-4, we can save nearly 40-50% cost."}),"\n",(0,s.jsx)(n.li,{children:"If we use the saved cost to generate more responses with GPT-4 for the remaining unsolved tasks, it is possible to solve some more of them while keeping the amortized cost down."}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["The obstacle of leveraging these observations is that we do not know ",(0,s.jsx)(n.em,{children:"a priori"})," which tasks can be solved by the cheaper model, which tasks can be solved by the expensive model, and which tasks can be solved by paying even more to the expensive model."]}),"\n",(0,s.jsx)(n.p,{children:"To overcome that obstacle, one may want to predict which task requires what model to solve and how many responses are required for each task. Let's look at one example code completion task:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"def vowels_count(s):\n    \"\"\"Write a function vowels_count which takes a string representing\n    a word as input and returns the number of vowels in the string.\n    Vowels in this case are 'a', 'e', 'i', 'o', 'u'. Here, 'y' is also a\n    vowel, but only when it is at the end of the given word.\n\n    Example:\n    >>> vowels_count(\"abcde\")\n    2\n    >>> vowels_count(\"ACEDY\")\n    3\n    \"\"\"\n"})}),"\n",(0,s.jsx)(n.p,{children:"Can we predict whether GPT-3.5-Turbo can solve this task or do we need to use GPT-4? My first guess is that GPT-3.5-Turbo can get it right because the instruction is fairly straightforward. Yet, it turns out that GPT-3.5-Turbo does not consistently get it right, if we only give it one chance. It's not obvious (but an interesting research question!) how to predict the performance without actually trying."}),"\n",(0,s.jsxs)(n.p,{children:["What else can we do? We notice that:\n",(0,s.jsx)(n.strong,{children:'It\'s "easier" to verify a given solution than finding a correct solution from scratch.'})]}),"\n",(0,s.jsx)(n.p,{children:"Some simple example test cases are provided in the docstr. If we already have a response generated by a model, we can use those test cases to filter wrong implementations, and either use a more powerful model or generate more responses, until the result passes the example test cases. Moreover, this step can be automated by asking GPT-3.5-Turbo to generate assertion statements from the examples given in the docstr (a simpler task where we can place our bet) and executing the code."}),"\n",(0,s.jsx)(n.h2,{id:"solution",children:"Solution"}),"\n",(0,s.jsx)(n.p,{children:"Combining these observations, we can design a solution with two intuitive ideas:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Make use of auto-generated feedback, i.e., code execution results, to filter responses."}),"\n",(0,s.jsx)(n.li,{children:"Try inference configurations one by one, until one response can pass the filter."}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Design",src:t(55541).Z+"",width:"2001",height:"738"})}),"\n",(0,s.jsx)(n.p,{children:"This solution works adaptively without knowing or predicting which task fits which configuration. It simply tries multiple configurations one by one, starting from the cheapest configuration. Note that one configuration can generate multiple responses (by setting the inference parameter n larger than 1). And different configurations can use the same model and different inference parameters such as n and temperature. Only one response is returned and evaluated per task."}),"\n",(0,s.jsxs)(n.p,{children:["An implementation of this solution is provided in ",(0,s.jsx)(n.a,{href:"/docs/reference/code_utils#implement",children:"autogen"}),". It uses the following sequence of configurations:"]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"GPT-3.5-Turbo, n=1, temperature=0"}),"\n",(0,s.jsx)(n.li,{children:'GPT-3.5-Turbo, n=7, temperature=1, stop=["\\nclass", "\\ndef", "\\nif", "\\nprint"]'}),"\n",(0,s.jsx)(n.li,{children:"GPT-4, n=1, temperature=0"}),"\n",(0,s.jsx)(n.li,{children:'GPT-4, n=2, temperature=1, stop=["\\nclass", "\\ndef", "\\nif", "\\nprint"]'}),"\n",(0,s.jsx)(n.li,{children:'GPT-4, n=1, temperature=1, stop=["\\nclass", "\\ndef", "\\nif", "\\nprint"]'}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"experiment-results",children:"Experiment Results"}),"\n",(0,s.jsx)(n.p,{children:"The first figure in this blog post shows the success rate and average inference cost of the adaptive solution compared with default GPT-4.\nThe inference cost includes the cost for generating the assertions in our solution. The generated assertions are not always correct, and programs that pass/fail the generated assertions are not always right/wrong. Despite of that, the adaptive solution can increase the success rate (referred to as pass@1 in the literature) from 68% to 90%, while reducing the cost by 18%."}),"\n",(0,s.jsx)(n.p,{children:"Here are a few examples of function definitions which are solved by different configurations in the portfolio."}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Solved by GPT-3.5-Turbo, n=1, temperature=0"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'def compare(game,guess):\n    """I think we all remember that feeling when the result of some long-awaited\n    event is finally known. The feelings and thoughts you have at that moment are\n    definitely worth noting down and comparing.\n    Your task is to determine if a person correctly guessed the results of a number of matches.\n    You are given two arrays of scores and guesses of equal length, where each index shows a match.\n    Return an array of the same length denoting how far off each guess was. If they have guessed correctly,\n    the value is 0, and if not, the value is the absolute difference between the guess and the score.\n\n\n    example:\n\n    compare([1,2,3,4,5,1],[1,2,3,4,2,-2]) -> [0,0,0,0,3,3]\n    compare([0,5,0,0,0,4],[4,1,1,0,0,-2]) -> [4,4,1,0,0,6]\n    """\n'})}),"\n",(0,s.jsxs)(n.ol,{start:"2",children:["\n",(0,s.jsxs)(n.li,{children:['Solved by GPT-3.5-Turbo, n=7, temperature=1, stop=["\\nclass", "\\ndef", "\\nif", "\\nprint"]: the ',(0,s.jsx)(n.code,{children:"vowels_count"})," function presented earlier."]}),"\n",(0,s.jsx)(n.li,{children:"Solved by GPT-4, n=1, temperature=0:"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"def string_xor(a: str, b: str) -> str:\n    \"\"\" Input are two strings a and b consisting only of 1s and 0s.\n    Perform binary XOR on these inputs and return result also as a string.\n    >>> string_xor('010', '110')\n    '100'\n    \"\"\"\n"})}),"\n",(0,s.jsxs)(n.ol,{start:"4",children:["\n",(0,s.jsx)(n.li,{children:'Solved by GPT-4, n=2, temperature=1, stop=["\\nclass", "\\ndef", "\\nif", "\\nprint"]:'}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"def is_palindrome(string: str) -> bool:\n    \"\"\" Test if given string is a palindrome \"\"\"\n    return string == string[::-1]\n\n\ndef make_palindrome(string: str) -> str:\n    \"\"\" Find the shortest palindrome that begins with a supplied string.\n    Algorithm idea is simple:\n    - Find the longest postfix of supplied string that is a palindrome.\n    - Append to the end of the string reverse of a string prefix that comes before the palindromic suffix.\n    >>> make_palindrome('')\n    ''\n    >>> make_palindrome('cat')\n    'catac'\n    >>> make_palindrome('cata')\n    'catac'\n    \"\"\"\n"})}),"\n",(0,s.jsxs)(n.ol,{start:"5",children:["\n",(0,s.jsx)(n.li,{children:'Solved by GPT-4, n=1, temperature=1, stop=["\\nclass", "\\ndef", "\\nif", "\\nprint"]:'}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'def sort_array(arr):\n    """\n    In this Kata, you have to sort an array of non-negative integers according to\n    number of ones in their binary representation in ascending order.\n    For similar number of ones, sort based on decimal value.\n\n    It must be implemented like this:\n    >>> sort_array([1, 5, 2, 3, 4]) == [1, 2, 3, 4, 5]\n    >>> sort_array([-2, -3, -4, -5, -6]) == [-6, -5, -4, -3, -2]\n    >>> sort_array([1, 0, 2, 3, 4]) [0, 1, 2, 3, 4]\n    """\n'})}),"\n",(0,s.jsx)(n.p,{children:"The last problem is an example with wrong example test cases in the original definition. It misleads the adaptive solution because a correct implementation is regarded as wrong and more trials are made. The last configuration in the sequence returns the right implementation, even though it does not pass the auto-generated assertions. This example demonstrates that:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Our adaptive solution has a certain degree of fault tolerance."}),"\n",(0,s.jsx)(n.li,{children:"The success rate and inference cost for the adaptive solution can be further improved if correct example test cases are used."}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"It is worth noting that the reduced inference cost is the amortized cost over all the tasks. For each individual task, the cost can be either larger or smaller than directly using GPT-4. This is the nature of the adaptive solution: The cost is in general larger for difficult tasks than that for easy tasks."}),"\n",(0,s.jsxs)(n.p,{children:["An example notebook to run this experiment can be found at: ",(0,s.jsx)(n.a,{href:"https://github.com/microsoft/FLAML/blob/v1.2.1/notebook/research/autogen_code.ipynb",children:"https://github.com/microsoft/FLAML/blob/v1.2.1/notebook/research/autogen_code.ipynb"}),". The experiment was run when AutoGen was a subpackage in FLAML."]}),"\n",(0,s.jsx)(n.h2,{id:"discussion",children:"Discussion"}),"\n",(0,s.jsxs)(n.p,{children:["Our solution is quite simple to implement using a generic interface offered in ",(0,s.jsx)(n.a,{href:"/docs/Use-Cases/enhanced_inference#logic-error",children:(0,s.jsx)(n.code,{children:"autogen"})}),", yet the result is quite encouraging."]}),"\n",(0,s.jsx)(n.p,{children:"While the specific way of generating assertions is application-specific, the main ideas are general in LLM operations:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Generate multiple responses to select - especially useful when selecting a good response is relatively easier than generating a good response at one shot."}),"\n",(0,s.jsxs)(n.li,{children:["Consider multiple configurations to generate responses - especially useful when:","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Model and other inference parameter choice affect the utility-cost tradeoff; or"}),"\n",(0,s.jsx)(n.li,{children:"Different configurations have complementary effect."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["A ",(0,s.jsx)(n.a,{href:"/blog/2023/04/21/LLM-tuning-math",children:"previous blog post"})," provides evidence that these ideas are relevant in solving math problems too.\n",(0,s.jsx)(n.code,{children:"autogen"})," uses a technique ",(0,s.jsx)(n.a,{href:"https://arxiv.org/abs/2303.04673",children:"EcoOptiGen"})," to support inference parameter tuning and model selection."]}),"\n",(0,s.jsx)(n.p,{children:"There are many directions of extensions in research and development:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Generalize the way to provide feedback."}),"\n",(0,s.jsx)(n.li,{children:"Automate the process of optimizing the configurations."}),"\n",(0,s.jsx)(n.li,{children:"Build adaptive agents for different applications."}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsxs)(n.em,{children:["Do you find this approach applicable to your use case? Do you have any other challenge to share about LLM applications? Do you like to see more support or research of LLM optimization or automation? Please join our ",(0,s.jsx)(n.a,{href:"https://discord.gg/pAbnFJrkgZ",children:"Discord"})," server for discussion."]})}),"\n",(0,s.jsx)(n.h2,{id:"for-further-reading",children:"For Further Reading"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"/docs/Getting-Started",children:"Documentation"})," about ",(0,s.jsx)(n.code,{children:"autogen"})," and ",(0,s.jsx)(n.a,{href:"https://arxiv.org/abs/2303.04673",children:"Research paper"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"/blog/2023/04/21/LLM-tuning-math",children:"Blog post"})," about a related study for math."]}),"\n"]})]})}function d(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},55541:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/design-88630f6d8d95f1e31ef5ce79e81aab54.png"},54837:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/humaneval-b2718b0b15d76b8fc59a4094e1bd684c.png"},11151:(e,n,t)=>{t.d(n,{Z:()=>o,a:()=>a});var s=t(67294);const i={},r=s.createContext(i);function a(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);
import { Blocks, Bug, Code, Code2Icon, CodeIcon, DiamondPlusIcon, HashIcon, HelpingHand, Languages, Linkedin, Package, Pill, SproutIcon, TowerControl, Webhook, WholeWord, Workflow, XIcon } from "lucide-react";

export default[{
    name:'Blog Title',
    desc:'An AI tool to help you with accurate and fast blog title generation based on blog information',
    category:'Blog',
    icon:Package,
    aiPrompt:'Give me 3 blog topic idea in a bullet wise only based on given niche topic and give me the reason for this title',
    slug:'generate-blog-title',
    form:[{
        label:'Enter your blog topic',
        field:'input',
        name:'niche',
        required:true
    },
    {
        label:'Enter your blog content',
        field:'textarea',
        name:'content',
        required:false
    }
    
]

},{
    name:'Homework helper',
    desc:'Search up any question for its detailed answer from your textbooks with this latest AI tool.',
    category:'Helper',
    icon:HelpingHand,
    aiPrompt:'Give answer to this question in brief detail',
    slug:'generate-answer',
    form:[{
        label:'Enter your question',
        field:'textarea',
        name:'question',
        required:true
    },
    
]

},
{
    name:'Write a X post',
    desc:'An AI tool to help you with twitter posts generation regarding any trending topic',
    category:'Helper',
    icon:XIcon,
    aiPrompt:'Write a twitter post about the given topic in under twitters word limit, Make it trendy.',
    slug:'generate-x-post',
    form:[{
        label:'Enter your topic',
        field:'input',
        name:'topic',
        required:true
    },
    
]

},
{
    name:'Linkedin Post Generator',
    desc:'An AI tool to help you with Linkedin posts generation regarding any topic',
    category:'Helper',
    icon:Linkedin,
    aiPrompt:'Write a Linkedin post for on the given topic make it casual and a good readable post.',
    slug:'generate-linkedin-post',
    form:[{
        label:'Enter your topic',
        field:'textarea',
        name:'niche',
        required:true
    },
    
]

},{
    name:'Basic Code Generator',
    desc:'Generate basic code snippets and useful coding solutions in any language.',
    category:'Code',
    icon:Code,
    aiPrompt:'Write a code for the given topic in given language by the user and explain the logic.',
    slug:'generate-code',
    form:[{
        label:'Enter your question',
        field:'input',
        name:'niche',
        required:true
    },
    
]

},
{
    name:'Explain the code',
    desc:'A useful AI tool to explain any code snippet in any language in a detailed way.',
    category:'Code',
    icon:Code2Icon,
    aiPrompt:'Explain the given code in detail.',
    slug:'explain-given-code',
    form:[{
        label:'Enter your code',
        field:'input',
        name:'code',
        required:true
    },
    
]

},{
    name: 'Code Analyser',
    desc: 'Tool to find bugs in your code and provide you with detailed fixes.',
    icon:Bug,
    category: 'Code',
   
    slug: 'code-bug-detector',
    aiPrompt: 'Depends on user codeInput find bug in code and give solution and give output in  in rich text editor format in code block ',
    form: [
        {
            label: 'Enter code which you want to test bug',
            field: 'textarea',
            name: 'codeInput',
            required:true
        },
       
    ]
},
{
    name:'Instagram Hashtag',
    desc:'A useful AI tool to generate instagram hashtags for a certain topic.',
    category:'Blog',
    icon:HashIcon,
    aiPrompt:'Provide me with instagram hashtags for the post based on the following topics.',
    slug:'generate-insta-hashtags',
    form:[{
        label:'Enter your topic',
        field:'input',
        name:'topic',
        required:true
    },
    
]

},
{
    name:'Schedule maker',
    desc:'A useful AI tool to help you create a daily schedule.',
    category:'Helper',
    icon:Workflow,
    aiPrompt:'Provide me with a schedule for my day focusing on the following activities',
    slug:'generate-schedule',
    form:[{
        label:'What do you want to focus on today?',
        field:'input',
        name:'focus',
        required:true
    },
    
]

},
{
    name: 'English Grammer Check',
    desc: 'AI Model to Correct your english grammer by providing the text',
    icon:WholeWord,
    category: 'language',
    slug: 'english-grammer-checker',
    aiPrompt: 'Rewrite the inputText by correcting the grammer and give output in rich text editor format no json and explain mistake in my sentence.',
    form: [
        {
            label: 'Enter text to correct the grammer',
            field: 'input',
            name: 'inputText',
            required:true
        },
       
    ]
},
    {
        name: 'Language Converter',
        desc: 'AI Model to convert your sentences into different languages. Can convert into multiple languages together',
        icon:Languages,
        category: 'language',
       
        slug: 'language-convert',
        aiPrompt: 'Rewrite the text into the given language. Treat it as a random sentence and nothing else',
        form: [
            {
                label: 'Enter language you want to convert to',
                field: 'input',
                name: 'inputText',
                required:true
            },{
                label: 'Enter you text',
                field: 'textarea',
                name: 'input',
                required:true
            }
           
        ]
    },{
        name: 'Tagline Generator',
        desc: 'Struggling to find the perfect tagline for your brand? Let our AI-tool assist you in creating a tagline that stands out.',
        icon:Webhook,
        category: 'Marketing',
       
        slug: 'tagline-generator',
        aiPrompt: 'Depends on user productName and outline generate catchy 5-10 tagline for the business product and give output  in rich text editor format ',
        form: [
            {
                label: 'Product/Brand Name',
                field: 'input',
                name: 'productName',
                required:true
            },
            {
                label: 'What you are selling / Marketting',
                field: 'textarea',
                name: 'outline',
                required:true
            },
           
        ]
    },{
        name: 'Recipe Generator',
        desc: 'Find detailed recipe of any food items you wanna savour within seconds using this easy to use AI tool!',
        icon:SproutIcon,
        category: 'Helper',
       
        slug: 'recipe-generator',
        aiPrompt: 'Generate a recipe for the given foodItem depending on the givenItems make sure it is really tasty!',
        form: [
            {
                label: 'What do you wanna eat today?',
                field: 'input',
                name: 'productName',
                required:true
            },
            {
                label: 'What stuff you have?',
                field: 'textarea',
                name: 'outline',
                required:false
            },
           
        ]
    },{
        name:'Dialogue maker',
        desc:'An AI tool to create dialogue conversation between any number of characters in a given story.',
        category:'Helper',
        icon:DiamondPlusIcon,
        aiPrompt:'Create a dialogue between the givenPeople depending on givenStory, make it engaging and interesting.',
        slug:'generate-dialogues',
        form:[{
            label:'Enter your topic',
            field:'input',
            name:'topic',
            required:true
        },
        
    ]
    
    },{
        name:'Write a X post',
        desc:'An AI tool to help you with twitter posts generation regarding any trending topic',
        category:'Helper',
        icon:XIcon,
        aiPrompt:'Write a twitter post about the given topic in under twitters word limit, Make it trendy.',
        slug:'generate-x-post',
        form:[{
            label:'Enter your topic',
            field:'input',
            name:'topic',
            required:true
        },
        
    ]
    
    },
    
]
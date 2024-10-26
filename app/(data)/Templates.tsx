
import { IconBook, IconBook2, IconBrandGmail } from "@tabler/icons-react";
import { AirVent, Blocks, BookImage, Bug, Code, Code2Icon, CodeIcon, DiamondPlusIcon, Dumbbell, FileCode, GitBranchPlus, HashIcon, HelpingHand, Languages, Linkedin, Mic2Icon, Newspaper, Package, PenIcon, Pill, PointerIcon, SproutIcon, TowerControl, Webhook, WholeWord, Workflow, XIcon } from "lucide-react";

export default[{
    name:'Cover Letter',
    desc:'An AI tool for writing proper and effective cover letters for your desired job at any company.',
    category:'jobhunt',
    icon:BookImage,
    aiPrompt:'Create a cover letter for the givenComp for the givenJob by searching out the companies job description and users givenResume if given else write a good and nice cover letter in a formal language.',
    slug:'generate-cover-letter',
    form:[{
        label:'Company name?',
        field:'input',
        name:'givenComp',
        required:true
    },
    {
        label:'What job do you want the cover letter for?',
        field:'input',
        name:'givenJob',
        required:true
    },
    {
        label:'Paste your resume content to better the cover letter(optional)',
        field:'textarea',
        name:'givenResume',
        required:false
    }
    
]

},{
    name:'Bullet Point Optimizer',
    desc:'An AI tool to optimize bullet points for resume based on XYZ format of bullet points for resume.',
    category:'jobhunt',
    icon:PointerIcon,
    aiPrompt:'Recreate the givenBullets using the XYZ format of resume bullet point optimization in a single line only. Make the points impactful some percentages or real life values and use Task oriented language. Use strong action verbs',
    slug:'generate-bullet-points',
    form:[{
        label:'Enter your bullet points here(1 at a time)',
        field:'textarea',
        name:'givenBullets',
        required:true
    }
    
]

},{
    name:'Github Project Readme',
    desc:'An AI tool to generate github README.md file for any project based on project description.',
    category:'code',
    icon:GitBranchPlus,
    aiPrompt:'Create a Github Project Readme for givenProject based on the givenDescription make it detailed and standard.',
    slug:'generate-readme',
    form:[{
        label:'Project Name',
        field:'input',
        name:'givenProject',
        required:true
    },
    {
        label:'Tech Stack and Project Description',
        field:'textarea',
        name:'givenDescription',
        required:true
    }
    
]

},{
    name:'Homework helper',
    desc:'Search up any question for its detailed answer with this latest AI tool.',
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
    aiPrompt:'Write a twitter post about the given topic in under word limit of 250 characters, Make it trendy.',
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
    aiPrompt:'Write a Linkedin post for on the givenTopic make it casual and a good readable post in exactly givenWords words.',
    slug:'generate-linkedin-post',
    form:[{
        label:'Enter your topic',
        field:'textarea',
        name:'givenTopic',
        required:true
    },{
        label:'Post length in words(10-1000 words)',
        field:'input',
        name:'givenWords',
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
    desc: 'An AI Model to analyze, check and improve your english grammer by providing the text to it',
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
            label:'Enter name of the characters',
            field:'input',
            name:'givenPeople',
            required:true
        },
        {
            label:'Enter your short story or the name of it',
            field:'textarea',
            name:'givenStory',
            required:true
        }
        
    ]
    
    },{
        name:'Synonym and Antonym',
        desc:'An AI tool to Find multiple Antonyms and Synonyms of any word or a collection of words you provide it with.',
        category:'Helper',
        icon:AirVent,
        aiPrompt:'Find out the different synonyms and antonyms of all the wordsgiven.',
        slug:'generate-ansyn',
        form:[{
            label:'Enter words',
            field:'textarea',
            name:'wordsgiven',
            required:true
        }
        
    ]
    
    },{
        name:'Pro Writer',
        desc:'An AI tool to help you write shayari, songs or poems and even rap in the language of your choice.',
        category:'Helper',
        icon:Mic2Icon,
        aiPrompt:'Create a givenArt in the givenlang on the givenTopic if given. If the givenTopic is bad or too graphic make a really simple one on the same topic ',
        slug:'generate-poem',
        form:[{
            label:'What do you want? Song/Shayari/Poem/Rap',
            field:'input',
            name:'givenArt',
            required:true
        },
        {
            label:'Language you want it in?',
            field:'input',
            name:'givenlang',
            required:true
        },
        {
            label:'Any topics you want it on?',
            field:'input',
            name:'givenTopic',
            required:false
        }
        
    ]
    
    },{
        name:'Workout Buddy',
        desc:'An AI tool to help you generate a workout schedule based on your needs.',
        category:'Helper',
        icon:Dumbbell,
        aiPrompt:'Create a workout schedule with diet schedule focusing on givenPart. Create both vegetarian diet and non veg. Make it depending in user givenWeight in kilograms and givenHeight in centimeter and the time they can give as givenTime. Assume they only have givenAcc as the accessories to workout if gym is written then assume all the accessories of a regular gym.',
        slug:'generate-workout',
        form:[{
            label:'What do you wanna focus on?  Weight loss/Bulking/Body Building/Anything else',
            field:'input',
            name:'givenPart',
            required:true
        },
        {
            label:'How much is your weight(in kg)',
            field:'input',
            name:'givenWeight',
            required:true
        },{
            label:'How much is your height(in cm)',
            field:'input',
            name:'givenHeight',
            required:true
        },
        {
            label:'How much time can you give?(hours/week)',
            field:'input',
            name:'givenTime',
            required:false
        },
        {
            label:'What Accessories do you have.(Write Gym if you go to Gym)',
            field:'input',
            name:'givenAcc',
            required:false
        }
        
    ]
    
    },{
        name:'Text Summarizer',
        desc:'An AI tool to summarize any piece of text. Just paste it in and get a detailed summary.',
        category:'Helper',
        icon:IconBook2,
        aiPrompt:'Write the bulletwise summary of the givenText or if the givenText is name of a story, find it and summarize it.',
        slug:'generate-summary',
        form:[{
            label:'Enter the Text',
            field:'textarea',
            name:'givenText',
            required:true
        }
    ]
    
    },{
        name:'Resume Optimization',
        desc:'An AI tool to optimize your resume fully based on the company description and tailor it accordingly.',
        category:'jobhunt',
        icon:FileCode,
        aiPrompt:'Judge this givenResume resume according to the givenDesc job description and the givenJob Job they are applying to if given else choose the job description of the givenCompany from the internet also tell all the missing skills and shortcomings along with strong points.',
        slug:'resume-review',
        form:[{
            label:'Company name?',
            field:'input',
            name:'givenCompany',
            required:true
        },
        {
            label:'What Job are you applying for',
            field:'input',
            name:'givenJob',
            required:true
        },{
            label:'Your Resume(Copy Paste the content here)',
            field:'textarea',
            name:'givenResume',
            required:true
        },{
            label:'Job Description(Optional)',
            field:'textarea',
            name:'givenDesc',
            required:false
        }
    ]
    
    },{
        name:'Cold Mail',
        desc:'An AI tool to generate cold emails for employees or HRs to make job hunting a little easier',
        category:'jobhunt',
        icon:IconBrandGmail,
        aiPrompt:'Write a cold email for givenJob as job based on givenResume as resume and make it detailed. Make it directed towards a HR or employee from givenCompany company.',
        slug:'cold-mail',
        form:[{
            label:'Company name?',
            field:'input',
            name:'givenCompany',
            required:true
        },
        {
            label:'What Job are you applying for',
            field:'input',
            name:'givenJob',
            required:true
        },{
            label:'Your Resume(Copy Paste the content here)',
            field:'textarea',
            name:'givenResume',
            required:true
        }
    ]
    
    },{
        name: 'Content Writer',
        desc: 'Want to write content for your organisation or any project. Slanine has a great tool for it',
        icon:PenIcon,
        category: 'Marketing',
       
        slug: 'content-writer',
        aiPrompt: 'Be a content writer and write content based on givenTopic. Make it wih 0 AI plagiarism',
        form: [
            {
                label: 'Your topic?',
                field: 'input',
                name: 'givenTopic',
                required:true
            },
        ]
    },{
      name: "Movie Recommender",
      desc: "An AI tool to recommend you movies based on your preferences and likes.",
      icon: TowerControl,
      category: "Helper",
  
      slug: "movie-recommender",
      aiPrompt:
        "Recommend a movie for the givenType type of movie and the givenMood mood of the user. Also consider the givenPreferences preferences if given.",
      form: [
        {
            label: "Type of the movie?",
            field: "input",
            name: "givenType",
            required: true,
        },
        {
            label: "Whats your mood now?",
            field: "input",
            name: "givenMood",
            required: true,
        },
        {
          label: "Any other preferences?",
          field: "input",
          name: "givenPreferences",
        }
      ],
    },
]

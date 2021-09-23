export { validData }



const dummyData = [
    {
        question: "What is the name of David Hasselhoff's hit from 2015?",
        answers: [
            {answer: "True Survivor", right: true},
            {answer: "I've been looking for freedom", right: false},
            {answer: "Jump in my car", right: false},
            {answer: "The Hoff", right: false}
        ]
    },
    {
        question: "What is the name of the famous Uwe Boll movie from 2005?",
        answers: [
            {answer: "Survivor", right: false},
            {answer: "The King's men", right: false},
            {answer: "Alone in the dark", right: true},
            {answer: "Dark temptation", right: false}
        ]
    },
    {
        question: "When did Balázs Pali recieve The Zámbó Jimmy prize?",
        answers: [
            {answer: "2009", right: false},
            {answer: "2014", right: false},
            {answer: "2002", right: false},
            {answer: "2011", right: true}
        ]
    },
    {
        question: "Who won the UEFA European Championship in 2004?",
        answers: [
            {answer: "Spain", right: false},
            {answer: "Greece", right: true},
            {answer: "France", right: false},
            {answer: "Germany", right: false}
        ]
    },
    {
        question: "What was title of Las Ketchup's summer hit in 2002?",
        answers: [
            {answer: "Ketch Up", right: false},
            {answer: "Catch Up", right: false},
            {answer: "The Catch Me Song", right: false},
            {answer: "The Ketchup Song", right: true}
        ]
    },
    {
        question: "Which day of the week did Rebecca Black write a song about?",
        answers: [
            {answer: "Friday", right: true},
            {answer: "Sunday", right: false},
            {answer: "Saturday", right: false},
            {answer: "Monday", right: false}
        ]
    },
    {
        question: "Which one of the followings is not an Ákos song?",
        answers: [
            {answer: "Perfect Love", right: false},
            {answer: "Szívsebész", right: false},
            {answer: "A magány fátylán át", right: true},
            {answer: "Idelenn idegen", right: false}
        ]
    },
    {
        question: "Which one of the followings is a Guy Ritchie movie?",
        answers: [
            {answer: "Perfect Gentleman", right: false},
            {answer: "Swept Away", right: true},
            {answer: "The Fanboy", right: false},
            {answer: "Rolling the Barrels", right: false}
        ]
    },
]


const popMusic = [
    {
        question: "Which was best selling pop album of all time",
        answers: [
            {answer: "Back in Black - AC/DC", right: false},
            {answer: "Thriller - Michael Jackson", right: true},
            {answer: "Hotel California - Eagles", right: false},
            {answer: "Rumours - Fleetwood Mac", right: false}
        ]
    },
    {
        question: "Which formation had the most viewers at a concert from the followings?",
        answers: [
            {answer: "The Rolling Stones", right: false},
            {answer: "Queen", right: false},
            {answer: "Bruce Springsteen", right: true},
            {answer: "Madonna", right: false}
        ]
    },
    {
        question: "Which formation had the most album sales from the following ones in 2019?",
        answers: [
            {answer: "Tool", right: false},
            {answer: "Jonas Brothers", right: true},
            {answer: "Backstreet Boys", right: false},
            {answer: "BTS", right: false}
        ]
    },
]

const placeHolder = [
    {
        question: "I am a placeholder",
        answers: [
            {answer: "I am a wrong question", right: false},
            {answer: "I'm worth: +100pts", right: true},
            {answer: "I am also a wrong question!", right: false},
            {answer: "Choose the second one!", right: false}
        ]
    },

]


const validData ={
    "General" : dummyData,
    "Pop music" : popMusic,
    "Placeholder": placeHolder,
}
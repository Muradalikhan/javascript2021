const INITIAL_STATE={
    userName:'Murad khan'
}

const QUIZ_DATA=[
    {
        question:'question 1',
        option:['1','2','3','4'],
        answer:'1'
    },
    {
        question:'question 2',
        option:['1','2','3','4'],
        answer:'2'
    },
    {
        question:'question 3',
        option:['1','2','3','4'],
        answer:'3'
    },
]

const reducer=(state=QUIZ_DATA)=>state

export default reducer
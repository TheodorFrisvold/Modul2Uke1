/**
* Model
**/

const model = {
    // page navigation
    router: {
        homepage: "statistics",
        activePage: 'admin-panel',
    },
    //activepage input storage
    input: {                                
        adminPanel: {
            dateFrom: "",
            dateTo: "",
            surveyQuestion: "",
            inputAlternative: "",           //inputfield for new alternatives
            answerAlternatives: [],         //array placeholder for alternatives
            alternativeText: false,         //alt text true/false
        },
        surveyPanel : {
            alternativeText: "",
            selectedAnswer: null,
        },
        statisticsPanel: {
            selectedSurvey: 1,                  //uses id from datastorage surveys
        },   
    }, 
    /*
    *  Dummy DataStorage 
    */
    data : {
        users: [                               // AD-users
        {
            userId: 1,
            userName: "john@mail.com",
            firstName: "john",
            lastName: "smith",
            adresse: {
                postNr: "2888",
                streetAdresse: "milkyway 3",
            }
        }
    ],
    surveys: [                              //Array examples of pushed obj from Admin page
       {
           id: 1,
           emails: [
               "john@mail.com",
               "anders@mail.com"
           ],
           dateFrom: "12/08-2021",
           dateTo: "16/08-2021",
           surveyQuestion: "Passer det med julebord på fredag den 13.12",
           answerArray: [
               "Ja",
               "Nei",
           ],
           alternativeText: false,
       },
       {
        id: 2,
        emails: [
            "john@mail.com",
            "anders@mail.com"
        ],
        dateFrom: "10/08-2021",
        dateTo: "18/08-2021",
        surveyQuestion: "overtid på lørdag?",
        answerArray: [
            "NEI",
            "ja",
            "vi får se",
        ],
        alternativeText: false,
    }
    ],
    // answers from each partisipant of X survey
    surveyAnswers: [            
        {
            surveyId: 1,
            userId: "john@gmail.com",
            answer: "ja",
        }
    ]},
   
}


//  submit process:
//
// onSubmit={() => {
// selectedAnswere !== null ?
//     submit(
//      // id/selectedAnswer/mail -> surveyAnswers
//       () => navigation.push("statistics")
//     ) : null, errorHandler()
//   }}
import update from 'react-addons-update'

const initquestionScore = {    
    score: [
      {question0 : -1}, 
      {question1 : -1},
      {question2 : -1},
      {question3 : -1},
      {question4 : -1},
      {question5 : -1},
      {question6 : -1},
      {question7 : -1},
      {question8 : -1},
      {question9 : -1}     
    ]
}

const questionScore = (state = initquestionScore, action) => {    
    switch(action.type){        
        case 'question0' :     
            return update(state, { 
                score: { 
                    0: {
                        question0: {$set: action.value}
                    }
                }
            });                                                    
        case 'question1' :           
            return update(state, { 
                score: { 
                    1: {
                        question1: {$set: action.value}
                    }
                }
            }); 
        case 'question2' :
            return update(state, { 
                score: { 
                    2: {
                        question2: {$set: action.value}
                    }
                }
            }); 
        case 'question3' :
            return update(state, { 
                score: { 
                    3: {
                        question3: {$set: action.value}
                    }
                }
            }); 
        case 'question4' :
            return update(state, { 
                score: { 
                    4: {
                        question4: {$set: action.value}
                    }
                }
            }); 
        case 'question5' :
            return update(state, { 
                score: { 
                    5: {
                        question5: {$set: action.value}
                    }
                }
            }); 
        case 'question6' :
            return update(state, { 
                score: { 
                    6: {
                        question6: {$set: action.value}
                    }
                }
            }); 
        case 'question7' :
            return update(state, { 
                score: { 
                    7: {
                        question7: {$set: action.value}
                    }
                }
            }); 
        case 'question8' :
            return update(state, { 
                score: { 
                    8: {
                        question8: {$set: action.value}
                    }
                }
            }); 
        case 'question9' :
            return update(state, { 
                score: { 
                    9: {
                        question9: {$set: action.value}
                    }
                }
            }); 
        default : 
            return state            
    }
}

export default questionScore
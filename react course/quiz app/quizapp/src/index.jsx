import React from 'react';
import ReactDOM from 'react-dom';
import './assets/style.css';
import QuizService from './quizService'
import QuestionBox from './component/questionbox';
import GetResult from './component/result';



class Quizbee extends React.Component {
    constructor(){
        super();
        this.state={
            questionBank : [],
            score: 0,
            responses: 0
        }
       
    }
    getquestions =()=> {
      
            QuizService().then(question => {
                this.setState({
                    questionBank: question
                })
        })
    };

    computeAnswer = (answer, correct)=>{
        if(answer === correct){
            this.setState({
                score: this.state.score+1
            })
        }
        
            this.setState({
                responses: this.state.responses <5 ? this.state.responses+1 : 5
            })


    };
    playAgain =()=> {
        {
            this.getquestions()
        }
        {
            this.setState({
            score:0,
            responses:0
        })}

    }
    
    componentDidMount(){
        this.getquestions();
    }
    render(){
        return (
            <div className="container">
                <div className="title">
                     QuizBee
                </div>
                {this.state.questionBank.length > 0 && 
                this.state.responses <5 &&
                this.state.questionBank.map(
                    ({question, questionId, correct, answers}) =>
                    <QuestionBox 
                    question={question} 
                    option={answers} 
                    key={questionId}
                    selected={answer =>this.computeAnswer(answer , correct)}
                    />)
                }
                {
                    this.state.responses ===5 ? <GetResult score={this.state.score} playagain={this.playAgain} /> : null 
                }
               
            </div>
        )
    }
}

ReactDOM.render(<Quizbee/>, document.getElementById('root'))
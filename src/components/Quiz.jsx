import { useCallback, useState } from 'react'
import data from '../data'
import quizLogo from '../assets/images-removebg-preview.png'
import QuestionTimer from './QuestionTimer';
import Modal from './modal/Modal';

const Quiz = () => {
    const [userAnswer, setUserAnswer] = useState([]);
    const [score, setScore] = useState(0);
    const [correctAnswer, setCorrectAnswer] = useState(0);
    // const [showTimer, setShowtimer] = useState(true);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [isCorrect, setIsCorrect] = useState();
    const activeQuestionIndex = userAnswer.length;
    const quizIsComplete = activeQuestionIndex === data.length;

    const handleSelectAnswer = useCallback(function handleSelectAnswer(answer,skipAfterSubmittingAnswer) {
        // setShowtimer(false)
        setSelectedAnswer(answer)
        data[activeQuestionIndex].options.filter(option => {
            if(option === data[activeQuestionIndex].answer){
                setCorrectAnswer(option);
            }
        })
        
        if(answer === data[activeQuestionIndex].answer){
            setScore(prev=>prev+1)
            setIsCorrect(true)
        }else{
            setIsCorrect(false)
        }

        setTimeout(() => {
            setUserAnswer((prevAnswer) => {
                return [...prevAnswer, answer]
            })
            // setShowtimer(true)
        }, skipAfterSubmittingAnswer);
        
    }, [userAnswer]);

    const handleSkipAnswer = useCallback(() => handleSelectAnswer(null,0), [])


    if(quizIsComplete){
        return <Modal show={quizIsComplete} score={score}/>
    }
    return (
        <div className="box">
            <div className="container">
                <div className="top">
                    <div className="left"><img src={quizLogo} alt="quiz logo" className='quiz-logo'/></div>
                    <div className="center"></div>
                    <div className="right">
                        <span>{data[activeQuestionIndex].id} of {data.length}</span>
                        <span>score:{score}</span>
                    </div>
                </div>

                <div className="ques">
                    <h2>Q. {data[activeQuestionIndex].question}</h2>
                </div>
                <div className="options">
                    <div className="cards">
                        {data[activeQuestionIndex].options.map((option) => (
                            <button key={option} className="card" style={{border:selectedAnswer === option ? (isCorrect ? '4px solid green' : '4px solid red') :correctAnswer === option ? '4px solid green' : '1px solid white'}} onClick={() => handleSelectAnswer(option,1000)}>
                                <span>{option}</span>
                            </button>
                        ))}
                    </div>
                </div>
                {/* {(showTimer)&& */}
                <QuestionTimer
                        key={activeQuestionIndex}
                        timeOut={15000}
                        onTimeOut={handleSkipAnswer} />
                        {/* } */}
                
            </div>
        </div>
    )
}

export default Quiz
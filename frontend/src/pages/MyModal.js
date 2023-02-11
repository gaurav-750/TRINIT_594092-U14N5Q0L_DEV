import React, { useEffect, useState } from 'react';
import Preloader from '../components/preloader/Preloader';
require("./myModal.css");
let CRIMINAL_RIDDLES_1 = require('../static/images/CRIMINAL-RIDDLES-1.jpg');
let CRIMINAL_RIDDLES_2 = require('../static/images/CRIMINAL-RIDDLES-2.jpg');
// import { useHistory } from "react-router-dom";

const MyModal = () => {
  const [ans, setAns] = useState("");
  const [questionIndex, setQuestionIndex] = useState(0);
  const [attemptsLeft, setAttemptsLeft] = useState(3);
  const [showSuccess, setShowSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(true);


  let hasAlreadyAnswered = localStorage.getItem('hasAlreadyAnswered');

  // console.log("hasAlreadyAnswered ", hasAlreadyAnswered);

  // const history = useHistory();

  const onChangeAns = (e) => {
    e.preventDefault();
    setAns(e.target.value);
  };


  const questions = [
    {
      image: CRIMINAL_RIDDLES_2,
      question: '',
      answer: 'A',
      quote: 'Crime is common. Logic is rare. Therefore it is upon the logic rather than upon the crime that you should dwell'
    },
    {
      image: CRIMINAL_RIDDLES_1,
      question: 'Decrypt the message',
      answer: '11',
      quote: 'John and Robert will be the next I am not afraid'
    },
    {
      image: '',
      question: 'On a cold winter day, there was a man standing in front of someone’s house. He didn’t move until the spring, and the owner didn’t mind. Eventually, the man left. Who was he?',
      answer: 'snowman',
      quote: 'To a great mind, nothing is little'
    },
    {
      image: '',
      question: 'Every day, a woman was seen crossing the border carrying bags of sand on a motorbike. After some time, the border police become suspicious and stop her, but found she only had sand on her, so they let her go. What was the woman smuggling across the border?',
      answer: 'Motorbikes',
      quote: 'Crime is common. Logic is rare'
    },
  ];

  // My name is Sherlock Holmes. It is my business to know what other people do not know
  // I abhor the dull routine of existence. I crave for mental exaltation. That is why I have chosen my own particular profession, or rather created it, for I am the only one in the world.
  // A good detective knows that every task, every interaction, no matter how seemingly banal, has the potential to contain multitudes
  // When you have eliminated the impossible, whatever remains, however improbable, must be the truth?
  // is a capital mistake to theorize before one has data. Insensibly one begins to twist facts to suit theories, instead of theories to suit facts
  // You see, but you do not observe.



  const handlePreviousQuestion = (e) => {
    e.preventDefault();
    if (questionIndex > 0) {
      setQuestionIndex(questionIndex - 1);
    }
  };

  const handleNextQuestion = (e) => {
    e.preventDefault();
    if (questionIndex < questions.length - 1) {
      setQuestionIndex(questionIndex + 1);
    }
  };


  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2500);
  }, [])

  if (isLoading) {
    return <Preloader />
  }


  const submitAns = (e) => {
    e.preventDefault();
    if(ans.toLowerCase() == questions[questionIndex].answer.toLowerCase()){
      setShowSuccess(true)

      // Child1 = React.forwardRef((props, ref) => {
      //     return <div id="toast-success" className="flex items-center w-full max-w-xs p-4 mb-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800" role="alert">
      //     <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-green-500 bg-green-100 rounded-lg dark:bg-green-800 dark:text-green-200">
      //         <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
      //         <span className="sr-only">Check icon</span>
      //     </div>
      //     <div className="ml-3 text-sm font-normal">Item moved successfully.</div>
      //     <button type="button" className="ml-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700" data-dismiss-target="#toast-success" aria-label="Close">
      //         <span className="sr-only">Close</span>
      //         <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
      //     </button>
      // </div>
      // {/* <div id="toast-danger" className="flex items-center w-full max-w-xs p-4 mb-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800" role="alert">
      //     <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-red-500 bg-red-100 rounded-lg dark:bg-red-800 dark:text-red-200">
      //         <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
      //         <span className="sr-only">Error icon</span>
      //     </div>
      //     <div className="ml-3 text-sm font-normal">Item has been deleted.</div>
      //     <button type="button" className="ml-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700" data-dismiss-target="#toast-danger" aria-label="Close">
      //         <span className="sr-only">Close</span>
      //         <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
      //     </button>
      // </div> */}
      // {/* <div id="toast-warning" className="flex items-center w-full max-w-xs p-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800" role="alert">
      //     <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-orange-500 bg-orange-100 rounded-lg dark:bg-orange-700 dark:text-orange-200">
      //         <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd"></path></svg>
      //         <span className="sr-only">Warning icon</span>
      //     </div>
      //     <div className="ml-3 text-sm font-normal">Improve password difficulty.</div>
      //     <button type="button" className="ml-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700" data-dismiss-target="#toast-warning" aria-label="Close">
      //         <span className="sr-only">Close</span>
      //         <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
      //     </button>
      // </div> */}
      
      
      //       // </div>
      // });
    }else{
      setAttemptsLeft((attemptsLeft) => attemptsLeft - 1);
      // if(attemptsLeft <= 0){
      //   Child1 = React.forwardRef((props, ref) => {
      //       return  <div id="toast-danger" className="flex items-center w-full max-w-xs p-4 mb-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800" role="alert">
      //       <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-red-500 bg-red-100 rounded-lg dark:bg-red-800 dark:text-red-200">
      //           <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
      //           <span className="sr-only">Error icon</span>
      //       </div>
      //       <div className="ml-3 text-sm font-normal">Item has been deleted.</div>
      //       <button type="button" className="ml-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700" data-dismiss-target="#toast-danger" aria-label="Close">
      //           <span className="sr-only">Close</span>
      //           <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
      //       </button>
      //   </div> 
      //   {/* <div id="toast-warning" className="flex items-center w-full max-w-xs p-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800" role="alert">
      //       <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-orange-500 bg-orange-100 rounded-lg dark:bg-orange-700 dark:text-orange-200">
      //           <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd"></path></svg>
      //           <span className="sr-only">Warning icon</span>
      //       </div>
      //       <div className="ml-3 text-sm font-normal">Improve password difficulty.</div>
      //       <button type="button" className="ml-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700" data-dismiss-target="#toast-warning" aria-label="Close">
      //           <span className="sr-only">Close</span>
      //           <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
      //       </button>
      //   </div> */}
        
        
      //         // </div>
      //   });
      // }
      alert(`Wronge Submission! Total chances Left : ${attemptsLeft - 1}`)
    }
  }


  if (attemptsLeft <= 0 || hasAlreadyAnswered != null || hasAlreadyAnswered == true) {
    localStorage.setItem('hasAlreadyAnswered', true);
    return (
      <div className="flex items-center justify-center bg-[#340404] min-w-screen min-h-screen p-10 bg-black-500 text-white text-center overflow-hidden">
        <div className="App canvas">
          <h3 className="lost">GAME OVER</h3>
          <div className="container">
            <h4 className="note">Can't Apply! </h4>
            <section>
              <div className='blooddrop'></div>
              <div className='blooddrop'></div>
              <div className='blooddrop'></div>
              <div className='blooddrop'></div>
              <div className='blooddrop'></div>
              <div className='blooddrop'></div>
              <div className='blooddrop'></div>
              <div className='blooddrop'></div>
              <div className='blooddrop'></div>
              <div className='blooddrop'></div>
            </section>
          </div>
        </div>
      </div>
    );
  }

  if (showSuccess) {
    setTimeout(function() {
      window.location.replace('/login');
    }, 3000);
    
    return (
      <div className=" flex items-center bg-black-500 min-w-screen min-h-screen text-white text-center justify-center align-items-center">
        <div id="toast-success" className="flex items-center w-full max-w-xs p-4 mb-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800" role="alert">
          <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-green-500 bg-green-100 rounded-lg dark:bg-green-800 dark:text-green-200">
            <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
            <span className="sr-only">Check icon</span>
          </div>
          <div className="ml-3 text-md font-normal"> Impressive, your observation skills are noteworthy.</div>
          {/* <button type="button" className="ml-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700" data-dismiss-target="#toast-success" aria-label="Close">
            <span className="sr-only">Close</span>
            <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
          </button> */}
        </div>
      </div>
    );
  }


  return (
    // <div className='min-h-screen bg-[#340404] justify-center align-items-center' >
      <div className="flex items-center justify-center min-h-screen p-5 bg-[#340404] min-w-screen">

        <div className={`relative top-1/2 left-7 disabled:opacity-75`}>
          <button className={`rounded-full px-4 py-4 bg-white disabled:bg-gray-500 disabled:opacity-100`} disabled={questionIndex == 0} onClick={handlePreviousQuestion}> 
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
            </svg>
          </button>
        </div>


        <div className="max-w-xl p-8 text-center text-gray-800 bg-[#ffcfcf] shadow-xl lg:max-w-3xl rounded-3xl lg:p-12 overflow-auto">
          <h3 className="text-4xl text-red-600 mb-4 ">Solve the Riddle To Be Able to Apply!</h3>
          {/* <div className="flex justify-center">
                    <svg className="w-32 h-32" viewBox="0 0 50 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M42.2285 0C40.3812 4.92e-05 38.7061 0.741775 37.4785 1.94141H18.4102C18.3787 1.94141 18.3493 1.94909 18.3184 1.95117C18.1298 1.94236 17.9327 1.91521 17.6641 1.97656C17.5086 2.01156 17.3074 2.10876 17.1797 2.28516C17.052 2.46106 17.0156 2.66417 17.0156 2.85547V3.20898C17.0101 3.25944 17 3.30955 17 3.36133V4.11719L17.0156 4.12695V19.9551C17.0156 20.1414 17.0477 20.3306 17.1484 20.502C17.2492 20.6734 17.4182 20.7996 17.5723 20.8613C17.8803 20.9847 18.1304 20.9551 18.3789 20.9551H45.6523C46.0097 20.9551 46.3585 20.8387 46.6152 20.5977C46.872 20.3565 47.0156 19.9997 47.0156 19.627V11.6309C48.2595 10.3975 49.0312 8.69075 49.0312 6.80469C49.0313 3.05339 45.9798 0 42.2285 0ZM42.2285 1C45.4394 1 48.0313 3.59389 48.0312 6.80469C48.0312 10.0156 45.4394 12.6074 42.2285 12.6074C39.0177 12.6074 36.4238 10.0156 36.4238 6.80469C36.4238 3.59389 39.0176 1.0001 42.2285 1ZM42.2285 1.91992C39.5376 1.91992 37.3457 4.11389 37.3457 6.80469C37.3457 9.49559 39.5377 11.6874 42.2285 11.6875C44.9194 11.6875 47.1113 9.49559 47.1113 6.80469C47.1114 4.11389 44.9194 1.91992 42.2285 1.91992ZM42.2285 2.91992C44.379 2.91992 46.1113 4.65429 46.1113 6.80469C46.1113 8.95509 44.3789 10.6875 42.2285 10.6875C40.0781 10.6874 38.3457 8.95509 38.3457 6.80469C38.3457 4.65429 40.0781 2.91992 42.2285 2.91992ZM18.3496 2.95312C18.3775 2.9531 18.3771 2.95312 18.4102 2.95312H36.625C35.8693 4.04923 35.4238 5.37598 35.4238 6.80469C35.4238 8.17802 35.8362 9.45503 36.5391 10.5254L32.2715 13.6211L32.2539 13.6387C32.1417 13.7387 32.0985 13.7439 32.0605 13.7441C32.0226 13.7443 31.9342 13.7282 31.7715 13.6094L18.043 3.61328L18.0156 3.5957V3.27734C18.0495 3.10235 18.1792 2.97857 18.3496 2.95312ZM44.6426 4.63672C44.513 4.63827 44.389 4.69009 44.2969 4.78125L41.1934 7.77148L40.1602 6.77539C40.1131 6.72883 40.0574 6.69206 39.996 6.66721C39.9347 6.64236 39.8691 6.62993 39.8029 6.63064C39.7368 6.63134 39.6714 6.64517 39.6106 6.67132C39.5498 6.69747 39.4949 6.73542 39.4489 6.78298C39.4028 6.83053 39.3667 6.88674 39.3426 6.94835C39.3185 7.00996 39.3068 7.07575 39.3083 7.1419C39.3098 7.20805 39.3244 7.27324 39.3513 7.33371C39.3782 7.39417 39.4167 7.4487 39.4648 7.49414L40.8457 8.82617C40.9389 8.91579 41.0631 8.96586 41.1924 8.96586C41.3217 8.96586 41.4459 8.91579 41.5391 8.82617L44.9902 5.5C45.0632 5.43099 45.1137 5.34161 45.1351 5.2435C45.1565 5.14539 45.1479 5.04311 45.1104 4.94995C45.0729 4.8568 45.0082 4.7771 44.9248 4.72124C44.8413 4.66537 44.743 4.63592 44.6426 4.63672V4.63672ZM18.0156 4.83203L31.1836 14.418C31.4501 14.6121 31.7434 14.7459 32.0664 14.7441C32.3894 14.7441 32.6876 14.5913 32.918 14.3867L37.1523 11.3164C38.3998 12.7173 40.2098 13.6074 42.2285 13.6074C43.6296 13.6074 44.9323 13.18 46.0156 12.4512V19.627C46.0156 19.7646 45.9788 19.8212 45.9297 19.8672C45.8806 19.9132 45.7986 19.9551 45.6523 19.9551H18.3789C18.1652 19.9551 18.0614 19.9415 18.0156 19.9375V4.83203Z"
                            fill="url(#paint0_linear)" />
                        <rect y="5" width="15" height="2" rx="1" fill="#3BB54A" />
                        <rect y="11" width="15" height="2" rx="1" fill="#3BB54A" />
                        <rect y="8" width="6" height="2" rx="1" fill="#3BB54A" />
                        <rect y="15" width="6" height="2" rx="1" fill="#3BB54A" />
                        <rect x="8" y="8" width="6" height="2" rx="1" fill="#3BB54A" />
                        <rect x="8" y="15" width="6" height="2" rx="1" fill="#3BB54A" />
                        <defs>
                            <linearGradient id="paint0_linear" x1="16.9996" y1="10.4791" x2="47.0156" y2="10.4791"
                                gradientUnits="userSpaceOnUse">
                                <stop stop-color="#009217" />
                                <stop offset="1" stop-color="#00FF29" />
                            </linearGradient>
                        </defs>
                    </svg>
                </div> */}
          {questions[questionIndex].image.length > 0 ? <img src={questions[questionIndex].image} alt="img" /> : <></> }
          <p className="text-2xl my-4">Who's the culprit ?</p>
          <p className="text-2xl my-4">{questions[questionIndex].question}</p>
          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
              <label className="text-2xl block text-white-200 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-full-name">
                Answer :
              </label>                                  
            </div>
            <div className="md:w-2/3">
              <input className="bg-grey-200 appearance-none border-2 border-red-500 rounded w-full py-2 px-4 text-white-700 leading-tight focus:outline-none focus:bg-white focus:border-red-500" id="inline-full-name" type="text" placeholder="Enter answer here" value={ans} onChange={onChangeAns} />
            </div>
          </div>
          <div className="mt-4">
            <button 
            disabled={hasAlreadyAnswered != null || hasAlreadyAnswered == true || attemptsLeft <= 0} 
            className="mb-4 px-4 py-3 text-white-200 bg-[#FF0000] hover:bg-[#ff0000ad] rounded" 
            onClick={submitAns}>
              Submit Answer</button>
            {/* 
              <p className="mt-4 text-sm">If you’re having trouble clicking the "Verify Email Address" button, copy
                and
                paste
                the URL below
                into your web browser:
                <a href="" className="text-blue-600">http://localhost:8000/email/verify/3/1ab7a09a3</a>
              </p> 
            */}
            {/* <p className="text-md">“  ” - (Det.) Sherlock Holmes</p> */}
            <p className="text-md"> <q>{questions[questionIndex].quote}</q> - <cite className="text-red-500">(Det.) Sherlock Holmes</cite></p>
          </div>
        </div>


        <div className={`relative top-1/2 right-7 {questionIndex == questions.length - 1  ? disable bg-grey-700 : "" }`}>
          <button className={`rounded-full px-4 py-4 bg-white disabled:bg-gray-500 disabled:opacity-100`} disabled={questionIndex == questions.length - 1} onClick={handleNextQuestion}> 
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
            </svg>
          </button>
        </div>

    </div> 
  )
}

export default MyModal
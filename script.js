'use strict';

// Selecting Elements 
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El =document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const diceEl =document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// Starting Conditions
let  scores ,currentScore,activePlayer,playing;
const inIt = function()
{   
    scores =[0,0];
    currentScore = 0 ;
    activePlayer = 0 ;
    playing =true;
    score0El.textContent=0;
    score1El.textContent=0;
    diceEl.classList.add('hidden');
    current0El.textContent=0;
    current1El.textContent=0;
    player0El.classList.remove('player--winner');
    player1El.classList.remove('player--winner');
    player0El.classList.add('player--active');
    player1El.classList.remove('player--active');
}
inIt();


// Player 0 indicates player 1 and 0 to player 2

const switchPlayer = function()
{
       document.getElementById(`current--${activePlayer}`).textContent =0;
       activePlayer=activePlayer===0 ? 1 : 0 ;
       currentScore=0;
       player0El.classList.toggle('player--active')
       player1El.classList.toggle('player--active')
}
//Rolling dice functionality

btnRoll.addEventListener('click',function()
{   
    if(playing){
    //Generating a random dice roll
    const dice = Math.trunc(Math.random()*6)+1;

    //Display dice
    diceEl.classList.remove('hidden');
    diceEl.src=`dice-${dice}.png`;

    // Check for rolled 1
    if(dice !== 1)
    {
    currentScore += dice;
    document.getElementById(`current--${activePlayer}`).textContent = currentScore;
    }else{
       // switch to next player
      switchPlayer();
    }
}
})
btnHold.addEventListener('click',function()
{   
    if(playing)
    {
    // Add current score to active player score
    scores[activePlayer]+=currentScore;
    document.getElementById(`score--${activePlayer}`).textContent=scores[activePlayer];
    // Check if plater's score is>50;
    if(scores[activePlayer]>=50)
    {   
        playing=false;
        diceEl.classList.add('hidden');
        document.querySelector(`.player--${activePlayer}`).classList.remove('player--active')
        document.querySelector(`.player--${activePlayer}`).classList.add('player--winner')
    }
    // if not change the player 
    switchPlayer();
}
})
btnNew.addEventListener('click',inIt);











































// let dice ;
// const rollDice = function()
// {
//    dice = Math.trunc(Math.random()*6)+1
// }
// let activePlayer =1;
// const diceImage  =document.querySelector('.dice')
// let curScore  =document.querySelector('#current--0');
// let holdScore =document.querySelector('#score--0')
// const updateCurrentScore = function(score)
// {   
//     if(score===1)
//     {
//       curScore.textContent=0;
//       switchPlayer();
//     }
//     else{
//     const oldCurScore =Number(curScore.textContent);
//     curScore.textContent=score+oldCurScore;
//     }
// }
// const switchPlayer = function()
// {
//        if(activePlayer===1)
//        {
//          curScore  =document.querySelector('#current--1');
//          holdScore =document.querySelector('#score--1')
//          const section1 =document.querySelector('#Section1')
//          section1.classList.remove('player--active')
//          const section2 =document.querySelector('#Section2')
//          section2.classList.add('player--active')
//          activePlayer=2;
//        }else{
//         curScore=document.querySelector('#current--0');
//         holdScore=document.querySelector('#score--0')
//         const section2 =document.querySelector('#Section2')
//         section2.classList.remove('player--active')
//         const section1 =document.querySelector('#Section1')
//         section1.classList.add('player--active')
//         activePlayer=1;
//        }
// }
// const holdTheScore = function()
// {   
//     const addscore =Number(curScore.textContent);
//     const oldHoldScore = Number(holdScore.textContent);
//     holdScore.textContent=oldHoldScore+addscore;
//     if(holdScore.textContent>=50)
//     {
//         if(activePlayer===1)
//         {
//         const section1 =document.querySelector('#Section1')
//         section1.classList.remove('player--active')
//         section1.classList.add('player--winner')
//         }else{
//             const section2 =document.querySelector('#Section2')
//             section2.classList.remove('player--active')
//             section2.classList.add('player--winner')
//         }
//     }else{
//         curScore.textContent=0;
//         switchPlayer();
//     }
// }
// const newGame =function()
// {
//     curScore.textContent=0;
//     holdScore.textContent=0;
//     switchPlayer();
//     curScore.textContent=0;
//     holdScore.textContent=0;
// }
// document.querySelector('.btn--hold').addEventListener('click',holdTheScore)
// document.querySelector('.btn--new').addEventListener('click',newGame);
// document.querySelector('.btn--roll').addEventListener('click',function()
// {   
//      rollDice();
//      switch(dice)
//      {
//          case 1 : diceImage.src="dice-1.png";
//                   break;
//          case 2 : diceImage.src="dice-2.png";
//                   break;
//          case 3 : diceImage.src="dice-3.png";
//                   break;
//          case 4 : diceImage.src="dice-4.png";
//                   break;
//          case 5 : diceImage.src="dice-5.png";
//                   break;
//          case 6 : diceImage.src="dice-6.png";
//                   break;         
//      }
//     updateCurrentScore(dice);
// });

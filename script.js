'use strict';

const score0=document.querySelector('#score--0');
const score1=document.querySelector('#score--1');
const dice=document.querySelector('.dice');
const curr0=document.querySelector('#current--0');
const curr1=document.querySelector('#current--1');
const active=document.querySelector('.player--active');
const player0=document.querySelector('.player--0');
const player1=document.querySelector('.player--1');

const btnNew=document.querySelector('.btn--new');
const btnRoll=document.querySelector('.btn--roll');
const btnHold=document.querySelector('.btn--hold');

let scores,currscore,active_player,play;
function init()
{
    //starting

score0.textContent=0;
score1.textContent=0;
curr0.textContent=0;
curr1.textContent=0;
dice.classList.add('hidden');  

player0.classList.add('player--active');
scores=[0,0];  //final scores
currscore=0;
active_player=0;
play=true;             //to stop game after win
player0.classList.remove('player--winner');
player1.classList.remove('player--winner');    

}

init();


//rolling dice

function change_player()
{
    if(active_player==0)
        {
            curr0.textContent=0;
            active_player=1;
        }
        else
        {
            
            curr1.textContent=0;
            active_player=0;
        }
        currscore=0;
        player1.classList.toggle('player--active');
        player0.classList.toggle('player--active');
}


btnRoll.addEventListener('click',function(){

    if(play)
    {
        const dice_val= Math.trunc(Math.random() * 6)+1;

    dice.classList.remove('hidden');

    dice.src=`dice-${dice_val}.png`;

    if(dice_val!=1)
    {
        currscore=currscore+dice_val;
        if(active_player==0)
        curr0.textContent=currscore;
        else
        curr1.textContent=currscore;
    }
    else
    {
        change_player();
    }
    }
});


btnHold.addEventListener('click',function(){
    if(play)
    {
        scores[active_player]=scores[active_player]+currscore;

    //add to total score
    if(active_player==0)
    {
        score0.textContent=scores[active_player];
    }
    else
    {
        score1.textContent=scores[active_player];
    }
    
    //check for win
    if(scores[active_player]>=100)
    {
        dice.classList.add('hidden');
        document.querySelector(`.player--${active_player}`).classList.add('player--winner');
        document.querySelector(`.player--${active_player}`).classList.remove('player--active');
        play=false;
    }
    else
    change_player();
    }
})

btnNew.addEventListener('click',function(){
    init();
})

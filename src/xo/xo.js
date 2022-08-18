import React, { useState } from 'react';
import './xo.css';

function XO() {
    const [turn, setTurn] = useState('X');
    const [cells, setCells] = useState(Array(9).fill(''));
    const [winner, setWinner] = useState();
    const [winCells, setWinCells] = useState(Array(9).fill(false));

    const checkForWinner = (squares) => {
        let combos = {
            across: [
                [0, 1, 2],
                [3, 4, 5],
                [6, 7, 8]
            ],
            down: [
                [0, 3, 6],
                [1, 4, 7],
                [2, 5, 8]
            ],
            diagonal: [
                [0, 4, 8],
                [2, 4, 6]
            ]
        };

        for (let combo in combos) {
            combos[combo].forEach((pattern) => {
                if(squares[pattern[0]] === '' || 
                   squares[pattern[1]] === '' || 
                   squares[pattern[2]] === '')
                   return;
                else if(squares[pattern[0]] === squares[pattern[1]] &&
                        squares[pattern[1]] === squares[pattern[2]]) {
                        setWinner(squares[pattern[0]]);
                        let winCellsTemp = winCells;
                        winCellsTemp[pattern[0]] = true;
                        winCellsTemp[pattern[1]] = true;
                        winCellsTemp[pattern[2]] = true;
                        setWinCells(winCellsTemp);
                        console.log(winCells);
                }
            });
        }
    
    }

    const handleRestart = () => {
        setTurn('X');
        setCells(Array(9).fill(''));
        setWinner(null);
        setWinCells(Array(9).fill(false));
    }

    const handleClick = (num) => {
        if(cells[num] !== '' || winner)
        {
            return;
        }
        let squares = cells;
        squares[num] = turn;
        setCells(squares);
        console.log(squares);

        if(turn === 'X'){
            setTurn('O');
        }
        else{
            setTurn('X');
        }
        
        checkForWinner(squares);
        console.log("Clicked " + num);
    }

    const Cell = ({num}) => {
        let cellStyle = {
            backgroundColor: winCells[num] ? '#d4e054' : 'black',
            color: winCells[num] ? 'black': '#50a3a2'
        };
        return <td style={cellStyle} onClick={() => handleClick(num)}>{cells[num]}</td>;
    }

    return (
        <div>
            <h1>TIC TAC TOE</h1>
            <br />
            {!winner && (<h3>Turn: {turn}</h3>)}
            {winner && (<h3 className='result'>Winner is {winner}</h3>)}
            <div className='container'>
                <table>
                    <tbody>
                        <tr>
                            <Cell num={0}/>
                            <Cell num={1}/>
                            <Cell num={2}/>
                        </tr>
                        <tr>
                            <Cell num={3}/>
                            <Cell num={4}/>
                            <Cell num={5}/>
                        </tr>
                        <tr>
                            <Cell num={6}/>
                            <Cell num={7}/>
                            <Cell num={8}/>
                        </tr>
                    </tbody>
                </table>
            </div>

            {winner && (<button onClick={() => handleRestart()}>PLAY AGAIN</button>)}

        </div>
        
    );
}

export default XO;
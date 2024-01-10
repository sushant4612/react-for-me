In counter example when we add 5 setCounter back to back then what happens whether it increases by 5 or by 1
surprisingly it only increases by 1 beacuse of the fibre algorithm its checks okey so every operation increases it by same so it just pass it once in a pack to do certain operation we have to use the callback function call

setCounter(prevCounter => prevCOunter + 1)
setCounter(prevCounter => prevCOunter + 1)
setCounter(prevCounter => prevCOunter + 1)
setCounter(prevCounter => prevCOunter + 1)
setCounter(prevCounter => prevCOunter + 1)

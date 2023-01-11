//your code here
let displayText=document.getElementById('evaluatedText')
let displayCount=document.getElementById('letterCount')

displayText.onkeyup= () =>{
	let count=0;
	for(letter of displayText.value)
		{
			count++
		}
	dispayCount.innerText = count
}

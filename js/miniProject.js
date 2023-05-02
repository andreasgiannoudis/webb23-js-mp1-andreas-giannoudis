//first part of the project
for (let i = 0; i < 5; i++) {
    const p = document.createElement('p');
    document.body.appendChild(p);
    const hue = 150 + i * 10;
    const color = `hsl(${hue}, 70%, 80%)`;
    p.innerText = 'Rad '+ (i+1);
    p.style.background = color;
    p.style.color = "hsl(206, 100%, 49%)"; //kind of blue puple text color
    p.style.textAlign = "center";
    p.style.fontWeight = "bold";
    const fontSize = 10 + i * 5;
    p.style.fontSize = `${fontSize}px`;
}


//second part of the project
const div = document.createElement('div');
document.body.appendChild(div);
div.style.position = "relative"
div.style.height = "410px";
div.style.border = "2px solid black";
div.style.display = "flex";
div.style.justifyContent = "space-between";



//lets create the arrays
const numberArr = [0,1,2,3,4,5,6,7,8,9];
const reverseArr = [9,8,7,6,5,4,3,2,1,0];
const numbers = ['ett', 'två', 'tre', 'fyra', 'fem', 'sex', 'sju', 'åtta', 'nio', 'tio'];

//create the divs
const leftDiv = document.createElement('div');
div.append(leftDiv);
leftDiv.style.height = "320px";
leftDiv.style.margin = "30px";
leftDiv.style.width = "60px";
leftDiv.style.background = "hsl(251, 69%, 75%)";


const centerDiv = document.createElement('div');
div.append(centerDiv);
centerDiv.style.height = "320px";
centerDiv.style.margin = "30px";
centerDiv.style.width = "60px";
centerDiv.style.background = "hsl(251, 69%, 75%)";


const rightDiv = document.createElement('div');
div.appendChild(rightDiv);
rightDiv.style.height = "320px";
rightDiv.style.margin = "30px";
rightDiv.style.width = "60px";
rightDiv.style.background = "hsl(251, 69%, 75%)";





for (let i=0; i<numberArr.length; i++) 
{
    //code for the first array
    const p1 = document.createElement('p');
    leftDiv.append(p1);
    p1.innerText = `${numberArr[i]}`;
    p1.style.margin ="20%";
    
    if (i%2 == 0)
    {
        p1.style.background = "black";
        p1.style.color = "white";
    }
    else 
    {
        p1.style.background = "white";
    }

    if (`${numberArr[i]}` == 4)
    {
        p1.style.background = "transparent";
    }  

}

for (let i=0; i<reverseArr.length; i++) 
{
    //code for the second array
    const p2 = document.createElement('p');
    centerDiv.append(p2);
    p2.innerText = `${reverseArr[i]}`;
    p2.style.margin ="20%";
    p2.style.textAlign ="center";
    
    if (i%2 == 1)
    {
        p2.style.background = "black";
        p2.style.color = "white";
    }
    else 
    {
        p2.style.background = "white";
    }

    if (`${reverseArr[i]}` == 8)
    {
        p2.style.background = "transparent";
    }  

}

for (let i=0; i<numbers.length; i++) 
{
    //code for the third array
    const p3 = document.createElement('p');
    rightDiv.append(p3);
    p3.innerText = `${numbers[i]}`;
    p3.style.margin ="20%";
    p3.style.textAlign ="right";
    
    if (i%2 == 0)
    {
        p3.style.background = "black";
        p3.style.color = "white";
    }
    else 
    {
        p3.style.background = "white";
    }

    if (`${numbers[i]}` == "sex")
    {
        p3.style.background = "transparent";
    }  

}






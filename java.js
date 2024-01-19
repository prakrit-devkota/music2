
i=1
function tomin(time){
    min=Math.round(time/60)
    return min
}
function tosecond(time){
    sec=Math.round(time%60)
    return sec
}




document.querySelectorAll('.random').forEach((btn)=>{
    btn.addEventListener('click',(event)=>{
   if(i>1){
    sounda.pause()
   }
   document.querySelector('.button').setAttribute('src','https://www.shutterstock.com/image-vector/line-play-button-icon-illustration-260nw-1044448477.jpg')
   
    

    console.log("This get clicked")
    audio=`sound${event.target.id}.mp3`
    console.log(audio)
    sounda=new Audio(audio)
    setInterval(()=>{
        minute=tomin(sounda.duration)
        second=tosecond(sounda.duration)
        document.querySelector('.second').innerHTML=`${minute}:${second}`
        min_2=tomin(sounda.currentTime)
        sec_2=tosecond(sounda.currentTime)
        document.querySelector('.firstclass').innerHTML=`${min_2}:${sec_2}`
        document.querySelector('input').value=sounda.currentTime
    },10)
    
    let a=0
    document.querySelector('.button').addEventListener('click',()=>{
    document.querySelector('input').setAttribute('max',sounda.duration)

  
    if(a==0){
    sounda.play()
    a=1
    document.querySelector('.button').setAttribute('src','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmsSplnYQBq378DYmaMo1uRamj6ymf3JqPKwWMpR5q1w&s')
    
   }
   else{
    sounda.pause()
    a=0
    document.querySelector('.button').setAttribute('src','https://www.shutterstock.com/image-vector/line-play-button-icon-illustration-260nw-1044448477.jpg')
   }



})
document.querySelector("input").addEventListener('input',()=>{
    console.log(document.querySelector('input').value)
    sounda.currentTime=document.querySelector('input').value
})
i++
})
})
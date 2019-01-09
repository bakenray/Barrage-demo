$(document).ready(function(){
    var arr=[]
    var translateRight = $('.pop-words-window')[0].offsetWidth

    $('.send-word').on('click',function(){
        setWords()
        render()
        tanslateTo()
        removeWors()
    })
    $('.clear-word').on('click',function(){
        clearWords()
    })

    function setWords(){
        var inputWord = $('.input-box>input').val()
        arr.push(inputWord)
    }

    function clearWords(){
        $('.pop-words-window').empty()
        arr.empty()
    }

    function render(){
      var speed = 10
      var div = document.createElement('div')

      var randomTop =  Math.floor( Math.random()*100) 
      if(randomTop>=96){randomTop = 96 } 
      var color = ['green','blue','orange','red','pink','black']

      var randomIndex = Math.floor(Math.random()*10)
      if(randomIndex>=5){randomIndex = 5}  
      var randomColor = color[randomIndex]

      for(let i=0;i<arr.length;i++){
          $(div).css({
            top:`${randomTop}%`,
            color:`${randomColor}`,
            'font-size':'16px',
            'font-weight':'bold',
            right: '10px',
            transition: `all ${speed}s linear`,
            transform: `translateX(0)`
          })
        var divWord = $(div).text(arr[i])
        $('.pop-words-window').append(divWord)
      }
    }
    function tanslateTo(){

        setTimeout(function(){
          $('.pop-words-window>div').css({
            transform: `translateX(${-translateRight}px)`,
          })
        },5)
      }
      function removeWors(){
          setTimeout(function(){
              var divs = $('.pop-words-window>div')
              for(var i = 0; i<divs.length; i++){
                   var x = $(divs[i]).css('transform').split(',')[4]
                   if(x== -translateRight){
                        $(divs[i]).remove()
                        arr.shift(i)
                   }
              }
          },30000)
      }
  })
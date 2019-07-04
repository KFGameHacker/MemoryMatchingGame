(()=>{
    /*
    * 显示页面上的卡片
    *   - 使用下面提供的 "shuffle" 方法对数组中的卡片进行洗牌
    *   - 循环遍历每张卡片，创建其 HTML
    *   - 将每张卡的 HTML 添加到页面
    */
   class Card{
       constructor(card,num){
           this.name = card.name;
           this.id = this.name+num;
           this.html = `<li id="${this.id}" class="card">
           <i class="fa fa-${this.name}"></i>
       </li>`;
       }
   }

   const generateCardDeck = cardData =>{
       let cardDeck = [];
       for(let i=0;i<cardData.length;i++){
            cardDeck.push(new Card(cardData[i],i));
       }
       return cardDeck;
   }

   const displayCardDeck = cardDeck => {
        shuffle(cardDeck);
        const gameboard = document.createElement('ul');
        $(gameboard).addClass('deck');
        cardDeck.forEach((card)=>{

            //add cards to gameboard
            $(gameboard).append(card.html);
        });
        $('.container').append(gameboard);
        $('#diamond1').addClass('match');
   }

   const addCardClickEventListeners = ()=>{
       $('.card').click((event)=>{
           $('#'+event.target.id).addClass('match');
       });
   }

    // 洗牌函数来自于 http://stackoverflow.com/a/2450976
    function shuffle(array) {
        var currentIndex = array.length, temporaryValue, randomIndex;

        while (currentIndex !== 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }

        return array;
    }

    /*
    * 设置一张卡片的事件监听器。 如果该卡片被点击：
    *  - 显示卡片的符号（将这个功能放在你从这个函数中调用的另一个函数中）
    *  - 将卡片添加到状态为 “open” 的 *数组* 中（将这个功能放在你从这个函数中调用的另一个函数中）
    *  - 如果数组中已有另一张卡，请检查两张卡片是否匹配
    *    + 如果卡片匹配，将卡片锁定为 "open" 状态（将这个功能放在你从这个函数中调用的另一个函数中）
    *    + 如果卡片不匹配，请将卡片从数组中移除并隐藏卡片的符号（将这个功能放在你从这个函数中调用的另一个函数中）
    *    + 增加移动计数器并将其显示在页面上（将这个功能放在你从这个函数中调用的另一个函数中）
    *    + 如果所有卡都匹配，则显示带有最终分数的消息（将这个功能放在你从这个函数中调用的另一个函数中）
    */

    
    $(window).on("load", function() {
        console.log('initialized');
        let cardDeckArr = generateCardDeck(cardDeckData);
        displayCardDeck(cardDeckArr);
        addCardClickEventListeners();
      });
})();
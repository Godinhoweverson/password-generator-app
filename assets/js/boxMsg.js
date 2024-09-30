class Boxmsg{
    title = null
    text = null
    cor = null
    destiny = null
    divmsg = null
    constructor(config){
  
      this.cor = config.cor
      this.destiny = document.body
    }
    display=(title, text)=>{
          this.title = title;
          this.text = text; 
      this.divmsg = document.createElement('div')
      const style_divmsg =
          "display: flex;"+
          "justify-content: center;"+
          "align-items: start;"+
          "position: absolute;"+
          "top: 0px;"+
          "left: 0px;"+
          "width:100%;"+
          "height: 100vh;"+
          "background-color: rgba(0,0,0,0.7);"
      this.divmsg.setAttribute('id','divmsg')
      this.divmsg.setAttribute('style', style_divmsg)
      this.destiny.prepend(this.divmsg);
      
      const style_areaBoxmsg = 
          "display: flex;"+
          "justify-content:flex-start;"+
          "align-items: flex-start;"+
          "margin-top:100px;"+
          "flex-direction: column;"+
          "width: 500px;"

      const areaBoxmsg = document.createElement('div')
      areaBoxmsg.setAttribute('style',style_areaBoxmsg)
      this.divmsg.appendChild(areaBoxmsg)
  
      const style_titleBoxmsg = 
          "display: flex;"+
          "justify-content: flex-start;"+
          "align-items: center;"+
          "width: 100%;"+
          "background-color: #24232C;" +
          "color:#fffff;"+
          "padding: 5px;"

      const titleBoxmsg = document.createElement("div");
      titleBoxmsg.setAttribute("style", style_titleBoxmsg);
      titleBoxmsg.innerHTML = this.title
      areaBoxmsg.appendChild(titleBoxmsg);
  
      const style_bodyBoxmsg =
        "display: flex;" +
        "justify-content: flex-start;" +
        "align-items: center;" +
        "width: 100%;" +
        "background-color: #24232C;" +
        "color:#fffff;"+
        "padding: 30px 5px;";
  
      const bodyBoxmsg = document.createElement("div");
      bodyBoxmsg.setAttribute("style", style_bodyBoxmsg);
      bodyBoxmsg.innerHTML = this.text;
      areaBoxmsg.appendChild(bodyBoxmsg);
  
      const style_footerBoxmsg =
        "display: flex;" +
        "justify-content: space-around;" +
        "align-items: center;" +
        "width: 100%;" +
        "background-color: #24232C;"+
        "color:#fffff;"+
        "padding: 5px;"
  
      const footerBoxmsg = document.createElement("div");
      footerBoxmsg.setAttribute("style", style_footerBoxmsg);
      areaBoxmsg.appendChild(footerBoxmsg);
  
      const style_buttonBoxmsg =
        "background-color:"+this.cor+";"+
        "color:#24232C;"+
        "padding: 10px 200px;"+
        "cursor: pointer;"+
        "text-transform:upppercase;"
  
      const btn_ok = document.createElement("button");
      btn_ok.setAttribute("style", style_buttonBoxmsg);
      btn_ok.innerHTML = "Ok"
      btn_ok.addEventListener('click', (evt) =>{
        this.hidden()
      })
      footerBoxmsg.appendChild(btn_ok);
  
    }
    hidden(){
      this.divmsg.remove()
    }
  }
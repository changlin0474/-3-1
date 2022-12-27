var song
var songIsplay=false
var amp
var vol=0
var m_x,m_y
var music_btn,mouse_btn,Speech_btn
var mosueIsplay=true
var myRec = new p5.SpeechRec();
var result



function preload(){
  song = loadSound("seal.mp3");
}


function setup() {
  createCanvas(windowWidth,windowHeight);
 
  music_btn = createButton("音樂跳舞")
  music_btn.position(10,10)
  music_btn.size(350, 100);
  music_btn.style('background-color', 'black');
  music_btn.style('font-size', '44px');
  music_btn.style('color', 'white');
  music_btn.mousePressed(music_btn_pressed)
  
  mouse_btn = createButton("滑鼠跳動")
  mouse_btn.position(370,10)
  mouse_btn.size(350, 100);
  mouse_btn.style('background-color', 'black');
  mouse_btn.style('font-size', '44px');
  mouse_btn.style('color', 'white');
  mouse_btn.mousePressed(mouse_btn_pressed)

  Speech_btn = createButton("語音辨識(跳舞/不要跳)")//設定按鈕(語音辨識(跳舞/不要跳))
  Speech_btn.position(740,10) //設定按鈕(座標:740,10)
  Speech_btn.size(350, 100);//設定按鈕(大小350,100)
  Speech_btn.style('background-color', 'black'); //設定按鈕(背景:黑)
  Speech_btn.style('font-size', '32px');//設定按鈕(文字大小32)
  Speech_btn.style('color', 'white');//設定按鈕(文字顏色白色)
  Speech_btn.mousePressed(Speech_btn_pressed)//設定按鈕(Speech_btn_pressed)
}

function music_btn_pressed(){
  song.stop()
  song.play()
  songIsplay = true
  mosueIsplay = false
  amp=new p5.Amplitude()
  music_btn.style('background-color', '#16697a');
  mouse_btn.style('background-color', '#489fb5');
  Speech_btn.style('background-color','#16697a');

}

function mouse_btn_pressed(){
  song.pause()
  mosueIsplay = true
  songIsplay = false
  music_btn.style('background-color', '#489fb5');
  mouse_btn.style('background-color', '#16697a');
  Speech_btn.style('background-color', '#489fb5');

}

function Speech_btn_pressed(){
  myRec.onResult = showResult;
	myRec.start();
  music_btn.style('background-color', '#489fb5');//設定按鈕顏色 
  mouse_btn.style('background-color', '#489fb5');//設定按鈕顏色 
  Speech_btn.style('background-color', '#16697a');//設定按鈕顏色 
 

}

function showResult()
	{
		if(myRec.resultValue==true) {
	
      push()
        translate(0,0)
        background(192, 255, 192);
        fill(255,0,0)
        textStyle("italic")
        text(myRec.resultString,1200,10);
        text(myRec.resultString,0, height/2);
      pop()
      result = myRec.resultString
      if(myRec.resultString==="跳舞")
      {
        music_btn_pressed()
      }
      if(myRec.resultString==="不要跳")
      {
        song.pause()
        mosueIsplay = true
        songIsplay = false
        }
		}
	}

function draw() {
  background("#98c1d9");
  
  if(songIsplay){
    vol = amp.getLevel()
    m_x =map(vol,0,5,0,width) 
    m_y= map(vol,0,2,0,height)
  }
  else
  if(mosueIsplay)
  {
    m_x = mouseX
    m_y= mouseY

  }
  
  
    
push()
  translate(0,0)
  //最左邊的海豹
   fill("#FF1E6")
   stroke("#E5E5E5")
   strokeWeight(2)
   ellipse(220+m_x/100,580+m_y/90,100,50)//D taill
   ellipse(210+m_x/100,575+m_y/70,80,30)//U taill
    
   fill("#FF1E6")
   noStroke()
   ellipse(220+m_x/350,400+m_y/80,200)//head
   ellipse(250+m_x/80,460+m_y/70,300,250)//body
   ellipse(125+m_x/500,380+m_y/90,45,40)//mouth
 
   stroke("#E5E5E5")
   strokeWeight(2)
   fill("#fffcf2")
   ellipse(121+m_x/500,379+m_y/90,15)//nouse R
   ellipse(108+m_x/500,379+m_y/90,15)//nouse L
   
   fill(0)
   noStroke()
   ellipse(155+map(m_x,0,width,-3,5),350+map(m_y,0,height,-3,8),10,8)//eye
   ellipse(153+map(m_x,0,width,-3,5),340+map(m_y,0,height,-2,4),5,3)//眉毛

   fill("#fff0f3")
   ellipse(165+m_x/350,373+m_y/80,20,15)//腮紅R
   

    beginShape() //nose           
      fill(0)
      strokeWeight(2)
      curveVertex(110+m_x/500,370+m_y/90) 
      curveVertex(114+m_x/500,371+m_y/90)
      curveVertex(118+m_x/500,370+m_y/90)  
      curveVertex(114+m_x/500,375+m_y/90)
    endShape(CLOSE)

   pop()

push()
    //中間的海豹
    translate(width/2,height/2)
    fill("#FF1E6")
    noStroke()
    ellipse(0,0+map(vol,0,1,-10,12),400,300)
    ellipse(-25,40+map(vol,0,1,-10,12),400,220)
    ellipse(-10,0+map(vol,0,1,-10,12),400,300)//左
    ellipse(200,-20+m_y/20,90,30)//up tail
    ellipse(200,0+m_y/20,100,30)//down tail
    
    fill(0)
    ellipse(-160+m_x/80,-30+m_y/50,15,12)//lefe eye B
    ellipse(-90+m_x/80,-30+m_y/50,15,12)//right eye B 
    ellipse(-140+m_x/100,-50+m_y/100,8,5)//眉毛左
    ellipse(-100+m_x/100,-50+m_y/100,8,5)//眉毛右
    
    fill(255)
    ellipse(-163+m_x/80,-33+m_y/50,4,2)//lefe eye W U
    ellipse(-93+m_x/80,-33+m_y/50,4,2)//right eye W U
    ellipse(-158+m_x/80,-28+m_y/50,4,2)//lefe eye W D
    ellipse(-88+m_x/80,-28+m_y/50,3,2)//right eye W D

    noStroke()
    fill("#FFAFCC")
    ellipse(-125,-10+m_y/50,15)//mouth pinck

    noStroke()
    strokeWeight(2)
    fill("#E5E5E5")
    ellipse(-115,-15+m_y/50,15)//mouth right
    ellipse(-135,-15+m_y/50,15)//moutk left

    stroke("#E5E5E5")
    fill("#FF1E6")
    ellipse(80,95+map(m_y,0,height,-50,12),200,85)//hand
    
    fill("#FF1E6")
    noStroke()
    ellipse(0,80,70,65)//遮手
    fill("#feeafa")
    ellipse(-180,-10+map(m_y,0,height,-10,12),20,10)//腮紅L
    ellipse(-70,-10+map(m_y,0,height,-10,12),20,10)//腮紅R

beginShape() //nose           
   fill(0)
   curveVertex(-130,-20+m_y/50) 
   curveVertex(-120,-20+m_y/50)  
   curveVertex(-125,-15+m_y/50)
endShape(CLOSE)

   pop()

push()
  //右邊的海豹
   translate(width*4/5,height*2/3+map(vol,0,1,-20,20))
   fill("#FF1E6")
   noStroke()
   ellipse(-100+map(m_x,0,width,-3,3),-190+map(m_y,0,height,-2,2),150)//head
   //fill(0)
   ellipse(-130+map(m_x,0,width,-3,3),-130+map(m_y,0,height,-2,2),105,230)//left body
   stroke("#E5E5E5")
   ellipse(-10+m_x/30,-85,300,200)//right body
   fill("#FF1E6")
   noStroke()
   ellipse(150+m_x/30,-50+m_y/30,100,30)//D taill
   ellipse(150+m_x/30,-70+m_y/30,90,40)//U taill
   //fill(0)
   fill("#FF1E6")
   stroke("#E5E5E5")
   ellipse(-25+m_x/90,0+m_y/70,150,45)//hand
   fill("#FF1E6")
   noStroke()
   ellipse(-76+map(m_x,0,width,-3,3),-85+map(m_y,0,height,-2,2),205,180)//middle body
   
   fill("#E3D5CA")
   ellipse(-130,-210,25,20)//big nose
   fill("#C6AC8F")
   ellipse(-130,-215,10,5)//small nose
   fill("#feeafa")
   ellipse(-160+map(m_x,0,width,-3,3),-200+map(m_y,0,height,-2,2),10,5)//腮紅L
   ellipse(-100+map(m_x,0,width,-3,3),-200+map(m_y,0,height,-2,2),10,5)//腮紅R

   fill(0)
   ellipse(-150+map(m_x,0,width,-3,3),-230+map(m_y,0,height,-2,2),8,3)//眉眉毛 L
   ellipse(-110+map(m_x,0,width,-3,3),-230+map(m_y,0,height,-2,2),8,3)//眉眉毛 R
   ellipse(-155,-212,10)//eye L
   ellipse(-105,-212,10)//eye R
   
   fill("#FF1E6")
   ellipse(-155+map(m_x,0,width,-2,2),-212+map(m_y,0,height,-2,2),3)//eye L
   ellipse(-105+map(m_x,0,width,-2,2),-212+map(m_y,0,height,-2,2),3)//eye R
  
   fill("#edafb8")
   triangle(-150,-180,-150,-160,-135,-170)
   triangle(-120,-180,-120,-160,-135,-170)



pop()




 
  }



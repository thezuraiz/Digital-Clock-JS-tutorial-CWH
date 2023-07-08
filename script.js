const clock = function(){
  let t=new Date()
  let hr = t.getHours()
  document.getElementById('Hrs').innerText= `${hr>12? hr%=12 : hr}`;
  document.getElementById('Min').innerText= t.getMinutes();
  document.getElementById('Sec').innerText= t.getSeconds();
  document.getElementById('AM').innerHTML= `${hr > 12 ?"PM":"AM"}`;
  }
  setInterval(clock,1000)
  
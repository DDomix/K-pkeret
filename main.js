(()=>{"use strict";document.getElementById("url").addEventListener("change",(function(){let e=document.getElementById("url").value;document.getElementById("kep").src=e})),document.getElementById("width").addEventListener("change",(function(){let e=document.getElementById("width").value;document.getElementById("kep").style.width=e+"px"})),document.getElementById("vastagsag").addEventListener("change",(function(){let e=document.getElementById("vastagsag").value;document.getElementById("kep").style.borderWidth=e+"px",console.log(e)})),document.getElementById("szin").addEventListener("input",(function(){let e=document.getElementById("szin").value;document.getElementById("kep").style.borderColor=e}))})();
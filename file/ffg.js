function lokasi(t){iata_name=t.iata,fetch("https://travelpayouts-travelpayouts-flight-data-v1.p.rapidapi.com/v1/city-directions?origin="+iata_name+"&currency="+currency+"&limit=6",{method:"GET",headers:{"x-access-token":""+token,"x-rapidapi-key":"7553c9c4b0msh01b4944e1049a81p158876jsn340bfdd90264","x-rapidapi-host":"travelpayouts-travelpayouts-flight-data-v1.p.rapidapi.com"}}).then((function(t){return t.json()})).then((function(t){!function(t){const a=Object.keys(t).reduce(((a,e)=>{const r=`${t[e].origin}`,i=destinasi(r),s=`${t[e].destination}`,n=destinasi(s),c=`${t[e].airline}`,d=`${t[e].price}`,l=(t[e].flight_number,`${t[e].departure_at}`);year=`${l.substring(0,4)}`,month=`${l.substring(5,7)}`,day=`${l.substring(8,10)}`,departure=`${year}-${month}-${day}`,departure_date=`${monthName[parseInt(month,10)]} ${day}, ${year}`;const o=`${t[e].return_at}`;year=`${o.substring(0,4)}`,month=`${o.substring(5,7)}`,day=`${o.substring(8,10)}`,return_dt=`${year}-${month}-${day}`,return_date=`${monthName[parseInt(month,10)]} ${day}, ${year}`;const $=`https://tp.media/r?marker=${marker}&p=4044&type=click&campaign_id=100&u=https%3A%2F%2Fflight.${domain}%2Fflights%3Fdepart_date%3D${departure}%26return_date%3D${return_dt}%26origin_iata%3D${r}%26destination_iata%3D${s}%26currency%3D${currency}%26with_request%3Dtrue%26locale%3D${lokal}&lang=${lokal}&trace_id=Zzeaad93c4c7474ece8ac0259-${marker}`,p=`Flight From ${i} to ${n}`;return a+`<div class='col-lg-4 responsive-column'><div class='card-item flight-card'><div class='card-img'><a class='d-block' href='${$}' rel='${rel}' target'${tgt}'><img alt='${p}' title='${p}' class='lazyload' height='247px' width='370px' src='https://photo.hotellook.com/static/cities/370x247/${s}.webp'/><span class='badge'>${n}</span></a></div><div class='card-body'><img alt='${c}' title='${c}' class='flight-logo' height='30px' width='124px' src='https://flight.${domain}/images/airline/124/30/gravity=west/${c}.png'/><h3 class='card-title' title='${p}' alt='${p}'><a href='${$}' rel='${rel}' target'${tgt}'>${i} <i class='fa fa-exchange mx-2'></i> ${n}</a></h3><p class='card-meta'>${departure_date} - ${return_date}</p><div class='card-price d-flex align-items-center justify-content-between'><p><span class='price__from mr-1'>From</span><span class='price__num'>${sym}${d}</span></p><a class='btn-text' href='${$}' rel='${rel}' target'${tgt}'>Read details<i class='fa fa-angle-right'></i></a></div></div></div></div>`}),"");document.getElementById("deals").innerHTML=`${a}`}(t.data)})).catch((function(t){console.error(t)}))}function tab1(t){const a=Object.keys(t).reduce(((a,e)=>{const r=`${t[e].origin}`,i=destinasi(r),s=`${t[e].destination}`,n=destinasi(s),c=`${t[e].airline}`,d=`${t[e].price}`,l=(t[e].flight_number,`${t[e].departure_at}`);year=`${l.substring(0,4)}`,month=`${l.substring(5,7)}`,day=`${l.substring(8,10)}`,departure=`${year}-${month}-${day}`,departure_date=`${monthName[parseInt(month,10)]} ${day}, ${year}`;const o=`${t[e].return_at}`;year=`${o.substring(0,4)}`,month=`${o.substring(5,7)}`,day=`${o.substring(8,10)}`,return_dt=`${year}-${month}-${day}`,return_date=`${monthName[parseInt(month,10)]} ${day}, ${year}`;const $=`https://tp.media/r?marker=${marker}&p=4044&type=click&campaign_id=100&u=https%3A%2F%2Fflight.${domain}%2Fflights%3Fdepart_date%3D${departure}%26return_date%3D${return_dt}%26origin_iata%3D${r}%26destination_iata%3D${s}%26currency%3D${currency}%26with_request%3Dtrue%26locale%3D${lokal}&lang=${lokal}&trace_id=Zzeaad93c4c7474ece8ac0259-${marker}`,p=`Flight From ${i} to ${n}`;return a+=`<div class='col-lg-4 responsive-column'><div class='card-item flight-card'><div class='card-img'><a class='d-block' href='${$}' rel='${rel}' target'${tgt}'><img alt='${p}' title='${p}' class='lazyload' height='247px' width='370px' src='https://photo.hotellook.com/static/cities/370x247/${s}.webp'/><span class='badge'>${n}</span></a></div><div class='card-body'><img alt='${c}' title='${c}' class='flight-logo' height='30px' width='124px' src='https://flight.${domain}/images/airline/124/30/gravity=west/${c}.png'/><h3 class='card-title' title='${p}' alt='${p}'><a href='${$}' rel='${rel}' target'${tgt}'>${i} <i class='fa fa-exchange mx-2'></i> ${n}</a></h3><p class='card-meta'>${departure_date} - ${return_date}</p><div class='card-price d-flex align-items-center justify-content-between'><p><span class='price__from mr-1'>From</span><span class='price__num'>${sym}${d}</span></p><a class='btn-text' href='${$}' rel='${rel}' target'${tgt}'>Read details<i class='fa fa-angle-right'></i></a></div></div></div></div>`}),"");document.getElementById("tab1").innerHTML=`${a}`}function tab2(t){const a=Object.keys(t).reduce(((a,e)=>{const r=`${t[e].origin}`,i=destinasi(r),s=`${t[e].destination}`,n=destinasi(s),c=`${t[e].airline}`,d=`${t[e].price}`,l=(t[e].flight_number,`${t[e].departure_at}`);year=`${l.substring(0,4)}`,month=`${l.substring(5,7)}`,day=`${l.substring(8,10)}`,departure=`${year}-${month}-${day}`,departure_date=`${monthName[parseInt(month,10)]} ${day}, ${year}`;const o=`${t[e].return_at}`;year=`${o.substring(0,4)}`,month=`${o.substring(5,7)}`,day=`${o.substring(8,10)}`,return_dt=`${year}-${month}-${day}`,return_date=`${monthName[parseInt(month,10)]} ${day}, ${year}`;const $=`https://tp.media/r?marker=${marker}&p=4044&type=click&campaign_id=100&u=https%3A%2F%2Fflight.${domain}%2Fflights%3Fdepart_date%3D${departure}%26return_date%3D${return_dt}%26origin_iata%3D${r}%26destination_iata%3D${s}%26currency%3D${currency}%26with_request%3Dtrue%26locale%3D${lokal}&lang=${lokal}&trace_id=Zzeaad93c4c7474ece8ac0259-${marker}`,p=`Flight From ${i} to ${n}`;return a+=`<div class='col-lg-4 responsive-column'><div class='card-item flight-card'><div class='card-img'><a class='d-block' href='${$}' rel='${rel}' target'${tgt}'><img alt='${p}' title='${p}' class='lazyload' height='247px' width='370px' src='https://photo.hotellook.com/static/cities/370x247/${s}.webp'/><span class='badge'>${n}</span></a></div><div class='card-body'><img alt='${c}' title='${c}' class='flight-logo' height='30px' width='124px' src='https://flight.${domain}/images/airline/124/30/gravity=west/${c}.png'/><h3 class='card-title' title='${p}' alt='${p}'><a href='${$}' rel='${rel}' target'${tgt}'>${i} <i class='fa fa-exchange mx-2'></i> ${n}</a></h3><p class='card-meta'>${departure_date} - ${return_date}</p><div class='card-price d-flex align-items-center justify-content-between'><p><span class='price__from mr-1'>From</span><span class='price__num'>${sym}${d}</span></p><a class='btn-text' href='${$}' rel='${rel}' target'${tgt}'>Read details<i class='fa fa-angle-right'></i></a></div></div></div></div>`}),"");document.getElementById("tab2").innerHTML=`${a}`}function tab3(t){const a=Object.keys(t).reduce(((a,e)=>{const r=`${t[e].origin}`,i=destinasi(r),s=`${t[e].destination}`,n=destinasi(s),c=`${t[e].airline}`,d=`${t[e].price}`,l=(t[e].flight_number,`${t[e].departure_at}`);year=`${l.substring(0,4)}`,month=`${l.substring(5,7)}`,day=`${l.substring(8,10)}`,departure=`${year}-${month}-${day}`,departure_date=`${monthName[parseInt(month,10)]} ${day}, ${year}`;const o=`${t[e].return_at}`;year=`${o.substring(0,4)}`,month=`${o.substring(5,7)}`,day=`${o.substring(8,10)}`,return_dt=`${year}-${month}-${day}`,return_date=`${monthName[parseInt(month,10)]} ${day}, ${year}`;const $=`https://tp.media/r?marker=${marker}&p=4044&type=click&campaign_id=100&u=https%3A%2F%2Fflight.${domain}%2Fflights%3Fdepart_date%3D${departure}%26return_date%3D${return_dt}%26origin_iata%3D${r}%26destination_iata%3D${s}%26currency%3D${currency}%26with_request%3Dtrue%26locale%3D${lokal}&lang=${lokal}&trace_id=Zzeaad93c4c7474ece8ac0259-${marker}`,p=`Flight From ${i} to ${n}`;return a+=`<div class='col-lg-4 responsive-column'><div class='card-item flight-card'><div class='card-img'><a class='d-block' href='${$}' rel='${rel}' target'${tgt}'><img alt='${p}' title='${p}' class='lazyload' height='247px' width='370px' src='https://photo.hotellook.com/static/cities/370x247/${s}.webp'/><span class='badge'>${n}</span></a></div><div class='card-body'><img alt='${c}' title='${c}' class='flight-logo' height='30px' width='124px' src='https://flight.${domain}/images/airline/124/30/gravity=west/${c}.png'/><h3 class='card-title' title='${p}' alt='${p}'><a href='${$}' rel='${rel}' target'${tgt}'>${i} <i class='fa fa-exchange mx-2'></i> ${n}</a></h3><p class='card-meta'>${departure_date} - ${return_date}</p><div class='card-price d-flex align-items-center justify-content-between'><p><span class='price__from mr-1'>From</span><span class='price__num'>${sym}${d}</span></p><a class='btn-text' href='${$}' rel='${rel}' target'${tgt}'>Read details<i class='fa fa-angle-right'></i></a></div></div></div></div>`}),"");document.getElementById("tab3").innerHTML=`${a}`}function tab4(t){const a=Object.keys(t).reduce(((a,e)=>{const r=`${t[e].origin}`,i=destinasi(r),s=`${t[e].destination}`,n=destinasi(s),c=`${t[e].airline}`,d=`${t[e].price}`,l=(t[e].flight_number,`${t[e].departure_at}`);year=`${l.substring(0,4)}`,month=`${l.substring(5,7)}`,day=`${l.substring(8,10)}`,departure=`${year}-${month}-${day}`,departure_date=`${monthName[parseInt(month,10)]} ${day}, ${year}`;const o=`${t[e].return_at}`;year=`${o.substring(0,4)}`,month=`${o.substring(5,7)}`,day=`${o.substring(8,10)}`,return_dt=`${year}-${month}-${day}`,return_date=`${monthName[parseInt(month,10)]} ${day}, ${year}`;const $=`https://tp.media/r?marker=${marker}&p=4044&type=click&campaign_id=100&u=https%3A%2F%2Fflight.${domain}%2Fflights%3Fdepart_date%3D${departure}%26return_date%3D${return_dt}%26origin_iata%3D${r}%26destination_iata%3D${s}%26currency%3D${currency}%26with_request%3Dtrue%26locale%3D${lokal}&lang=${lokal}&trace_id=Zzeaad93c4c7474ece8ac0259-${marker}`,p=`Flight From ${i} to ${n}`;return a+=`<div class='col-lg-4 responsive-column'><div class='card-item flight-card'><div class='card-img'><a class='d-block' href='${$}' rel='${rel}' target'${tgt}'><img alt='${p}' title='${p}' class='lazyload' height='247px' width='370px' src='https://photo.hotellook.com/static/cities/370x247/${s}.webp'/><span class='badge'>${n}</span></a></div><div class='card-body'><img alt='${c}' title='${c}' class='flight-logo' height='30px' width='124px' src='https://flight.${domain}/images/airline/124/30/gravity=west/${c}.png'/><h3 class='card-title' title='${p}' alt='${p}'><a href='${$}' rel='${rel}' target'${tgt}'>${i} <i class='fa fa-exchange mx-2'></i> ${n}</a></h3><p class='card-meta'>${departure_date} - ${return_date}</p><div class='card-price d-flex align-items-center justify-content-between'><p><span class='price__from mr-1'>From</span><span class='price__num'>${sym}${d}</span></p><a class='btn-text' href='${$}' rel='${rel}' target'${tgt}'>Read details<i class='fa fa-angle-right'></i></a></div></div></div></div>`}),"");document.getElementById("tab4").innerHTML=`${a}`}function tab5(t){const a=Object.keys(t).reduce(((a,e)=>{const r=`${t[e].origin}`,i=destinasi(r),s=`${t[e].destination}`,n=destinasi(s),c=`${t[e].airline}`,d=`${t[e].price}`,l=(t[e].flight_number,`${t[e].departure_at}`);year=`${l.substring(0,4)}`,month=`${l.substring(5,7)}`,day=`${l.substring(8,10)}`,departure=`${year}-${month}-${day}`,departure_date=`${monthName[parseInt(month,10)]} ${day}, ${year}`;const o=`${t[e].return_at}`;year=`${o.substring(0,4)}`,month=`${o.substring(5,7)}`,day=`${o.substring(8,10)}`,return_dt=`${year}-${month}-${day}`,return_date=`${monthName[parseInt(month,10)]} ${day}, ${year}`;const $=`https://tp.media/r?marker=${marker}&p=4044&type=click&campaign_id=100&u=https%3A%2F%2Fflight.${domain}%2Fflights%3Fdepart_date%3D${departure}%26return_date%3D${return_dt}%26origin_iata%3D${r}%26destination_iata%3D${s}%26currency%3D${currency}%26with_request%3Dtrue%26locale%3D${lokal}&lang=${lokal}&trace_id=Zzeaad93c4c7474ece8ac0259-${marker}`,p=`Flight From ${i} to ${n}`;return a+=`<div class='col-lg-4 responsive-column'><div class='card-item flight-card'><div class='card-img'><a class='d-block' href='${$}' rel='${rel}' target'${tgt}'><img alt='${p}' title='${p}' class='lazyload' height='247px' width='370px' src='https://photo.hotellook.com/static/cities/370x247/${s}.webp'/><span class='badge'>${n}</span></a></div><div class='card-body'><img alt='${c}' title='${c}' class='flight-logo' height='30px' width='124px' src='https://flight.${domain}/images/airline/124/30/gravity=west/${c}.png'/><h3 class='card-title' title='${p}' alt='${p}'><a href='${$}' rel='${rel}' target'${tgt}'>${i} <i class='fa fa-exchange mx-2'></i> ${n}</a></h3><p class='card-meta'>${departure_date} - ${return_date}</p><div class='card-price d-flex align-items-center justify-content-between'><p><span class='price__from mr-1'>From</span><span class='price__num'>${sym}${d}</span></p><a class='btn-text' href='${$}' rel='${rel}' target'${tgt}'>Read details<i class='fa fa-angle-right'></i></a></div></div></div></div>`}),"");document.getElementById("tab5").innerHTML=`${a}`}currency="USD",token="8f4f848917b9441d272574c1176c9d6a",marker="182334",lokal="en_US",rel="nofollow noopener noreferrer sponsored",sym="$",monthFullName=[,"January","February","March","April","May","June","July","August","September","October","November","December"],monthName=[,"Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],domain=document.location.hostname,tgt="_blank",fetch("https://travelpayouts-travelpayouts-flight-data-v1.p.rapidapi.com/v1/city-directions?origin=BCN&currency="+currency+"&limit=6",{method:"GET",headers:{"x-access-token":""+token,"x-rapidapi-key":"7553c9c4b0msh01b4944e1049a81p158876jsn340bfdd90264","x-rapidapi-host":"travelpayouts-travelpayouts-flight-data-v1.p.rapidapi.com"}}).then((function(t){return t.json()})).then((function(t){tab1(t.data)})).catch((function(t){console.error(t)})),fetch("https://travelpayouts-travelpayouts-flight-data-v1.p.rapidapi.com/v1/city-directions?origin=ROM&currency="+currency+"&limit=6",{method:"GET",headers:{"x-access-token":""+token,"x-rapidapi-key":"7553c9c4b0msh01b4944e1049a81p158876jsn340bfdd90264","x-rapidapi-host":"travelpayouts-travelpayouts-flight-data-v1.p.rapidapi.com"}}).then((function(t){return t.json()})).then((function(t){tab2(t.data)})).catch((function(t){console.error(t)})),fetch("https://travelpayouts-travelpayouts-flight-data-v1.p.rapidapi.com/v1/city-directions?origin=SHA&currency="+currency+"&limit=6",{method:"GET",headers:{"x-access-token":""+token,"x-rapidapi-key":"7553c9c4b0msh01b4944e1049a81p158876jsn340bfdd90264","x-rapidapi-host":"travelpayouts-travelpayouts-flight-data-v1.p.rapidapi.com"}}).then((function(t){return t.json()})).then((function(t){tab3(t.data)})).catch((function(t){console.error(t)})),fetch("https://travelpayouts-travelpayouts-flight-data-v1.p.rapidapi.com/v1/city-directions?origin=HKG&currency="+currency+"&limit=6",{method:"GET",headers:{"x-access-token":""+token,"x-rapidapi-key":"7553c9c4b0msh01b4944e1049a81p158876jsn340bfdd90264","x-rapidapi-host":"travelpayouts-travelpayouts-flight-data-v1.p.rapidapi.com"}}).then((function(t){return t.json()})).then((function(t){tab4(t.data)})).catch((function(t){console.error(t)})),fetch("https://travelpayouts-travelpayouts-flight-data-v1.p.rapidapi.com/v1/city-directions?origin=LAX&currency="+currency+"&limit=6",{method:"GET",headers:{"x-access-token":""+token,"x-rapidapi-key":"7553c9c4b0msh01b4944e1049a81p158876jsn340bfdd90264","x-rapidapi-host":"travelpayouts-travelpayouts-flight-data-v1.p.rapidapi.com"}}).then((function(t){return t.json()})).then((function(t){tab5(t.data)})).catch((function(t){console.error(t)}));

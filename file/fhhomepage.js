function tab1(t){const a=Object.keys(t).reduce(((a,e)=>{const r=`${t[e].origin}`,i=destinasi(r),s=`${t[e].destination}`,n=destinasi(s),c=`${t[e].airline}`,d=`${t[e].price}`,l=(t[e].flight_number,`${t[e].departure_at}`);year=`${l.substring(0,4)}`,month=`${l.substring(5,7)}`,day=`${l.substring(8,10)}`,departure=`${year}-${month}-${day}`,departure_date=`${monthName[parseInt(month,10)]} ${day}, ${year}`;const o=`${t[e].return_at}`;year=`${o.substring(0,4)}`,month=`${o.substring(5,7)}`,day=`${o.substring(8,10)}`,return_dt=`${year}-${month}-${day}`,return_date=`${monthName[parseInt(month,10)]} ${day}, ${year}`;const $=`https://tp.media/r?marker=${marker}&p=4044&type=click&campaign_id=100&u=https%3A%2F%2Fflight.${domain}%2Fflights%3Fdepart_date%3D${departure}%26return_date%3D${return_dt}%26origin_iata%3D${r}%26destination_iata%3D${s}%26currency%3D${currency}%26with_request%3Dtrue%26locale%3D${lokal}&lang=${lokal}&trace_id=Zzeaad93c4c7474ece8ac0259-${marker}`,p=`Flight From ${i} to ${n}`;return a+=`<div class='col-lg-4 responsive-column'><div class='card-item flight-card'><div class='card-img'><a class='d-block' href='${$}' rel='${rel}' target='${tgt}'><img alt='${p}' title='${p}' class='lazyload' height='247px' width='370px' src='https://photo.hotellook.com/static/cities/370x247/${s}.webp'/><span class='badge'>${n}</span></a></div><div class='card-body'><img alt='${c}' title='${c}' class='flight-logo' height='30px' width='124px' src='https://flight.${domain}/images/airline/124/30/gravity=west/${c}.png'/><h3 class='card-title' title='${p}' alt='${p}'><a href='${$}' rel='${rel}' target='${tgt}'>${i} <i class='fa fa-exchange mx-2'></i> ${n}</a></h3><p class='card-meta'>${departure_date} - ${return_date}</p><div class='card-price d-flex align-items-center justify-content-between'><p><span class='price__from mr-1'>From</span><span class='price__num'>${sym}${d}</span></p><a class='btn-text' href='${$}' rel='${rel}' target='${tgt}'>Read details<i class='fa fa-angle-right'></i></a></div></div></div></div>`}),"");document.getElementById("tab1").innerHTML=`${a}`}function tab2(t){const a=Object.keys(t).reduce(((a,e)=>{const r=`${t[e].origin}`,i=destinasi(r),s=`${t[e].destination}`,n=destinasi(s),c=`${t[e].airline}`,d=`${t[e].price}`,l=(t[e].flight_number,`${t[e].departure_at}`);year=`${l.substring(0,4)}`,month=`${l.substring(5,7)}`,day=`${l.substring(8,10)}`,departure=`${year}-${month}-${day}`,departure_date=`${monthName[parseInt(month,10)]} ${day}, ${year}`;const o=`${t[e].return_at}`;year=`${o.substring(0,4)}`,month=`${o.substring(5,7)}`,day=`${o.substring(8,10)}`,return_dt=`${year}-${month}-${day}`,return_date=`${monthName[parseInt(month,10)]} ${day}, ${year}`;const $=`https://tp.media/r?marker=${marker}&p=4044&type=click&campaign_id=100&u=https%3A%2F%2Fflight.${domain}%2Fflights%3Fdepart_date%3D${departure}%26return_date%3D${return_dt}%26origin_iata%3D${r}%26destination_iata%3D${s}%26currency%3D${currency}%26with_request%3Dtrue%26locale%3D${lokal}&lang=${lokal}&trace_id=Zzeaad93c4c7474ece8ac0259-${marker}`,p=`Flight From ${i} to ${n}`;return a+=`<div class='col-lg-4 responsive-column'><div class='card-item flight-card'><div class='card-img'><a class='d-block' href='${$}' rel='${rel}' target='${tgt}'><img alt='${p}' title='${p}' class='lazyload' height='247px' width='370px' src='https://photo.hotellook.com/static/cities/370x247/${s}.webp'/><span class='badge'>${n}</span></a></div><div class='card-body'><img alt='${c}' title='${c}' class='flight-logo' height='30px' width='124px' src='https://flight.${domain}/images/airline/124/30/gravity=west/${c}.png'/><h3 class='card-title' title='${p}' alt='${p}'><a href='${$}' rel='${rel}' target='${tgt}'>${i} <i class='fa fa-exchange mx-2'></i> ${n}</a></h3><p class='card-meta'>${departure_date} - ${return_date}</p><div class='card-price d-flex align-items-center justify-content-between'><p><span class='price__from mr-1'>From</span><span class='price__num'>${sym}${d}</span></p><a class='btn-text' href='${$}' rel='${rel}' target='${tgt}'>Read details<i class='fa fa-angle-right'></i></a></div></div></div></div>`}),"");document.getElementById("tab2").innerHTML=`${a}`}function tab3(t){const a=Object.keys(t).reduce(((a,e)=>{const r=`${t[e].origin}`,i=destinasi(r),s=`${t[e].destination}`,n=destinasi(s),c=`${t[e].airline}`,d=`${t[e].price}`,l=(t[e].flight_number,`${t[e].departure_at}`);year=`${l.substring(0,4)}`,month=`${l.substring(5,7)}`,day=`${l.substring(8,10)}`,departure=`${year}-${month}-${day}`,departure_date=`${monthName[parseInt(month,10)]} ${day}, ${year}`;const o=`${t[e].return_at}`;year=`${o.substring(0,4)}`,month=`${o.substring(5,7)}`,day=`${o.substring(8,10)}`,return_dt=`${year}-${month}-${day}`,return_date=`${monthName[parseInt(month,10)]} ${day}, ${year}`;const $=`https://tp.media/r?marker=${marker}&p=4044&type=click&campaign_id=100&u=https%3A%2F%2Fflight.${domain}%2Fflights%3Fdepart_date%3D${departure}%26return_date%3D${return_dt}%26origin_iata%3D${r}%26destination_iata%3D${s}%26currency%3D${currency}%26with_request%3Dtrue%26locale%3D${lokal}&lang=${lokal}&trace_id=Zzeaad93c4c7474ece8ac0259-${marker}`,p=`Flight From ${i} to ${n}`;return a+=`<div class='col-lg-4 responsive-column'><div class='card-item flight-card'><div class='card-img'><a class='d-block' href='${$}' rel='${rel}' target='${tgt}'><img alt='${p}' title='${p}' class='lazyload' height='247px' width='370px' src='https://photo.hotellook.com/static/cities/370x247/${s}.webp'/><span class='badge'>${n}</span></a></div><div class='card-body'><img alt='${c}' title='${c}' class='flight-logo' height='30px' width='124px' src='https://flight.${domain}/images/airline/124/30/gravity=west/${c}.png'/><h3 class='card-title' title='${p}' alt='${p}'><a href='${$}' rel='${rel}' target='${tgt}'>${i} <i class='fa fa-exchange mx-2'></i> ${n}</a></h3><p class='card-meta'>${departure_date} - ${return_date}</p><div class='card-price d-flex align-items-center justify-content-between'><p><span class='price__from mr-1'>From</span><span class='price__num'>${sym}${d}</span></p><a class='btn-text' href='${$}' rel='${rel}' target='${tgt}'>Read details<i class='fa fa-angle-right'></i></a></div></div></div></div>`}),"");document.getElementById("tab3").innerHTML=`${a}`}function tab4(t){const a=Object.keys(t).reduce(((a,e)=>{const r=`${t[e].origin}`,i=destinasi(r),s=`${t[e].destination}`,n=destinasi(s),c=`${t[e].airline}`,d=`${t[e].price}`,l=(t[e].flight_number,`${t[e].departure_at}`);year=`${l.substring(0,4)}`,month=`${l.substring(5,7)}`,day=`${l.substring(8,10)}`,departure=`${year}-${month}-${day}`,departure_date=`${monthName[parseInt(month,10)]} ${day}, ${year}`;const o=`${t[e].return_at}`;year=`${o.substring(0,4)}`,month=`${o.substring(5,7)}`,day=`${o.substring(8,10)}`,return_dt=`${year}-${month}-${day}`,return_date=`${monthName[parseInt(month,10)]} ${day}, ${year}`;const $=`https://tp.media/r?marker=${marker}&p=4044&type=click&campaign_id=100&u=https%3A%2F%2Fflight.${domain}%2Fflights%3Fdepart_date%3D${departure}%26return_date%3D${return_dt}%26origin_iata%3D${r}%26destination_iata%3D${s}%26currency%3D${currency}%26with_request%3Dtrue%26locale%3D${lokal}&lang=${lokal}&trace_id=Zzeaad93c4c7474ece8ac0259-${marker}`,p=`Flight From ${i} to ${n}`;return a+=`<div class='col-lg-4 responsive-column'><div class='card-item flight-card'><div class='card-img'><a class='d-block' href='${$}' rel='${rel}' target='${tgt}'><img alt='${p}' title='${p}' class='lazyload' height='247px' width='370px' src='https://photo.hotellook.com/static/cities/370x247/${s}.webp'/><span class='badge'>${n}</span></a></div><div class='card-body'><img alt='${c}' title='${c}' class='flight-logo' height='30px' width='124px' src='https://flight.${domain}/images/airline/124/30/gravity=west/${c}.png'/><h3 class='card-title' title='${p}' alt='${p}'><a href='${$}' rel='${rel}' target='${tgt}'>${i} <i class='fa fa-exchange mx-2'></i> ${n}</a></h3><p class='card-meta'>${departure_date} - ${return_date}</p><div class='card-price d-flex align-items-center justify-content-between'><p><span class='price__from mr-1'>From</span><span class='price__num'>${sym}${d}</span></p><a class='btn-text' href='${$}' rel='${rel}' target='${tgt}'>Read details<i class='fa fa-angle-right'></i></a></div></div></div></div>`}),"");document.getElementById("tab4").innerHTML=`${a}`}function tab5(t){const a=Object.keys(t).reduce(((a,e)=>{const r=`${t[e].origin}`,i=destinasi(r),s=`${t[e].destination}`,n=destinasi(s),c=`${t[e].airline}`,d=`${t[e].price}`,l=(t[e].flight_number,`${t[e].departure_at}`);year=`${l.substring(0,4)}`,month=`${l.substring(5,7)}`,day=`${l.substring(8,10)}`,departure=`${year}-${month}-${day}`,departure_date=`${monthName[parseInt(month,10)]} ${day}, ${year}`;const o=`${t[e].return_at}`;year=`${o.substring(0,4)}`,month=`${o.substring(5,7)}`,day=`${o.substring(8,10)}`,return_dt=`${year}-${month}-${day}`,return_date=`${monthName[parseInt(month,10)]} ${day}, ${year}`;const $=`https://tp.media/r?marker=${marker}&p=4044&type=click&campaign_id=100&u=https%3A%2F%2Fflight.${domain}%2Fflights%3Fdepart_date%3D${departure}%26return_date%3D${return_dt}%26origin_iata%3D${r}%26destination_iata%3D${s}%26currency%3D${currency}%26with_request%3Dtrue%26locale%3D${lokal}&lang=${lokal}&trace_id=Zzeaad93c4c7474ece8ac0259-${marker}`,p=`Flight From ${i} to ${n}`;return a+=`<div class='col-lg-4 responsive-column'><div class='card-item flight-card'><div class='card-img'><a class='d-block' href='${$}' rel='${rel}' target='${tgt}'><img alt='${p}' title='${p}' class='lazyload' height='247px' width='370px' src='https://photo.hotellook.com/static/cities/370x247/${s}.webp'/><span class='badge'>${n}</span></a></div><div class='card-body'><img alt='${c}' title='${c}' class='flight-logo' height='30px' width='124px' src='https://flight.${domain}/images/airline/124/30/gravity=west/${c}.png'/><h3 class='card-title' title='${p}' alt='${p}'><a href='${$}' rel='${rel}' target='${tgt}'>${i} <i class='fa fa-exchange mx-2'></i> ${n}</a></h3><p class='card-meta'>${departure_date} - ${return_date}</p><div class='card-price d-flex align-items-center justify-content-between'><p><span class='price__from mr-1'>From</span><span class='price__num'>${sym}${d}</span></p><a class='btn-text' href='${$}' rel='${rel}' target='${tgt}'>Read details<i class='fa fa-angle-right'></i></a></div></div></div></div>`}),"");document.getElementById("tab5").innerHTML=`${a}`}function tab6(t){const a=Object.keys(t).reduce(((a,e)=>{const r=`${t[e].origin}`,i=destinasi(r),s=`${t[e].destination}`,n=destinasi(s),c=`${t[e].airline}`,d=`${t[e].price}`,l=(t[e].flight_number,`${t[e].departure_at}`);year=`${l.substring(0,4)}`,month=`${l.substring(5,7)}`,day=`${l.substring(8,10)}`,departure=`${year}-${month}-${day}`,departure_date=`${monthName[parseInt(month,10)]} ${day}, ${year}`;const o=`${t[e].return_at}`;year=`${o.substring(0,4)}`,month=`${o.substring(5,7)}`,day=`${o.substring(8,10)}`,return_dt=`${year}-${month}-${day}`,return_date=`${monthName[parseInt(month,10)]} ${day}, ${year}`;const $=`https://tp.media/r?marker=${marker}&p=4044&type=click&campaign_id=100&u=https%3A%2F%2Fflight.${domain}%2Fflights%3Fdepart_date%3D${departure}%26return_date%3D${return_dt}%26origin_iata%3D${r}%26destination_iata%3D${s}%26currency%3D${currency}%26with_request%3Dtrue%26locale%3D${lokal}&lang=${lokal}&trace_id=Zzeaad93c4c7474ece8ac0259-${marker}`,p=`Flight From ${i} to ${n}`;return a+=`<div class='col-lg-4 responsive-column'><div class='card-item flight-card'><div class='card-img'><a class='d-block' href='${$}' rel='${rel}' target='${tgt}'><img alt='${p}' title='${p}' class='lazyload' height='247px' width='370px' src='https://photo.hotellook.com/static/cities/370x247/${s}.webp'/><span class='badge'>${n}</span></a></div><div class='card-body'><img alt='${c}' title='${c}' class='flight-logo' height='30px' width='124px' src='https://flight.${domain}/images/airline/124/30/gravity=west/${c}.png'/><h3 class='card-title' title='${p}' alt='${p}'><a href='${$}' rel='${rel}' target='${tgt}'>${i} <i class='fa fa-exchange mx-2'></i> ${n}</a></h3><p class='card-meta'>${departure_date} - ${return_date}</p><div class='card-price d-flex align-items-center justify-content-between'><p><span class='price__from mr-1'>From</span><span class='price__num'>${sym}${d}</span></p><a class='btn-text' href='${$}' rel='${rel}' target='${tgt}'>Read details<i class='fa fa-angle-right'></i></a></div></div></div></div>`}),"");document.getElementById("tab6").innerHTML=`${a}`}function tab7(t){const a=Object.keys(t).reduce(((a,e)=>{const r=`${t[e].origin}`,i=destinasi(r),s=`${t[e].destination}`,n=destinasi(s),c=`${t[e].airline}`,d=`${t[e].price}`,l=(t[e].flight_number,`${t[e].departure_at}`);year=`${l.substring(0,4)}`,month=`${l.substring(5,7)}`,day=`${l.substring(8,10)}`,departure=`${year}-${month}-${day}`,departure_date=`${monthName[parseInt(month,10)]} ${day}, ${year}`;const o=`${t[e].return_at}`;year=`${o.substring(0,4)}`,month=`${o.substring(5,7)}`,day=`${o.substring(8,10)}`,return_dt=`${year}-${month}-${day}`,return_date=`${monthName[parseInt(month,10)]} ${day}, ${year}`;const $=`https://tp.media/r?marker=${marker}&p=4044&type=click&campaign_id=100&u=https%3A%2F%2Fflight.${domain}%2Fflights%3Fdepart_date%3D${departure}%26return_date%3D${return_dt}%26origin_iata%3D${r}%26destination_iata%3D${s}%26currency%3D${currency}%26with_request%3Dtrue%26locale%3D${lokal}&lang=${lokal}&trace_id=Zzeaad93c4c7474ece8ac0259-${marker}`,p=`Flight From ${i} to ${n}`;return a+=`<div class='col-lg-4 responsive-column'><div class='card-item flight-card'><div class='card-img'><a class='d-block' href='${$}' rel='${rel}' target='${tgt}'><img alt='${p}' title='${p}' class='lazyload' height='247px' width='370px' src='https://photo.hotellook.com/static/cities/370x247/${s}.webp'/><span class='badge'>${n}</span></a></div><div class='card-body'><img alt='${c}' title='${c}' class='flight-logo' height='30px' width='124px' src='https://flight.${domain}/images/airline/124/30/gravity=west/${c}.png'/><h3 class='card-title' title='${p}' alt='${p}'><a href='${$}' rel='${rel}' target='${tgt}'>${i} <i class='fa fa-exchange mx-2'></i> ${n}</a></h3><p class='card-meta'>${departure_date} - ${return_date}</p><div class='card-price d-flex align-items-center justify-content-between'><p><span class='price__from mr-1'>From</span><span class='price__num'>${sym}${d}</span></p><a class='btn-text' href='${$}' rel='${rel}' target='${tgt}'>Read details<i class='fa fa-angle-right'></i></a></div></div></div></div>`}),"");document.getElementById("tab7").innerHTML=`${a}`}function tab8(t){const a=Object.keys(t).reduce(((a,e)=>{const r=`${t[e].origin}`,i=destinasi(r),s=`${t[e].destination}`,n=destinasi(s),c=`${t[e].airline}`,d=`${t[e].price}`,l=(t[e].flight_number,`${t[e].departure_at}`);year=`${l.substring(0,4)}`,month=`${l.substring(5,7)}`,day=`${l.substring(8,10)}`,departure=`${year}-${month}-${day}`,departure_date=`${monthName[parseInt(month,10)]} ${day}, ${year}`;const o=`${t[e].return_at}`;year=`${o.substring(0,4)}`,month=`${o.substring(5,7)}`,day=`${o.substring(8,10)}`,return_dt=`${year}-${month}-${day}`,return_date=`${monthName[parseInt(month,10)]} ${day}, ${year}`;const $=`https://tp.media/r?marker=${marker}&p=4044&type=click&campaign_id=100&u=https%3A%2F%2Fflight.${domain}%2Fflights%3Fdepart_date%3D${departure}%26return_date%3D${return_dt}%26origin_iata%3D${r}%26destination_iata%3D${s}%26currency%3D${currency}%26with_request%3Dtrue%26locale%3D${lokal}&lang=${lokal}&trace_id=Zzeaad93c4c7474ece8ac0259-${marker}`,p=`Flight From ${i} to ${n}`;return a+=`<div class='col-lg-4 responsive-column'><div class='card-item flight-card'><div class='card-img'><a class='d-block' href='${$}' rel='${rel}' target='${tgt}'><img alt='${p}' title='${p}' class='lazyload' height='247px' width='370px' src='https://photo.hotellook.com/static/cities/370x247/${s}.webp'/><span class='badge'>${n}</span></a></div><div class='card-body'><img alt='${c}' title='${c}' class='flight-logo' height='30px' width='124px' src='https://flight.${domain}/images/airline/124/30/gravity=west/${c}.png'/><h3 class='card-title' title='${p}' alt='${p}'><a href='${$}' rel='${rel}' target='${tgt}'>${i} <i class='fa fa-exchange mx-2'></i> ${n}</a></h3><p class='card-meta'>${departure_date} - ${return_date}</p><div class='card-price d-flex align-items-center justify-content-between'><p><span class='price__from mr-1'>From</span><span class='price__num'>${sym}${d}</span></p><a class='btn-text' href='${$}' rel='${rel}' target='${tgt}'>Read details<i class='fa fa-angle-right'></i></a></div></div></div></div>`}),"");document.getElementById("tab8").innerHTML=`${a}`}function tab9(t){const a=Object.keys(t).reduce(((a,e)=>{const r=`${t[e].origin}`,i=destinasi(r),s=`${t[e].destination}`,n=destinasi(s),c=`${t[e].airline}`,d=`${t[e].price}`,l=(t[e].flight_number,`${t[e].departure_at}`);year=`${l.substring(0,4)}`,month=`${l.substring(5,7)}`,day=`${l.substring(8,10)}`,departure=`${year}-${month}-${day}`,departure_date=`${monthName[parseInt(month,10)]} ${day}, ${year}`;const o=`${t[e].return_at}`;year=`${o.substring(0,4)}`,month=`${o.substring(5,7)}`,day=`${o.substring(8,10)}`,return_dt=`${year}-${month}-${day}`,return_date=`${monthName[parseInt(month,10)]} ${day}, ${year}`;const $=`https://tp.media/r?marker=${marker}&p=4044&type=click&campaign_id=100&u=https%3A%2F%2Fflight.${domain}%2Fflights%3Fdepart_date%3D${departure}%26return_date%3D${return_dt}%26origin_iata%3D${r}%26destination_iata%3D${s}%26currency%3D${currency}%26with_request%3Dtrue%26locale%3D${lokal}&lang=${lokal}&trace_id=Zzeaad93c4c7474ece8ac0259-${marker}`,p=`Flight From ${i} to ${n}`;return a+=`<div class='col-lg-4 responsive-column'><div class='card-item flight-card'><div class='card-img'><a class='d-block' href='${$}' rel='${rel}' target='${tgt}'><img alt='${p}' title='${p}' class='lazyload' height='247px' width='370px' src='https://photo.hotellook.com/static/cities/370x247/${s}.webp'/><span class='badge'>${n}</span></a></div><div class='card-body'><img alt='${c}' title='${c}' class='flight-logo' height='30px' width='124px' src='https://flight.${domain}/images/airline/124/30/gravity=west/${c}.png'/><h3 class='card-title' title='${p}' alt='${p}'><a href='${$}' rel='${rel}' target='${tgt}'>${i} <i class='fa fa-exchange mx-2'></i> ${n}</a></h3><p class='card-meta'>${departure_date} - ${return_date}</p><div class='card-price d-flex align-items-center justify-content-between'><p><span class='price__from mr-1'>From</span><span class='price__num'>${sym}${d}</span></p><a class='btn-text' href='${$}' rel='${rel}' target='${tgt}'>Read details<i class='fa fa-angle-right'></i></a></div></div></div></div>`}),"");document.getElementById("tab9").innerHTML=`${a}`}monthFullName=[,"January","February","March","April","May","June","July","August","September","October","November","December"],monthName=[,"Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],tgt="_blank",lokal="en_US",rel="nofollow noopener noreferrer sponsored",sym="$",domain=document.location.hostname,fetch("https://travelpayouts-travelpayouts-flight-data-v1.p.rapidapi.com/v1/city-directions?origin=BKK&currency="+currency+"&limit=6",{method:"GET",headers:{"x-access-token":""+token,"x-rapidapi-key":"7553c9c4b0msh01b4944e1049a81p158876jsn340bfdd90264","x-rapidapi-host":"travelpayouts-travelpayouts-flight-data-v1.p.rapidapi.com"}}).then((function(t){return t.json()})).then((function(t){tab1(t.data)})).catch((function(t){console.error(t)})),fetch("https://travelpayouts-travelpayouts-flight-data-v1.p.rapidapi.com/v1/city-directions?origin=PAR&currency="+currency+"&limit=6",{method:"GET",headers:{"x-access-token":""+token,"x-rapidapi-key":"7553c9c4b0msh01b4944e1049a81p158876jsn340bfdd90264","x-rapidapi-host":"travelpayouts-travelpayouts-flight-data-v1.p.rapidapi.com"}}).then((function(t){return t.json()})).then((function(t){tab2(t.data)})).catch((function(t){console.error(t)})),fetch("https://travelpayouts-travelpayouts-flight-data-v1.p.rapidapi.com/v1/city-directions?origin=LON&currency="+currency+"&limit=6",{method:"GET",headers:{"x-access-token":""+token,"x-rapidapi-key":"7553c9c4b0msh01b4944e1049a81p158876jsn340bfdd90264","x-rapidapi-host":"travelpayouts-travelpayouts-flight-data-v1.p.rapidapi.com"}}).then((function(t){return t.json()})).then((function(t){tab3(t.data)})).catch((function(t){console.error(t)})),fetch("https://travelpayouts-travelpayouts-flight-data-v1.p.rapidapi.com/v1/city-directions?origin=DXB&currency="+currency+"&limit=6",{method:"GET",headers:{"x-access-token":""+token,"x-rapidapi-key":"7553c9c4b0msh01b4944e1049a81p158876jsn340bfdd90264","x-rapidapi-host":"travelpayouts-travelpayouts-flight-data-v1.p.rapidapi.com"}}).then((function(t){return t.json()})).then((function(t){tab4(t.data)})).catch((function(t){console.error(t)})),fetch("https://travelpayouts-travelpayouts-flight-data-v1.p.rapidapi.com/v1/city-directions?origin=SIN&currency="+currency+"&limit=6",{method:"GET",headers:{"x-access-token":""+token,"x-rapidapi-key":"7553c9c4b0msh01b4944e1049a81p158876jsn340bfdd90264","x-rapidapi-host":"travelpayouts-travelpayouts-flight-data-v1.p.rapidapi.com"}}).then((function(t){return t.json()})).then((function(t){tab5(t.data)})).catch((function(t){console.error(t)})),fetch("https://travelpayouts-travelpayouts-flight-data-v1.p.rapidapi.com/v1/city-directions?origin=NYC&currency="+currency+"&limit=6",{method:"GET",headers:{"x-access-token":""+token,"x-rapidapi-key":"7553c9c4b0msh01b4944e1049a81p158876jsn340bfdd90264","x-rapidapi-host":"travelpayouts-travelpayouts-flight-data-v1.p.rapidapi.com"}}).then((function(t){return t.json()})).then((function(t){tab6(t.data)})).catch((function(t){console.error(t)})),fetch("https://travelpayouts-travelpayouts-flight-data-v1.p.rapidapi.com/v1/city-directions?origin=KUL&currency="+currency+"&limit=6",{method:"GET",headers:{"x-access-token":""+token,"x-rapidapi-key":"7553c9c4b0msh01b4944e1049a81p158876jsn340bfdd90264","x-rapidapi-host":"travelpayouts-travelpayouts-flight-data-v1.p.rapidapi.com"}}).then((function(t){return t.json()})).then((function(t){tab7(t.data)})).catch((function(t){console.error(t)})),fetch("https://travelpayouts-travelpayouts-flight-data-v1.p.rapidapi.com/v1/city-directions?origin=IST&currency="+currency+"&limit=6",{method:"GET",headers:{"x-access-token":""+token,"x-rapidapi-key":"7553c9c4b0msh01b4944e1049a81p158876jsn340bfdd90264","x-rapidapi-host":"travelpayouts-travelpayouts-flight-data-v1.p.rapidapi.com"}}).then((function(t){return t.json()})).then((function(t){tab8(t.data)})).catch((function(t){console.error(t)})),fetch("https://travelpayouts-travelpayouts-flight-data-v1.p.rapidapi.com/v1/city-directions?origin=TYO&currency="+currency+"&limit=6",{method:"GET",headers:{"x-access-token":""+token,"x-rapidapi-key":"7553c9c4b0msh01b4944e1049a81p158876jsn340bfdd90264","x-rapidapi-host":"travelpayouts-travelpayouts-flight-data-v1.p.rapidapi.com"}}).then((function(t){return t.json()})).then((function(t){tab9(t.data)})).catch((function(t){console.error(t)}));function lokasi(a){iata_name=a.iata,city_name=a.name,console.log(iata_name),$.ajax({url:"https://yasen.hotellook.com/autocomplete?&term="+city_name+"&lang="+lokal+"&limit=1",type:"get",dataType:"jsonp",success:function(a){cityName_hotel=a.cities[0].city,idhotel=a.cities[0].id,$.ajax({url:"https://yasen.hotellook.com/tp/public/widget_location_dump.json?currency="+currency+"&language="+lokal+"&limit=9&id="+idhotel+"&type=tophotels&check_in="+current+"&check_out="+Days+"&token="+token,type:"get",dataType:"jsonp",success:function(a){for(var t="",e=0;e<a.tophotels.length;e++){var s=a.tophotels[e].last_price_info.price_pn,o=a.tophotels[e].name,r=a.tophotels[e].hotel_id,l=a.tophotels[e].hotel_type[0];rating=a.tophotels[e].rating;a.tophotels[e].ty_summary,a.tophotels[e].distance;var i=a.tophotels[e].stars;star=f(i);var n=a.tophotels[e].has_wifi;wifi=g(n);var c=a.tophotels[e].last_price_info.search_params.adults,p=a.tophotels[e].last_price_info.search_params.children,h=a.tophotels[e].last_price_info.search_params.checkIn,d=a.tophotels[e].last_price_info.search_params.checkOut,m="https://tp.media/r?trace_id=Zzfc3db1d6428143fbaf1646d-"+marker+"&p=4026&marker="+marker+".$14&u=%2F%2Fhotel."+domain+"%2Fhotels%2F%3FhotelId="+r+"&language="+lokal+"&adults="+c+"&children="+p+"&checkIn="+h+"&checkOut="+d+"&currency="+currency+"&marker="+marker+".%2414&utm_source="+domain,u="Booking "+o+" Hotel Room $"+s+"/night",_="nofollow noopener noreferrer sponsored";t+="<div class='col-lg-4 responsive-column'><div class='card-item flight-card'><div class='card-img'><a class='d-block' alt='"+u+"' title='"+u+"' href='"+m+"' rel='"+_+"' target='_blank'><img alt='"+u+"' title='"+u+"' class='lazyload' data-src='https://photo.hotellook.com/image_v2/crop/h"+r+"_0/378/251.webp' height='251px' width='378px'/></a><span class='badge'>"+l+"</span></div><div class='card-body'><h3 class='card-title'><a alt='"+u+"' title='"+u+"' href='"+m+"' rel='"+_+"' target='_blank'>"+o+"</a></h3><p class='card-meta'>"+cityName_hotel+", "+iata_name+"</p><div class='card-rating'><span class='badge text-white'>"+i+"/5</span><span class='review__text'>Average</span><span class='rating__text'>("+rating+" Reviews)</span></div><div class='card-price d-flex align-items-center justify-content-between'><p><span class='price__from'>From</span><span class='price__num'> $"+s+"</span><span class='price__text'>Per night</span></p><a class='btn-text' alt='"+u+"' title='"+u+"' href='"+m+"' rel='"+_+"' target='_blank'>See details<i class='fa fa-angle-right ml-1'></i></a></div></div></div></div>"}function f(a){for(var t=[],e=a=Math.round(2*a)/2;1<=e;e--)t.push('<i class="fa fa-star"></i>');for(.5==e&&t.push('<i class="fa fa-star-half"></i>'),a=5-a;1<=a;a--)t.push('<i class="fa fa-star-o"></i>');return t.join("")}function g(a){let t=[];return 1==a&&t.push('<i class="fa fa-wifi"></i>'),0==a&&t.push(""),t.join("")}t+="",document.getElementById("hotelnearme").innerHTML=t}})}})}currentDate=moment(),futureDays=moment(currentDate).add(10,"days"),futureDaysEnd=moment(futureDays).endOf("days"),Days=futureDays.format("YYYY-MM-DD"),current=currentDate.format("YYYY-MM-DD");

function lokasi(t){iata_name=t.iata,city_name=t.name,console.log(iata_name),jQuery.ajax({url:"https://yasen.hotellook.com/autocomplete?&term="+city_name+"&lang="+lokal+"&limit=1",type:"get",dataType:"jsonp",success:function(t){cityName_hotel=t.cities[0].city,idhotel=t.cities[0].id,jQuery.ajax({url:"https://yasen.hotellook.com/tp/public/widget_location_dump.json?currency="+currency+"&language="+lokal+"&limit=9&id="+idhotel+"&type=tophotels&check_in="+current+"&check_out="+Days+"&token="+token,type:"get",dataType:"jsonp",success:function(t){for(var a="",i=0;i<t.tophotels.length;i++){var e=t.tophotels[i].last_price_info.price_pn,s=t.tophotels[i].name,r=t.tophotels[i].hotel_id,d=t.tophotels[i].hotel_type[0];rating=t.tophotels[i].rating,t.tophotels[i].ty_summary,t.tophotels[i].distance;var n=t.tophotels[i].stars;star=h(n);var o=t.tophotels[i].has_wifi;wifi=u(o);var c=t.tophotels[i].last_price_info.search_params.adults,l=t.tophotels[i].last_price_info.search_params.children,p=t.tophotels[i].last_price_info.search_params.checkIn,v=t.tophotels[i].last_price_info.search_params.checkOut,f="https://tp.media/r?trace_id=Zzfc3db1d6428143fbaf1646d-"+marker+"&p=4026&marker="+marker+".$14&u=%2F%2Fbook."+domain+"%2Fhotels%2F%3FhotelId="+r+"&language="+lokal+"&adults="+c+"&children="+l+"&checkIn="+p+"&checkOut="+v+"&currency="+currency+"&marker="+marker+".%2414&utm_source="+domain,g="Booking "+s+" Hotel Room "+sym+e+"/night",m="nofollow noopener noreferrer sponsored";a+="<div class='col-lg-4 responsive-column'><div class='card-item flight-card'><div class='card-img'><a class='d-block' alt='"+g+"' title='"+g+"' href='"+f+"' rel='"+m+"' target='_blank'><img alt='"+g+"' title='"+g+"' class='lazyload' data-src='https://photo.hotellook.com/image_v2/crop/h"+r+"_0/378/251.webp' height='251px' width='378px'/></a><span class='badge'>"+d+"</span></div><div class='card-body'><h3 class='card-title'><a alt='"+g+"' title='"+g+"' href='"+f+"' rel='"+m+"' target='_blank'>"+s+"</a></h3><p class='card-meta'>"+cityName_hotel+", "+iata_name+"</p><div class='card-rating'><span class='badge text-white'>"+n+"/5</span><span class='review__text'>Average</span><span class='rating__text'>("+rating+" Reviews)</span></div><div class='card-price d-flex align-items-center justify-content-between'><p><span class='price__from'>From</span><span class='price__num'> "+sym+e+"</span><span class='price__text'>Per night</span></p><a class='btn-text' alt='"+g+"' title='"+g+"' href='"+f+"' rel='"+m+"' target='_blank'>See details<i class='fa fa-angle-right ml-1'></i></a></div></div></div></div>"}function h(t){for(var a=[],i=t=Math.round(2*t)/2;1<=i;i--)a.push('<i class="fa fa-star"></i>');for(.5==i&&a.push('<i class="fa fa-star-half"></i>'),t=5-t;1<=t;t--)a.push('<i class="fa fa-star-o"></i>');return a.join("")}function u(t){let a=[];return 1==t&&a.push('<i class="fa fa-wifi"></i>'),0==t&&a.push(""),a.join("")}a+="",document.getElementById("hotelnearme").innerHTML=a}})}})}monthFullName=[,"January","February","March","April","May","June","July","August","September","October","November","December"],monthName=[,"Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],currentDate=moment(),futureDays=moment(currentDate).add(10,"days"),futureDaysEnd=moment(futureDays).endOf("days"),Days=futureDays.format("YYYY-MM-DD"),current=currentDate.format("YYYY-MM-DD"),BKK={async:!0,crossDomain:!0,url:"https://travelpayouts2.p.rapidapi.com/aviasales/v3/prices_for_dates?origin=JO&destination=BKK&limit=6&currency="+currency+"&page=1&one_way=false&token="+token,method:"GET",headers:{"x-rapidapi-host":"travelpayouts2.p.rapidapi.com","x-rapidapi-key":"7553c9c4b0msh01b4944e1049a81p158876jsn340bfdd90264"}},PAR={async:!0,crossDomain:!0,url:"https://travelpayouts2.p.rapidapi.com/aviasales/v3/prices_for_dates?origin=JO&destination=PAR&limit=6&currency="+currency+"&page=1&one_way=false&token="+token,method:"GET",headers:{"x-rapidapi-host":"travelpayouts2.p.rapidapi.com","x-rapidapi-key":"7553c9c4b0msh01b4944e1049a81p158876jsn340bfdd90264"}},LON={async:!0,crossDomain:!0,url:"https://travelpayouts2.p.rapidapi.com/aviasales/v3/prices_for_dates?origin=JO&destination=LON&limit=6&currency="+currency+"&page=1&one_way=false&token="+token,method:"GET",headers:{"x-rapidapi-host":"travelpayouts2.p.rapidapi.com","x-rapidapi-key":"7553c9c4b0msh01b4944e1049a81p158876jsn340bfdd90264"}},DXB={async:!0,crossDomain:!0,url:"https://travelpayouts2.p.rapidapi.com/aviasales/v3/prices_for_dates?origin=JO&destination=DXB&limit=6&currency="+currency+"&page=1&one_way=false&token="+token,method:"GET",headers:{"x-rapidapi-host":"travelpayouts2.p.rapidapi.com","x-rapidapi-key":"7553c9c4b0msh01b4944e1049a81p158876jsn340bfdd90264"}},SIN={async:!0,crossDomain:!0,url:"https://travelpayouts2.p.rapidapi.com/aviasales/v3/prices_for_dates?origin=JO&destination=SIN&limit=6&currency="+currency+"&page=1&one_way=false&token="+token,method:"GET",headers:{"x-rapidapi-host":"travelpayouts2.p.rapidapi.com","x-rapidapi-key":"7553c9c4b0msh01b4944e1049a81p158876jsn340bfdd90264"}},NYC={async:!0,crossDomain:!0,url:"https://travelpayouts2.p.rapidapi.com/aviasales/v3/prices_for_dates?origin=JO&destination=NYC&limit=6&currency="+currency+"&page=1&one_way=false&token="+token,method:"GET",headers:{"x-rapidapi-host":"travelpayouts2.p.rapidapi.com","x-rapidapi-key":"7553c9c4b0msh01b4944e1049a81p158876jsn340bfdd90264"}},IST={async:!0,crossDomain:!0,url:"https://travelpayouts2.p.rapidapi.com/aviasales/v3/prices_for_dates?origin=JO&destination=IST&limit=6&currency="+currency+"&page=1&one_way=false&token="+token,method:"GET",headers:{"x-rapidapi-host":"travelpayouts2.p.rapidapi.com","x-rapidapi-key":"7553c9c4b0msh01b4944e1049a81p158876jsn340bfdd90264"}},TYO={async:!0,crossDomain:!0,url:"https://travelpayouts2.p.rapidapi.com/aviasales/v3/prices_for_dates?origin=JO&destination=TYO&limit=6&currency="+currency+"&page=1&one_way=false&token="+token,method:"GET",headers:{"x-rapidapi-host":"travelpayouts2.p.rapidapi.com","x-rapidapi-key":"7553c9c4b0msh01b4944e1049a81p158876jsn340bfdd90264"}},KUL={async:!0,crossDomain:!0,url:"https://travelpayouts2.p.rapidapi.com/aviasales/v3/prices_for_dates?origin=JO&destination=KUL&limit=6&currency="+currency+"&page=1&one_way=false&token="+token,method:"GET",headers:{"x-rapidapi-host":"travelpayouts2.p.rapidapi.com","x-rapidapi-key":"7553c9c4b0msh01b4944e1049a81p158876jsn340bfdd90264"}},jQuery.ajax(BKK).done((function(t){for(var a="",i=0;i<t.data.length;i++){var e,s=t.data[i].origin,r=destinasi(s),d=t.data[i].destination,n=destinasi(d),o=t.data[i].origin_airport,c=t.data[i].destination_airport,l=t.data[i].departure_at.substring(0,10),p=t.data[i].return_at.substring(0,10),v=t.data[i].airline,f=ac(v),g=t.data[i].price;"0"==(e=t.data[i].transfers)&&(trnsfr="Nonstop"),"1"==e&&(trnsfr="1 Stop"),"2"==e&&(trnsfr="2 Stops"),"3"==e&&(trnsfr="3 Stops"),"4"==e&&(trnsfr="4 Stops"),"0"==(e=t.data[i].transfers)&&(trnsfr="Nonstop"),"1"==e&&(trnsfr="1 Stop"),"2"==e&&(trnsfr="2 Stops"),"3"==e&&(trnsfr="3 Stops"),"4"==e&&(trnsfr="4 Stops");var m="Flight From "+r+" to "+n,h="https://tp.media/r?marker="+marker+"&p=4044&type=click&campaign_id=100&u=https%3A%2F%2Fbook."+domain+"%2Fflights%3Fdepart_date%3D"+l+"%26return_date%3D"+p+"%26origin_iata%3D"+s+"%26destination_iata%3D"+d+"%26currency%3D"+currency+"%26with_request%3Dtrue%26locale%3D"+lokal+"&lang="+lokal+"&trace_id=Zzeaad93c4c7474ece8ac0259-"+marker;a+="<div class='col-lg-6 responsive-column'><div class='card-item flight-card flight--card card-item-list card-item-list-2'><div class='card-img'><img alt='"+f+"' title='"+f+"' class='flight-logo lazyload' height='60px' width='150px' data-src='https://book."+domain+"/images/airline/150/60/gravity=west/"+v+".png'></div><div class='card-body'><div class='card-top-title d-flex justify-content-between'><a href='"+h+"' target='"+tgt+"' rel='"+rel+"'><div class='d-flex' title='"+m+"' alt='"+m+"'><div><div class='card-title font-size-17'>"+r+"</div><div class='card-meta font-size-14'>"+o+"</div></div><i class='fa fa-exchange mx-2'></i><div><div class='card-title font-size-17'>"+n+"</div><div class='card-meta font-size-14'>"+c+"</div></div></div></a><div><div><div class='text-right'><span class='font-weight-regular font-size-14 d-block'>From</span><div class='font-weight-bold color-text'>"+sym+" "+g+"</div></div></div></div></div><div class=' d-flex justify-content-between'><div class='font-size-14'>"+l+" - "+p+"</div><a class='btn-text' href='"+h+"' target='"+tgt+"' rel='"+rel+"'><div class='searchinfo text-center'>Search</div></a></div><div class='flightstat font-size-14'>Round-trip<span> | </span>"+trnsfr+"<span> | </span>Economy</div></div></div></div>"}a+="",document.getElementById("tab1").innerHTML=a})),jQuery.ajax(PAR).done((function(t){for(var a="",i=0;i<t.data.length;i++){var e=t.data[i].origin,s=destinasi(e),r=t.data[i].destination,d=destinasi(r),n=t.data[i].origin_airport,o=t.data[i].destination_airport,c=t.data[i].departure_at.substring(0,10),l=t.data[i].return_at.substring(0,10),p=t.data[i].airline,v=ac(p),f=t.data[i].price,g=t.data[i].transfers;"0"==g&&(trnsfr="Nonstop"),"1"==g&&(trnsfr="1 Stop"),"2"==g&&(trnsfr="2 Stops"),"3"==g&&(trnsfr="3 Stops"),"4"==g&&(trnsfr="4 Stops");var m="Flight From "+s+" to "+d,h="https://tp.media/r?marker="+marker+"&p=4044&type=click&campaign_id=100&u=https%3A%2F%2Fbook."+domain+"%2Fflights%3Fdepart_date%3D"+c+"%26return_date%3D"+l+"%26origin_iata%3D"+e+"%26destination_iata%3D"+r+"%26currency%3D"+currency+"%26with_request%3Dtrue%26locale%3D"+lokal+"&lang="+lokal+"&trace_id=Zzeaad93c4c7474ece8ac0259-"+marker;a+="<div class='col-lg-6 responsive-column'><div class='card-item flight-card flight--card card-item-list card-item-list-2'><div class='card-img'><img alt='"+v+"' title='"+v+"' class='flight-logo lazyload' height='60px' width='150px' data-src='https://book."+domain+"/images/airline/150/60/gravity=west/"+p+".png'></div><div class='card-body'><div class='card-top-title d-flex justify-content-between'><a href='"+h+"' target='"+tgt+"' rel='"+rel+"'><div class='d-flex' title='"+m+"' alt='"+m+"'><div><div class='card-title font-size-17'>"+s+"</div><div class='card-meta font-size-14'>"+n+"</div></div><i class='fa fa-exchange mx-2'></i><div><div class='card-title font-size-17'>"+d+"</div><div class='card-meta font-size-14'>"+o+"</div></div></div></a><div><div><div class='text-right'><span class='font-weight-regular font-size-14 d-block'>From</span><div class='font-weight-bold color-text'>"+sym+" "+f+"</div></div></div></div></div><div class=' d-flex justify-content-between'><div class='font-size-14'>"+c+" - "+l+"</div><a class='btn-text' href='"+h+"' target='"+tgt+"' rel='"+rel+"'><div class='searchinfo text-center'>Search</div></a></div><div class='flightstat font-size-14'>Round-trip<span> | </span>"+trnsfr+"<span> | </span>Economy</div></div></div></div>"}a+="",document.getElementById("tab2").innerHTML=a})),jQuery.ajax(LON).done((function(t){for(var a="",i=0;i<t.data.length;i++){var e=t.data[i].origin,s=destinasi(e),r=t.data[i].destination,d=destinasi(r),n=t.data[i].origin_airport,o=t.data[i].destination_airport,c=t.data[i].departure_at.substring(0,10),l=t.data[i].return_at.substring(0,10),p=t.data[i].airline,v=ac(p),f=t.data[i].price,g=t.data[i].transfers;"0"==g&&(trnsfr="Nonstop"),"1"==g&&(trnsfr="1 Stop"),"2"==g&&(trnsfr="2 Stops"),"3"==g&&(trnsfr="3 Stops"),"4"==g&&(trnsfr="4 Stops");var m="Flight From "+s+" to "+d,h="https://tp.media/r?marker="+marker+"&p=4044&type=click&campaign_id=100&u=https%3A%2F%2Fbook."+domain+"%2Fflights%3Fdepart_date%3D"+c+"%26return_date%3D"+l+"%26origin_iata%3D"+e+"%26destination_iata%3D"+r+"%26currency%3D"+currency+"%26with_request%3Dtrue%26locale%3D"+lokal+"&lang="+lokal+"&trace_id=Zzeaad93c4c7474ece8ac0259-"+marker;a+="<div class='col-lg-6 responsive-column'><div class='card-item flight-card flight--card card-item-list card-item-list-2'><div class='card-img'><img alt='"+v+"' title='"+v+"' class='flight-logo lazyload' height='60px' width='150px' data-src='https://book."+domain+"/images/airline/150/60/gravity=west/"+p+".png'></div><div class='card-body'><div class='card-top-title d-flex justify-content-between'><a href='"+h+"' target='"+tgt+"' rel='"+rel+"'><div class='d-flex' title='"+m+"' alt='"+m+"'><div><div class='card-title font-size-17'>"+s+"</div><div class='card-meta font-size-14'>"+n+"</div></div><i class='fa fa-exchange mx-2'></i><div><div class='card-title font-size-17'>"+d+"</div><div class='card-meta font-size-14'>"+o+"</div></div></div></a><div><div><div class='text-right'><span class='font-weight-regular font-size-14 d-block'>From</span><div class='font-weight-bold color-text'>"+sym+" "+f+"</div></div></div></div></div><div class=' d-flex justify-content-between'><div class='font-size-14'>"+c+" - "+l+"</div><a class='btn-text' href='"+h+"' target='"+tgt+"' rel='"+rel+"'><div class='searchinfo text-center'>Search</div></a></div><div class='flightstat font-size-14'>Round-trip<span> | </span>"+trnsfr+"<span> | </span>Economy</div></div></div></div>"}a+="",document.getElementById("tab3").innerHTML=a})),jQuery.ajax(DXB).done((function(t){for(var a="",i=0;i<t.data.length;i++){var e=t.data[i].origin,s=destinasi(e),r=t.data[i].destination,d=destinasi(r),n=t.data[i].origin_airport,o=t.data[i].destination_airport,c=t.data[i].departure_at.substring(0,10),l=t.data[i].return_at.substring(0,10),p=t.data[i].airline,v=ac(p),f=t.data[i].price,g=t.data[i].transfers;"0"==g&&(trnsfr="Nonstop"),"1"==g&&(trnsfr="1 Stop"),"2"==g&&(trnsfr="2 Stops"),"3"==g&&(trnsfr="3 Stops"),"4"==g&&(trnsfr="4 Stops");var m="Flight From "+s+" to "+d,h="https://tp.media/r?marker="+marker+"&p=4044&type=click&campaign_id=100&u=https%3A%2F%2Fbook."+domain+"%2Fflights%3Fdepart_date%3D"+c+"%26return_date%3D"+l+"%26origin_iata%3D"+e+"%26destination_iata%3D"+r+"%26currency%3D"+currency+"%26with_request%3Dtrue%26locale%3D"+lokal+"&lang="+lokal+"&trace_id=Zzeaad93c4c7474ece8ac0259-"+marker;a+="<div class='col-lg-6 responsive-column'><div class='card-item flight-card flight--card card-item-list card-item-list-2'><div class='card-img'><img alt='"+v+"' title='"+v+"' class='flight-logo lazyload' height='60px' width='150px' data-src='https://book."+domain+"/images/airline/150/60/gravity=west/"+p+".png'></div><div class='card-body'><div class='card-top-title d-flex justify-content-between'><a href='"+h+"' target='"+tgt+"' rel='"+rel+"'><div class='d-flex' title='"+m+"' alt='"+m+"'><div><div class='card-title font-size-17'>"+s+"</div><div class='card-meta font-size-14'>"+n+"</div></div><i class='fa fa-exchange mx-2'></i><div><div class='card-title font-size-17'>"+d+"</div><div class='card-meta font-size-14'>"+o+"</div></div></div></a><div><div><div class='text-right'><span class='font-weight-regular font-size-14 d-block'>From</span><div class='font-weight-bold color-text'>"+sym+" "+f+"</div></div></div></div></div><div class=' d-flex justify-content-between'><div class='font-size-14'>"+c+" - "+l+"</div><a class='btn-text' href='"+h+"' target='"+tgt+"' rel='"+rel+"'><div class='searchinfo text-center'>Search</div></a></div><div class='flightstat font-size-14'>Round-trip<span> | </span>"+trnsfr+"<span> | </span>Economy</div></div></div></div>"}a+="",document.getElementById("tab4").innerHTML=a})),jQuery.ajax(SIN).done((function(t){for(var a="",i=0;i<t.data.length;i++){var e=t.data[i].origin,s=destinasi(e),r=t.data[i].destination,d=destinasi(r),n=t.data[i].origin_airport,o=t.data[i].destination_airport,c=t.data[i].departure_at.substring(0,10),l=t.data[i].return_at.substring(0,10),p=t.data[i].airline,v=ac(p),f=t.data[i].price,g=t.data[i].transfers;"0"==g&&(trnsfr="Nonstop"),"1"==g&&(trnsfr="1 Stop"),"2"==g&&(trnsfr="2 Stops"),"3"==g&&(trnsfr="3 Stops"),"4"==g&&(trnsfr="4 Stops");var m="Flight From "+s+" to "+d,h="https://tp.media/r?marker="+marker+"&p=4044&type=click&campaign_id=100&u=https%3A%2F%2Fbook."+domain+"%2Fflights%3Fdepart_date%3D"+c+"%26return_date%3D"+l+"%26origin_iata%3D"+e+"%26destination_iata%3D"+r+"%26currency%3D"+currency+"%26with_request%3Dtrue%26locale%3D"+lokal+"&lang="+lokal+"&trace_id=Zzeaad93c4c7474ece8ac0259-"+marker;a+="<div class='col-lg-6 responsive-column'><div class='card-item flight-card flight--card card-item-list card-item-list-2'><div class='card-img'><img alt='"+v+"' title='"+v+"' class='flight-logo lazyload' height='60px' width='150px' data-src='https://book."+domain+"/images/airline/150/60/gravity=west/"+p+".png'></div><div class='card-body'><div class='card-top-title d-flex justify-content-between'><a href='"+h+"' target='"+tgt+"' rel='"+rel+"'><div class='d-flex' title='"+m+"' alt='"+m+"'><div><div class='card-title font-size-17'>"+s+"</div><div class='card-meta font-size-14'>"+n+"</div></div><i class='fa fa-exchange mx-2'></i><div><div class='card-title font-size-17'>"+d+"</div><div class='card-meta font-size-14'>"+o+"</div></div></div></a><div><div><div class='text-right'><span class='font-weight-regular font-size-14 d-block'>From</span><div class='font-weight-bold color-text'>"+sym+" "+f+"</div></div></div></div></div><div class=' d-flex justify-content-between'><div class='font-size-14'>"+c+" - "+l+"</div><a class='btn-text' href='"+h+"' target='"+tgt+"' rel='"+rel+"'><div class='searchinfo text-center'>Search</div></a></div><div class='flightstat font-size-14'>Round-trip<span> | </span>"+trnsfr+"<span> | </span>Economy</div></div></div></div>"}a+="",document.getElementById("tab5").innerHTML=a})),jQuery.ajax(NYC).done((function(t){for(var a="",i=0;i<t.data.length;i++){var e=t.data[i].origin,s=destinasi(e),r=t.data[i].destination,d=destinasi(r),n=t.data[i].origin_airport,o=t.data[i].destination_airport,c=t.data[i].departure_at.substring(0,10),l=t.data[i].return_at.substring(0,10),p=t.data[i].airline,v=ac(p),f=t.data[i].price,g=t.data[i].transfers;"0"==g&&(trnsfr="Nonstop"),"1"==g&&(trnsfr="1 Stop"),"2"==g&&(trnsfr="2 Stops"),"3"==g&&(trnsfr="3 Stops"),"4"==g&&(trnsfr="4 Stops");var m="Flight From "+s+" to "+d,h="https://tp.media/r?marker="+marker+"&p=4044&type=click&campaign_id=100&u=https%3A%2F%2Fbook."+domain+"%2Fflights%3Fdepart_date%3D"+c+"%26return_date%3D"+l+"%26origin_iata%3D"+e+"%26destination_iata%3D"+r+"%26currency%3D"+currency+"%26with_request%3Dtrue%26locale%3D"+lokal+"&lang="+lokal+"&trace_id=Zzeaad93c4c7474ece8ac0259-"+marker;a+="<div class='col-lg-6 responsive-column'><div class='card-item flight-card flight--card card-item-list card-item-list-2'><div class='card-img'><img alt='"+v+"' title='"+v+"' class='flight-logo lazyload' height='60px' width='150px' data-src='https://book."+domain+"/images/airline/150/60/gravity=west/"+p+".png'></div><div class='card-body'><div class='card-top-title d-flex justify-content-between'><a href='"+h+"' target='"+tgt+"' rel='"+rel+"'><div class='d-flex' title='"+m+"' alt='"+m+"'><div><div class='card-title font-size-17'>"+s+"</div><div class='card-meta font-size-14'>"+n+"</div></div><i class='fa fa-exchange mx-2'></i><div><div class='card-title font-size-17'>"+d+"</div><div class='card-meta font-size-14'>"+o+"</div></div></div></a><div><div><div class='text-right'><span class='font-weight-regular font-size-14 d-block'>From</span><div class='font-weight-bold color-text'>"+sym+" "+f+"</div></div></div></div></div><div class=' d-flex justify-content-between'><div class='font-size-14'>"+c+" - "+l+"</div><a class='btn-text' href='"+h+"' target='"+tgt+"' rel='"+rel+"'><div class='searchinfo text-center'>Search</div></a></div><div class='flightstat font-size-14'>Round-trip<span> | </span>"+trnsfr+"<span> | </span>Economy</div></div></div></div>"}a+="",document.getElementById("tab6").innerHTML=a})),jQuery.ajax(IST).done((function(t){for(var a="",i=0;i<t.data.length;i++){var e=t.data[i].origin,s=destinasi(e),r=t.data[i].destination,d=destinasi(r),n=t.data[i].origin_airport,o=t.data[i].destination_airport,c=t.data[i].departure_at.substring(0,10),l=t.data[i].return_at.substring(0,10),p=t.data[i].airline,v=ac(p),f=t.data[i].price,g=t.data[i].transfers;"0"==g&&(trnsfr="Nonstop"),"1"==g&&(trnsfr="1 Stop"),"2"==g&&(trnsfr="2 Stops"),"3"==g&&(trnsfr="3 Stops"),"4"==g&&(trnsfr="4 Stops");var m="Flight From "+s+" to "+d,h="https://tp.media/r?marker="+marker+"&p=4044&type=click&campaign_id=100&u=https%3A%2F%2Fbook."+domain+"%2Fflights%3Fdepart_date%3D"+c+"%26return_date%3D"+l+"%26origin_iata%3D"+e+"%26destination_iata%3D"+r+"%26currency%3D"+currency+"%26with_request%3Dtrue%26locale%3D"+lokal+"&lang="+lokal+"&trace_id=Zzeaad93c4c7474ece8ac0259-"+marker;a+="<div class='col-lg-6 responsive-column'><div class='card-item flight-card flight--card card-item-list card-item-list-2'><div class='card-img'><img alt='"+v+"' title='"+v+"' class='flight-logo lazyload' height='60px' width='150px' data-src='https://book."+domain+"/images/airline/150/60/gravity=west/"+p+".png'></div><div class='card-body'><div class='card-top-title d-flex justify-content-between'><a href='"+h+"' target='"+tgt+"' rel='"+rel+"'><div class='d-flex' title='"+m+"' alt='"+m+"'><div><div class='card-title font-size-17'>"+s+"</div><div class='card-meta font-size-14'>"+n+"</div></div><i class='fa fa-exchange mx-2'></i><div><div class='card-title font-size-17'>"+d+"</div><div class='card-meta font-size-14'>"+o+"</div></div></div></a><div><div><div class='text-right'><span class='font-weight-regular font-size-14 d-block'>From</span><div class='font-weight-bold color-text'>"+sym+" "+f+"</div></div></div></div></div><div class=' d-flex justify-content-between'><div class='font-size-14'>"+c+" - "+l+"</div><a class='btn-text' href='"+h+"' target='"+tgt+"' rel='"+rel+"'><div class='searchinfo text-center'>Search</div></a></div><div class='flightstat font-size-14'>Round-trip<span> | </span>"+trnsfr+"<span> | </span>Economy</div></div></div></div>"}a+="",document.getElementById("tab7").innerHTML=a})),jQuery.ajax(TYO).done((function(t){for(var a="",i=0;i<t.data.length;i++){var e=t.data[i].origin,s=destinasi(e),r=t.data[i].destination,d=destinasi(r),n=t.data[i].origin_airport,o=t.data[i].destination_airport,c=t.data[i].departure_at.substring(0,10),l=t.data[i].return_at.substring(0,10),p=t.data[i].airline,v=ac(p),f=t.data[i].price,g=t.data[i].transfers;"0"==g&&(trnsfr="Nonstop"),"1"==g&&(trnsfr="1 Stop"),"2"==g&&(trnsfr="2 Stops"),"3"==g&&(trnsfr="3 Stops"),"4"==g&&(trnsfr="4 Stops");var m="Flight From "+s+" to "+d,h="https://tp.media/r?marker="+marker+"&p=4044&type=click&campaign_id=100&u=https%3A%2F%2Fbook."+domain+"%2Fflights%3Fdepart_date%3D"+c+"%26return_date%3D"+l+"%26origin_iata%3D"+e+"%26destination_iata%3D"+r+"%26currency%3D"+currency+"%26with_request%3Dtrue%26locale%3D"+lokal+"&lang="+lokal+"&trace_id=Zzeaad93c4c7474ece8ac0259-"+marker;a+="<div class='col-lg-6 responsive-column'><div class='card-item flight-card flight--card card-item-list card-item-list-2'><div class='card-img'><img alt='"+v+"' title='"+v+"' class='flight-logo lazyload' height='60px' width='150px' data-src='https://book."+domain+"/images/airline/150/60/gravity=west/"+p+".png'></div><div class='card-body'><div class='card-top-title d-flex justify-content-between'><a href='"+h+"' target='"+tgt+"' rel='"+rel+"'><div class='d-flex' title='"+m+"' alt='"+m+"'><div><div class='card-title font-size-17'>"+s+"</div><div class='card-meta font-size-14'>"+n+"</div></div><i class='fa fa-exchange mx-2'></i><div><div class='card-title font-size-17'>"+d+"</div><div class='card-meta font-size-14'>"+o+"</div></div></div></a><div><div><div class='text-right'><span class='font-weight-regular font-size-14 d-block'>From</span><div class='font-weight-bold color-text'>"+sym+" "+f+"</div></div></div></div></div><div class=' d-flex justify-content-between'><div class='font-size-14'>"+c+" - "+l+"</div><a class='btn-text' href='"+h+"' target='"+tgt+"' rel='"+rel+"'><div class='searchinfo text-center'>Search</div></a></div><div class='flightstat font-size-14'>Round-trip<span> | </span>"+trnsfr+"<span> | </span>Economy</div></div></div></div>"}a+="",document.getElementById("tab8").innerHTML=a})),jQuery.ajax(KUL).done((function(t){for(var a="",i=0;i<t.data.length;i++){var e=t.data[i].origin,s=destinasi(e),r=t.data[i].destination,d=destinasi(r),n=t.data[i].origin_airport,o=t.data[i].destination_airport,c=t.data[i].departure_at.substring(0,10),l=t.data[i].return_at.substring(0,10),p=t.data[i].airline,v=ac(p),f=t.data[i].price,g=t.data[i].transfers;"0"==g&&(trnsfr="Nonstop"),"1"==g&&(trnsfr="1 Stop"),"2"==g&&(trnsfr="2 Stops"),"3"==g&&(trnsfr="3 Stops"),"4"==g&&(trnsfr="4 Stops");var m="Flight From "+s+" to "+d,h="https://tp.media/r?marker="+marker+"&p=4044&type=click&campaign_id=100&u=https%3A%2F%2Fbook."+domain+"%2Fflights%3Fdepart_date%3D"+c+"%26return_date%3D"+l+"%26origin_iata%3D"+e+"%26destination_iata%3D"+r+"%26currency%3D"+currency+"%26with_request%3Dtrue%26locale%3D"+lokal+"&lang="+lokal+"&trace_id=Zzeaad93c4c7474ece8ac0259-"+marker;a+="<div class='col-lg-6 responsive-column'><div class='card-item flight-card flight--card card-item-list card-item-list-2'><div class='card-img'><img alt='"+v+"' title='"+v+"' class='flight-logo lazyload' height='60px' width='150px' data-src='https://book."+domain+"/images/airline/150/60/gravity=west/"+p+".png'></div><div class='card-body'><div class='card-top-title d-flex justify-content-between'><a href='"+h+"' target='"+tgt+"' rel='"+rel+"'><div class='d-flex' title='"+m+"' alt='"+m+"'><div><div class='card-title font-size-17'>"+s+"</div><div class='card-meta font-size-14'>"+n+"</div></div><i class='fa fa-exchange mx-2'></i><div><div class='card-title font-size-17'>"+d+"</div><div class='card-meta font-size-14'>"+o+"</div></div></div></a><div><div><div class='text-right'><span class='font-weight-regular font-size-14 d-block'>From</span><div class='font-weight-bold color-text'>"+sym+" "+f+"</div></div></div></div></div><div class=' d-flex justify-content-between'><div class='font-size-14'>"+c+" - "+l+"</div><a class='btn-text' href='"+h+"' target='"+tgt+"' rel='"+rel+"'><div class='searchinfo text-center'>Search</div></a></div><div class='flightstat font-size-14'>Round-trip<span> | </span>"+trnsfr+"<span> | </span>Economy</div></div></div></div>"}a+="",document.getElementById("tab9").innerHTML=a}));

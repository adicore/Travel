function getStars(t){for(var e=[],a=t=Math.round(2*t)/2;1<=a;a--)e.push('<i class="eicon-star"></i>');for(.5==a&&e.push('<i class="la la-star-half"></i>'),t=5-t;1<=t;t--)e.push('<i class="eicon-star-o"></i>');return e.join("")}function getWifi(t){let e=[];return 1==t&&e.push('<i class="icon-wifi"></i>'),0==t&&e.push('<i class="icon-signal_wifi_off"></i>'),e.join("")}function getflags(t){let e=[];return"+label+"==t&&e.push("Free Cancellation"),e.join("")}function getCancel(t){let e=[];return 1==t&&e.push('<i class="icon-cancel">Free Cancellation</i>'),0==t&&e.push('<i class="icon-cancel">No Cancellation</i>'),e.join("")}const via_tor={async:!0,crossDomain:!0,method:"GET",headers:{"x-rapidapi-host":"viator-autocomplete.p.rapidapi.com","x-rapidapi-key":"7553c9c4b0msh01b4944e1049a81p158876jsn340bfdd90264"}};options={method:"GET",async:!0,crossDomain:!0},currentDate=moment(),futureDays=moment(currentDate).add(10,"days"),futureDaysEnd=moment(futureDays).endOf("days"),Days=futureDays.format("YYYY-MM-DD"),current=currentDate.format("YYYY-MM-DD"),affCode="gotravel602",adcamp="6ea81388b9e341fabde661df0",fetch("https://www.travelpayouts.com/whereami?locale=en_US",{method:"GET",async:!0,crossDomain:!0}).then((function(t){return t.json()})).then((function(t){iata_name=t.iata,city_name=t.name,car_lokasi=t.name,country_name=t.country_name,tujuan=t.name,fetch("https://yasen.hotellook.com/autocomplete?&term="+city_name+"&lang="+lokal+"&limit=1",{method:"GET",async:!0,crossDomain:!0}).then((function(t){return t.json()})).then((function(t){cityName_hotel=t.cities[0].city,idhotel=t.cities[0].id,fetch("https://yasen.hotellook.com/tp/public/widget_location_dump.json?currency="+currency+"&language="+lokal+"&limit=12&id="+idhotel+"&type=tophotels&check_in="+current+"&check_out="+Days+"&token="+token,{method:"GET",async:!0,crossDomain:!0}).then((function(t){return t.json()})).then((function(t){for(var e="",a=0;a<t.tophotels.length;a++){var s=t.tophotels[a].last_price_info.price_pn,i=t.tophotels[a].name,r=t.tophotels[a].hotel_id,n=t.tophotels[a].hotel_type[0],c=t.tophotels[a].rating,o=(t.tophotels[a].ty_summary,t.tophotels[a].distance,t.tophotels[a].stars),l=(getStars(o),getWifi(t.tophotels[a].has_wifi),t.tophotels[a].last_price_info.search_params.adults),d=t.tophotels[a].last_price_info.search_params.children,h=t.tophotels[a].last_price_info.search_params.checkIn,p=t.tophotels[a].last_price_info.search_params.checkOut,m="https://tp.media/r?trace_id=Zzfc3db1d6428143fbaf1646d-"+marker+"&p=4026&marker="+marker+".$14&u=%2F%2Fsearch."+domain+"%2Fhotels%2F%3FhotelId="+r+"&language="+lokal+"&adults="+l+"&children="+d+"&checkIn="+h+"&checkOut="+p+"&currency="+currency+"&marker="+marker+".%2414&utm_source="+domain,u="Booking "+i+" Hotel Room $"+s+"/night";e+="<div class='col-lg-4 responsive-column'><div class='card-item flight-card'><div class='card-img'><a class='d-block' alt='"+u+"' title='"+u+"' href='"+m+"' rel='"+rel+"' target='tgt'><img alt='"+u+"' title='"+u+"' class='lazyload' data-src='https://photo.hotellook.com/image_v2/crop/h"+r+"_0/378/251.webp' height='251px' width='378px'/></a><span class='badge'>"+n+"</span></div><div class='card-body'><h3 class='card-title'><a alt='"+u+"' title='"+u+"' href='"+m+"' rel='"+rel+"' target='tgt'>"+i+"</a></h3><p class='card-meta'>"+cityName_hotel+", "+iata_name+"</p><div class='card-rating'><span class='badge text-white'>"+o+"/5</span><span class='review__text'>Average</span><span class='rating__text'>("+c+" Reviews)</span></div><div class='card-price d-flex align-items-center justify-content-between'><p><span class='price__from'>From</span><span class='price__num'> "+symbol+s+"</span><span class='price__text'>Per night</span></p><a class='btn-text' alt='"+u+"' title='"+u+"' href='"+m+"' rel='"+rel+"' target='tgt'>See details<i class='eicon-angle-right'></i></a></div></div></div></div>"}e+="",document.getElementById("hotelnearme").innerHTML=e}))})),fetch("https://viator-autocomplete.p.rapidapi.com/orion/ajax/react/typeahead?text="+city_name,via_tor).then((t=>t.json())).then((t=>{id_location=t.results[0].destinationId,fetch("https://suggest.travelpayouts.com/viator/v1/get_offers?destination="+id_location+"&sort=default&limit=12&currency=usd",options).then((t=>t.json())).then((t=>{if(null==t.result.offers||0==t.result.offers.length)document.getElementById("attractions").innerHTML="<section class='no-results pt-5 pb-5'><div class='header'><div class='row row--vertical-center row--horizontal-center full-height mg-none'><div class='container'><h4 class='font-md'>Oops! We can't find any Attractions & Tours deals on this City for you at this time, please search through the search box above</h4></div></div></div></section>";else{for(var e="",a=0;a<t.result.offers.length;a++)title=t.result.offers[a].title,img=t.result.offers[a].img,currency=t.result.offers[a].currency,price=t.result.offers[a].price,url=t.result.offers[a].url,link=`https://tp.media/r?locale=en&marker=${marker}&p=5850&trace_id=6ab2701c9fef4056a93d88acf-${marker}&type=click&campaign_id=47&u=${url}`,rating=t.result.offers[a].rating,star=getStars(rating),reviews=t.result.offers[a].reviews,city=t.result.offers[a].city,e+="<div class='col-lg-4 responsive-column'><div class='card-item flight-card'><div class='card-img'><a class='d-block' href='"+link+"' target='"+tgt+"' rel='"+rel+"'><img class='lazyload' height='247px' width='370px' data-src='"+img+"'/><span class='badge'>"+city+"</span></a></div><div class='card-body'><h3 class='card-title' title='"+title+"' alt='"+title+"'><a href='"+link+"' target='"+tgt+"' rel='"+rel+"'>"+title+"</a></h3><div class='card-rating'><span class='badge text-white mx-2'>"+star+"</span><span class='rating__text'>("+reviews+" Reviews)</span></div><div class='card-price d-flex align-items-center justify-content-between'><p><span class='price__from mr-1'>From</span><span class='price__num'>"+currency+price+"</span></p><a class='btn-text' href='"+link+"' target='"+tgt+"' rel='"+rel+"'>Read details<i class='eicon-angle-right mx-2'></i></a></div></div></div></div>";e+="",document.getElementById("attractions").innerHTML=e}}))}))})).catch((function(t){console.log(t)}));

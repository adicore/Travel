function getflags(t){let a=[];return"+label+"==t&&a.push("Free Cancellation"),a.join("")}function displayVals(){fromDate=jQuery("input#fromDate").val(),fD=fromDate.split("-"),TfD=fD[0],MfD=fD[1],tfD=fD[2],f_D='"+MfD+"-"+tfD+"-"+TfD+"',console.log(MfD,fromDate),jQuery("input#from_Date").attr("value",`${f_D}`),toDate=jQuery("input#toDate").val(),tD=toDate.split("-"),TtD=fD[0],MtD=fD[1],ttD=fD[2],t_D='"+MtD+"-"+ttD+"-"+TtD+"',jQuery("input#to_Date").attr("value",`${t_D}`)}rel="nofollow noopener noreferrer sponsored",target="_blank",tab1={async:!0,crossDomain:!0,url:"https://viator-partner.p.rapidapi.com/partner/products/search",method:"POST",headers:{"accept-language":"en-GB",accept:"application/json;version=2.0","exp-api-key":"c95896ac-acea-48ba-a3cd-561b2109d705","x-rapidapi-host":"viator-partner.p.rapidapi.com","x-rapidapi-key":"7553c9c4b0msh01b4944e1049a81p158876jsn340bfdd90264","content-type":"application/json"},processData:!1,data:'{\t"filtering": {\t\t"destination": "50344",\t\t"tags": [],\t\t"flags": [\t\t\t"FREE_CANCELLATION"\t\t],\t\t"highestPrice": 5500,\t\t"startDate": "'+current+'",\t\t"endDate": "'+Days+'"\t},\t"sorting": {\t\t"sort": "DEFAULT"\t},\t"pagination": {\t\t"start": 1,\t\t"count": 6\t},\t"currency": "GBP"}'},jQuery.ajax(tab1).done((function(t){for(var a="",e=0;e<t.products.length;e++){var r=t.products[e].title,s=t.products[e].images[0].variants[9].url,i=(getflags(t.products[e].flags),t.products[e].pricing.currency),c=t.products[e].productUrl,n=t.products[e].pricing.summary.fromPrice;a+="<div class='col-lg-4 responsive-column'><div class='card-item trending-card'><div class='card-img'><a class='d-block' href='"+c+"' rel='"+rel+"' target='"+target+"'><img alt='"+r+"' src='"+s+"'/></a><span class='badge'>Bestseller</span></div><div class='card-body'><h3 class='card-title'><a href='"+c+"' rel='"+rel+"' target='"+target+"'>"+r+"</a></h3><div class='card-price d-flex align-items-center justify-content-between'><p><span class='price__num'>"+i+n+"</span></p><a class='btn-text' href='"+c+"' rel='"+rel+"' target='"+target+"'>View details<i class='la la-angle-right'></i></a></div></div></div></div>"}a+="",document.getElementById("tab1").innerHTML=a})),tab2={async:!0,crossDomain:!0,url:"https://viator-partner.p.rapidapi.com/partner/products/search",method:"POST",headers:{"accept-language":"en-GB",accept:"application/json;version=2.0","exp-api-key":"c95896ac-acea-48ba-a3cd-561b2109d705","x-rapidapi-host":"viator-partner.p.rapidapi.com","x-rapidapi-key":"7553c9c4b0msh01b4944e1049a81p158876jsn340bfdd90264","content-type":"application/json"},processData:!1,data:'{\t"filtering": {\t\t"destination": "50280",\t\t"tags": [],\t\t"flags": [\t\t\t"FREE_CANCELLATION"\t\t],\t\t"highestPrice": 5500,\t\t"startDate": "'+current+'",\t\t"endDate": "'+Days+'"\t},\t"sorting": {\t\t"sort": "DEFAULT"\t},\t"pagination": {\t\t"start": 1,\t\t"count": 6\t},\t"currency": "GBP"}'},jQuery.ajax(tab2).done((function(t){for(var a="",e=0;e<t.products.length;e++){var r=t.products[e].title,s=t.products[e].images[0].variants[9].url,i=(getflags(t.products[e].flags),t.products[e].pricing.currency),c=t.products[e].productUrl,n=t.products[e].pricing.summary.fromPrice;a+="<div class='col-lg-4 responsive-column'><div class='card-item trending-card'><div class='card-img'><a class='d-block' href='"+c+"' rel='"+rel+"' target='"+target+"'><img alt='"+r+"' src='"+s+"'/></a><span class='badge'>Bestseller</span></div><div class='card-body'><h3 class='card-title'><a href='"+c+"' rel='"+rel+"' target='"+target+"'>"+r+"</a></h3><div class='card-price d-flex align-items-center justify-content-between'><p><span class='price__num'>"+i+n+"</span></p><a class='btn-text' href='"+c+"' rel='"+rel+"' target='"+target+"'>View details<i class='la la-angle-right'></i></a></div></div></div></div>"}a+="",document.getElementById("tab2").innerHTML=a})),tab3={async:!0,crossDomain:!0,url:"https://viator-partner.p.rapidapi.com/partner/products/search",method:"POST",headers:{"accept-language":"en-GB",accept:"application/json;version=2.0","exp-api-key":"c95896ac-acea-48ba-a3cd-561b2109d705","x-rapidapi-host":"viator-partner.p.rapidapi.com","x-rapidapi-key":"7553c9c4b0msh01b4944e1049a81p158876jsn340bfdd90264","content-type":"application/json"},processData:!1,data:'{\t"filtering": {\t\t"destination": "50447",\t\t"tags": [],\t\t"flags": [\t\t\t"FREE_CANCELLATION"\t\t],\t\t"highestPrice": 5500,\t\t"startDate": "'+current+'",\t\t"endDate": "'+Days+'"\t},\t"sorting": {\t\t"sort": "DEFAULT"\t},\t"pagination": {\t\t"start": 1,\t\t"count": 6\t},\t"currency": "GBP"}'},jQuery.ajax(tab3).done((function(t){for(var a="",e=0;e<t.products.length;e++){var r=t.products[e].title,s=t.products[e].images[0].variants[9].url,i=(getflags(t.products[e].flags),t.products[e].pricing.currency),c=t.products[e].productUrl,n=t.products[e].pricing.summary.fromPrice;a+="<div class='col-lg-4 responsive-column'><div class='card-item trending-card'><div class='card-img'><a class='d-block' href='"+c+"' rel='"+rel+"' target='"+target+"'><img alt='"+r+"' src='"+s+"'/></a><span class='badge'>Bestseller</span></div><div class='card-body'><h3 class='card-title'><a href='"+c+"' rel='"+rel+"' target='"+target+"'>"+r+"</a></h3><div class='card-price d-flex align-items-center justify-content-between'><p><span class='price__num'>"+i+n+"</span></p><a class='btn-text' href='"+c+"' rel='"+rel+"' target='"+target+"'>View details<i class='la la-angle-right'></i></a></div></div></div></div>"}a+="",document.getElementById("tab3").innerHTML=a})),jQuery((function(){jQuery("select#lokasi").on("change",(function(){lokasi=jQuery(this).children("option:selected").val(),jQuery("form#viator").attr("action",`${lokasi}`)}))})),jQuery("input").change(displayVals),displayVals();

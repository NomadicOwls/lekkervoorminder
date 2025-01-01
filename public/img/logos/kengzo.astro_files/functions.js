$(document).ready(function() {
	$( "#datepicker" ).datepicker({
		inline: true,
		dateFormat: "dd-mm-yy",
		minDate: +1,
		dayNamesMin:["zo","ma","di","wo","do","vr","za"],
		monthNames:["januari","februari","maart","april","mei","juni","juli","augustus","september","oktober","november","december"],
		onSelect:actionsAfterSelectingDate,
        "beforeShowDay":checkCalendarDay
	});

	var $div = $('.slider .inner .slogan');
	$(window).resize(function(){
        var windowHeight = $(window).height();
        eventHeight = windowHeight - 292;
        $('.slider').css('height',eventHeight + 'px');
        $('.slider .inner .contentRight .image').css('height',windowHeight - 500 + 'px');

    	var height = $div.height();
		$div.css({'font-size': (height/2) + 'px', 'line-height': height + 'px' });
    }).resize();

	$('#full-width-slider').royalSlider({
		arrowsNav: true,
		loop: true,
		keyboardNavEnabled: true,
		controlsInside: false,
		imageScaleMode: 'fill',
		arrowsNavAutoHide: false,
		autoScaleSlider: true,
		autoScaleSliderWidth: 960,
		autoScaleSliderHeight: 350,
		controlNavigation: 'bullets',
		thumbsFitInViewport: false,
		navigateByClick: true,
		startSlideId: 0,
		autoPlay: {
			enabled:true,
			pauseOnHover: true,
			delay:3000
		},
		transitionType:'move',
		globalCaption: false,
		deeplinking: {
			enabled: true,
			change: false
		},
		imgWidth: 1213,
		imgHeight: 700
	});

	$('#toggle').on('click', function(e) {
        $('#toggle').toggleClass("on"); //you can list several class names
        e.preventDefault();
    });

	$(".fancybox").fancybox({
		"padding":0,
		"closeClick":false
	});

	$(".fancybox-frame").fancybox({
		"padding":0,
		"closeClick":false,
		"type": "iframe"
	});



	$('.iconArrow').on('click', function() {
        if (
            $(this).next('ul').is(':visible')) {
            $(this).next('ul').slideUp('fast');
            $(this).removeClass('active');
        } else {
            $(this).closest('ul').find('.active').next('ul').slideUp('fast');
            $(this).closest('ul').find('.active').removeClass('active');
            $(this).next().slideToggle('fast');
            $(this).addClass('active');
        }
    });

    var checkMobile = function(){
        var isTouch = ('ontouchstart' in document.documentElement);
        if ( isTouch ) {
            $('.iconArrow').addClass('show');
        }
        else {
            $('.iconArrow').removeClass('show');
        };

    };

//Execute Check
    checkMobile();
});
function actionsAfterSelectingDate(dateText, inst) {
	if (typeof afterSelectingDate == 'function') {
		var dag = dateText.substr(0,2);
		var maand = dateText.substr(3,2);
		var jaar = dateText.substr(6,4);
		afterSelectingDate(dag, maand, jaar);
	}
}

function formatName(value) { return value.to; }
function formatId(value) { return value.name; }
function dg(elem) {
	return document.getElementById(elem);
}
function checkEmptyField(fieldName,fieldclassname,stdValue) {
	var emptyString = /^\s*$/ ;
	if(emptyString.test(dg(fieldName).value) || dg(fieldName).value == stdValue) {
		$("#"+fieldName).addClass("error");
		return true;
	} else {
		$("#"+fieldName).removeClass("error");
		return false;
	}
}
function checkEmailField(fieldName,fieldclassname) {
	var emailString = /^[^@]+@[^@.]+\.[^@]*\w\w$/ ;
	if(!emailString.test(dg(fieldName).value)) {
		$("#"+fieldName).addClass("error");
		return true;
	} else {
		$("#"+fieldName).removeClass("error");
		return false;
	}
}
function checkPCField(fieldName) {
	var postcode = dg(fieldName).value;
	postcode = postcode.toUpperCase();
	postcode = postcode.replace(" ","");
	var postcodeString = /^[1-8]{1}[0-9]{3}[A-Z]{2}$/;
	if(!postcodeString.test(postcode)) {
		$("#"+fieldName).addClass("error");
		return true;
	} else {
		$("#"+fieldName).removeClass("error");
		return false;
	}
}
function isNumberKey(evt) {
	var charCode = (evt.which) ? evt.which : evt.keyCode;
	if (charCode > 31 && (charCode < 48 || charCode > 57) && charCode != 45 && charCode != 43) {
		return false;
	}
	return true;
}
function validateFormulier() {
	var aantal_fouten = 0;
	var focusveld = "";
	var melding = "";
	if(dg("plaats_id").value == "0") {
		aantal_fouten++;
		focusveld = "plaats";
		dg("plaats").className = "inputbox_error";
		melding = "U heeft geen geldige plaats geselecteerd onder het kopje 'Waar bent u naar op zoek'. Selecteer een plaats uit de selectielijst die tevoorschijn komt nadat u begint te typen.";
	} else {
		dg("plaats").className = "inputbox";
	}
	if(checkEmptyField("geboortedatum","inputbox","")) { aantal_fouten++; focusveld = "geboortedatum"; }
	if(checkEmptyField("email_1","inputbox","")) { aantal_fouten++; focusveld = "email_1"; }
	else if(checkEmailField("email_1","inputbox")) { aantal_fouten++; focusveld = "email_1"; }
	if(checkEmptyField("telefoon_1","inputbox","")) { aantal_fouten++; focusveld = "telefoon_1"; }
	if(checkEmptyField("land","inputbox","")) { aantal_fouten++; focusveld = "land"; }
	if(checkEmptyField("woonplaats","inputbox","")) { aantal_fouten++; focusveld = "woonplaats"; }
	if(checkEmptyField("postcode","inputbox","")) { aantal_fouten++; focusveld = "postcode"; }
	if(checkEmptyField("huisnummer","inputbox","")) { aantal_fouten++; focusveld = "huisnummer"; }
	if(checkEmptyField("straat","inputbox","")) { aantal_fouten++; focusveld = "straat"; }
	if(checkEmptyField("achternaam","inputbox","")) { aantal_fouten++; focusveld = "achternaam"; }
	if(checkEmptyField("voornaam","inputbox","")) { aantal_fouten++; focusveld = "voornaam"; }

	if(focusveld != "") {
		dg(focusveld).focus();
	}
	if(aantal_fouten > 0) {
		if(melding != "" && aantal_fouten == 1) {
			alert(melding);
		} else {
			alert("U heeft een of meerdere velden niet correct ingevuld. Loop a.u.b. de rood gemarkeerde velden na.");
		}
	}
	return aantal_fouten == 0;
}
function load() {
	//<script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?sensor=false"></script>
	var lat = 51.690785;
	var lon = 5.068798;
	var naam = "Kengzo";
	var plaats = new google.maps.LatLng(lat,lon);
	var opties = {
		center: new google.maps.LatLng(lat,lon),
		zoom: 16,
		mapTypeId: google.maps.MapTypeId.ROADMAP
	};
	var map = new google.maps.Map(dg("map"),opties);
	var infowindow = new google.maps.InfoWindow({content:"<form action=\"http://maps.google.nl/maps\" method=\"get\" target=\"_blank\" class=\"markerPlanuwroute\">Plan uw route naar "+naam+"<br /><table><tr><td>Uw adres: </td><td><input name=\"saddr\" id=\"saddr\" size=\"30\" type=\"text\" /></td><td><input value=\"Bereken route\" type=\"submit\" /></td></tr></table><input name=\"daddr\" value=\""+lat+","+lon+"\" type=\"hidden\" /><input name=\"hl\" value=\"nl\" type=\"hidden\"/></form>"});
	var marker = new google.maps.Marker({position:plaats,title:naam});
	marker.setMap(map);
	google.maps.event.addListener(marker,"click",function() {infowindow.open(map,marker);});
}
function addToCart(product_id, soort) {
	if (dg("geklikt").value == "0") {
		dg("geklikt").value = "1";
		var product_aantal = $("#product_aantal_" + product_id).val();
		var session_id = $("#session_id").val();
		$.post("/include/php/cart_functions.php?function=add", {
			"product_id": product_id,
			"product_aantal": product_aantal,
			"session_id": session_id
		}, function (data) {
			$("#add-cart-box").html(data.output);
			$("#add-cart-box-link").trigger("click");
			dg("geklikt").value = "0";
			buildSmallCart(session_id, "/");
		}, "json").fail(function () {
			dg("geklikt").value = "0";
		});
	}
}

function updateQty(aantal, session_id, regel_id) {
	$.post("/include/php/cart_functions.php?function=qty", {
		"session_id": session_id,
		"regel_id": regel_id,
		"aantal": aantal
	}, function (data) {
		buildSmallCart(session_id, "/winkelwagen/");
	}, "json").fail(function () {});
}

function buildSmallCart(session_id, pagina) {
	$.post("/include/php/cart_functions.php?function=build", {
		"session_id": session_id,
		"pagina": pagina
	}, function (data) {
		$("#cart-small-number").html(data.aantal_small);
		$("#cart-small-total").html(data.bedrag_small);

		if (pagina == "/winkelwagen/bestellen/" || pagina == "/winkelwagen/bestellen/geen-account/" || pagina == "/winkelwagen/bestellen/account/") {
			$("#cart-overview").html(data.output);
		}
		if (pagina == "/winkelwagen/") {
			$("#cart-detail").html(data.output_detail);
			$("#cart-detail-totals").html(data.output_detail_totals);
			$("#kortingscode_melding").html(data.kortingscode_melding);
		}
	}, "json").fail(function () {});
}
function popup(url,w,h) {
	window.open(url,"","width="+w+",height="+h+",scrollbars=no,toolbar=no,location=no");
}
function setCookie(name,value) {
	var expdate = new Date();
	expdate.setTime(expdate.getTime()+1000*60*60*24*30);
	document.cookie = name+"="+value+"; expires="+expdate.toGMTString()+"; path=/; secure";
}
function getAdres(veld_toevoeging) {
	var postcode = dg(veld_toevoeging + "postcode").value;
	var huisnummer = dg(veld_toevoeging + "huisnummer").value;
	if (postcode != "") {
		$("#" + veld_toevoeging + "straat_loading").show();
		$("#" + veld_toevoeging + "plaats_loading").show();
		$.post("/include/php/straat_plaats.php", {
			"postcode": postcode,
			"huisnummer": huisnummer
		}, function (data) {
			if (data.error == "false") {
				$("#" + veld_toevoeging + "straat").val(data.straat);
				$("#" + veld_toevoeging + "straat").removeClass("error").addClass("check");
				$("#" + veld_toevoeging + "plaats").val(data.plaats);
				$("#" + veld_toevoeging + "plaats").removeClass("error").addClass("check");
			}
			$("#" + veld_toevoeging + "straat_loading").hide();
			$("#" + veld_toevoeging + "plaats_loading").hide();
		}, "json").fail(function () {
			$("#" + veld_toevoeging + "straat_loading").hide();
			$("#" + veld_toevoeging + "plaats_loading").hide();
		});
	}
}
function formShowError($field, message) {
	$field.addClass('error');
	$field.after('<span class="formshowmessage">' + message + '</span>');
}
function formValidate($form) {
	var emptyString = /^\s*$/;
	var emailString = /^[^@]+@[^@.]+\.[^@]*\w\w$/;
	var postalcodeString = /^[1-8]{1}[0-9]{3}[A-Z]{2}$/;
	var errs = 0;

	//Clean up:
	$form.find('.formshowmessage').remove();
	$form.find('.error').removeClass('error');

	var $fields = $form.find('input,textarea,select');

	$fields.each(function () {
		var $field = $(this);
		var required = $field.prop('required');
		var value = $field.val();
		//--
		var isCheckbox = $field.is(':checkbox');
		var isChecked = $field.is(':checked');

		if ($field.prop('required')) {
			if (!(value) || (value == '') || (isCheckbox && !isChecked)) {
				//Value is empty...
				$field.addClass('error');
				formShowError($field, 'Dit veld is verplicht! ');
				$('.requiredvalues').addClass('error');
				errs += 1;
			}
		}
		var type = $field.data('type');
		switch (type) {
			case 'date':
				if (!(!required && value == "")) {
					var values = value.split("-");
					var isdate = false;
					if (values.length === 3) {
						var date = new Date();
						date.setFullYear(values[2], values[1] - 1, values[0]);
						//Controleer date: is deze hetzelfde als de ingave?
						if ((values[2] == date.getFullYear()) && (values[1] - 1 == date.getMonth()) && (values[0] == date.getDate())) {
							//Is datum voor vandaag?
							var today = new Date();
							if (date < today) {
								formShowError($field, 'We nemen alleen reserveringen voor de toekomst aan.');
								errs += 1;
							} else {
								isdate = true;
							}
						}
					}
					if (!isdate) {
						formShowError($field, 'Vul een geldige datum in.');
						errs += 1;
					}
				}
				break;
			case 'email':
				if (!(emailString.test(value) || (!required && (value == "")))) {
					formShowError($field, 'Vul een geldig mailadres in.');
					errs += 1;
				}
				break;
			case 'postalcode':
				if (!(postalcodeString.test(value) || (!required && (value == "")))) {
					formShowError($field, 'Vul een geldige postcode in.');
					errs += 1;
				}
				break;
			default:

				break;
		}

	}); //Einde field-each
	if ((typeof formExtraCheck === "function") && !formExtraCheck($form)) {
		errs += 1;
	}

	if (errs === 0) {
		$form.submit();
		return true;
	}
	return false;
};
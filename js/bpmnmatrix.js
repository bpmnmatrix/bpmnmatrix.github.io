$(function() {
	// Enable tooltips
	$('[data-toggle="tooltip"]').tooltip();

	// Get JSON data and push to table
	$.getJSON( "data.json", function( data ) {
		$.each( data, function( index, object ) {
			$('tbody').append('<tr class="'+
					// Add OS filter classes
					(object['OS']['Cross-Platform'] ? 'os-cross ' : '')+
					(object['OS']['Windows'] ? 'os-windows ' : '')+
					(object['OS']['Linux'] ? 'os-linux ' : '')+
					(object['OS']['Unix'] ? 'os-unix ' : '')+
					(object['OS']['Mac'] ? 'os-mac ' : '')+

					// Add license filter classes
					(object['License']['free'] ? 'license-free ' : '')+
					(object['License']['proprietary'] ? 'license-proprietary ' : '')+
					(object['License']['Shareware'] ? 'license-shareware ' : '')+
					(object['License']['Open Source'] ? 'license-opensource ' : '')+

					// Close <tr> tag
					'">'+
					'<td><a href="'+object['URL']+'"><strong>'+object['Name']+'</strong></a></td>'+
					'<td>'+object['Creator']+'</td>'+
					'<td class="os-'+object['OS']['Cross-Platform']+'"><span class="label label-default">Cross-Platform</span></td>'+
					'<td class="os-'+object['OS']['Windows']+'"><span class="label label-default">Windows</span></td>'+
					'<td class="os-'+object['OS']['Linux']+'"><span class="label label-default">Linux</span></td>'+
					'<td class="os-'+object['OS']['Unix']+'"><span class="label label-default">Unix</span></td>'+
					'<td class="os-'+object['OS']['Mac']+'"><span class="label label-default">Mac</span></td>'+
					'<td>'+object['Platform/OS']+'</td>'+
					'<td>'+object['BPMN Version']+'</td>'+
					'<td>'+object['First Release']+'</td>'+
					'<td>'+object['Latest Release']+'</td>'+
					'<td class="license-'+object['License']['free']+'"><span class="label label-default">free</span></td>'+
					'<td class="license-'+object['License']['proprietary']+'"><span class="label label-default">proprietary</span></td>'+
					'<td class="license-'+object['License']['Shareware']+'"><span class="label label-default">share</span></td>'+
					'<td class="license-'+object['License']['Open Source']+'"><span class="label label-default">Open Source</span></td>'+
					// '<td>'+( object['License']['free'] === true) ? 'yes' : 'no' +'</td>'+
				'</tr>');
		});
	});

	// Filter pills
	$('.nav-pills li a').click(function(e) {
		var pill = $(this);
		e.preventDefault();
		console.log(pill.text());

		switch (pill.text()) {
		    case 'All':
		        $('tbody > tr').show();
		        break;
		    case 'Free':
		        $('tbody > tr').hide();
		        $('tbody > tr.license-free').show();
		        break;
		    case 'Open Source':
		        $('tbody > tr').hide();
		        $('tbody > tr.license-opensource').show();
		        break;
		    case 'Cross-Platform':
		        $('tbody > tr').hide();
		        $('tbody > tr.os-cross').show();
		        break;
		    case 'Windows':
		        $('tbody > tr').hide();
		        $('tbody > tr.os-windows').show();
		        break;
		    case 'Linux':
		        $('tbody > tr').hide();
		        $('tbody > tr.os-linux').show();
		        break;
		    case 'Unix':
		        $('tbody > tr').hide();
		        $('tbody > tr.os-unix').show();
		        break;
		    case 'Mac':
		        $('tbody > tr').hide();
		        $('tbody > tr.os-mac').show();
		        break;
		}
		$('.nav-pills li').removeClass('active');
		pill.parents('li').addClass('active');
	});
});
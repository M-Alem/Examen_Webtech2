var ALL_DOCS = '../../_all_docs?include_docs=true';

function createDoc()
{
	var actor = $("#actorText").val();
	var doc = {};
	
	doc.actor = actor;

	var json = JSON.stringify(doc);

	
	$.ajax({
		type: 'PUT',
		url: 			'../../' + actor,
		data: 			json,
		contentType: 	'application/json',
		async: 			true,
		success: function(data){
			console.log(data);
			//buildOutput(ALL_DOCS, '');
			buildOutput(BY_GRADE, 15);
		},
		error: function(XMLHttpRequest, textStatus, errorThrown){
			console.log(errorThrown);
		}	
	});
	
	function buildOutput(view, param){
		$('#output').html('');
		$.ajax({
		type: 'GET',
		url: 	view + '?key=' + param,
		async: 			true,
		contentType: 	'application/json',
		success: 		function(data){
			var arr = JSON.parse(data).rows;
			var htmlString = '<table>';
			for(var i=0; i<arr.length; i++){
				if(arr[i].doc.type === 'actor'){
					var doc = arr[i].doc;
					htmlString += '<tr><td>' + doc.actor;
				}
			}
			htmlString += '</table>';
			console.log(htmlString);
			$('#output').html(htmlString);
		},
		error: 			function(XMLHttpRequest, textStatus, errorThrown){
			console.log(errorThrown);
		}
	})
	}
}
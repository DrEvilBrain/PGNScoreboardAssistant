if ($('#game_1').text() != docData['game_1'])
{
	$('body')
		.queue(elemHide('.game')).delay(500)
		.queue(updateGame()).delay(500)
		.queue(elemShow('.game'));
}

if ($('#round_1').text() != docData['round_1'])
{
	$('body')
		.queue(elemHide('.round'))
		.queue(elemHide('.score'))
		.queue(elemHide('.player')).delay(500)
		.queue(elemUpdate()).delay(500)
		.queue(elemShow('.player'))
		.queue(elemShow('.score'))
		.queue(elemShow('.round'));
}

else if (($('#player_1s').text() != docData['player_1s'] &&
   			$('#player_2s').text() == docData['player_2s']) ||
		($('#player_1s').text() == docData['player_1s'] &&
   			$('#player_2s').text() != docData['player_2s']))
{
	$('body')
		.queue(elemUpdate())
}

else if ($('#player_1s').text() != docData['player_1s'] ||
	$('#player_2s').text() != docData['player_2s'] ||
	$('#player_1').text() != docData['player_1'] ||
 	$('#player_2').text() != docData['player_2'])
{
	$('body')
		.queue(elemHide('.score'))
		.queue(elemHide('.player')).delay(500)
		.queue(elemUpdate()).delay(500)
		.queue(elemShow('.player'))
		.queue(elemShow('.score'));
} 

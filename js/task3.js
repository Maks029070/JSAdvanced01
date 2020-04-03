$(function() {
	const Game = (function() {
		let squares = [1, 2, 3, 4, 5, 6, 7, 8, 9];
		let turn = 0;
		let player1Wins = 0;
		let player2Wins = 0;
		let player1Name = prompt('Enter player1 name');
		let player2Name = prompt('Enter player2 name');
		$('#player1_name').html(`${player1Name}`);
		$('#player2_name').html(`${player2Name}`);

		function game() {
			$('.whose_turn').html(`${player1Name} turn`);
			for (let i = 1; i <= 9; i++) {
				$(`.play_field>div:nth-child(${i})`).on('click', function() {
					if ($(this).hasClass('')) {
						if(turn%2 == 0) {
							$(this).addClass('player1');
							$('.whose_turn').html(`${player2Name} turn`);
						} else {
							$(this).addClass('player2');
							$('.whose_turn').html(`${player1Name} turn`);
						}
						turn++;
						winner();
					} else {
						alert('wrong square, try another');
					}
				});
			}
		}
		function winner() {
			let FirstPlayerWin = ($('#first').hasClass('player1') && $('#second').hasClass('player1') && $('#third').hasClass('player1')) ||
				 ($('#fourth').hasClass('player1') && $('#fifth').hasClass('player1') && $('#sixth').hasClass('player1')) ||
				 ($('#seventh').hasClass('player1') && $('#eighth').hasClass('player1') && $('#ninth').hasClass('player1')) ||
				 ($('#first').hasClass('player1') && $('#fourth').hasClass('player1') && $('#seventh').hasClass('player1')) ||
				 ($('#second').hasClass('player1') && $('#fifth').hasClass('player1') && $('#eighth').hasClass('player1')) ||
				 ($('#third').hasClass('player1') && $('#sixth').hasClass('player1') && $('#ninth').hasClass('player1')) ||
				 ($('#first').hasClass('player1') && $('#fifth').hasClass('player1') && $('#ninth').hasClass('player1')) ||
				 ($('#third').hasClass('player1') && $('#fifth').hasClass('player1') && $('#seventh').hasClass('player1'));
			let SecondPlayerWin = ($('#first').hasClass('player2') && $('#second').hasClass('player2') && $('#third').hasClass('player2')) ||
				 ($('#fourth').hasClass('player2') && $('#fifth').hasClass('player2') && $('#sixth').hasClass('player2')) ||
				 ($('#seventh').hasClass('player2') && $('#eighth').hasClass('player2') && $('#ninth').hasClass('player2')) ||
				 ($('#first').hasClass('player2') && $('#fourth').hasClass('player2') && $('#seventh').hasClass('player2')) ||
				 ($('#second').hasClass('player2') && $('#fifth').hasClass('player2') && $('#eighth').hasClass('player2')) ||
				 ($('#third').hasClass('player2') && $('#sixth').hasClass('player2') && $('#ninth').hasClass('player2')) ||
				 ($('#first').hasClass('player2') && $('#fifth').hasClass('player2') && $('#ninth').hasClass('player2')) ||
				 ($('#third').hasClass('player2') && $('#fifth').hasClass('player2') && $('#seventh').hasClass('player2'));
			if (FirstPlayerWin) {
				alert(`${player1Name} wins!`);
				player1Wins++;
				$('#player1_wins').html(`Wins: ${player1Wins}`);
				restart();
			}
			else if (SecondPlayerWin) {
				alert(`${player2Name} wins!`);
				player2Wins++;
				$('#player2_wins').html(`Wins: ${player2Wins}`);
				restart();
			}
			else if (($('#first').hasClass('player1') || $('#first').hasClass('player2')) &&
				 ($('#second').hasClass('player1') || $('#second').hasClass('player2')) &&
				 ($('#third').hasClass('player1') || $('#third').hasClass('player2')) &&
				 ($('#fourth').hasClass('player1') || $('#fourth').hasClass('player2')) &&
				 ($('#fifth').hasClass('player1') || $('#fifth').hasClass('player2')) &&
				 ($('#sixth').hasClass('player1') || $('#sixth').hasClass('player2')) &&
				 ($('#seventh').hasClass('player1') || $('#seventh').hasClass('player2')) &&
				 ($('#eighth').hasClass('player1') || $('#eighth').hasClass('player2')) &&
				 ($('#ninth').hasClass('player1') || $('#ninth').hasClass('player2'))) {
				alert('Draw! Try again and find a winner!');
				restart();
			}

		}
		function restart() {
			$('#first').removeClass('player1') && $('#first').removeClass('player2');
			$('#second').removeClass('player1') && $('#second').removeClass('player2');
			$('#third').removeClass('player1') && $('#third').removeClass('player2');
			$('#fourth').removeClass('player1') && $('#fourth').removeClass('player2');
			$('#fifth').removeClass('player1') && $('#fifth').removeClass('player2');
			$('#sixth').removeClass('player1') && $('#sixth').removeClass('player2');
			$('#seventh').removeClass('player1') && $('#seventh').removeClass('player2');
			$('#eighth').removeClass('player1') && $('#eighth').removeClass('player2');
			$('#ninth').removeClass('player1') && $('#ninth').removeClass('player2');
			turn = 0;
			$('.whose_turn').html(`${player1Name} turn`);
		}
		return {
			init: function() {
				game();
				winner();
			}
		}
	})();

	Game.init();
});
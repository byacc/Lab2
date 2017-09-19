function card(rank, suit) {
	this.rank = rank;
	this.suit = suit;
	this.getRank = function() {
		return this.rank;
	};
	this.getSuit = function() {
		return this.suit;
	};
}

function poker(hand) {
	suit = hand[0].getSuit();
	isFlush = true;
	isStraight = true;
	isRoyal = (hand[0].getRank() == 1 && hand[1].getRank() == 10 && hand[2].getRank() == 11 && hand[3].getRank() == 12 && hand[4].getRank() == 13);
	hasPair = false;
	FourKind = false;
	ThreeKind = false;
	DoublePair = false;

	for (i = 0; i < hand.length; i++) {
		if (hand[i].getSuit() != suit) {
			isFlush = false;
		}
		if (i + 1 < hand.length && (hand[i + 1].getRank() - hand[i].getRank() != 1)) {
			isStraight = false;
		}
		if (i + 3 < hand.length && hand[i].getRank() == hand[i + 3].getRank()) {
			FourKind = true;
			break;
		} else if (i + 2 < hand.length && hand[i].getRank() == hand[i + 2].getRank()) {
			ThreeKind = true;
			break;
		} else if (i + 1 < hand.length && hand[i].getRank() == hand[i + 1].getRank()) {
			if (hasPair == false) {
				hasPair = true;
			} else {
				DoublePair = true;
				break;
			}
		}
	}
	if (isFlush && isRoyal) {
		return "RoyalFlush, Straight Flush, Straight, Flush";
	} else if (isFlush && isStraight) {
		return "Straight Flush, Straight, Flush";
	} else if (isStraight) {
		return "Straight";
	} else if (hand[0].getRank() == hand[1].getRank() && hand[4].getRank() == hand[3].getRank() && (hand[2].getRank() == hand[0].getRank() || hand[2].getRank() == hand[3].getRank())) {
		return "FullHouse, 3 of a Kind, 2 Pairs";
	} else if (FourKind) {
		return "4 of a Kind";
	} else if (ThreeKind) {
		return "3 of a Kind";
	} else if (DoublePair) {
		return "2 Pairs";
	} else if (isFlush) {
		return "Flush";
	} else {
		return "Burst";
	}
}
